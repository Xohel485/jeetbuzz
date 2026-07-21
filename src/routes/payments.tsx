import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/payments";
const TITLE = "JeetBuzz Payments Hub — Deposit & Withdraw in BD, PK, India 2026";
const DESC = "One JeetBuzz payments hub for Bangladesh, Pakistan and India — pick bKash, Nagad, JazzCash, EasyPaisa, UPI or USDT with clear minimums and timing.";

export const Route = createFileRoute("/payments")({
  head: () => ({
    meta: [
      { title: TITLE + " | GetJeetBuzz" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      ogUrl(PATH),
    ],
    links: [canonicalLink(PATH), ...hreflangLinks(PATH)],
    scripts: [jsonLdScript(articleSchema({ headline: TITLE, description: DESC, path: PATH }))],
  }),
  component: () => (
    <GuidePage
      eyebrow="Payments"
      title={<>JeetBuzz <span className="gold-text">Payments Hub</span></>}
      subtitle="Every deposit and withdrawal rail JeetBuzz supports across Bangladesh, Pakistan and India — with limits, speed and the right guide for each."
      breadcrumbs={[{ name: "Payments", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Choose by country",
        "JeetBuzz supports the dominant local rail in each market. Pick your country below and jump to the guide with screenshots.",
        "### Bangladesh",
        "- [bKash Deposit Guide](/bkash-guide) — most popular wallet, 200 BDT minimum.",
        "- [Nagad Deposit Guide](/nagad-guide) — near-identical speed, slightly higher daily caps.",
        "- [Rocket Deposit Guide](/rocket-guide) — DBBL Mobile Banking, strong village-level agent network.",
        "### Pakistan",
        "- [JazzCash Deposit Guide](/jazzcash-guide) — Jazz operator, best uptime.",
        "- [EasyPaisa Deposit Guide](/easypaisa-guide) — Telenor operator, wider rural agent network.",
        "### India",
        "- [UPI Deposit Guide](/upi-guide) — universal NPCI rail, any UPI app works.",
        "- [PhonePe Deposit Guide](/phonepe-guide) — most used UPI app among Indian punters.",
        "- [Paytm Deposit Guide](/paytm-guide) — Payments Bank UPI flow.",
        "## Deposit vs withdrawal",
        "Deposits usually clear within minutes on all local wallets. Withdrawals go through an additional review — new accounts, mismatched names and first-time cash-outs take longer. Read the [Withdrawal Time page](/jeetbuzz-withdrawal-time) for realistic timelines per rail.",
        "## Common deposit issues",
        "The most frequent tickets are (1) amount debited but not credited, (2) wallet name does not match account name, and (3) wrong reference number entered in the cashier. The [Deposit Problem guide](/jeetbuzz-deposit-problem) walks through each with the exact evidence support needs.",
        "## Full comparison table",
        "For side-by-side numbers on every method — minimum, speed, fees and best use case — open the full [Payment Methods table](/payment-methods).",
        "## Before your first deposit",
        "1. Verify your account name matches your wallet name — mismatched deposits are reversed.",
        "2. Opt into the [Welcome Bonus](/welcome-bonus) *before* transferring — bonuses are not applied retroactively.",
        "3. Save your transaction ID until the funds land in the JeetBuzz balance.",
      ]}
      faqs={[
        { q: "Which payment method is fastest on JeetBuzz?", a: "For Bangladesh, bKash and Nagad usually clear within minutes. For India, UPI via PhonePe / Google Pay / Paytm is the standard. For Pakistan, JazzCash typically has the best uptime. Exact timing depends on operator status." },
        { q: "Are there fees to deposit on JeetBuzz?", a: "The cashier displays the current fee for each method before you confirm. Wallet-level fees (bKash Send Money, UPI merchant charges) are set by the provider, not JeetBuzz." },
        { q: "Can I use one wallet for deposit and a different one for withdrawal?", a: "JeetBuzz generally credits withdrawals to the same wallet used for deposit for anti-fraud reasons. Changing the payout wallet requires KYC re-verification." },
        { q: "Is crypto (USDT) supported?", a: "USDT TRC20 and BEP20 are supported and popular for larger cash-outs because they bypass local daily wallet caps." },
        { q: "What if my deposit is debited but not credited?", a: "Wait 15 minutes, then open live chat with your wallet transaction ID and a screenshot of the cashier receipt. See the [Deposit Problem guide](/jeetbuzz-deposit-problem)." },
      ]}
    />
  ),
});