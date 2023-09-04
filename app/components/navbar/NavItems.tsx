"use client";

import Link from "./Link";
import styles from "../../styles/navbar.module.css";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeUser } from "@/app/types";

interface Props {
  currentUser?: SafeUser | null;
}

export default function NavItems({ currentUser }: Props) {
  const { authBtns, underline } = styles;
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const authButtons = (
    <div className={authBtns}>
      <Link text="Login" onClick={loginModal.onOpen} />
      <Link text="Sign up" variant={underline} onClick={registerModal.onOpen} />
    </div>
  );
  return (
    <ul>
      <Link text="List your property" variant={underline} />
      {!currentUser && authButtons}
    </ul>
  );
}
