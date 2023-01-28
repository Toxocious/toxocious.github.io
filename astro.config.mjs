import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://toxocious.is-a.dev/',
  markdown: {
    syntaxHighlight: 'prism',
  }
});
