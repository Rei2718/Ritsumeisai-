import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2024-RitsumeiSai SpecialSite",
  description: "Created by K-Tech (ItoShido, OchiaiMasaya, IshikawaIchiro)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="font-mono">{children}</div>
      </body>
    </html>
  );
}
