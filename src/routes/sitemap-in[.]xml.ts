import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { LOCALIZED_ROUTES } from "@/lib/localized-routes";
import { LOCALIZED_LASTMOD, renderUrlset, type SitemapEntry } from "@/lib/sitemap-helpers";

export const Route = createFileRoute("/sitemap-in.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = LOCALIZED_ROUTES
          .filter((r) => !r.countries || r.countries.includes("in"))
          .map<SitemapEntry>((r) => ({
            path: r.slug ? `/in/hi/${r.slug}` : `/in/hi`,
            lastmod: LOCALIZED_LASTMOD,
            changefreq: "weekly",
            priority: "0.6",
          }));
        return renderUrlset(entries);
      },
    },
  },
});