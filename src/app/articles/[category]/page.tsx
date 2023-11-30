"use client";

import ArticleGrid from "../../components/ArticleGrid";
import { useContext, useEffect, useState } from "react";
import ThemeSwitcherContext, { Category } from "../../contexts/ThemeSwitcher";
import { capitalizeFirstLetter } from "@/app/helpers";
import { AnimatePresence, motion } from "framer-motion";

function CategoryPage({ params }: { params: { category: Category } }) {
  const [articles, setArticles] = useState([]);
  const category = params.category;
  useEffect(() => {
    fetch(`/api/articles/${category}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { toggleColorScheme } = useContext(ThemeSwitcherContext);
  useEffect(() => {
    toggleColorScheme(params.category);
  }, []);
  return (
    <AnimatePresence>
      {articles.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Set the duration of the fade here
        >
          <ArticleGrid
            title={`${capitalizeFirstLetter(params.category)} Articles`}
            articles={articles}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CategoryPage;
