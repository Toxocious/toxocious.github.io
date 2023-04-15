import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://toxocious.is-a.dev/',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
});
