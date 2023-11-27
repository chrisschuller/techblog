import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { Paragraph, Text } from "./Text";
import Stack from "./Stack";

export function convertToGermanDateFormat(isoDateString: string): string {
  // Parse the ISO date string
  const date = new Date(isoDateString);

  // Format the date
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() returns 0-11
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export function createRichtextToReactOptions(article: any) {
  return {
    preserveWhitespace: true,
    renderMark: {
      [MARKS.BOLD]: (text: any) => <Text bold>{text}</Text>,
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
        return (
          <Stack
            direction={"column"}
            align="center"
            style={{ margin: "30px 0" }}
          >
            <img src={assetUrl} alt={title} style={{ width: "80%" }} />
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
