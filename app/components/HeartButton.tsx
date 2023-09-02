"use client";
import styles from "../styles/listing_card.module.css";

import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function HeartButton() {
  const [favorited, setFavorited] = useState(false);

  function toggleFavorite() {
    setFavorited((prev) => !prev);
  }

  return (
    <div
      onClick={toggleFavorite}
      className={`
        relative
        hover:opacity-80
        transition
        cursor-pointer
        ${styles.like}
      `}
    >
      <AiOutlineHeart
        size={28}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
      <AiFillHeart
        size={24}
        className={favorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
}
