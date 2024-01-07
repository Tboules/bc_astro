import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  request: z.string().min(1),
});

export type IContactFormSchema = z.infer<typeof contactFormSchema>;

export const callToActionFormSchema = z.object({
  email: z.string().email(),
});

export type ICallToActionFormSchema = z.infer<typeof callToActionFormSchema>;
