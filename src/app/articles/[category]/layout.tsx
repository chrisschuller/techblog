"use client";

import ThemeSwitcherContext, { Category } from "@/app/contexts/ThemeSwitcher";
import { useContext, useEffect } from "react";

export default function RootLayout({
  params,
  children,
}: {
  params: { category: Category };
  children: React.ReactNode;
}) {
  const { toggleColorScheme } = useContext(ThemeSwitcherContext);
  useEffect(() => {
    toggleColorScheme(params.category);
  }, []);

  return <>{children}</>;
}
