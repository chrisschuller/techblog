"use client";
import { useContext, useEffect } from "react";
import ThemeSwitcherContext, { Category } from "../../contexts/ThemeSwitcher";

function CategoryPageClient({
  category,
  children,
}: {
  category: Category;
  children: any;
}) {
  const { toggleColorScheme } = useContext(ThemeSwitcherContext);
  useEffect(() => {
    toggleColorScheme(category);
  }, []);
  return <>{children}</>;
}

export default CategoryPageClient;
