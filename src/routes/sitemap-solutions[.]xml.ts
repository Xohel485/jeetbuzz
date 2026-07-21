import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { renderUrlset, staticEntries } from "@/lib/sitemap-helpers";

// Phase A: cluster hubs + GSC-driven solution pages.
const SOLUTIONS = [
  // Hubs
  "/help",
  "/payments",
  "/bonuses",
  "/games",
  // Affiliate cluster
  "/jeetbuzz-affiliate-commission-rate",
  "/jeetbuzz-affiliate-signup",
  "/jeetbuzz-affiliate-withdrawal",
  "/jeetbuzz-affiliate-app",
  "/jeetbuzz-referral-code",
  // App cluster
  "/jeetbuzz-download-for-android",
  "/jeetbuzz-download-for-ios",
  "/jeetbuzz-app-update",
  // Bonus cluster
  "/jeetbuzz-promo-code",
  "/jeetbuzz-first-deposit-bonus",
  "/jeetbuzz-refer-bonus",
  // Problems cluster
  "/jeetbuzz-withdrawal-time",
  "/jeetbuzz-account-locked",
  "/jeetbuzz-deposit-problem",
  "/how-to-delete-jeetbuzz-account",
  // Phase B batch 1: brand variants
  "/jitbuzz",
  "/jetbuzz",
  "/jeetbuzz-com-login",
  "/jeetbuzz-sign-up",
  "/jeetbuzz-apk-download",
  // Phase B batch 2: problems cluster
  "/jeetbuzz-withdrawal-pending",
  "/jeetbuzz-otp-not-received",
  "/jeetbuzz-account-verification",
  "/jeetbuzz-app-not-opening",
  "/jeetbuzz-deposit-failed",
  "/jeetbuzz-password-reset",
  // Phase B batch 3: affiliate + payments
  "/jeetbuzz-affiliate-dashboard",
  "/jeetbuzz-affiliate-payment-methods",
  "/jeetbuzz-affiliate-commission",
  "/jeetbuzz-partner-login",
  "/jeetbuzz-bkash-deposit",
  "/jeetbuzz-nagad-withdrawal",
  "/jeetbuzz-minimum-deposit",
];

export const Route = createFileRoute("/sitemap-solutions.xml")({
  server: {
    handlers: {
      GET: async () => {
        const res = await renderUrlset(staticEntries(SOLUTIONS));
        const body = (await res.text()).replace(
          "http://www.google.com/schemas/sitemaps-image/1.1",
          "http://www.google.com/schemas/sitemap-image/1.1",
        );
        return new Response(body, { headers: res.headers });
      },
    },
  },
});