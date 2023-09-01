import styles from "../../styles/navbar.module.css";
import Link from "./Link";
import logo from "./images/logo.png";
import Image from "next/image";

export default async function Navbar() {
  const { nav, authBtns, underline, signUp, border } = styles;

  return (
    <nav className={nav}>
      <Image src={logo} alt="House Hunter logo" />
      <ul>
        <Link text="List your property" variant={underline} />
        <div className={authBtns}>
          <Link text="Login" />
          <Link text="Sign up" variant={border} />
        </div>
      </ul>
    </nav>
  );
}
