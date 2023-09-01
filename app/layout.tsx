import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";

import { Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "House Hunter",
  description: "Your key to comfort",
};

interface props {
  children: React.ReactNode;
}

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children }: props) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
