"use client";

import { PropsWithChildren, useContext, useEffect } from "react";
import ThemeSwitcherContext from "./contexts/ThemeSwitcher";
import CategorySelection from "./components/CategorySelection";

function HomePageClient({ children }: PropsWithChildren) {
  const { toggleColorScheme } = useContext(ThemeSwitcherContext);
  useEffect(() => {
    toggleColorScheme("base");
  }, []);

  return (
    <>
      <CategorySelection />
      {children}
    </>
  );
}

export default HomePageClient;
