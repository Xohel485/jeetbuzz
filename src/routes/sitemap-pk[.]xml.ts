import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { LOCALIZED_ROUTES } from "@/lib/localized-routes";
import { BUILD_DATE, renderUrlset, type SitemapEntry } from "@/lib/sitemap-helpers";

export const Route = createFileRoute("/sitemap-pk.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = LOCALIZED_ROUTES
          .filter((r) => !r.countries || r.countries.includes("pk"))
          .map<SitemapEntry>((r) => ({
            path: r.slug ? `/pk/ur/${r.slug}` : `/pk/ur`,
            lastmod: BUILD_DATE,
            changefreq: "weekly",
            priority: "0.6",
          }));
        return renderUrlset(entries);
      },
    },
  },
});