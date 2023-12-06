import "server-only";
import ArticlePreview from "../types/ArticlePreview";
import homePageQuery from "./queries/homePageQuery";
import fetchContentfulData from "./shared/fetchContentfulData";

async function fetchHomePageData() {
  const query = homePageQuery();
  const res = await fetchContentfulData(query);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await res.json();
  const data = response.data.articleCollection.items;

  return data as ArticlePreview[];
}

export default fetchHomePageData;
