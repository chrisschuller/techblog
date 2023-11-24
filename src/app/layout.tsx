import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reactor.dev",
  description: "A React and fullstack tech blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
