import Image from "next/image";
import searchIcon from "./images/serch-icon.svg";
import styles from "../../styles/search.module.css";

export default async function SearchBtn() {
  return (
    <div className={styles.btn}>
      <button>Search</button>
      <Image src={searchIcon} alt="" width={29} height={29} />
    </div>
  );
}
