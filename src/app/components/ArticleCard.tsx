import styled from "@emotion/styled";
import Stack from "./Stack";
import { Text } from "./Text";
import PreviewImage from "./PreviewImage";
import Avatar from "./Avatar";
import { convertToGermanDateFormat } from "./Utils";
import Link from "next/link";
import { Category } from "../contexts/ThemeSwitcher";

{
  /* <Link
href={`/articles/${category}/${slug}`}
key={slug}
prefetch={false}
scroll={true}
> */
}

interface ArticleCardProps {
  id: string;
  title: string;
  category: Category;
  slug: string;
  description: string;
  imageUrl: string;
  author: string;
  authorImageUrl: string;
  date: string;
  readTime: number;
}

const ArticleCardContainer = styled(Link)`
  background-color: ${({ theme }) => theme.articleCard.backgroundColor};
  color: ${({ theme }) => theme.articleCard.textColor};
  border-radius: 10px;
  padding: 15px;
  text-align: left;
  max-width: 300px;
  text-decoration: none;
  :hover {
    background-color: ${({ theme }) => theme.articleCard.backgroundColorHover};
    color: ${({ theme }) => theme.articleCard.textColorHover};
  }
  @media (min-width: 600px) {
    height: 100%;
  }
`;

function ArticleCard({
  title,
  category,
  slug,
  description,
  imageUrl,
  author,
  authorImageUrl,
  date,
  readTime,
}: ArticleCardProps) {
  return (
    <ArticleCardContainer
      href={`/articles/${category}/${slug}`}
      prefetch={false}
      scroll={true}
    >
      <Stack
        direction="column"
        justify="space-between"
        align={"start"}
        style={{ height: "100%" }}
      >
        <div>
          <PreviewImage imageUrl={imageUrl} />
          <Text size={"h4"} bold>
            {title}
          </Text>
          <Text style={{ display: "block" }}>{description}</Text>
        </div>
        <Stack direction="row" gap={"10px"} style={{ margin: "20px 0" }}>
          <Avatar size={"35px"} imageUrl={authorImageUrl} />
          <Stack direction="column" gap={"5px"}>
            <Text bold size={"sm"}>
              {author}
            </Text>
            <Text size={"sm"} color={"secondary"}>
              {convertToGermanDateFormat(date)} - {readTime} min read
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </ArticleCardContainer>
  );
}

export default ArticleCard;
