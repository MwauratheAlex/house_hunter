"use client";

import style from "../../styles/listing_card.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { useCallback } from "react";
import ContactModal from "../modals/ContactModal";
import starIcon from "./images/🦆 icon _star_.svg";
import HeartButton from "../HeartButton";
import { SafeListing, SafeUser } from "@/app/types";
import useContactModal from "@/app/hooks/useContactModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface Props {
  data: SafeListing;
  currentUser?: SafeUser | null;
  actionId?: string;
  onAction?: (id: any) => void;
  disabled?: boolean;
  actionLabel?: string;
  contact?: boolean;
}

export default function ListingCard({
  data,
  currentUser,
  onAction,
  actionLabel,
  disabled,
  actionId,
  contact,
}: Props) {
  const { card, img, content, bold, light, fl } = style;
  const router = useRouter();
  const contactModal = useContactModal();

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

  const handleContact = () => {
    router.push(`/listings/${data.id}`);
    contactModal.onOpen(currentUser, data);
  };

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
      <div className={content}>
        <div onClick={() => router.push(`/listings/${data.id}`)}>
          <div className={fl}>
            <p className={bold}>{data.title}</p>
            <div className={fl}>
              <Image src={starIcon} alt="" />
              <p className={bold}>4.75</p>
            </div>
          </div>
          <p className={light}>{data.guestCount} Bedroom</p>
          <p className={light}>Nairobi, Kenya</p>
          <p>
            <span className={bold}>Ksh. {data.price}</span> <span>monthly</span>
          </p>
        </div>

        {contact && (
          <Button small label="contact owner" onClick={handleContact} />
        )}

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
