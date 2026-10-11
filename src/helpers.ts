import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export function getPageTitle(page: PageObjectResponse): string {
  const title = page.properties.Name ?? page.properties.title;
  if (title.type === "title") {
    return title.title.map((text) => text.plain_text).join("");
  }
  throw Error(
    `page.properties.Name has type ${title.type} instead of title. The underlying Notion API might has changed, please report an issue to the author.`,
  );
}

export function getFileName(title: string, page_id: string): string {
  const slug = title
    // characters that are invalid in file names or break URLs and relrefs
    .replace(/[\\/:*?"<>|#%]/g, "")
    .trim()
    .replaceAll(" ", "-")
    .replace(/--+/g, "-");
  return `${slug}-${page_id.replaceAll("-", "")}.md`;
}
