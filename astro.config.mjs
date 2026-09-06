import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tabletoparena.com',
  compressHTML: true,
  integrations: [sitemap()],
  build: { format: 'file' },
  server: { host: '0.0.0.0', port: 8083 },
  devToolbar: { enabled: false },
  allowedHosts: ['tabletoparena.com', 'www.tabletoparena.com'],
  vite: { server: { allowedHosts: ['tabletoparena.com', 'www.tabletoparena.com'] } }
});