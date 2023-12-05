"use server";
import Article from "@/app/components/Article";
import { Category } from "@/app/contexts/ThemeSwitcher";

interface ArticlePageServerProps {
  category: Category;
  slug: string;
}

async function ArticlePageServer({ category, slug }: ArticlePageServerProps) {
  const article = (await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/articles/${category}/${slug}`
  ).then((response) => response.json())) as Article;

  return <Article article={article} />;
}

export default ArticlePageServer;
