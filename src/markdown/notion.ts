import {
  APIErrorCode,
  APIResponseError,
  Client,
  isFullPage,
} from "@notionhq/client";
import {
  GetBlockResponse,
  ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { getFileName, getPageTitle } from "../helpers";

export const getBlockChildren = async (
  notionClient: Client,
  block_id: string,
  totalPage: number | null,
) => {
  let results: GetBlockResponse[] = [];
  let pageCount = 0;
  let start_cursor = undefined;

  try {
    do {
      const response: ListBlockChildrenResponse =
        await notionClient.blocks.children.list({
          start_cursor,
          block_id,
        });
      results.push(...response.results);

      start_cursor = response.next_cursor;
      pageCount += 1;
    } while (
      start_cursor != null &&
      (totalPage == null || pageCount < totalPage)
    );
  } catch (e) {
    // e.g. a synced block whose original page is not shared with the integration
    if (
      e instanceof APIResponseError &&
      (e.code === APIErrorCode.ObjectNotFound ||
        e.code === APIErrorCode.RestrictedResource)
    ) {
      console.warn(`[Warn] Skipping children of ${block_id}: ${e.message}`);
      return [];
    }
    // anything else would silently publish a truncated page
    throw e;
  }

  return results;
};

export const getPageRelrefFromId = async (
  pageId: string,
  notion: Client,
): Promise<{
  title: string;
  relref: string;
}> => {
  const page = await notion.pages.retrieve({ page_id: pageId }); // throw if failed
  if (!isFullPage(page)) {
    throw Error(
      `The pages.retrieve endpoint failed to return a full page for ${pageId}.`,
    );
  }
  const title = getPageTitle(page);
  const fileName = getFileName(title, page.id);
  const relref = `{{% relref "${fileName}" %}}`;
  return { title, relref };
};
