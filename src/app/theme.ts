const colors = {
  primary: "#4A90E2",
  primaryLight: "#6CAFFA",
  primaryDark: "#2D70B5",
  secondary: "#A3A3A3",
  secondaryLight: "#BEBEBE",
  secondaryDark: "#828282",
  ternary: "#4B8F8C",
  ternaryLight: "#6CA5A4",
  ternaryDark: "#346D6A",
  black: "#1A1A1A",
  blackLight: "#333333",
  blackDark: "#0D0D0D",
  gray: "#DDDDDD",
  grayLight: "#F7F7F7",
  grayDark: "#C9C9C9",
  white: "#ffffff",
  alert: "#F5A623",
  info: "#50E3C2",
  error: "#D0021B",
};

export const darkTheme = {
  colors: colors,
  backgroundColor: colors.black,
  textColor: colors.white,
  text: {
    primary: {
      textColor: colors.primary,
    },
    secondary: {
      textColor: colors.secondaryDark,
    },
    ternary: {
      textColor: colors.ternaryDark,
    },
    info: {
      textColor: colors.info,
    },
    alert: {
      textColor: colors.alert,
    },
    error: {
      textColor: colors.error,
    },
  },
  buttons: {
    primary: {
      backgroundColor: colors.primary,
      backgroundColorHover: colors.primaryLight,
      textColor: colors.white,
    },
    secondary: {
      backgroundColor: colors.secondary,
      backgroundColorHover: colors.secondaryLight,
      textColor: colors.white,
    },
    ternary: {
      backgroundColor: colors.ternary,
      backgroundColorHover: colors.ternaryLight,
      textColor: colors.white,
    },
  },
  navbar: {
    backgroundColor: colors.blackLight,
  },
  articleCard: {
    backgroundColor: colors.blackLight,
    backgroundColorHover: colors.primaryDark,
    textColor: colors.white,
    textColorHover: colors.white,
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

export const lightTheme = {
  colors: colors,
  backgroundColor: colors.white,
  textColor: colors.black,
  text: {
    primary: {
      textColor: colors.primary,
    },
    secondary: {
      textColor: colors.secondaryDark,
    },
    ternary: {
      textColor: colors.ternaryDark,
    },
    info: {
      textColor: colors.info,
    },
    alert: {
      textColor: colors.alert,
    },
    error: {
      textColor: colors.error,
    },
  },
  buttons: {
    primary: {
      backgroundColor: colors.primary,
      backgroundColorHover: colors.primaryLight,
      textColor: colors.white,
    },
    secondary: {
      backgroundColor: colors.secondary,
      backgroundColorHover: colors.secondaryLight,
      textColor: colors.white,
    },
    ternary: {
      backgroundColor: colors.ternary,
      backgroundColorHover: colors.ternaryLight,
      textColor: colors.white,
    },
  },
  navbar: {
    backgroundColor: colors.white,
  },
  articleCard: {
    backgroundColor: colors.gray,
    backgroundColorHover: colors.primaryDark,
    textColor: colors.black,
    textColorHover: colors.white,
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

export type Theme = typeof darkTheme;
