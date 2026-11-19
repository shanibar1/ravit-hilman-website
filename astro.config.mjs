import { defineConfig } from 'astro/config';

// GitHub Pages project-site configuration.
// The site is served from a sub-path (the repository name), so `base` must be set
// for every asset/link to resolve correctly once published.
// If a custom domain is later used, set `site` to it and `base` to '/'.
export default defineConfig({
  site: 'https://shanibar1.github.io',
  base: '/ravit-hilman-website',
  trailingSlash: 'ignore',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
