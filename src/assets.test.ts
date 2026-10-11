import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "fs-extra";
import os from "os";
import path from "path";
import {
  ASSETS_DIR,
  downloadNotionFile,
  fileExtension,
  findAssetReferences,
  removeUnreferencedAssets,
} from "./assets";

const ID = "363b8e18-e88b-80f1-8a05-f0ca78b585bf";
const OTHER_ID = "352b8e18-e88b-80e7-a2e3-cd0f1669cec5";

const cwd = process.cwd();
const realFetch = globalThis.fetch;

before(() => {
  // the assets module writes relative to the working directory
  process.chdir(fs.mkdtempSync(path.join(os.tmpdir(), "notion-assets-")));
});

after(() => {
  process.chdir(cwd);
  globalThis.fetch = realFetch;
});

test("fileExtension prefers the URL and falls back to the content type", () => {
  assert.equal(
    fileExtension("https://s3.amazonaws.com/a/Untitled.PNG?X-Amz=1", null),
    ".png",
  );
  assert.equal(
    fileExtension("https://file.notion.so/f/abc", "image/jpeg; charset=x"),
    ".jpg",
  );
  assert.equal(fileExtension("https://file.notion.so/f/abc", null), "");
});

test("findAssetReferences finds references with and without extension", () => {
  assert.deepEqual(
    findAssetReferences(`![](/notion/${ID}.png) ![](/notion/${OTHER_ID})`),
    [ID, OTHER_ID],
  );
});

test("downloadNotionFile replaces previous versions of the file", async () => {
  globalThis.fetch = (async () =>
    new Response("png", {
      headers: { "content-type": "image/png" },
    })) as typeof fetch;
  fs.ensureDirSync(ASSETS_DIR);
  fs.writeFileSync(path.join(ASSETS_DIR, `${ID}.jpg`), "old");

  const url = await downloadNotionFile(ID, "https://file.notion.so/f/abc");

  assert.equal(url, `/notion/${ID}.png`);
  assert.deepEqual(fs.readdirSync(ASSETS_DIR), [`${ID}.png`]);
});

test("downloadNotionFile fails on HTTP errors", async () => {
  globalThis.fetch = (async () =>
    new Response("", { status: 403 })) as typeof fetch;
  await assert.rejects(
    downloadNotionFile(ID, "https://file.notion.so/f/abc"),
    /HTTP 403/,
  );
});

test("removeUnreferencedAssets keeps only referenced files", () => {
  fs.writeFileSync(path.join(ASSETS_DIR, `${OTHER_ID}.gif`), "orphan");
  fs.writeFileSync("post.md", `![](/notion/${ID})`);

  removeUnreferencedAssets(["post.md"]);

  assert.deepEqual(fs.readdirSync(ASSETS_DIR), [`${ID}.png`]);
});
