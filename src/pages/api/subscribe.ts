export const prerender = false;

import {
  callToActionFormSchema,
  type ICallToActionFormSchema,
} from "@/types/forms";
import mailchimp from "@mailchimp/mailchimp_marketing";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") !== "application/json") {
    return new Response(null, { status: 400 });
  }

  try {
    const body: ICallToActionFormSchema = await request.json();

    callToActionFormSchema.parse(body);

    await mailchimp.lists.addListMember(
      import.meta.env.PUBLIC_MAILCHIMP_AUDIENCE_ID,
      {
        email_address: body.email,
        status: "subscribed",
      },
    );

    return new Response(JSON.stringify("Successfully added a subscriber"), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
};
