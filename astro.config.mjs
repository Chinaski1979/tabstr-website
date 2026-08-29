import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Confirm this matches your live domain (used for canonical URLs + sitemap).
const site = 'https://tabstr.net';

export default defineConfig({
  site,
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/brief'),
    }),
  ],
});
