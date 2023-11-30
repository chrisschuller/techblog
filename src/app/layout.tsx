"use client";

import "./globals.css";
import { ThemeProvider } from "@emotion/react";
import AppContainer from "./components/AppContainer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Content from "./components/Content";
import appTheme from "./theme";
import { useState } from "react";
import ThemeSwitcher, { Category } from "./contexts/ThemeSwitcher";
import { AnimatePresence, motion } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<{
    darkMode: boolean;
    colorScheme: Category;
  }>({ darkMode: false, colorScheme: "base" });
  const toggleDarkMode = () => {
    setTheme({ ...theme, darkMode: !theme.darkMode });
  };
  const toggleColorScheme = (category: Category) => {
    setTheme({ ...theme, colorScheme: category });
  };

  return (
    <html lang="en">
      <title>bloggyyy.me</title>
      <body>
        <ThemeSwitcher.Provider
          value={{ theme, toggleDarkMode, toggleColorScheme }}
        >
          <ThemeProvider
            theme={
              appTheme[theme.colorScheme][theme.darkMode ? "dark" : "light"]
            }
          >
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }} // Set the duration of the fade here
              >
                <AppContainer>
                  <Navbar />
                  <Main>
                    <Content>{children}</Content>
                  </Main>
                </AppContainer>
              </motion.div>
            </AnimatePresence>
          </ThemeProvider>
        </ThemeSwitcher.Provider>
      </body>
    </html>
  );
}
