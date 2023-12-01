import ArticleGrid, { Article } from "./components/ArticleGrid";

async function HomePageServer() {
  const articles = (await fetch("http://localhost:3000/api/articles").then(
    (response) => response.json()
  )) as Article[];

  return <ArticleGrid title={"All Articles"} articles={articles} />;
}

export default HomePageServer;
