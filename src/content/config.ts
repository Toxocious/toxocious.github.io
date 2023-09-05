import { z, defineCollection } from 'astro:content';

const collectionSchema = {
    image: z.string(),
    title: z.string(),
    description: z.string().optional(),
    position: z.string().optional(),
    date_stamp: z.string().optional(),
    tags: z.array(z.string()).optional(),
    website_link: z.string().optional(),
    repository_link: z.string().url().optional(),
    order: z.number().optional(),
};

const markdownSchema = {
    title: z.string(),
    description: z.string(),
    date: z.number(),
};

const experienceSchema = {
    title: z.string(),
    description: z.string(),
    order: z.number(),
    date_stamp: z.string().optional(),
    tags: z.array(z.string()).optional(),
    website_link: z.string().url().optional(),
    repository_link: z.string().url().optional(),
};

const articleCollection = defineCollection({
    schema: z.object(markdownSchema),
});

const experienceCollection = defineCollection({
    schema: z.object(experienceSchema),
});

const contributionsCollection = defineCollection({
    schema: z.object(collectionSchema),
});

const projectsCollection = defineCollection({
    schema: z.object(collectionSchema),
});

const workCollection = defineCollection({
    schema: z.object(collectionSchema),
});

export const collections = {
    articles: articleCollection,
    contributions: contributionsCollection,
    experience: experienceCollection,
    projects: projectsCollection,
    work: workCollection,
};
