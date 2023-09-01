import style from "../../styles/listing_card.module.css";
import Image from "next/image";
import house from "./images/house_1.jpg";

export default function ListingCard() {
  const { card, img } = style;
  return (
    <div className={card}>
      <div className={img}>
        <Image src={house} alt="" />
      </div>
    </div>
  );
}
