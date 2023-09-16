import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";
import ListingCard from "../components/listingCard/ListingCard";
import ClientOnly from "../components/ClientOnly";

export default async function page() {
  const listings = (await getFavoriteListings()) || null;
  const currentUser = (await getCurrentUser()) || null;

  return (
    <ClientOnly>
      <main>
        {listings.map((listing: any) => (
          <ListingCard
            data={listing}
            key={listing.id}
            currentUser={currentUser}
          />
        ))}
      </main>
    </ClientOnly>
  );
}
