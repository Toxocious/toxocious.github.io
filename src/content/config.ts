import { z, defineCollection } from 'astro:content';

const contributionsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    repository: z.string().optional(),
    website: z.string().optional(),
    order: z.number(),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    repository: z.string().optional(),
    website: z.string().optional(),
    order: z.number(),
  }),
});

const volunteerCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    repository: z.string().optional(),
    website: z.string().optional(),
    order: z.number(),
  }),
});

const workCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    repository: z.string().optional(),
    website: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = {
  'contributions': contributionsCollection,
  'projects': projectsCollection,
  'volunteer': volunteerCollection,
  'work': workCollection,
};
