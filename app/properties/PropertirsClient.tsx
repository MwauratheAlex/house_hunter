"use client";

import ListingCard from "../components/listingCard/ListingCard";
import { SafeListing, SafeUser } from "../types";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Props {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

export default function PropertirsClient({ listings, currentUser }: Props) {
  const [deletingId, setDeletingId] = useState("");
  const router = useRouter();
  const onDelete = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success("Listing deleted");
          router.refresh();
        })
        .catch((error) => {
          toast.error("Something went wrong");
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );
  return (
    <>
      {listings.map((listing: any) => (
        <ListingCard
          data={listing}
          key={listing.id}
          currentUser={currentUser}
          actionId={listing.id}
          onAction={onDelete}
          //   disabled={deletingId === listing.id}
          actionLabel="Delete property"
        />
      ))}
    </>
  );
}
