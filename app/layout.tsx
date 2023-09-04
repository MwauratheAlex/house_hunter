import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";

import { Nunito } from "next/font/google";
import Search from "./components/search/Search";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

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

export default async function RootLayout({ children }: props) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <header>
          <Navbar currentUser={currentUser} />
          <Search />
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <ToasterProvider />
        </header>
        {children}
      </body>
    </html>
  );
}
