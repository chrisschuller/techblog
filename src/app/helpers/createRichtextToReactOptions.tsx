"use client";

import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { Paragraph, Text } from "../components/Text";
import Stack from "../components/Stack";
import Article from "../components/Article";
import Image from "next/image";
// import jsbeautifier from "js-beautify"; // maybe needed later for code formatting
import hljs from "highlight.js";

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
      [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
        const entryId = node.data.target.sys.id;
        const entry = article.content.links.entries.block.find(
          (element: any) => element.sys.id === entryId
        );
        const entryFilename = entry?.filename;
        const entryLanguage = entry?.language;
        const entryContent = entry?.content;
        return (
          <div
            style={{
              background: "#282C34",
              color: "#868c9a",
              padding: "50px 30px 20px 30px",
              borderRadius: "10px",
              fontSize: "14px",
              overflowY: "auto",
              maxWidth: "90vw",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "25px",
                left: "50%",
                padding: "5px 15px",
                color: "#ffffff",
                transform: "translateX(-50%)",
              }}
            >
              {entryFilename}
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                right: "0px",
                padding: "5px 15px",
                background: "#15171b",
                color: "white",
              }}
            >
              {entryLanguage}
            </div>
            <pre>
              <code
                dangerouslySetInnerHTML={{
                  __html: hljs.highlight(entryContent, { language: "jsx" })
                    .value,
                }}
              ></code>
            </pre>
          </div>
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
