import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { renderUrlset, staticEntries } from "@/lib/sitemap-helpers";

const PAYMENTS = [
  "/payment-methods",
  "/deposit-guide",
  "/withdrawal-guide",
  "/deposit-withdrawal-guide",
  "/bkash-guide",
  "/nagad-guide",
  "/rocket-guide",
  "/easypaisa-guide",
  "/jazzcash-guide",
  "/upi-guide",
  "/phonepe-guide",
  "/paytm-guide",
];

export const Route = createFileRoute("/sitemap-payments.xml")({
  server: {
    handlers: {
      GET: async () => renderUrlset(staticEntries(PAYMENTS)),
    },
  },
});