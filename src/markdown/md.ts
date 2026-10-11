import { markdownTable } from "markdown-table";
import {
  EquationRichTextItemResponse,
  MentionRichTextItemResponse,
  RichTextItemResponse,
  RichTextItemResponseCommon,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { CalloutIcon } from "./types";
import { getPageRelrefFromId } from "./notion";
import { Client } from "@notionhq/client";
export const inlineCode = (text: string) => {
  return `\`${text}\``;
};

export const underline = (text: string) => {
  return `<u>${text}</u>`;
};

export const link = (text: string, href: string) => {
  return `[${text}](${href})`;
};

export const codeBlock = (text: string, language?: string) => {
  if (language === "plain text") language = "text";

  return `\`\`\`${language}
${text}
\`\`\``;
};

export const heading1 = (text: string) => {
  return `# ${text}`;
};

export const heading2 = (text: string) => {
  return `## ${text}`;
};

export const heading3 = (text: string) => {
  return `### ${text}`;
};

export const quote = (text: string) => {
  // the replace is done to handle multiple lines
  return `> ${text.replace(/\n/g, "  \n> ")}`;
};

export const callout = (text: string, icon?: CalloutIcon) => {
  let emoji: string | undefined;
  if (icon?.type === "emoji") {
    emoji = icon.emoji;
  }

  // the replace is done to handle multiple lines
  return `> ${emoji ? emoji + " " : ""}${text.replace(/\n/g, "  \n> ")}`;
};

export const bullet = (text: string, count?: number) => {
  let renderText = text.trim();
  return count ? `${count}. ${renderText}` : `- ${renderText}`;
};

export const todo = (text: string, checked: boolean) => {
  return checked ? `- [x] ${text}` : `- [ ] ${text}`;
};

export const image = (alt: string, href: string) => {
  return `![${alt}](${href})`;
};

export const addTabSpace = (text: string, n = 0) => {
  const tab = "    ";
  for (let i = 0; i < n; i++) {
    if (text.includes("\n")) {
      const multiLineText = text.split(/(?<=\n)/).join(tab);
      text = tab + multiLineText;
    } else text = tab + text;
  }
  return text;
};

export const divider = () => {
  return "---";
};

export const toggle = (summary?: string, children?: string) => {
  if (!summary) return children || "";
  return `<details>
  <summary>${summary}</summary>

${children || ""}

  </details>`;
};

export const table = (cells: string[][]) => {
  return markdownTable(cells);
};

export const plainText = (textArray: RichTextItemResponse[]) => {
  return textArray.map((text) => text.plain_text).join("");
};

/**
 * Block equation
 * Format: \[ expression \]
 * @param expression
 * @returns
 */
export const equation = (expression: string) => {
  return `\\[${expression}\\]`;
};

/**
 * Renders a text item without its emphasis (bold, italic, strikethrough),
 * which richText applies across adjacent items.
 */
function textRichText(
  text: RichTextItemResponseCommon & TextRichTextItemResponse,
): string {
  const [, leading, core, trailing] = splitWhitespace(text.text.content);
  if (!core) return text.text.content;
  let content = core;
  if (text.annotations.code) {
    content = inlineCode(content);
  }
  if (text.annotations.underline) {
    content = underline(content);
  }
  if (text.href) {
    content = link(content, text.href);
  }
  return leading + content + trailing;
}

function emphasisMarkers(
  annotations: RichTextItemResponseCommon["annotations"],
): string[] {
  const markers: string[] = [];
  if (annotations.bold) markers.push("**");
  if (annotations.italic) markers.push("*");
  if (annotations.strikethrough) markers.push("~~");
  return markers;
}

function splitWhitespace(text: string): [string, string, string, string] {
  return text.match(/^(\s*)([\s\S]*?)(\s*)$/) as unknown as [
    string,
    string,
    string,
    string,
  ];
}

/**
 * Inline equation
 * Format: \( expression \)
 * @param text
 * @returns
 */
function equationRichText(text: EquationRichTextItemResponse): string {
  return `\\(${text.equation.expression}\\)`;
}

async function mentionRichText(
  text: MentionRichTextItemResponse,
  notion: Client,
): Promise<string> {
  const mention = text.mention;
  switch (mention.type) {
    case "page": {
      const pageId = mention.page.id;
      const { title, relref } = await getPageRelrefFromId(pageId, notion);
      return link(title, relref);
    }
    case "user": {
      const userId = mention.user.id;
      try {
        const user = await notion.users.retrieve({ user_id: userId });
        if (user.name) {
          return `@${user.name}`;
        }
      } catch (error) {
        console.warn(`Failed to retrieve user with id ${userId}`);
      }
      return "";
    }
    case "date": {
      const date = mention.date;
      const dateEnd = date.end ? ` -> ${date.end}` : "";
      const timeZone = date.time_zone ? ` (${date.time_zone})` : "";
      return `@${date.start}${dateEnd}${timeZone}`;
    }
    case "link_preview": {
      const linkPreview = mention.link_preview;
      return link(linkPreview.url, linkPreview.url);
    }
    case "template_mention": {
      // https://developers.notion.com/reference/rich-text#template-mention-type-object
      // Hide the template button
      return "";
    }
    case "database": {
      console.warn("[Warn] Database mention is not supported");
      return "";
    }
  }
  return "";
}

async function richTextItem(
  text: RichTextItemResponse,
  notion: Client,
): Promise<string> {
  if (text.type === "text") {
    return textRichText(text);
  } else if (text.type === "equation") {
    return equationRichText(text);
  } else if (text.type === "mention") {
    return await mentionRichText(text, notion);
  }
  return "";
}

export async function richText(
  textArray: RichTextItemResponse[],
  notion: Client,
) {
  const items = await Promise.all(
    textArray.map(async (text) => ({
      markers: text.type === "text" ? emphasisMarkers(text.annotations) : [],
      content: await richTextItem(text, notion),
    })),
  );

  // Emphasis is opened and closed only when it changes between items, so
  // adjacent items sharing it don't produce touching markers like **a****b**.
  // Markdown emphasis can't start or end with whitespace, so whitespace is
  // always kept outside of the markers.
  const open: string[] = [];
  let markdown = "";
  let pendingWhitespace = "";
  for (const { markers, content } of items) {
    const [, leading, core, trailing] = splitWhitespace(content);
    if (!core) {
      pendingWhitespace += content;
      continue;
    }
    const firstToClose = open.findIndex((marker) => !markers.includes(marker));
    if (firstToClose !== -1) {
      markdown += open.splice(firstToClose).reverse().join("");
    }
    markdown += pendingWhitespace + leading;
    for (const marker of markers) {
      if (!open.includes(marker)) {
        open.push(marker);
        markdown += marker;
      }
    }
    markdown += core;
    pendingWhitespace = trailing;
  }
  return markdown + open.reverse().join("") + pendingWhitespace;
}

/**
 * Extracts the video id from YouTube watch, embed, shorts and youtu.be links.
 */
export function youtubeVideoId(url: string): string | null {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }
  const host = parsed.hostname.replace(/^(www|m)\./, "");
  let id: string | null = null;
  if (host === "youtu.be") {
    id = parsed.pathname.slice(1);
  } else if (host === "youtube.com") {
    id =
      parsed.searchParams.get("v") ??
      parsed.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1] ??
      null;
  }
  return id && /^[\w-]{11}$/.test(id) ? id : null;
}

export const video = (url: string) => {
  const videoId = youtubeVideoId(url);
  if (videoId) {
    return `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
  return htmlVideo(url);
};

function htmlVideo(url: string) {
  return `<video controls style="height:auto;width:100%;">
  <source src="${url}">
  <p>
    Your browser does not support HTML5 video. Here is a
    <a href="${url}" download="${url}">link to the video</a> instead.
  </p>
</video>`;
}

export const pdf = (url: string) => {
  return `<embed src="${url}" type="application/pdf" style="width: 100%;aspect-ratio: 2/3;height: auto;" />`;
};

export const audio = (url: string) => {
  return `<audio controls src="${url}"></audio>`;
};
