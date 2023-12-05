"use client";
import ThemeSwitcherContext, { Category } from "@/app/contexts/ThemeSwitcher";
import { useContext, useEffect } from "react";

function ArticlePageClient({
  params,
  children,
}: {
  params: { category: Category; slug: string };
  children: any;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toggleColorScheme } = useContext(ThemeSwitcherContext);
  useEffect(() => {
    toggleColorScheme(params.category);
  }, []);

  return <>{children}</>;
}

export default ArticlePageClient;
