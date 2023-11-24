"use client";

import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import AppContainer from "./components/AppContainer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Content from "./components/Content";
import ArticleGrid from "./components/ArticleGrid";

function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar />
        <Main>
          <Content>
            <ArticleGrid title={"Featured Articles"} />
            <ArticleGrid title={"Newest Articles"} />
          </Content>
        </Main>
      </AppContainer>
    </ThemeProvider>
  );
}

export default HomePage;
