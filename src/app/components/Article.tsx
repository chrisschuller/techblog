import styled from "@emotion/styled";
import Text from "./Text";
import PreviewImage from "./PreviewImage";
import Stack from "./Stack";
import Avatar from "./Avatar";

const ArticleContainer = styled.div`
  max-width: 600px;
`;

interface Article {
  title: string;
  author: string;
  authorImage: {
    url: string;
  };
  articleImage: {
    url: string;
  };
}

interface ArticleProps {
  article: Article;
}

function Article({ article }: ArticleProps) {
  return (
    <ArticleContainer>
      <Text size="h1">{article.title}</Text>

      <Stack direction="row" gap={"10px"} style={{ margin: "20px 0" }}>
        <Avatar size={"35px"} imageUrl={article.authorImage.url} />
        <Stack direction="column" gap={"5px"}>
          <Text bold size={"sm"}>
            {article.author}
          </Text>
          <Text size={"sm"} color={"secondary"}>
            {"22.11.2023"} - {"4"} min read
          </Text>
        </Stack>
      </Stack>
      <PreviewImage imageUrl={article.articleImage.url} height="300px" />
      <p>
        Some description about the article in which we create a component in
        React. Here is some more description to see how this will change the
        layout.
      </p>
      <p>
        Some description about the article in which we create a component in
        React. Here is some more description to see how this will change the
        layout. Some more text so that the sizes dont repeat.
      </p>
      <p>
        Some description about the article in which we create a component in
        React. Here is some more description to see how this will change the
        layout.
      </p>

      <Text size="h2">Prerequisites:</Text>
      <ul>
        <li>Something</li>
        <li>Something else</li>
        <li>React</li>
        <li>Javascript</li>
      </ul>

      <p>
        Some description about the article in which we create a component in
        React. Here is some more description to see how this will change the
        layout. Some description about the article in which we create a
        component in React. Here is some more description to see how this will
        change the layout. Some description about the article in which we create
        a component in React. Here is some more description to see how this will
        change the layout.
      </p>

      <Text size="h2">Thank you!</Text>
      <p>
        Some description about the article in which we create a component in
        React. Here is some more description to see how this will change the
        layout. Some description about the article in which we create a
        component in React. Here is some more description to see how this will
        change the layout. Good bye!
      </p>
    </ArticleContainer>
  );
}

export default Article;
