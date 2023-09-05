import getListingById from "@/app/actions/getListingById";
import Heading from "@/app/components/Heading";
import HeartButton from "../../components/HeartButton";
import Image from "next/image";

interface IParams {
  listing_id?: string;
}

export default async function ListingPage({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  return (
    <div>
      <Heading title={listing?.title} />
      <div
        className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <Image
          src={listing?.imageSrc || ""}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <HeartButton />
        </div>
      </div>
      <h1>{listing?.title}</h1>
      {listing?.category}
      <p>Ksh {listing?.price} per month</p>
    </div>
  );
}
