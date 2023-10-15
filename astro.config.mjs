import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: "https://codingterms.net",
  integrations: [sitemap(), mdx(), react()],
  output: 'static',
  adapter: vercelStatic(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});