import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { renderUrlset, staticEntries } from "@/lib/sitemap-helpers";
import { COMPETITORS } from "@/lib/compare-pages";

const COMPARE = COMPETITORS.map((c) => c.routePath);

export const Route = createFileRoute("/sitemap-compare.xml")({
  server: {
    handlers: {
      GET: async () => renderUrlset(staticEntries(COMPARE)),
    },
  },
});