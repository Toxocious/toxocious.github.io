import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    react(),
    tailwind()
  ],
  site: 'https://toxocious.is-a.dev/',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
});
