import navbar from "../../styles/navbar.module.css";
import Button from "./Button";
import logo from "./images/logo.png";
import Image from "next/image";

export default async function Navbar() {
  const { nav } = navbar;
  return (
    <nav className={nav}>
      <Image src={logo} alt="House Hunter logo" />
      <Button text="List your property" />
      <Button text="Login" />
      <Button text="Sign up" />
    </nav>
  );
}
