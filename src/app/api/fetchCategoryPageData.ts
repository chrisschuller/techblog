import "server-only";
import ArticlePreview from "../types/ArticlePreview";
import Category from "../types/Category";
import categoryPageQuery from "./queries/categoryPageQuery";
import fetchContentfulData from "./shared/fetchContentfulData";

async function fetchCategoryPageData(category: Category) {
  const query = categoryPageQuery(category);

  const res = await fetchContentfulData({
    query,
    revalidate: 600,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await res.json();
  const data = response.data.articleCollection.items;

  return data as ArticlePreview[];
}

export default fetchCategoryPageData;
