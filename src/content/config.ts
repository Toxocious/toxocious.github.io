import { z, defineCollection } from 'astro:content';

export const collections = {
  'blog': defineCollection({
    schema: z.object({
      type: z.string(),
      title: z.string(),
      description: z.string(),
      banner: z.string().optional(),
      timestamp: z.number(),
    })
  }),

  'projects': defineCollection({
    schema: z.object({
      type: z.string(),
      title: z.string(),
      description: z.string(),
      started_on: z.number(),
      tags: z.string().optional(),
      order: z.number().optional(),
      banner: z.string().optional(),
      repo_path: z.string().optional(),
      show_issues: z.boolean().optional(),
      show_forks: z.boolean().optional(),
      show_stars: z.boolean().optional(),
      show_license: z.boolean().optional(),
      show_lines_of_code: z.boolean().optional(),
    })
  }),
};
