"use client";

import "./globals.css";
import { ThemeProvider } from "@emotion/react";
import AppContainer from "./components/AppContainer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Content from "./components/Content";
import { lightTheme, darkTheme } from "./theme";
import { useState } from "react";
import ThemeSwitcher from "./contexts/ThemeSwitcher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <html lang="en">
      <title>Reactor.dev</title>
      <body>
        <ThemeSwitcher.Provider value={{ theme, toggleTheme }}>
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
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
