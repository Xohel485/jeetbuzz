import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { renderUrlset, staticEntries } from "@/lib/sitemap-helpers";

const AFFILIATE = [
  "/affiliate-program",
  "/affiliate-login",
  "/agent-earning-guide",
];

export const Route = createFileRoute("/sitemap-affiliate.xml")({
  server: {
    handlers: {
      GET: async () => renderUrlset(staticEntries(AFFILIATE)),
    },
  },
});