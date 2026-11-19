/**
 * Prefix a public asset path with Astro's configured `base` so it resolves
 * both in local dev and when served from a GitHub Pages project sub-path.
 *
 *   asset('images/hero.jpg') -> '/ravit-hilman-website/images/hero.jpg'
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}
