import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
// https://astro.build/config

// https://astro.build/config
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://codingterms.net",
  integrations: [
    sitemap(), mdx(), react()]
});