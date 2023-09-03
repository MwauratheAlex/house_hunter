"use client";

import Link from "./Link";
import styles from "../../styles/navbar.module.css";
import useRegisterModal from "@/app/hooks/useRegisterModal";

export default function NavItems() {
  const { authBtns, underline } = styles;
  const registerModal = useRegisterModal();

  return (
    <ul>
      <Link text="List your property" variant={underline} />
      <div className={authBtns}>
        <Link text="Login" />
        <Link
          text="Sign up"
          variant={underline}
          onClick={registerModal.onOpen}
        />
      </div>
    </ul>
  );
}
