import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { renderUrlset, staticEntries } from "@/lib/sitemap-helpers";

const GUIDES = [
  "/jeetbuzz-review",
  "/login-guide",
  "/login-problems",
  "/password-reset",
  "/login-security",
  "/registration-guide",
  "/verification",
  "/apk-download-guide",
  "/mobile-app-guide",
  "/android-web-app-guide",
  "/ios-app-guide",
  "/security-guide",
  "/is-jeetbuzz-safe",
  "/bonus-and-promotions",
  "/welcome-bonus",
  "/vip-program",
  "/casino-guide",
  "/sports-betting",
  "/live-cricket-betting",
  "/aviator-guide",
  "/cricket-exchange-guide",
];

export const Route = createFileRoute("/sitemap-guides.xml")({
  server: {
    handlers: {
      GET: async () => renderUrlset(staticEntries(GUIDES)),
    },
  },
});