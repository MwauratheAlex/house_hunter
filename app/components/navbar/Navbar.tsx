import navbar from "../../styles/navbar.module.css";
import Link from "./Link";
import logo from "./images/logo.png";
import Image from "next/image";

export default async function Navbar() {
  // CSS Classes
  const { nav, buttons } = navbar;

  return (
    <nav className={nav}>
      <Image src={logo} alt="House Hunter logo" />
      <ul>
        <li>
          <Link text="List your property" />
        </li>
        <li>
          <Link text="Login" />
        </li>
        <li>
          <Link text="Sign up" />
        </li>
      </ul>
    </nav>
  );
}
