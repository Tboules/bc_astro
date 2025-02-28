/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
  readonly CONTENTFUL_PREVIEW_TOKEN: string;
  readonly SENDGRID_API_KEY: string;
  readonly PUBLIC_MAILCHIMP_API_KEY: string;
  readonly PUBLIC_MAILCHIMP_AUDIENCE_ID: string;
}
