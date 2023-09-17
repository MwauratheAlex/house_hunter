"use client";

import Link from "./Link";
import styles from "../../styles/navbar.module.css";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeUser } from "@/app/types";
import UserMenu from "./UserMenu";
import useRentModal from "@/app/hooks/useRentModal ";
import useRegisterPhoneModal from "@/app/hooks/useRegisterPhoneModal ";

interface Props {
  currentUser?: SafeUser | null;
}

const handleListProperty = (
  openLoginModal: any,
  openRentModal: any,
  openRegisterPhoneModal: any,
  user?: SafeUser | null
) => {
  if (user) {
    // if the user does not have a phone number
    if (!user.phone) {
      // Open register phone modal
      openRegisterPhoneModal();
    } else {
      // else openRentModal
      openRentModal();
    }
  } else {
    openLoginModal();
  }
};

export default function NavItems({ currentUser }: Props) {
  const { authBtns, underline } = styles;
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const registerPhoneModal = useRegisterPhoneModal();

  const authButtons = (
    <div className={authBtns}>
      <Link text="Login" onClick={loginModal.onOpen} />
      <Link text="Sign up" variant={underline} onClick={registerModal.onOpen} />
    </div>
  );
  return (
    <ul>
      <Link
        text="List your property"
        variant={`${underline} mr-20`}
        // onClick={currentUser ? rentModal.onOpen : loginModal.onOpen}
        onClick={() =>
          handleListProperty(
            loginModal.onOpen,
            rentModal.onOpen,
            registerPhoneModal.onOpen,
            currentUser
          )
        }
      />
      {!currentUser && authButtons}
      {currentUser && <UserMenu currentUser={currentUser} />}
    </ul>
  );
}
