"use client";
import React from "react";

export type Category = "base" | "technology" | "food" | "travel";

const ThemeSwitcherContext = React.createContext<{
  theme: {
    darkMode: boolean;
    colorScheme: Category;
  };
  toggleDarkMode: () => void;
  toggleColorScheme: (category: Category) => void;
}>({
  theme: {
    darkMode: false,
    colorScheme: "base",
  },
  toggleDarkMode: () => {},
  toggleColorScheme: () => {},
});

export default ThemeSwitcherContext;
