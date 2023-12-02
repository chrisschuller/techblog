"use client";

import { Category } from "@/app/contexts/ThemeSwitcher";
import ArticlePageClient from "./page.client";
import ArticlePageServer from "./page.server";

function ArticlePage({
  params,
}: {
  params: { category: Category; slug: string };
}) {
  return (
    <ArticlePageClient params={params}>
      <ArticlePageServer category={params.category} slug={params.slug} />
    </ArticlePageClient>
  );
}

export default ArticlePage;
