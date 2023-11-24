import { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import Stack from "./Stack";
import Text from "./Text";
import PreviewImage from "./PreviewImage";
import Avatar from "./Avatar";

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
  background-color: ${({ theme }) => theme.colors.lightBlack};
  border-radius: 10px;
  padding: 15px;
  text-align: left;
  max-width: 300px;
  :hover {
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

function ArticleCard({
  id,
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
        <PreviewImage imageUrl="https://blog.openreplay.com/images/creating-a-collapsible-component-for-react/images/hero.png" />
        <Text size={"h4"} bold>
          {title}
        </Text>
        <Text style={{ display: "block", marginBottom: "20px" }}>
          {description}
        </Text>
      </div>
    </ArticleCardContainer>
  );
}

export default ArticleCard;
