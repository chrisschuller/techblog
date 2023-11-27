"use client";
import Article from "../../components/Article";
import { useEffect, useState } from "react";

function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    fetch(`/api/articles/${params.slug}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  }, [params.slug]);
  return <>{article && <Article article={article as any} />}</>;
}

export default ArticlePage;
