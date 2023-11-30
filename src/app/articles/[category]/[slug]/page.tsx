"use client";
import { Category } from "@/app/contexts/ThemeSwitcher";
import Article from "../../../components/Article";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Stack from "@/app/components/Stack";

function ArticlePage({
  params,
}: {
  params: { category: Category; slug: string };
}) {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    fetch(`/api/articles/${params.category}/${params.slug}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  }, [params.slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence>
      {article && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Set the duration of the fade here
        >
          <Stack direction="column" justify="flex-start" align="center">
            <Article article={article as any} />
          </Stack>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ArticlePage;
