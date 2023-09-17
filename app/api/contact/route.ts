import { NextResponse } from "next/server";
import Mailgun from "mailgun.js";
import FormData from "form-data";
import getListingById from "@/app/actions/getListingById";
import getUserById from "@/app/actions/getUserById";

export async function POST(request: Request) {
  const body = await request.json();

  const { user, listing, message } = body;
  const user_listing = await getUserById(listing.userId);

  const API_KEY = process.env.MAILGUN_API_KEY || "";
  const DOMAIN = process.env.MAILGUN_DOMAIN_NAME || "";
  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const messageData = {
    from: "House Hunter <house_hunter@mbumwa.com>",
    to: `${user_listing?.email}`,
    subject: "Your listing is getting popular!",
    text: `
    Hello,

    You have a new message from ${user.name},
    regarding your listing "${listing.title}".

    Message:
    "${message}"

    Contact Email: ${user.email}

    Thank you for using House Hunter.
  `,
  };

  client.messages
    .create(DOMAIN, messageData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

  return NextResponse.json({ user, listing, message, user_listing });
}
