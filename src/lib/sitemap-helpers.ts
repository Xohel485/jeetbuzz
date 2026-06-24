import { IMAGES, type ImageKey } from "@/lib/images";

export const BASE_URL = "https://getjeetbuzz.com";

/** Cold-start time used as build-time lastmod for static pages.
 *  Set once at module load so the value does not jitter per request. */
export const BUILD_TIME = new Date().toISOString();
export const BUILD_DATE = BUILD_TIME.slice(0, 10);

/** Images attached to specific routes for the image: namespace. */
export const ROUTE_IMAGES: Record<string, ImageKey[]> = {
  "/": ["hero"],
  "/jeetbuzz-review": ["liveCricket", "casinoLogin"],
  "/login-guide": ["loginInterface", "security"],
  "/registration-guide": ["registration"],
  "/apk-download-guide": ["androidApp", "iosSlots"],
  "/bonus-and-promotions": ["bonus"],
  "/live-cricket-betting": ["liveCricket"],
  "/casino-guide": ["casinoLogin", "iosCasino"],
  "/affiliate-program": ["affiliate"],
  "/mobile-app-guide": ["androidApp", "iosSlots"],
  "/security-guide": ["security"],
};

export function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function imageBlock(path: string): string {
  const keys = ROUTE_IMAGES[path];
  if (!keys) return "";
  return keys
    .map((k) => {
      const img = IMAGES[k];
      const largest = img.widths[img.widths.length - 1];
      return [
        `    <image:image>`,
        `      <image:loc>${BASE_URL}/img/${img.name}-${largest}.webp</image:loc>`,
        `      <image:title>${esc(img.title)}</image:title>`,
        `      <image:caption>${esc(img.caption)}</image:caption>`,
        `      <image:license>${BASE_URL}/affiliate-disclosure</image:license>`,
        `    </image:image>`,
      ].join("\n");
    })
    .join("\n");
}

export type SitemapEntry = {
  path: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
};

export function renderUrlset(entries: SitemapEntry[]): Response {
  const urls = entries.map((e) => {
    const imgs = imageBlock(e.path);
    return [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${e.lastmod}</lastmod>`,
      `    <changefreq>${e.changefreq}</changefreq>`,
      `    <priority>${e.priority}</priority>`,
      imgs,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n");
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemaps-image/1.1">\n${urls.join("\n")}\n</urlset>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

export function staticEntries(paths: string[]): SitemapEntry[] {
  return paths.map((p) => ({
    path: p,
    lastmod: BUILD_DATE,
    changefreq: "weekly",
    priority: p === "/" ? "1.0" : "0.8",
  }));
}