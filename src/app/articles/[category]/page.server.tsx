"use server";
import ArticleGrid, { Article } from "@/app/components/ArticleGrid";
import { Category } from "@/app/contexts/ThemeSwitcher";
import { capitalizeFirstLetter } from "@/app/helpers";

interface CategoryPageServerProps {
  category: Category;
}

async function CategoryPageServer({ category }: CategoryPageServerProps) {
  const articles = (await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/articles/${category}`
  ).then((response) => response.json())) as Article[];

  return (
    <ArticleGrid
      title={`${capitalizeFirstLetter(category)} Articles`}
      articles={articles}
    />
  );
}

export default CategoryPageServer;
