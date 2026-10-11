import fs from "fs-extra";
import path from "path";

// Notion-hosted file URLs are signed and expire after one hour, so every file
// is downloaded at sync time and served by the site itself.
export const ASSETS_DIR = "static/notion";
const ASSETS_URL = "/notion";

// Matches references such as /notion/<uuid>.png and /notion/<uuid>
const ASSET_REFERENCE =
  /\/notion\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/g;

const EXTENSIONS_BY_CONTENT_TYPE: Record<string, string> = {
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/gif": ".gif",
  "image/webp": ".webp",
  "image/avif": ".avif",
  "image/svg+xml": ".svg",
  "video/mp4": ".mp4",
  "video/webm": ".webm",
  "audio/mpeg": ".mp3",
  "application/pdf": ".pdf",
};

export function fileExtension(
  fileUrl: string,
  contentType: string | null,
): string {
  const ext = path.extname(new URL(fileUrl).pathname).toLowerCase();
  if (/^\.[a-z0-9]{1,5}$/.test(ext)) return ext;
  const type = contentType?.split(";")[0].trim().toLowerCase() ?? "";
  return EXTENSIONS_BY_CONTENT_TYPE[type] ?? "";
}

function assetId(fileName: string): string {
  return path.parse(fileName).name;
}

function removeAsset(id: string) {
  if (!fs.existsSync(ASSETS_DIR)) return;
  for (const file of fs.readdirSync(ASSETS_DIR)) {
    if (assetId(file) === id) fs.removeSync(path.join(ASSETS_DIR, file));
  }
}

/**
 * Downloads a Notion-hosted file and returns the site path it is served from.
 * @param id - id of the block or page that owns the file
 * @param fileUrl - the signed URL returned by the Notion API
 */
export async function downloadNotionFile(
  id: string,
  fileUrl: string,
): Promise<string> {
  const response = await fetch(fileUrl);
  if (!response.ok) {
    throw Error(
      `[Error] Failed to download the file of ${id}: HTTP ${response.status}`,
    );
  }
  const fileName =
    id + fileExtension(fileUrl, response.headers.get("content-type"));
  const data = Buffer.from(await response.arrayBuffer());
  fs.ensureDirSync(ASSETS_DIR);
  // the file may have been replaced by one with a different extension
  removeAsset(id);
  fs.writeFileSync(path.join(ASSETS_DIR, fileName), data);
  return `${ASSETS_URL}/${fileName}`;
}

export function findAssetReferences(markdown: string): string[] {
  return Array.from(markdown.matchAll(ASSET_REFERENCE), (match) => match[1]);
}

/**
 * Deletes downloaded files that no content file references anymore.
 */
export function removeUnreferencedAssets(markdownFiles: string[]) {
  if (!fs.existsSync(ASSETS_DIR)) return;
  const referenced = new Set<string>();
  for (const file of markdownFiles) {
    for (const id of findAssetReferences(fs.readFileSync(file, "utf-8"))) {
      referenced.add(id);
    }
  }
  for (const file of fs.readdirSync(ASSETS_DIR)) {
    if (!referenced.has(assetId(file))) {
      console.info(`[Info] Removing unreferenced asset ${file}`);
      fs.removeSync(path.join(ASSETS_DIR, file));
    }
  }
}
