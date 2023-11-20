import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tony and Fanny",
  description: "Tony and Fanny",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html class="h-full" lang="en">
      <body class="h-full bg-gray-800" className={inter.className}>
        {children}
      </body>
    </html>
  );
}
