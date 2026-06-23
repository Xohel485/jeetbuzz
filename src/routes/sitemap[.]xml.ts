import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { POSTS } from "@/lib/blog-posts";
import { IMAGES, type ImageKey } from "@/lib/images";
import { LOCALIZED_ROUTES } from "@/lib/localized-routes";
import { COUNTRY_META, type Country, type Locale } from "@/lib/i18n";

const BASE_URL = "https://getjeetbuzz.com";

// Map each route to images that should appear in the image sitemap for it.
const ROUTE_IMAGES: Record<string, ImageKey[]> = {
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

const STATIC_PATHS = [
  "/",
  "/about",
  "/author",
  "/jeetbuzz-review",
  "/login-guide",
  "/login-problems",
  "/password-reset",
  "/login-security",
  "/registration-guide",
  "/verification",
  "/welcome-bonus",
  "/apk-download-guide",
  "/bonus-and-promotions",
  "/live-cricket-betting",
  "/sports-betting",
  "/casino-guide",
  "/deposit-withdrawal-guide",
  "/affiliate-program",
  "/affiliate-login",
  "/deposit-guide",
  "/withdrawal-guide",
  "/bkash-guide",
  "/nagad-guide",
  "/rocket-guide",
  "/easypaisa-guide",
  "/jazzcash-guide",
  "/upi-guide",
  "/phonepe-guide",
  "/paytm-guide",
  "/payment-methods",
  "/mobile-app-guide",
  "/security-guide",
  "/vip-program",
  "/aviator-guide",
  "/cricket-exchange-guide",
  "/agent-earning-guide",
  "/ios-app-guide",
  "/android-web-app-guide",
  "/is-jeetbuzz-safe",
  "/blog",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/affiliate-disclosure",
  "/responsible-gaming",
  "/editorial-policy",
  "/review-policy",
  "/content-policy",
  "/fact-checking",
  "/update-policy",
];

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function imageBlock(path: string): string {
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

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);
        // Build (country, locale) pairs from i18n config so we mirror every
        // public route under /{country}/{locale}/{slug} too.
        const COUNTRY_LOCALE_PAIRS: Array<{ country: Country; locale: Locale }> = (
          Object.entries(COUNTRY_META) as Array<[Country, (typeof COUNTRY_META)[Country]]>
        ).flatMap(([country, cm]) => cm.locales.map((locale) => ({ country, locale })));

        const localizedPaths: string[] = [];
        for (const { country, locale } of COUNTRY_LOCALE_PAIRS) {
          for (const reg of LOCALIZED_ROUTES) {
            if (reg.countries && !reg.countries.includes(country)) continue;
            const slug = reg.slug;
            localizedPaths.push(slug ? `/${country}/${locale}/${slug}` : `/${country}/${locale}`);
          }
        }

        const entries = [
          ...STATIC_PATHS.map((p) => ({ path: p, lastmod: today, changefreq: "weekly", priority: p === "/" ? "1.0" : "0.8" })),
          ...localizedPaths.map((p) => ({ path: p, lastmod: today, changefreq: "weekly", priority: "0.6" })),
          ...POSTS.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.date, changefreq: "monthly", priority: "0.7" })),
        ];
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
          ].filter(Boolean).join("\n");
        });
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemaps-image/1.1">\n${urls.join("\n")}\n</urlset>`;
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