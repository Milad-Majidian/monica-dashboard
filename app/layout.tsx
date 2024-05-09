import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Layout from "./dashboard/layout";
import Layouts from "@/components/Layouts";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monica",
  description: "Write better, 10X faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
