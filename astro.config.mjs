// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://cormacs-portfolio.vercel.app', // PLEASE UPDATE THIS with your actual URL
  integrations: [tailwind()],
});