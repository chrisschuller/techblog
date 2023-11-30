"use client";

import ThemeSwitcherContext, { Category } from "@/app/contexts/ThemeSwitcher";
import { AnimatePresence, motion } from "framer-motion";
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }} // Set the duration of the fade here
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
