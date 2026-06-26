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
      GET: async () => {
        const res = await renderUrlset(staticEntries(AFFILIATE));
        const body = (await res.text()).replace(
          "http://www.google.com/schemas/sitemaps-image/1.1",
          "http://www.google.com/schemas/sitemap-image/1.1",
        );
        return new Response(body, { headers: res.headers });
      },
    },
  },
});