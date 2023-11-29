"use client";
import { Category } from "@/app/contexts/ThemeSwitcher";
import Article from "../../../components/Article";
import { useEffect, useState } from "react";

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
  return <>{article && <Article article={article as any} />}</>;
}

export default ArticlePage;
