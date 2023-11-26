import styled from "@emotion/styled";
import { Text } from "./Text";
import PreviewImage from "./PreviewImage";
import Stack from "./Stack";
import Avatar from "./Avatar";
import {
  convertToGermanDateFormat,
  createRichtextToReactOptions,
} from "./Utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ArticleContainer = styled.div`
  max-width: 600px;
`;

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
}

interface ArticleProps {
  article: Article;
}

function Article({ article }: ArticleProps) {
  const renderOptions = createRichtextToReactOptions(article);

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
            {convertToGermanDateFormat(article.sys.publishedAt)} -{" "}
            {article.estimatedReadTimeMinutes} min read
          </Text>
        </Stack>
      </Stack>
      <PreviewImage imageUrl={article.articleImage.url} height="300px" />
      {/* Render the content using the contentful rich text library */}
      {documentToReactComponents(article.content.json, renderOptions)}
    </ArticleContainer>
  );
}

export default Article;
