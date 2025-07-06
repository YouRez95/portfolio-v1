import type { Metadata } from "next";
import "./globals.css";
import { prozaLibre } from "@/fonts/fonts";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Youness Elalouani",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={`${prozaLibre.className} overflow-x-hidden bg-primary`}>
        {children}
      </body>
    </html>
  );
}
