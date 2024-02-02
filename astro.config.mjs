import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://荒らし.com',
	integrations: [mdx(), sitemap()],
	output: "server",
	server: {
		port: 1919
	},
	vite: {
    	ssr: {
      		noExternal: ['path-to-regexp'],
    	},
  	},
});
