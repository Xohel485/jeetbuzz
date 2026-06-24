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
      GET: async () => renderUrlset(staticEntries(PAGES)),
    },
  },
});