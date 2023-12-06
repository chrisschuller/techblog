import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { Theme } from "../theme";
import Stylable from "../types/Stylable";

type OnClick = Pick<React.HTMLProps<HTMLButtonElement>, "onClick">["onClick"];

interface ButtonProps extends Stylable {
  variant?: keyof Theme["buttons"];
  outlined?: boolean;
  href?: string;
  onClick?: OnClick;
  as?: React.ElementType<any>;
}

const ButtonContainer = styled.button<ButtonProps>`
  padding: 8px 10px;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  ${({ variant, outlined, theme }) =>
    variant &&
    !outlined &&
    `background-color: ${theme.buttons[variant].backgroundColor}; color: ${theme.buttons[variant].textColor};`}
  ${({ variant, outlined, theme }) =>
    !variant &&
    !outlined &&
    `background-color: ${theme.buttons["primary"].backgroundColor}; color: ${theme.buttons["primary"].textColor};`}
  
  ${({ variant, outlined, theme }) =>
    variant &&
    outlined &&
    `background-color: transparent; box-shadow: inset 0 0 0 1px ${theme.buttons[variant].backgroundColor}; color: ${theme.buttons[variant].backgroundColor};`}
  
  ${({ variant, outlined, theme }) =>
    !variant &&
    outlined &&
    `background-color: transparent; box-shadow: inset 0 0 0 1px ${theme.buttons["primary"].backgroundColor}; color: ${theme.buttons["primary"].backgroundColor};`}
  
  :hover {
    ${({ variant, outlined, theme }) =>
      variant &&
      !outlined &&
      `background-color: ${theme.buttons[variant].backgroundColorHover}; color: ${theme.buttons[variant].textColor};`}
    ${({ variant, outlined, theme }) =>
      !variant &&
      !outlined &&
      `background-color: ${theme.buttons["primary"].backgroundColorHover}; color: ${theme.buttons["primary"].textColor};`}
  
  ${({ variant, outlined, theme }) =>
      variant &&
      outlined &&
      `background-color: transparent; box-shadow: inset 0 0 0 1px ${theme.buttons[variant].backgroundColorHover}; color: ${theme.buttons[variant].backgroundColorHover};`}
  
  ${({ variant, outlined, theme }) =>
      !variant &&
      outlined &&
      `background-color: transparent; box-shadow: inset 0 0 0 1px ${theme.buttons["primary"].backgroundColorHover}; color: ${theme.buttons["primary"].backgroundColorHover};`}
  }
`;

function Button({
  variant,
  href,
  onClick,
  outlined,
  style,
  children,
}: PropsWithChildren<ButtonProps>) {
  return (
    <ButtonContainer
      as={href ? "a" : undefined}
      variant={variant}
      onClick={onClick}
      style={style}
      outlined={outlined}
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
