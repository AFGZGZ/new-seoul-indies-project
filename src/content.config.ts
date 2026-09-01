import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx,mdoc}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    publishDate: z.string().optional(),
  }),
});

const games = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx,mdoc}", base: "./src/content/games" }),
  schema: z.object({
    title: z.string(),
    developer: z.string(),
    status: z.string(),
    cover: z.string().optional(),
  }),
});

export const collections = { posts, games };
