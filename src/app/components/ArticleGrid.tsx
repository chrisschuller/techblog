import ArticleCard from "./ArticleCard";
import Grid from "./Grid";
import Text from "./Text";

interface ArticleGridProps {
  title: string;
}

function ArticleGrid({ title }: ArticleGridProps) {
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
      <ArticleCard
        id={"1"}
        title={"Creating a component in React"}
        description="Some description about the article in which we create a component in React. Here is some more description to see how this will change the layout."
        imageUrl={"https://"}
        author={"Christian Schuller"}
        authorImageUrl={"https://"}
        date={"22.11.2023"}
        readTime={5}
      />
      <ArticleCard
        id={"1"}
        title={"Creating a component in React"}
        description="Some description about the article in which we create a component in React."
        imageUrl={"https://"}
        author={"Christian Schuller"}
        authorImageUrl={"https://"}
        date={"22.11.2023"}
        readTime={5}
      />
      <ArticleCard
        id={"1"}
        title={"Creating a component in React"}
        description="Some description about the article in which we create a component in React."
        imageUrl={"https://"}
        author={"Christian Schuller"}
        authorImageUrl={"https://"}
        date={"22.11.2023"}
        readTime={5}
      />
      <ArticleCard
        id={"1"}
        title={"Creating a component in React"}
        description="Some description about the article in which we create a component in React."
        imageUrl={"https://"}
        author={"Christian Schuller"}
        authorImageUrl={"https://"}
        date={"22.11.2023"}
        readTime={5}
      />
      <ArticleCard
        id={"1"}
        title={"Creating a component in React"}
        description="Some description about the article in which we create a component in React."
        imageUrl={"https://"}
        author={"Christian Schuller"}
        authorImageUrl={"https://"}
        date={"22.11.2023"}
        readTime={5}
      />
      <ArticleCard
        id={"1"}
        title={"Creating a component in React"}
        description="Some description about the article in which we create a component in React."
        imageUrl={"https://"}
        author={"Christian Schuller"}
        authorImageUrl={"https://"}
        date={"22.11.2023"}
        readTime={5}
      />
    </Grid>
  );
}

export default ArticleGrid;
