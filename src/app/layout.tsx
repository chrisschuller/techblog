"use client";

import "./globals.css";
import AppContainer from "./components/AppContainer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Content from "./components/Content";
import appTheme from "./theme";
import { useState } from "react";
import ThemeSwitcher from "./contexts/ThemeSwitcher";
import { useParams } from "next/navigation";
import ThemeProvider from "./contexts/ThemeProvider";
import Category from "./types/Category";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const existingCategory = params?.category as Category;

  const [theme, setTheme] = useState<{
    darkMode: boolean;
    colorScheme: Category;
  }>({
    darkMode: false,
    colorScheme: existingCategory ? existingCategory : "base",
  });
  const toggleDarkMode = () => {
    setTheme({ ...theme, darkMode: !theme.darkMode });
  };
  const toggleColorScheme = (category: Category) => {
    setTheme({ ...theme, colorScheme: category });
  };

  return (
    <html lang="en">
      <head>
        <title>Bloggy</title>
        <meta name="description" content="A blog about tech, food and travel" />
      </head>
      <body>
        <ThemeSwitcher.Provider
          value={{ theme, toggleDarkMode, toggleColorScheme }}
        >
          <ThemeProvider
            theme={
              appTheme[theme.colorScheme][theme.darkMode ? "dark" : "light"]
            }
          >
            <AppContainer>
              <Navbar />
              <Main>
                <Content>{children}</Content>
              </Main>
            </AppContainer>
          </ThemeProvider>
        </ThemeSwitcher.Provider>
      </body>
    </html>
  );
}
