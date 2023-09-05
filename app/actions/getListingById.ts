import prisma from "@/app/libs/prismadb";

interface IParams {
    listing_id?: string;
}

export default async function getListingById(
  params: IParams
) {
  try {
    const { listing_id } = params;
    const listing = await prisma.listing.findUnique({
      where: {
        id: listing_id,
      },
      include: {
        user: true
      }
    });

    if (!listing) {
      return null;
    }

    return {
      ...listing,
      createdAt: listing.createdAt.toString(),
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt.toString(),
        updatedAt: listing.user.updatedAt.toString(),
        emailVerified: 
          listing.user.emailVerified?.toString() || null,
      }
    };
  } catch (error: any) {
    throw new Error(error);
  }
}