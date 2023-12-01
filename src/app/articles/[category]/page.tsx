"use client";

import { Category } from "@/app/contexts/ThemeSwitcher";
import CategoryPageClient from "./clientPage";
import CategoryPageServer from "./serverPage";

function CategoryPage({ params }: { params: { category: Category } }) {
  return (
    <CategoryPageClient params={params}>
      <CategoryPageServer category={params.category} />
    </CategoryPageClient>
  );
}

export default CategoryPage;
