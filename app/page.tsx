import ListingCard from "./components/listingCard/ListingCard";
import getListings, { IListingsParams } from "./actions/getListings";
import getCurrentUser from "./actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";

interface HomeProps {
  searchParams: IListingsParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  return (
    <main>
      {listings.map((listing) => (
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
