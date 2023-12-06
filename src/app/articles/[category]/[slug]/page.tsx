import { Category } from "@/app/contexts/ThemeSwitcher";
import ArticlePageClient from "./page.client";
import ArticlePageServer from "./page.server";

function ArticlePage({
  params,
}: {
  params: { category: Category; slug: string };
}) {
  const { category, slug } = params;
  return (
    <ArticlePageClient category={category}>
      <ArticlePageServer slug={slug} />
    </ArticlePageClient>
  );
}

export default ArticlePage;
