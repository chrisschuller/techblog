"use client";

import ArticleGrid from "./components/ArticleGrid";
import { useContext, useEffect, useState } from "react";
import ThemeSwitcherContext from "./contexts/ThemeSwitcher";
import Stack from "./components/Stack";
import { Text } from "./components/Text";
import CategoryLink from "./components/CategoryLink";

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
        <>
          <Stack
            direction="row"
            justify="flex-start"
            align="center"
            gap="10px"
            style={{ width: "100%", padding: "15px" }}
          >
            <Text size="lg" bold>
              Browse Categories
            </Text>
          </Stack>
          <Stack
            direction="row"
            justify="flex-start"
            align="center"
            gap="10px"
            style={{ width: "100%", padding: "15px" }}
          >
            <CategoryLink category="technology" href={"/articles/technology"}>
              Technology
            </CategoryLink>
            <CategoryLink category="food" href={"/articles/food"}>
              Food
            </CategoryLink>
          </Stack>
          <ArticleGrid title={"All Articles"} articles={articles} />{" "}
        </>
      )}
    </>
  );
}

export default HomePage;
