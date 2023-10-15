import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  image: {
    service: {
      entrypoint: "astro/assets/services/squoosh"
    }
  },
  site: "https://codingterms.net",
  integrations: [
    sitemap(), mdx(), react()]
});