"use client";

import {
  BLOCKS,
  Block,
  EntryLinkBlock,
  INLINES,
  MARKS,
  Node,
} from "@contentful/rich-text-types";
import { Paragraph, Text } from "../components/Text";
import Stack from "../components/Stack";
import Article from "../components/Article";
import Image from "next/image";
// import jsbeautifier from "js-beautify"; // maybe needed later for code formatting
import CodeBlock from "../components/CodeBlock";

export function createRichtextToReactOptions(article: Article) {
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
      [BLOCKS.EMBEDDED_ENTRY]: (node: Node) => {
        const entryId = node.data.target.sys.id;
        const entry = article.content.links.entries.block.find(
          (element: any) => element.sys.id === entryId
        );
        const filename = entry?.filename;
        const language = entry?.language;
        const content = entry?.content;
        return (
          <CodeBlock
            filename={filename}
            language={language}
            content={content}
            style={{ maxWidth: "90vw" }}
          />
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
