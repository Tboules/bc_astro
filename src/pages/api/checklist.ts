export const prerender = false;

import type { APIRoute } from "astro";
import { readFileSync } from "fs";
import mail from "@sendgrid/mail";
import {
  callToActionFormSchema,
  type ICallToActionFormSchema,
} from "@/types/forms";

mail.setApiKey(import.meta.env.SENDGRID_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") !== "application/json") {
    return new Response(null, { status: 400 });
  }

  try {
    const requestBody: ICallToActionFormSchema = await request.json();

    callToActionFormSchema.parse(requestBody);

    const fileString = readFileSync("./public/checklist.pdf", "base64");

    const msg = {
      to: requestBody.email,
      from: "info@boulesconsulting.org",
      subject: "Free Handbook from Boules Consulting!",
      html: `
      <h1>Thank You for Joining the Boules Consulting Team </h1>
      <br></br>
      <br></br>
      <p>Attached below you will find a checklist of everything that you need to do to create a great master narrative!</p>
    `,
      attachments: [
        {
          content: fileString,
          filename: "attachment.pdf",
          type: "application/pdf",
          disposition: "attachment",
        },
      ],
    };

    await mail.send(msg);

    return new Response(JSON.stringify("Promo sent successfully"), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
};
