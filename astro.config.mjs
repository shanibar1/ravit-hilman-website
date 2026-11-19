import { defineConfig } from 'astro/config';

// Served from the custom apex domain ravithilman.co.il at the root, so `base`
// is '/'. (For the bare github.io project URL this would be `site:
// 'https://shanibar1.github.io'` + `base: '/ravit-hilman-website'`.)
export default defineConfig({
  site: 'https://ravithilman.co.il',
  base: '/',
  trailingSlash: 'ignore',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
