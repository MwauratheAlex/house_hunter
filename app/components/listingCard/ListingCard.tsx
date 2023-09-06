"use client";

import style from "../../styles/listing_card.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { useCallback } from "react";

import starIcon from "./images/🦆 icon _star_.svg";
import HeartButton from "../HeartButton";
import { SafeListing, SafeUser } from "@/app/types";

interface Props {
  data: SafeListing;
  currentUser?: SafeUser | null;
  actionId?: string;
  onAction?: (id: any) => void;
  disabled?: boolean;
  actionLabel?: string;
}

export default function ListingCard({
  data,
  currentUser,
  onAction,
  actionLabel,
  disabled,
  actionId,
}: Props) {
  const { card, img, content, bold, light, fl } = style;
  const router = useRouter();

  const handleDelete = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  return (
    <div className="col-span-1 cursor-pointer group">
      <div
        className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
      >
        <Image
          fill
          onClick={() => router.push(`/listings/${data.id}`)}
          className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
          src={data.imageSrc}
          alt="Listing"
        />
        <div
          className="
            absolute
            top-0
            right-0
          "
        >
          <HeartButton listingId={data.id} currentUser={currentUser} />
        </div>
      </div>
      <div
        className={content}
        onClick={() => router.push(`/listings/${data.id}`)}
      >
        <div className={fl}>
          <p className={bold}>{data.title}</p>
          <div className={fl}>
            <Image src={starIcon} alt="" />
            <p className={bold}>4.75</p>
          </div>
        </div>
        <p className={light}>{data.roomCount} Bedroom</p>
        <p className={light}>Nairobi, Kenya</p>
        <p className={bold}>Ksh. {data.price} per month</p>

        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleDelete}
            red={Boolean(onAction)}
          />
        )}
      </div>
    </div>
  );
}
