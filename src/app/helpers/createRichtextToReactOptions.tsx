import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { Paragraph, Text } from "../components/Text";
import Stack from "../components/Stack";
import Article from "../components/Article";
import Image from "next/image";

export function createRichtextToReactOptions(article: Article) {
  return {
    preserveWhitespace: true,
    renderMark: {
      [MARKS.BOLD]: (text: any) => <Text bold>{text}</Text>,
      [MARKS.CODE]: (text: any) => (
        <pre>
          <code>{text}</code>
        </pre>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <Paragraph style={{ hyphens: "auto", textAlign: "justify" }}>
          {children}
        </Paragraph>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <Text size="h2">{children}</Text>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <Text size="h3">{children}</Text>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: any) => (
        <Text size="h4">{children}</Text>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
        const assetId = node.data.target.sys.id;
        const assetBlock = article.content.links.assets.block.find(
          (element: any) => element.sys.id === assetId
        );
        const assetUrl = assetBlock?.url;
        const title = assetBlock?.title;
        const width = assetBlock?.width;
        const height = assetBlock?.height;
        return (
          <Stack
            direction={"column"}
            align="center"
            style={{ margin: "30px 0" }}
          >
            <div style={{ position: "relative", width: "90%" }}>
              <Image
                alt={title}
                src={assetUrl}
                width={width}
                height={height}
                layout="responsive"
                quality={100}
                loading="eager"
              />
            </div>
          </Stack>
        );
      },
      [INLINES.HYPERLINK]: (node: any, children: any) => {
        return (
          <a style={{ color: "inherit" }} href={node.data.uri}>
            <Text color="primary">{children}</Text>
          </a>
        );
      },
    },
  };
}
