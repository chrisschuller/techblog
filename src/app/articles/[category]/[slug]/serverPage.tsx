import Article from "@/app/components/Article";
import { Category } from "@/app/contexts/ThemeSwitcher";

interface ArticlePageServerProps {
  category: Category;
  slug: string;
}

async function ArticlePageServer({ category, slug }: ArticlePageServerProps) {
  const article = (await fetch(
    `http://localhost:3000/api/articles/${category}/${slug}`
  ).then((response) => response.json())) as Article;

  return <Article article={article} />;
}

export default ArticlePageServer;
