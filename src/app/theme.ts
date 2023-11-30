const colors = {
  base: {
    primary: "#8d8d8d",
    primaryLight: "#969696",
    primaryDark: "#595959",
    secondary: "#A3A3A3",
    secondaryLight: "#BEBEBE",
    secondaryDark: "#828282",
    ternary: "#4B8F8C",
    ternaryLight: "#6CA5A4",
    ternaryDark: "#346D6A",
  },
  technology: {
    primary: "#4A90E2",
    primaryLight: "#6CAFFA",
    primaryDark: "#2D70B5",
    secondary: "#A3A3A3",
    secondaryLight: "#BEBEBE",
    secondaryDark: "#828282",
    ternary: "#4B8F8C",
    ternaryLight: "#6CA5A4",
    ternaryDark: "#346D6A",
  },
  food: {
    primary: "#fc9802",
    primaryLight: "#f9cd2c",
    primaryDark: "#e09a02",
    secondary: "#A3A3A3",
    secondaryLight: "#BEBEBE",
    secondaryDark: "#828282",
    ternary: "#4B8F8C",
    ternaryLight: "#6CA5A4",
    ternaryDark: "#346D6A",
  },
  travel: {
    primary: "#4A90E2",
    primaryLight: "#6CAFFA",
    primaryDark: "#2D70B5",
    secondary: "#A3A3A3",
    secondaryLight: "#BEBEBE",
    secondaryDark: "#828282",
    ternary: "#4B8F8C",
    ternaryLight: "#6CA5A4",
    ternaryDark: "#346D6A",
  },
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

const themeBaseDark = {
  colors: colors,
  backgroundColor: colors.black,
  textColor: colors.white,
  text: {
    primary: {
      textColor: colors.base.primary,
    },
    secondary: {
      textColor: colors.base.secondaryDark,
    },
    ternary: {
      textColor: colors.base.ternaryDark,
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
      backgroundColor: colors.base.primary,
      backgroundColorHover: colors.base.primaryLight,
      textColor: colors.white,
    },
    secondary: {
      backgroundColor: colors.base.secondary,
      backgroundColorHover: colors.base.secondaryLight,
      textColor: colors.white,
    },
    ternary: {
      backgroundColor: colors.base.ternary,
      backgroundColorHover: colors.base.ternaryLight,
      textColor: colors.white,
    },
  },
  navbar: {
    backgroundColor: colors.blackLight,
  },
  articleCard: {
    backgroundColor: colors.blackLight,
    backgroundColorHover: colors.base.primaryDark,
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

const themeBaseLight = {
  colors: colors,
  backgroundColor: colors.white,
  textColor: colors.black,
  text: {
    primary: {
      textColor: colors.base.primary,
    },
    secondary: {
      textColor: colors.base.secondaryDark,
    },
    ternary: {
      textColor: colors.base.ternaryDark,
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
      backgroundColor: colors.base.primary,
      backgroundColorHover: colors.base.primaryLight,
      textColor: colors.white,
    },
    secondary: {
      backgroundColor: colors.base.secondary,
      backgroundColorHover: colors.base.secondaryLight,
      textColor: colors.white,
    },
    ternary: {
      backgroundColor: colors.base.ternary,
      backgroundColorHover: colors.base.ternaryLight,
      textColor: colors.white,
    },
  },
  navbar: {
    backgroundColor: colors.white,
  },
  articleCard: {
    backgroundColor: colors.gray,
    backgroundColorHover: colors.base.primaryDark,
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
    md: "15px",
    sm: "12px",
  },
};

const themeTechnologyDark = {
  colors: colors,
  backgroundColor: colors.black,
  textColor: colors.white,
  text: {
    primary: {
      textColor: colors.technology.primary,
    },
    secondary: {
      textColor: colors.technology.secondaryDark,
    },
    ternary: {
      textColor: colors.technology.ternaryDark,
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
      backgroundColor: colors.technology.primary,
      backgroundColorHover: colors.technology.primaryLight,
      textColor: colors.white,
    },
    secondary: {
      backgroundColor: colors.technology.secondary,
      backgroundColorHover: colors.technology.secondaryLight,
      textColor: colors.white,
    },
    ternary: {
      backgroundColor: colors.technology.ternary,
      backgroundColorHover: colors.technology.ternaryLight,
      textColor: colors.white,
    },
  },
  navbar: {
    backgroundColor: colors.blackLight,
  },
  articleCard: {
    backgroundColor: colors.blackLight,
    backgroundColorHover: colors.technology.primaryDark,
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

const themeTechnologyLight = {
  colors: colors,
  backgroundColor: colors.white,
  textColor: colors.black,
  text: {
    primary: {
      textColor: colors.technology.primary,
    },
    secondary: {
      textColor: colors.technology.secondaryDark,
    },
    ternary: {
      textColor: colors.technology.ternaryDark,
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
      backgroundColor: colors.technology.primary,
      backgroundColorHover: colors.technology.primaryLight,
      textColor: colors.white,
    },
    secondary: {
      backgroundColor: colors.technology.secondary,
      backgroundColorHover: colors.technology.secondaryLight,
      textColor: colors.white,
    },
    ternary: {
      backgroundColor: colors.technology.ternary,
      backgroundColorHover: colors.technology.ternaryLight,
      textColor: colors.white,
    },
  },
  navbar: {
    backgroundColor: colors.white,
  },
  articleCard: {
    backgroundColor: colors.gray,
    backgroundColorHover: colors.technology.primaryDark,
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
    md: "15px",
    sm: "12px",
  },
};

const themeFoodDark = {
  colors: colors,
  backgroundColor: colors.black,
  textColor: colors.white,
  text: {
    primary: {
      textColor: colors.food.primary,
    },
    secondary: {
      textColor: colors.food.secondaryDark,
    },
    ternary: {
      textColor: colors.food.ternaryDark,
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
      backgroundColor: colors.food.primary,
      backgroundColorHover: colors.food.primaryLight,
      textColor: colors.white,
    },
    secondary: {
      backgroundColor: colors.food.secondary,
      backgroundColorHover: colors.food.secondaryLight,
      textColor: colors.white,
    },
    ternary: {
      backgroundColor: colors.food.ternary,
      backgroundColorHover: colors.food.ternaryLight,
      textColor: colors.white,
    },
  },
  navbar: {
    backgroundColor: colors.blackLight,
  },
  articleCard: {
    backgroundColor: colors.blackLight,
    backgroundColorHover: colors.food.primaryDark,
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

const themeFoodLight = {
  colors: colors,
  backgroundColor: colors.white,
  textColor: colors.black,
  text: {
    primary: {
      textColor: colors.food.primary,
    },
    secondary: {
      textColor: colors.food.secondaryDark,
    },
    ternary: {
      textColor: colors.food.ternaryDark,
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
      backgroundColor: colors.food.primary,
      backgroundColorHover: colors.food.primaryLight,
      textColor: colors.white,
    },
    secondary: {
      backgroundColor: colors.food.secondary,
      backgroundColorHover: colors.food.secondaryLight,
      textColor: colors.white,
    },
    ternary: {
      backgroundColor: colors.food.ternary,
      backgroundColorHover: colors.food.ternaryLight,
      textColor: colors.white,
    },
  },
  navbar: {
    backgroundColor: colors.white,
  },
  articleCard: {
    backgroundColor: colors.gray,
    backgroundColorHover: colors.food.primaryDark,
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
    md: "15px",
    sm: "12px",
  },
};

const appTheme = {
  base: {
    light: themeBaseLight,
    dark: themeBaseDark,
  },
  technology: {
    light: themeTechnologyLight,
    dark: themeTechnologyDark,
  },
  food: {
    light: themeFoodLight,
    dark: themeFoodDark,
  },
  travel: {
    light: themeBaseLight,
    dark: themeBaseDark,
  },
};

export default appTheme;

export type Theme = typeof themeBaseDark;
