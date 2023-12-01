"use client";

import ThemeSwitcherContext, { Category } from "@/app/contexts/ThemeSwitcher";
import { useContext, useEffect } from "react";
import Stack from "@/app/components/Stack";

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

  return (
    <Stack direction="column" justify="flex-start" align="center">
      {children}
    </Stack>
  );
}

export default ArticlePageClient;
