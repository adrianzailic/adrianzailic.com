import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    coverImage: z.string(),
    date: z.string(),
    ogImage: z.object({
      url: z.string(),
    }),
  }),
});

export const collections = { blog };
