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
    description: z.string(),

    developer: z.string(),
    developerWebsite: z.string().url().optional(),

    status: z.enum(["Prototype", "In Development", "Released"]),

    genre: z.string(),

    cover: z.string().optional(),

    platforms: z.array(z.string()).default([]),

    engine: z.string().optional(),

    teamSize: z.number().optional(),

    website: z.string().url().optional(),
    github: z.string().url().optional(),
    itch: z.string().url().optional(),
    steam: z.string().url().optional(),
    discord: z.string().url().optional(),

    tags: z.array(z.string()).default([]),

    media: z
      .array(
        z.discriminatedUnion("type", [
          z.object({
            type: z.literal("image"),
            src: z.string(),
          }),
          z.object({
            type: z.literal("youtube"),
            id: z.string(),
          }),
        ]),
      )
      .optional(),

    publishDate: z.date().optional(),
    draft: z.boolean().optional(),
  }),
});

const meetups = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx,mdoc}",
    base: "./src/content/meetups",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    fee: z.string(),
    location: z.string(),
    address: z.string(),
    mapUrl: z.string().url().optional(),
    registrationUrl: z.string().url().optional(),
    cover: z.string().optional(),
  }),
});
export const collections = { posts, games, meetups };
