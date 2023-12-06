"use server";
import fetchCategoryPageData from "@/app/api/fetchCategoryPageData";
import ArticleGrid, { Article } from "@/app/components/ArticleGrid";
import { Category } from "@/app/contexts/ThemeSwitcher";
import { capitalizeFirstLetter } from "@/app/helpers";

interface CategoryPageServerProps {
  category: Category;
}

async function CategoryPageServer({ category }: CategoryPageServerProps) {
  const articles = await fetchCategoryPageData(category);

  return (
    <ArticleGrid
      title={`${capitalizeFirstLetter(category)} Articles`}
      articles={articles}
    />
  );
}

export default CategoryPageServer;
