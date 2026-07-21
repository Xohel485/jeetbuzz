import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { AFFILIATE_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-affiliate-app";
const TITLE = "JeetBuzz Affiliate App 2026 — Partner Dashboard on Mobile";
const DESC = "How the JeetBuzz affiliate app / mobile partner dashboard works in 2026 — track clicks, active players, NGR and commission on the go, plus login and 2FA tips.";

export const Route = createFileRoute("/jeetbuzz-affiliate-app")({
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
      title={<>JeetBuzz Affiliate <span className="gold-text">App</span></>}
      subtitle="Track clicks, active players, NGR and commission from your phone — how the JeetBuzz partner dashboard works as a mobile web app."
      ctaIntent="partners" ctaLabel="Open Partner Dashboard"
      breadcrumbs={[{ name: "Help", path: "/help" }, { name: "Affiliate App", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Is there a JeetBuzz affiliate app?",
        "The JeetBuzz partner dashboard is a **mobile-optimised web app**, not a Play Store / App Store download. Open it in Chrome or Safari and add it to your home screen — the experience matches a native app: full-screen, offline-tolerant, notifications-ready.",
        "## How to install the web app",
        "**Android (Chrome):** open the partner login, tap the three-dot menu → **Add to Home screen** → **Install**. The icon lands next to your other apps and opens without the browser chrome.",
        "**iOS (Safari):** open the partner login, tap the Share icon → **Add to Home Screen** → **Add**.",
        "## What the dashboard shows",
        "- **Real-time clicks** by tracking link and campaign.",
        "- **Active players** — new signups, first-time depositors, retained players.",
        "- **NGR by week** — the number that drives your commission.",
        "- **Commission balance** — pending, released, paid.",
        "- **Payout status** — request a payout from Finance → Payout request.",
        "## Login and 2FA",
        "Use the credentials emailed after approval. Enable 2FA immediately from **Account → Security** — this protects your commission balance from account takeover. Detailed steps in [Affiliate Login](/affiliate-login).",
        "## Notifications and reports",
        "The web app can push weekly commission summary emails and payout-release notifications. Configure the daily / weekly digest so you spot traffic dips before they cost you a tier.",
        "## Common issues",
        "- **Dashboard shows zero clicks** — confirm you are using the tracking link from your own dashboard, not a raw affiliate URL scraped from someone else.",
        "- **Numbers reset overnight** — the daily view resets at midnight server time. Weekly and monthly views retain history.",
        "- **Cannot install to home screen on iOS** — Safari (not Chrome) is required for iOS PWA install.",
      ]}
      related={siblings(AFFILIATE_CLUSTER, PATH)}
      faqs={[
        { q: "Is there a native JeetBuzz affiliate app on Play Store?", a: "No. The partner dashboard is a mobile web app installable to your home screen, which delivers a native-like experience without any store listing." },
        { q: "Can I check my commission from my phone?", a: "Yes. The partner dashboard is fully responsive and shows live clicks, active players, NGR and commission balance on any modern mobile browser." },
        { q: "Do I need to reinstall the web app after each update?", a: "No. The installed web app updates automatically the next time you open it — no manual re-install." },
        { q: "Which browser is best for the affiliate dashboard?", a: "Chrome on Android, Safari on iOS. Firefox and Edge work but do not support home-screen install as cleanly." },
        { q: "Is the affiliate dashboard the same as the player app?", a: "No. The player app and partner dashboard are separate systems with separate logins. Do not reuse credentials between them." },
      ]}
    />
  ),
});