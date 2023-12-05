"use server";
import ArticleGrid, { Article } from "./components/ArticleGrid";

async function HomePageServer() {
  const articles = (await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/articles`
  ).then((response) => response.json())) as Article[];

  return <ArticleGrid title={"All Articles"} articles={articles} />;
}

export default HomePageServer;
