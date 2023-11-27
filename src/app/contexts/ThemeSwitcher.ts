import React from "react";

const ThemeSwitcherContext = React.createContext<{
  theme: "light" | "dark";
  toggleTheme: () => void;
}>({ theme: "light", toggleTheme: () => {} });

export default ThemeSwitcherContext;
