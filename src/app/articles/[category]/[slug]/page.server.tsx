"use server";
import fetchArticlePageData from "@/app/api/fetchArticlePageData";
import Article from "@/app/components/Article";

interface ArticlePageServerProps {
  slug: string;
}

async function ArticlePageServer({ slug }: ArticlePageServerProps) {
  const article = await fetchArticlePageData(slug);

  return <Article article={article} />;
}

export default ArticlePageServer;
