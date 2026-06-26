import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { renderUrlset, staticEntries } from "@/lib/sitemap-helpers";

const PAGES = [
  "/",
  "/about",
  "/author",
  "/contact",
  "/faq",
  "/privacy-policy",
  "/terms",
  "/responsible-gaming",
  "/editorial-policy",
  "/review-policy",
  "/content-policy",
  "/fact-checking",
  "/update-policy",
  "/affiliate-disclosure",
];

export const Route = createFileRoute("/sitemap-pages.xml")({
  server: {
    handlers: {
      GET: async () => {
        const res = await renderUrlset(staticEntries(PAGES));
        const body = (await res.text()).replace(
          "http://www.google.com/schemas/sitemaps-image/1.1",
          "http://www.google.com/schemas/sitemap-image/1.1",
        );
        return new Response(body, { headers: res.headers });
      },
    },
  },
});