import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BASE_URL, BUILD_TIME } from "@/lib/sitemap-helpers";

const CHILD_SITEMAPS = [
  "sitemap-pages.xml",
  "sitemap-guides.xml",
  "sitemap-payments.xml",
  "sitemap-affiliate.xml",
  "sitemap-blog.xml",
  "sitemap-bd.xml",
  "sitemap-pk.xml",
  "sitemap-in.xml",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const items = CHILD_SITEMAPS.map(
          (name) =>
            `  <sitemap>\n    <loc>${BASE_URL}/${name}</loc>\n    <lastmod>${BUILD_TIME}</lastmod>\n  </sitemap>`,
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});