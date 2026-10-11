import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import fs from "fs";
import path from "path";
import fm from "front-matter";

type ContentFile = {
  filename: string;
  // relative path to the project folder
  filepath: string;
  metadata: PageObjectResponse;
  managed: boolean;
  renderVersion?: number;
};

function isMarkdownFile(filename: string): boolean {
  return filename.endsWith(".md");
}

/**
 * Parses a content file, returning undefined if it was not created from Notion.
 */
function parseContentFile(filepath: string): ContentFile | undefined {
  const { attributes } = fm<Record<string, any>>(
    fs.readFileSync(filepath, "utf-8"),
  );
  if (!attributes.NOTION_METADATA) return undefined;
  return {
    filename: path.basename(filepath),
    filepath,
    metadata: attributes.NOTION_METADATA,
    managed: attributes.MANAGED_BY_NOTION_HUGO ?? false,
    renderVersion: attributes.NOTION_HUGO_RENDER_VERSION,
  };
}

export function getContentFile(filepath: string): ContentFile | undefined {
  if (!fs.existsSync(filepath)) {
    return undefined;
  }
  const file = parseContentFile(filepath);
  if (!file) {
    console.warn(
      `[Warn] ${filepath} does not have NOTION_METADATA in its front matter`,
    );
  }
  return file;
}

export function listMarkdownFiles(dirPath: string): string[] {
  const fileArray: string[] = [];
  const queue: string[] = [dirPath];
  while (queue.length !== 0) {
    const filepath = queue.shift();
    if (filepath === undefined) continue;
    if (fs.statSync(filepath).isDirectory()) {
      const files = fs.readdirSync(filepath);
      for (const file of files) {
        queue.push(path.join(filepath, file));
      }
      continue;
    }
    if (isMarkdownFile(filepath)) fileArray.push(filepath);
  }
  return fileArray;
}

/**
 * Returns the content files created from Notion. Files written by hand, such
 * as translations, have no NOTION_METADATA and are left out.
 */
export function getAllContentFiles(dirPath: string): ContentFile[] {
  return listMarkdownFiles(dirPath).flatMap(
    (filepath) => parseContentFile(filepath) ?? [],
  );
}
