"use client";
import styles from "../styles/listing_card.module.css";

import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";
import useFavorite from "../hooks/useFavorite";

interface Props {
  listingId: string;
  currentUser?: SafeUser | null;
}

export default function HeartButton({ listingId, currentUser }: Props) {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

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
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
}
