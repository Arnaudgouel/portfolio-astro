// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://arnaudgouel.github.io',
  base: '/portfolio-astro',

  integrations: [tailwind(), react(), sitemap()]
});