import style from "../../styles/listing_card.module.css";
import Image from "next/image";
import house from "./images/house_1.jpg";
import starIcon from "./images/🦆 icon _star_.svg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function ListingCard() {
  const { card, img, content, bold, light, fl, like, icon, fill } = style;
  return (
    <div className={card}>
      <div className={img}>
        <div className={like}>
          <AiOutlineHeart className={icon} size="2em" />
          <AiFillHeart className={fill} size="1.8em" />
        </div>
        <Image src={house} alt="" />
      </div>
      <div className={content}>
        <div className={fl}>
          <p className={bold}>Juja apartment</p>
          <div className={fl}>
            <Image src={starIcon} alt="" />
            <p className={bold}>4.75</p>
          </div>
        </div>
        <p className={light}>2 Bedroom</p>
        <p className={light}>Nairobi, Kenya</p>
        <p className={bold}>Ksh. 36,000 per month</p>
      </div>
    </div>
  );
}
