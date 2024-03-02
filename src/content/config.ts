import { Schema } from "astro/zod";
import { defineCollection, z } from "astro:content";

const languages = ["en", "cz"] as const;

const technologies = [
  "javascript",
  "typescript",
  "wordpress",
  "react",
  "node",
  "php",
  "html",
  "css",
  "express",
  "tailwind",
  "graphql",
  "mongodb",
  "postgres",
  "mysql",
  "firebase",
  "aws",
  "docker",
  "astro",
  "alpinejs",
] as const;

export const collections = {
  projects: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      datePublished: z.date().refine((date) => date <= new Date(), {
        message: "Date can't be in the future",
      }),
      language: z.enum(languages).optional(),
      technologies: z.array(z.enum(technologies)).optional(),
      description: z
        .string()
        .max(150, "Description must be shorter than 150 chars")
        .optional(),
      image: z.string().optional(),
      logo: z.string(),
    }),
  }),
};
