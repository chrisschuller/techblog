import styled from "@emotion/styled";
import Link from "next/link";
import { ComponentProps } from "react";
import Category from "../types/Category";

interface CategoryLinkProps extends ComponentProps<typeof Link> {
  category: Category;
}

const CategoryLinkContainer = styled(Link)<CategoryLinkProps>`
  background-color: ${({ category, theme }) => theme.colors[category].primary};
  color: white;
  border: ${({ category, theme }) =>
    `1px solid ${theme.colors[category].primary}`};
  border-radius: 5px;
  text-decoration: none;
  padding: 7px;
`;

function CategoryLink(props: CategoryLinkProps) {
  return <CategoryLinkContainer {...props} />;
}

export default CategoryLink;
