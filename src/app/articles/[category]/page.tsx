"use client";

import ArticleGrid from "../../components/ArticleGrid";
import { useContext, useEffect, useState } from "react";
import ThemeSwitcherContext, { Category } from "../../contexts/ThemeSwitcher";
import { capitalizeFirstLetter } from "@/app/helpers";

function CategoryPage({ params }: { params: { category: Category } }) {
  const [articles, setArticles] = useState([]);
  const category = params.category;
  useEffect(() => {
    fetch(`/api/articles/${category}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  const { toggleColorScheme } = useContext(ThemeSwitcherContext);
  useEffect(() => {
    toggleColorScheme(params.category);
  }, []);
  return (
    <>
      {articles.length > 0 && (
        <ArticleGrid
          title={`${capitalizeFirstLetter(params.category)} Articles`}
          articles={articles}
        />
      )}
    </>
  );
}

export default CategoryPage;
