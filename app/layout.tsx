import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
