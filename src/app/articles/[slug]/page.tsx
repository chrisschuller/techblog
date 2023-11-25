"use client";

import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme";
import AppContainer from "../../components/AppContainer";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Content from "../../components/Content";
import Article from "../../components/Article";
import { useEffect, useState } from "react";

function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    fetch(`/api/articles/${params.slug}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  }, [params.slug]);
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar />
        <Main>
          <Content>{article && <Article article={article as any} />}</Content>
        </Main>
      </AppContainer>
    </ThemeProvider>
  );
}

export default ArticlePage;
