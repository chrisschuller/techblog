"use server";

import fetchHomePageData from "./api/fetchHomePageData";
import ArticleGrid from "./components/ArticleGrid";

async function HomePageServer() {
  const articles = await fetchHomePageData();

  return <ArticleGrid title={"All Articles"} articles={articles} />;
}

export default HomePageServer;
