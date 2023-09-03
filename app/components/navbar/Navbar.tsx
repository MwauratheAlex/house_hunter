import styles from "../../styles/navbar.module.css";
import NavItems from "./NavItems";
import logoImg from "./images/logo.svg";
import Image from "next/image";

export default function Navbar() {
  const { nav, logo, navElContainer } = styles;

  return (
    <nav className={nav}>
      <div className={navElContainer}>
        <Image src={logoImg} alt="House Hunter logo" className={logo} />
        <NavItems />
      </div>
    </nav>
  );
}
