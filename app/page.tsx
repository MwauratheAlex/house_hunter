import ListingCard from "./components/listingCard/ListingCard";
import getListings, { IListingsParams } from "./actions/getListings";
import getCurrentUser from "./actions/getCurrentUser";

interface HomeProps {
  searchParams: IListingsParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const listings = await getListings(searchParams);
  // console.log(listings);
  const currentUser = await getCurrentUser();

  return (
    <main>
      {listings.map((listing) => (
        <ListingCard
          data={listing}
          key={listing.id}
          currentUser={currentUser}
        />
      ))}
    </main>
  );
}
