import "./globals.css";
import "./leaflet.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";

import { Nunito } from "next/font/google";
import Search from "./components/search/Search";
import RegisterModal from "./components/modals/RegisterModal";
import RegisterPhoneModal from "./components/modals/RegisterPhoneModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import ContactModal from "./components/modals/ContactModal";
import ClientOnly from "./components/ClientOnly";

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
          <ClientOnly>
            <Search />
          </ClientOnly>
          <LoginModal />
          <RegisterModal />
          <RegisterPhoneModal />
          <ClientOnly>
            <RentModal />
          </ClientOnly>

          <ContactModal />
          <ToasterProvider />
        </header>
        {children}
      </body>
    </html>
  );
}
