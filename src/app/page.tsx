"use client";

import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
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
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar />
        <Main>
          <Content>
            {articles.length > 0 && (
              <ArticleGrid title={"All Articles"} articles={articles} />
            )}
          </Content>
        </Main>
      </AppContainer>
    </ThemeProvider>
  );
}

export default HomePage;
