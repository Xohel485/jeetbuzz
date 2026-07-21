import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { AFFILIATE_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-affiliate-withdrawal";
const TITLE = "JeetBuzz Affiliate Withdrawal 2026 — Weekly Payout, Methods & Minimums";
const DESC = "JeetBuzz affiliate withdrawal explained for 2026 — weekly payout cycle, supported methods (USDT, bKash, JazzCash, bank), minimum threshold and payment timing.";

export const Route = createFileRoute("/jeetbuzz-affiliate-withdrawal")({
  head: () => ({
    meta: [
      { title: TITLE + " | GetJeetBuzz" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      ogUrl(PATH),
    ],
    links: [canonicalLink(PATH), ...hreflangLinks(PATH)],
    scripts: [jsonLdScript(articleSchema({ headline: TITLE, description: DESC, path: PATH }))],
  }),
  component: () => (
    <GuidePage
      eyebrow="Affiliate"
      title={<>JeetBuzz Affiliate <span className="gold-text">Withdrawal</span></>}
      subtitle="Payout schedule, supported rails and how to withdraw your affiliate commission — USDT for speed, local wallets for convenience."
      ctaIntent="partners" ctaLabel="Open Partner Dashboard"
      breadcrumbs={[{ name: "Help", path: "/help" }, { name: "Affiliate Withdrawal", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Payout cycle",
        "JeetBuzz affiliate commission is paid on a **weekly** cycle. Monday-to-Sunday NGR is finalised the following Monday. After the finance team validates the numbers, payouts are released — usually mid-week.",
        "## Minimum threshold",
        "Typical minimum payout is around **30 USD equivalent** in your chosen currency. If your weekly balance is below the minimum it rolls to the next week automatically.",
        "## Supported methods",
        "| Method | Typical time | Notes |",
        "|---|---|---|",
        "| USDT (TRC20) | Fastest of the options | Recommended for larger balances, avoids local caps |",
        "| USDT (BEP20) | Fastest of the options | Verify network in your wallet before requesting |",
        "| bKash / Nagad | Usually same day after release | Bangladesh only |",
        "| JazzCash / EasyPaisa | Usually same day after release | Pakistan only |",
        "| Bank transfer (IMPS) | 1–2 business days | India, larger amounts |",
        "*Exact timing depends on operator payout batches and blockchain confirmations.*",
        "## How to request a payout",
        "1. Log into your partner dashboard (see [Affiliate Login](/affiliate-login)).",
        "2. Go to **Finance → Payout request**.",
        "3. Confirm the payout wallet / bank details on file (KYC re-verification is required to change them).",
        "4. Submit. You will get an email when the payout is released.",
        "## Payout delays — the honest picture",
        "Delays happen when (a) your NGR needs manual review because of unusual traffic patterns, (b) a referred player raised a chargeback that has to be resolved, or (c) your KYC document is expired. The dashboard shows the exact reason under **Finance → Status**.",
        "## Tax responsibility",
        "Affiliate income is your responsibility to declare in your local jurisdiction. JeetBuzz issues no tax withholding on international payouts — talk to a local accountant if commission is a material part of your income.",
        "## How the commission is calculated",
        "Payout size depends on your tier. The [JeetBuzz affiliate program](/affiliate-program) page lists the tier requirements and terms, and the [JeetBuzz affiliate commission](/jeetbuzz-affiliate-commission) page shows the exact weekly 25%–60% revenue share math on NGR that produces the balance you are withdrawing.",
      ]}
      related={siblings(AFFILIATE_CLUSTER, PATH)}
      faqs={[
        { q: "How often does JeetBuzz pay affiliates?", a: "Weekly. Monday NGR is finalised for the previous week and payouts release mid-week after finance review." },
        { q: "What is the minimum affiliate payout?", a: "Around 30 USD equivalent. Below-threshold balances carry to the next week automatically." },
        { q: "Can I withdraw affiliate commission to bKash?", a: "Yes — bKash and Nagad are supported for Bangladesh affiliates. For Pakistan use JazzCash / EasyPaisa; for India use bank transfer." },
        { q: "Which method is fastest?", a: "USDT (TRC20) generally clears fastest and has the lowest network fee, provided you send it to the correct network from your exchange or wallet." },
        { q: "Why is my payout on hold?", a: "The dashboard's Finance → Status page lists the reason: unusual traffic pattern review, an active chargeback on a referred player, or expired KYC document. Update the required item and the payout resumes." },
      ]}
    />
  ),
});