import styles from "../../styles/navbar.module.css";
import Logo from "./Logo";
import NavItems from "./NavItems";
import { SafeUser } from "@/app/types";

interface Props {
  currentUser?: SafeUser | null;
}

export default function Navbar({ currentUser }: Props) {
  const { nav, logo, navElContainer } = styles;

  return (
    <nav className={`${nav} select-none`}>
      <div className={navElContainer}>
        <Logo className={logo} />
        <NavItems currentUser={currentUser} />
      </div>
    </nav>
  );
}
