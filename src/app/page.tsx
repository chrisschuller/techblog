"use client";

import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import AppContainer from "./components/AppContainer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Content from "./components/Content";
import Article from "./components/Article";
import ArticleGrid from "./components/ArticleGrid";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar />
        <Main>
          <Content>
            <Article />
            <ArticleGrid title={"Recommended Articles"} />
          </Content>
        </Main>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
