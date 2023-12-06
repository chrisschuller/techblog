import Category from "./Category";

interface ArticlePreview {
  sys: {
    publishedAt: string;
  };
  category: Category;
  slug: string;
  title: string;
  description: string;
  articleImage: {
    url: string;
  };
  author: string;
  authorImage: {
    url: string;
  };
  estimatedReadTimeMinutes: number;
}

export default ArticlePreview;
