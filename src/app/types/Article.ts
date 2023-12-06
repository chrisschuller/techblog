import Category from "./Category";

interface Article {
  sys: {
    publishedAt: string;
  };
  title: string;
  author: string;
  authorImage: {
    url: string;
  };
  articleImage: {
    url: string;
  };
  content: {
    json: any;
    links: any;
  };
  estimatedReadTimeMinutes: number;
  recommendedArticlesCollection: {
    items: {
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
    }[];
  };
}

export default Article;
