import ArticleCard from "./ArticleCard";
import Grid from "./Grid";
import Link from "./Link";
import Text from "./Text";

interface Article {
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
}

interface ArticleGridProps {
  title: string;
  articles: Article[];
}

function ArticleGrid({ title, articles }: ArticleGridProps) {
  return (
    <Grid
      xs={{ cols: 1 }}
      md={{ cols: 2 }}
      lg={{ cols: 2 }}
      xl={{ cols: 3 }}
      gap={"10px"}
      style={{
        padding: "10px",
        marginTop: "30px",
      }}
    >
      <Grid.Item
        xs={{ colSpan: 1 }}
        md={{ colSpan: 2 }}
        lg={{ colSpan: 2 }}
        xl={{ colSpan: 3 }}
      >
        <Text size="h1">{title}</Text>
      </Grid.Item>
      {articles.map(
        ({ slug, title, description, articleImage, author, authorImage }) => {
          return (
            <Link href={`/articles/${slug}`}>
              <ArticleCard
                id={slug}
                title={title}
                description={description}
                imageUrl={articleImage.url}
                author={author}
                authorImageUrl={authorImage.url}
                date={"22.11.2023"}
                readTime={5}
              />
            </Link>
          );
        }
      )}
    </Grid>
  );
}

export default ArticleGrid;
