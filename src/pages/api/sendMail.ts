export const prerender = false;

import { contactFormSchema, type IContactFormSchema } from "@/types/forms";
import mail from "@sendgrid/mail";
import type { APIRoute } from "astro";

mail.setApiKey(import.meta.env.SENDGRID_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") !== "application/json") {
    return new Response(null, { status: 400 });
  }

  try {
    const requestBody: IContactFormSchema = await request.json();

    contactFormSchema.parse(requestBody);

    const { name, email, request: messageBody } = requestBody;

    const msg = {
      to: "info@boulesconsulting.org",
      from: "info@boulesconsulting.org",
      subject: `Marketing Site email from ${name} / ${email}`,
      html: messageBody,
    };

    await mail.send(msg);

    return new Response(JSON.stringify("Email Sent Successfully"), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
};
