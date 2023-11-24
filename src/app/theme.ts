const colors = {
  blue: "#4A90E2",
  lightBlue: "#6CAFFA",
  darkBlue: "#2D70B5",
  gray: "#A3A3A3",
  lightGray: "#BEBEBE",
  darkGray: "#828282",
  green: "#4B8F8C",
  lightGreen: "#6CA5A4",
  darkGreen: "#346D6A",
  black: "#1A1A1A",
  lightBlack: "#333333",
  darkBlack: "#0D0D0D",
  white: "#ffffff",
  alert: "#F5A623",
  info: "#50E3C2",
  error: "#D0021B",
};

export const theme = {
  colors: colors,
  text: {
    primary: {
      color: colors.blue,
      background: colors.lightGray,
    },
    secondary: {
      color: colors.darkGray,
      background: colors.lightGray,
    },
    ternary: {
      color: colors.darkGreen,
      background: colors.lightGray,
    },
    info: {
      color: colors.info,
      background: colors.lightGray,
    },
    alert: {
      color: colors.alert,
      background: colors.lightGray,
    },
    error: {
      color: colors.error,
      background: colors.lightGray,
    },
  },
  buttons: {
    primary: {
      color: colors.blue,
      hoverColor: colors.lightBlue,
      textColor: colors.white,
    },
    secondary: {
      color: colors.gray,
      hoverColor: colors.lightGray,
      textColor: colors.white,
    },
    ternary: {
      color: colors.green,
      hoverColor: colors.lightGreen,
      textColor: colors.white,
    },
  },
  fontSizes: {
    title: "55px",
    h1: "30px",
    h2: "24px",
    h3: "21px",
    h4: "18px",
    lg: "20px",
    md: "14px",
    sm: "12px",
  },
};

export type Theme = typeof theme;
