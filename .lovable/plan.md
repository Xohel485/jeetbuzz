## Goal
Wire the official JeetBuzz social profiles into the sitewide Organization JSON-LD so search engines (Google Knowledge Panel, Bing) can associate them with the brand.

## Change
Single edit in `src/lib/schema.ts` — populate the currently empty `sameAs: []` array on `organizationSchema()`:

```ts
sameAs: [
  "https://facebook.com/GetJeetBuzz",
  "https://youtube.com/@jeetbuzz",
  "https://youtube.com/@getjeetbuzz",
  "https://instagram.com/getjeetbuzz",
  "https://tiktok.com/@getjeetbuzz",
  "https://x.com/GetJeetBuzz",
  "https://t.me/GetJeetBuzz",
],
```

No other files change. `organizationSchema()` is already emitted sitewide via `__root.tsx`, so every page picks up the new `sameAs` links automatically on next deploy.

## Not in scope
- No changes to `BRAND.alternateNames`, canonical URL, logo, or description (already correct).
- No new routes, no sitemap edits, no visual/UI changes.
- Google Knowledge Panel indexing is Google-side and manual — the code change is all that's required from our end.