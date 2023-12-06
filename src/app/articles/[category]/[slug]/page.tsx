import Category from "@/app/types/Category";
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
