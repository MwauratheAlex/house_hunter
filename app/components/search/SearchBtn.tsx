import Image from "next/image";
import searchIcon from "./images/serch-icon.svg";
import styles from "../../styles/search.module.css";

interface Props {
  label: string;
  onClick: (event: any) => void;
}

export default function SearchBtn({ onClick, label }: Props) {
  return (
    <div className={styles.btn} onClick={(event) => onClick(event)}>
      <button>{label}</button>
      <Image src={searchIcon} alt="" width={29} height={29} />
    </div>
  );
}
