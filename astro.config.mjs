import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://toxocious.is-a.dev/',
    integrations: [tailwind({ configFile: './tailwind.config.cjs' })],
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            wrap: true,
        },
    },
});
