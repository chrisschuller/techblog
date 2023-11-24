import { CSSProperties } from "react";

export interface Stylable {
  style?: CSSProperties;
}

export type ButtonVariant = "primary" | "secondary" | "ternary";
