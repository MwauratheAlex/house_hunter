import styles from "../../styles/navbar.module.css";
import Link from "./Link";
import logoImg from "./images/logo.svg";
import Image from "next/image";

export default async function Navbar() {
  const { nav, authBtns, underline, border, logo, navElContainer } = styles;

  return (
    <nav className={nav}>
      <div className={navElContainer}>
        <Image src={logoImg} alt="House Hunter logo" className={logo} />

        <ul>
          <Link text="List your property" variant={underline} />
          <div className={authBtns}>
            <Link text="Login" />
            <Link text="Sign up" variant={underline} />
          </div>
        </ul>
      </div>
    </nav>
  );
}
