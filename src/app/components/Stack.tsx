import styled from "@emotion/styled";
import { CSSProperties, PropsWithChildren } from "react";
import { Stylable } from "./shared/types";

type DirectionType = Pick<CSSProperties, "flexDirection">["flexDirection"];
type JustifyType = Pick<CSSProperties, "justifyContent">["justifyContent"];
type AlignType = Pick<CSSProperties, "alignItems">["alignItems"];

interface StackProps extends Stylable {
  direction?: DirectionType;
  justify?: JustifyType;
  align?: AlignType;
  gap?: string;
}

const StackContainer = styled.div<StackProps>`
  display: flex;
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ gap }) => gap && `gap: ${gap};`}
`;

function Stack({ children, ...rest }: PropsWithChildren<StackProps>) {
  return <StackContainer {...rest}>{children}</StackContainer>;
}

export default Stack;
