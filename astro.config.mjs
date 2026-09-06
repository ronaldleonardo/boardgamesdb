import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tabletoppicks.com',
  compressHTML: true,
  integrations: [sitemap()],
  build: { format: 'file' },
  server: { host: '0.0.0.0', port: 8083 },
  devToolbar: { enabled: false },
  allowedHosts: ['tabletoppicks.com', 'www.tabletoppicks.com'],
  vite: { server: { allowedHosts: ['tabletoppicks.com', 'www.tabletoppicks.com'] } }
});