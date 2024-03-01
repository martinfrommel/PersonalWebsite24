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
  "graphQL",
  "mongoDB",
  "postgres",
  "mysql",
  "firebase",
  "aws",
  "docker",
] as const;

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    datePublished: z.date(),
    language: z.enum(languages).optional(),
    technologies: z.array(z.enum(technologies)),
    description: z.string(),
    image: z.string().optional(),
  }),
});
