"use server";

import fetchCategoryPageData from "@/app/api/fetchCategoryPageData";
import ArticleGrid from "@/app/components/ArticleGrid";
import { capitalizeFirstLetter } from "@/app/helpers";
import Category from "@/app/types/Category";

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
