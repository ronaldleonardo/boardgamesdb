import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://boardgamesdb.com',
  compressHTML: true,
  integrations: [sitemap()],
  build: { format: 'file' },
  server: { host: '0.0.0.0', port: 8083 },
  devToolbar: { enabled: false },
  allowedHosts: ['boardgamesdb.com', 'www.boardgamesdb.com'],
  vite: { server: { allowedHosts: ['boardgamesdb.com', 'www.boardgamesdb.com'] } }
});