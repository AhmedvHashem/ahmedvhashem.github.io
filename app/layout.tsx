import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Hashem | أحمد هاشم",
  description: "Ahmed Hashem | أحمد هاشم",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/shortcuticon.png",
    apple: "/appleicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
