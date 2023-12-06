import { Category } from "@/app/contexts/ThemeSwitcher";
import CategoryPageClient from "./page.client";
import CategoryPageServer from "./page.server";

function CategoryPage({ params }: { params: { category: Category } }) {
  const { category } = params;
  return (
    <CategoryPageClient category={category}>
      <CategoryPageServer category={category} />
    </CategoryPageClient>
  );
}

export default CategoryPage;
