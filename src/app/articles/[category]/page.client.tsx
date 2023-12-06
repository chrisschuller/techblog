"use client";

import { useContext, useEffect } from "react";
import ThemeSwitcherContext from "../../contexts/ThemeSwitcher";
import Category from "@/app/types/Category";

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
