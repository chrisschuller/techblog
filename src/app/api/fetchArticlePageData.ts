import "server-only";
import Article from "../components/Article";
import articlePageQuery from "./queries/articlePageQuery";
import fetchContentfulData from "./shared/fetchContentfulData";

async function fetchArticlePageData(slug: string) {
  const query = articlePageQuery(slug);

  const res = await fetchContentfulData({
    query,
    revalidate: 60,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await res.json();
  const data = response.data.articleCollection.items[0];

  return data as Article;
}

export default fetchArticlePageData;
