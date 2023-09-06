import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";
import ListingCard from "../components/listingCard/ListingCard";

export default async function page() {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  return (
    <main>
      {listings.map((listing: any) => (
        <ListingCard
          data={listing}
          key={listing.id}
          currentUser={currentUser}
        />
      ))}
    </main>
  );
}
