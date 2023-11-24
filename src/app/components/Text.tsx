import styled from "@emotion/styled";
import { Stylable } from "./shared/types";
import { Theme } from "../theme";
import { ElementType, PropsWithChildren } from "react";

interface TextProps extends Stylable {
  size?: keyof Theme["fontSizes"];
  bold?: boolean;
  italic?: boolean;
  underlined?: boolean;
  color?: keyof Theme["text"];
  ellipsis?: boolean;
  as?: ElementType<any>;
}

const TextContainer = styled.span<TextProps>`
  ${({ size, theme }) => size && `font-size: ${theme.fontSizes[size]};`}
  ${({ bold }) => bold && `font-weight: bold;`}
  ${({ italic }) => italic && `font-style: italic;`}
  ${({ underlined }) => underlined && `text-decoration: underline;`}
  ${({ color, theme }) => color && `color: ${theme.text[color].color};`}
  ${({ ellipsis }) =>
    ellipsis &&
    `text-overflow: ellipsis; overflow: hidden; white-space: nowrap;`}
`;

function Text({
  children,
  size = "md",
  ...rest
}: PropsWithChildren<TextProps>) {
  return (
    <TextContainer
      {...rest}
      as={
        size === "h1" || size === "h2" || size === "h3" || size === "h4"
          ? size
          : undefined
      }
      size={size}
    >
      {children}
    </TextContainer>
  );
}

export default Text;
