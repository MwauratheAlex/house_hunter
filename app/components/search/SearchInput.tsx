import houseIcon from "./images/house-icon.svg";
import Image from "next/image";
import styles from "../../styles/search.module.css";

interface props {
  icon?: any;
  value: string;
  label: string;
}

export default async function SearchInput({ value, label }: props) {
  return (
    <div className={styles.inputContainer}>
      <Image src={houseIcon} alt="" width={29} height={29} />
      <div>
        <label>{label}</label>
        <input type="text" value={value} />
      </div>
    </div>
  );
}
