"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import useRentModal from "@/app/hooks/useRentModal ";
import { useRouter } from "next/navigation";
import Link from "./Link";

import styles from "@/app/styles/user_menu.module.css";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    // open rent modal
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  //Styles
  const { menuContainer } = styles;

  return (
    <div className="relative">
      {/* Avatar and Menu Icon */}
      <div className="flex flex-row items-center gap-3">
        {/* Menu Icon */}
        <div
          onClick={toggleOpen}
          className="
                p-4
                md:py-1
                md:px-2
                border-[1px]
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
            "
        >
          <AiOutlineMenu />
          {/* Avatar */}
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={menuContainer}>
          {currentUser ? (
            <ul>
              <Link onClick={() => router.push("/")} text="Home" />
              <Link
                onClick={() => router.push("/favorites")}
                text="My Favourites"
              />

              <Link
                onClick={() => router.push("/properties")}
                text="My Properties"
              />

              <Link onClick={rentModal.onOpen} text="List your property" />
              {/* <MenuItem onClick={rentModal.onOpen} label="Airbnb my home" /> */}
              <hr />
              <Link onClick={signOut} text="Logout" />
            </ul>
          ) : (
            <ul>
              <Link onClick={loginModal.onOpen} text="Login" />
              <Link onClick={registerModal.onOpen} text="Sign up" />
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
