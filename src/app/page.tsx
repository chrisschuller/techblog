"use client";

import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./theme";
import AppContainer from "./components/AppContainer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Content from "./components/Content";
import ArticleGrid from "./components/ArticleGrid";
import { useEffect, useState } from "react";

function HomePage() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
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
