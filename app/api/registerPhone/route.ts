import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const body = await request.json();
  const { phone } = body;

  const user = await getCurrentUser();
  const updateUser = await prisma.user.update({
    where: {
      id: user?.id,
    },
    data: {
      phone: phone,
    },
  });

  return NextResponse.json({ updateUser: updateUser });
}
