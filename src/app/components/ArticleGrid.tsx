import { Category } from "../contexts/ThemeSwitcher";
import ArticleCard from "./ArticleCard";
import Grid from "./Grid";
import Link from "./Link";
import Stack from "./Stack";
import { Text } from "./Text";

export interface Article {
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
        width: "100%",
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
        ({
          category,
          slug,
          title,
          description,
          articleImage,
          author,
          authorImage,
          sys,
          estimatedReadTimeMinutes,
        }) => {
          return (
            <Stack
              direction="column"
              justify="flex-start"
              align="center"
              style={{ height: "100%" }}
            >
              <ArticleCard
                id={slug}
                category={category}
                slug={slug}
                title={title}
                description={description}
                imageUrl={articleImage.url}
                author={author}
                authorImageUrl={authorImage.url}
                date={sys.publishedAt}
                readTime={estimatedReadTimeMinutes}
              />
            </Stack>
          );
        }
      )}
    </Grid>
  );
}

export default ArticleGrid;
