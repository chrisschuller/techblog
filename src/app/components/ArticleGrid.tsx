"use client";

import ArticlePreview from "../types/ArticlePreview";
import ArticleCard from "./ArticleCard";
import Grid from "./Grid";
import Stack from "./Stack";
import { Text } from "./Text";

interface ArticleGridProps {
  title: string;
  articles: ArticlePreview[];
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
              key={slug}
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
