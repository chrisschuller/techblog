"use client";

import ArticleGrid from "./components/ArticleGrid";
import { useContext, useEffect, useState } from "react";
import ThemeSwitcherContext from "./contexts/ThemeSwitcher";

function HomePage() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  const { toggleColorScheme } = useContext(ThemeSwitcherContext);
  useEffect(() => {
    toggleColorScheme("base");
  }, []);
  return (
    <>
      {articles.length > 0 && (
        <ArticleGrid title={"All Articles"} articles={articles} />
      )}
    </>
  );
}

export default HomePage;
