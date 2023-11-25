import styled from "@emotion/styled";
import Text from "./Text";
import PreviewImage from "./PreviewImage";
import Stack from "./Stack";
import Avatar from "./Avatar";
import { convertToGermanDateFormat } from "./utils";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
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
  };
}

interface ArticleProps {
  article: Article;
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <Text bold>{text}</Text>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p>{children}</p>,
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <Text size="h2">{children}</Text>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <Text size="h3">{children}</Text>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: any) => (
      <Text size="h4">{children}</Text>
    ),
  },
};

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
            {convertToGermanDateFormat(article.sys.publishedAt)} - {"5"} min
            read
          </Text>
        </Stack>
      </Stack>
      <PreviewImage imageUrl={article.articleImage.url} height="300px" />

      {/* Render the content using the contentful rich text library */}
      {documentToReactComponents(article.content.json, options)}
    </ArticleContainer>
  );
}

export default Article;
