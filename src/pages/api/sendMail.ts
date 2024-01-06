import mail from "@sendgrid/mail";
import type { APIRoute } from "astro";

mail.setApiKey(import.meta.env.SENDGRID_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") !== "application/json") {
    return new Response(null, { status: 400 });
  }
  const requestBody = await request.json();

  const { senderName, senderEmail, body } = requestBody;

  const msg = {
    to: "tboules@gmail.com",
    from: "info@boulesconsulting.org",
    subject: `Marketing Site email from ${senderName} / ${senderEmail}`,
    html: body,
  };

  try {
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
