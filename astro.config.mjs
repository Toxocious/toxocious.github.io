import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://toxocious.is-a.dev/',
    integrations: [react(), tailwind()],
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            wrap: true,
        },
    },
});
