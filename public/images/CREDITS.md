# Image credits & licensing

| File                 | What it is                                   | Source / license |
|----------------------|----------------------------------------------|------------------|
| `ravit-portrait.jpg` | Portrait of Ravit Hilman (About section)     | Ravit's own photo — provided by the owner. Optimized web version (1000×1200, EXIF/metadata stripped). |
| `hero.jpg`           | Soft leaf shadows on a warm wall (hero)      | Pexels, [Pexels License](https://www.pexels.com/license/) — https://www.pexels.com/photo/4207776/ |
| `og-image.jpg`       | Leaf shadows on a warm wall (social preview) | Pexels, [Pexels License](https://www.pexels.com/license/) — https://www.pexels.com/photo/4207776/ |

The Pexels images are free to use (no attribution required, modification allowed)
and serve as atmospheric imagery. The portrait is Ravit's own photo.

## Replacing an image
1. Drop your new file into `public/images/` (keep the same filename, or update the
   path in `src/content/site.ts`).
2. Recommended sizes: `ravit-portrait.jpg` ≈ 1000×1200 (5:6, portrait),
   `hero.jpg` ≈ 1000×1250 (4:5), `og-image.jpg` = 1200×630 (social preview).
3. Strip photo metadata before committing, then rebuild: `npm run build`.
