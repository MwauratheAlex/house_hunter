import ListingCard from "../components/listingCard/ListingCard";
import getListings, { IListingsParams } from "../actions/getListings";
import getCurrentUser from "../actions/getCurrentUser";
import { SafeListing, SafeUser } from "../types";

interface PropertiesClentOnlyProps {
  listings: SafeListing[];
  currentUser: SafeUser;
}

export default async function PropertiesClentOnly({
  listings,
  currentUser,
}: PropertiesClentOnlyProps) {
  //   const listings = await getListings({});
  //   const currentUser = await getCurrentUser();

  return (
    <main>
      {listings.map((listing: SafeListing) => (
        <ListingCard
          data={listing}
          key={listing.id}
          currentUser={currentUser}
          contact={true}
        />
      ))}
    </main>
  );
}
