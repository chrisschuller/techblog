"use client";

import { Category } from "@/app/contexts/ThemeSwitcher";
import CategoryPageClient from "./page.client";
import CategoryPageServer from "./page.server";

function CategoryPage({ params }: { params: { category: Category } }) {
  return (
    <CategoryPageClient params={params}>
      <CategoryPageServer category={params.category} />
    </CategoryPageClient>
  );
}

export default CategoryPage;
