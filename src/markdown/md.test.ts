import { test } from "node:test";
import assert from "node:assert/strict";
import { Client } from "@notionhq/client";
import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { richText, youtubeVideoId } from "./md";

type Annotations = RichTextItemResponse["annotations"];

function text(
  content: string,
  annotations: Partial<Annotations> = {},
  href: string | null = null,
): RichTextItemResponse {
  return {
    type: "text",
    text: { content, link: href ? { url: href } : null },
    annotations: {
      bold: false,
      italic: false,
      strikethrough: false,
      underline: false,
      code: false,
      color: "default",
      ...annotations,
    },
    plain_text: content,
    href,
  };
}

const notion = {} as Client;

test("richText keeps whitespace outside of emphasis markers", async () => {
  assert.equal(
    await richText([text("instanciar ", { bold: true }), text("uma")], notion),
    "**instanciar** uma",
  );
});

test("richText puts inline code inside emphasis", async () => {
  assert.equal(
    await richText([text("new", { bold: true, code: true })], notion),
    "**`new`**",
  );
});

test("richText merges adjacent items sharing emphasis", async () => {
  assert.equal(
    await richText(
      [
        text("new", { bold: true, code: true }),
        text(". ", { bold: true }),
        text("fim"),
      ],
      notion,
    ),
    "**`new`.** fim",
  );
});

test("richText nests emphasis that changes between items", async () => {
  assert.equal(
    await richText(
      [
        text("LSP", { italic: true }),
        text(" - ", { bold: true, italic: true }),
        text("Liskov Substitution Principle", { italic: true }),
      ],
      notion,
    ),
    "*LSP **-** Liskov Substitution Principle*",
  );
});

test("richText leaves whitespace-only items unmarked", async () => {
  assert.equal(
    await richText([text("a"), text(" ", { bold: true }), text("b")], notion),
    "a b",
  );
});

test("richText renders links, strikethrough and underline", async () => {
  assert.equal(
    await richText(
      [
        text("docs ", { strikethrough: true }, "https://example.com"),
        text("sublinhado", { underline: true }),
      ],
      notion,
    ),
    "~~[docs](https://example.com)~~ <u>sublinhado</u>",
  );
});

test("youtubeVideoId supports the common link formats", () => {
  const id = "dQw4w9WgXcQ";
  for (const url of [
    `https://www.youtube.com/watch?v=${id}`,
    `https://www.youtube.com/watch?v=${id}&t=42s`,
    `https://youtube.com/embed/${id}`,
    `https://m.youtube.com/shorts/${id}`,
    `https://youtu.be/${id}?si=abc`,
  ]) {
    assert.equal(youtubeVideoId(url), id, url);
  }
  assert.equal(youtubeVideoId("https://vimeo.com/123"), null);
  assert.equal(youtubeVideoId("not a url"), null);
});
