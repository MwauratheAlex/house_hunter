import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "House Hunter",
  description: "Your key to comfort",
};

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
