import styled from "@emotion/styled";
import Stack from "./Stack";
import { Text } from "./Text";
import Image from "next/image";
import Avatar from "./Avatar";
import { convertToGermanDateFormat } from "./Utils";

interface ArticleCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  authorImageUrl: string;
  date: string;
  readTime: number;
}

const ArticleCardContainer = styled(Stack)`
  background-color: ${({ theme }) => theme.articleCard.backgroundColor};
  color: ${({ theme }) => theme.articleCard.textColor};
  border-radius: 10px;
  padding: 15px;
  text-align: left;
  max-width: 300px;
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
  description,
  imageUrl,
  author,
  authorImageUrl,
  date,
  readTime,
}: ArticleCardProps) {
  return (
    <ArticleCardContainer
      direction="column"
      justify="space-between"
      align={"start"}
    >
      <div>
        <div style={{ position: "relative", height: "200px" }}>
          <Image
            src={imageUrl}
            alt={"Article Preview image"}
            fill
            sizes="400px"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
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
    </ArticleCardContainer>
  );
}

export default ArticleCard;
