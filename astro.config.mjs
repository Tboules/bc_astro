import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://boulesconsulting.org",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: "static",
  adapter: vercel({
    includeFiles: ["./public/checklist.pdf"],
  }),
  image: {
    domains: ["images.ctfassets.net"],
  },
});
