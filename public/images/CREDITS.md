# Image credits & licensing

| File                  | What it is                                        | Source / license |
|-----------------------|---------------------------------------------------|------------------|
| `hero-session.webp`   | Teen drawing in a session, adult seated across the table (hero) | Provided by the owner. Optimized WebP (1200×900, 4:3, metadata stripped). |
| `ravit-portrait.jpg`  | Portrait of Ravit Hilman (About section)          | Ravit's own photo — provided by the owner. Optimized (1000×1200, 5:6, metadata stripped). |
| `og-image.jpg`        | Leaf shadows on a warm wall (social preview)      | Pexels, [Pexels License](https://www.pexels.com/license/) — https://www.pexels.com/photo/4207776/ |

## Replacing an image
1. Drop your new file into `public/images/` (keep the same filename, or update the
   path in `src/content/site.ts`).
2. Recommended sizes: `hero-session.webp` ≈ 1200×900 (4:3), `ravit-portrait.jpg`
   ≈ 1000×1200 (5:6, portrait), `og-image.jpg` = 1200×630 (social preview).
3. Strip photo metadata before committing, then rebuild: `npm run build`.
