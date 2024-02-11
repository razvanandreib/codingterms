import { z, defineCollection, reference } from "astro:content";

const termCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.date(),
    link: z.string(),
    draft: z.boolean(),
  }),
});

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = {
  terms: termCollection,
  authors,
};
