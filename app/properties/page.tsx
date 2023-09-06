import getCurrentUser from "@/app/actions/getCurrentUser";
import ListingCard from "../components/listingCard/ListingCard";
import getListings from "../actions/getListings";
import { useState } from "react";
import PropertirsClient from "./PropertirsClient";

export default async function page() {
  const currentUser = await getCurrentUser();
  const listings = await getListings({ userId: currentUser?.id });
  //   const [deletingId, setDeletingId] = useState("");

  return (
    <main>
      <PropertirsClient currentUser={currentUser} listings={listings} />
    </main>
  );
}
