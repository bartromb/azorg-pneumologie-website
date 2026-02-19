import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],

  // Voor AZOrg server: pas aan naar jullie subpad indien nodig
  // base: '/pneumologie',

  // Statische output voor eigen server
  output: 'static',

  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
