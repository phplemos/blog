import { test } from "node:test";
import assert from "node:assert/strict";
import { Client } from "@notionhq/client";
import { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "./notion-to-md";

function cell(content: string) {
  return [{ type: "text", text: { content }, annotations: {}, href: null }];
}

function userMention(name: string) {
  return [
    {
      type: "mention",
      mention: { type: "user", user: { id: name } },
      annotations: {},
      href: null,
    },
  ];
}

test("tables keep their row order when cells resolve at different speeds", async () => {
  const rows = [
    { type: "table_row", table_row: { cells: [userMention("slow")] } },
    { type: "table_row", table_row: { cells: [cell("fast")] } },
  ];
  const notion = {
    blocks: {
      children: {
        list: async () => ({ results: rows, next_cursor: null }),
      },
    },
    users: {
      retrieve: ({ user_id }: { user_id: string }) =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: user_id }), 20),
        ),
    },
  } as unknown as Client;

  const markdown = await new NotionToMarkdown({
    notionClient: notion,
  }).blockToMarkdown({
    type: "table",
    id: "table",
    has_children: true,
  } as GetBlockResponse);

  assert.match(markdown, /@slow[\s\S]*fast/);
});
