import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import { remarkReadingTime } from './markdown-eta.mjs';

export default defineConfig({
    site: 'https://toxocious.is-a.dev/',
    integrations: [tailwind({ configFile: './tailwind.config.cjs' })],
    markdown: {
        remarkPlugins: [remarkReadingTime],
        shikiConfig: {
            syntaxHighlight: 'shiki',
            theme: 'nord',
            wrap: true,
        },
    },
});
