import styled from "@emotion/styled";
import { Theme } from "../theme";
import { ElementType, PropsWithChildren } from "react";
import Stylable from "../types/Stylable";

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
  ${({ color, theme }) =>
    color &&
    `color: ${theme.text[color].textColor}; text-decoration-color: ${theme.text[color].textColor};`}
  ${({ ellipsis }) =>
    ellipsis &&
    `text-overflow: ellipsis; overflow: hidden; white-space: nowrap;`}
`;

export function Text({
  children,
  size = "md",
  as,
  ...rest
}: PropsWithChildren<TextProps>) {
  return (
    <TextContainer
      {...rest}
      as={
        size === "h1" || size === "h2" || size === "h3" || size === "h4"
          ? size
          : as
          ? as
          : undefined
      }
      size={size}
    >
      {children}
    </TextContainer>
  );
}

export function Paragraph({
  children,
  size = "md",
  as,
  ...rest
}: PropsWithChildren<TextProps>) {
  return (
    <TextContainer {...rest} as={"p"} size={size}>
      {children}
    </TextContainer>
  );
}
