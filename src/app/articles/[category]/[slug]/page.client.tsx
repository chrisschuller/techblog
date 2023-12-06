"use client";

import ThemeSwitcherContext from "@/app/contexts/ThemeSwitcher";
import Category from "@/app/types/Category";
import { useContext, useEffect } from "react";

function ArticlePageClient({
  category,
  children,
}: {
  category: Category;
  children: any;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toggleColorScheme } = useContext(ThemeSwitcherContext);
  useEffect(() => {
    toggleColorScheme(category);
  }, []);

  return <>{children}</>;
}

export default ArticlePageClient;
