import getListingById from "@/app/actions/getListingById";
import Heading from "@/app/components/Heading";
import HeartButton from "../../components/HeartButton";
import Image from "next/image";
import getCurrentUser from "@/app/actions/getCurrentUser";
import styles from "@/app/styles/listing_page.module.css";

interface IParams {
  listing_id?: string;
}

export default async function ListingPage({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  const { main, heading, info, content, border, p } = styles;
  return (
    <div className={main}>
      <div>
        <div
          className="
          w-full
          aspect-square
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
            top-0
            right-0
          "
          >
            <HeartButton
              listingId={listing?.id || ""}
              currentUser={currentUser}
            />
          </div>
        </div>
      </div>
      <div>
        <section className={heading}>
          <h1 className="text-2xl font-bold lg:text-3xl mt-0">
            {listing?.title}
          </h1>
          <h2 className="text-1xl font-light text-neutral-500 mt-2">
            Nairobi, Kenya
          </h2>
        </section>
        <section className={content}>
          <div className={info}>
            <p className={`text-1xl font-bold text-neutral-500 pr-4`}>
              {listing?.category}
            </p>

            <p className={`text-1xl font-bold text-neutral-500 ${border} ${p}`}>
              {listing?.roomCount} rooms
            </p>

            <p className={`text-1xl font-bold text-neutral-500 ${border} ${p}`}>
              {listing?.bathroomCount} baths
            </p>
          </div>
          <h2>Description</h2>
          <p>{listing?.description}</p>
          <p>Ksh {listing?.price} per month</p>
        </section>
      </div>
    </div>
  );
}
