import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const linksCollection = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "./src/data/links",
  }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    icon: z.string(),
  }),
});

export const collections = {
  links: linksCollection,
};