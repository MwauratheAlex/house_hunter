import getListingById from "@/app/actions/getListingById";

interface IParams {
  listing_id?: string;
}

export default async function ListingPage({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  return (
    <div>
      <h1>{listing?.title}</h1>
      {listing?.category}
      <p>Ksh {listing?.price} per month</p>
    </div>
  );
}
