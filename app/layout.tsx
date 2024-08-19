import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SoilAi } from "soil-react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Soil App",
  description: "Build your own Soil app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black dark:text-white`}>
        <div className="background" />
        {children}
        <SoilAi />
      </body>
    </html>
  );
}
