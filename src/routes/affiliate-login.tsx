import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/affiliate-login" as const;
const TITLE = "JeetBuzz Affiliate Login Guide — Partner Portal Access";
const DESC =
  "How to access the JeetBuzz affiliate partner portal — login, password reset, dashboard tour and payout reports for Bangladesh partners.";

export const Route = createFileRoute("/affiliate-login")({
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
      title={<>JeetBuzz Affiliate <span className="gold-text">Login Guide</span></>}
      subtitle="A short, security-first walkthrough of the JeetBuzz affiliate partner portal — login, dashboard, sub-IDs and payout reports."
      ctaIntent="login"
      ctaLabel="Open JeetBuzz Login"
      breadcrumbs={[{ name: "Affiliate", path: "/affiliate-program" }, { name: "Affiliate Login", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## What this page is",
        "GetJeetBuzz is an editorial guide. We do not host the affiliate login page. The button above opens the official JeetBuzz partner portal.",
        "## Before you log in",
        "Make sure you have already registered as a JeetBuzz affiliate. If not, start with our Affiliate Program guide first.",
        "## How to log in",
        "1. Open the JeetBuzz affiliate portal from a trusted bookmark or our outbound link.",
        "2. Enter the email used when you registered as an affiliate.",
        "3. Enter your password and submit.",
        "4. If 2FA is enabled, complete the prompt.",
        "## Forgot password",
        "Use the 'Forgot password' link on the portal — a reset link is sent to your affiliate email. If you don't receive it, check spam, then contact your affiliate manager.",
        "## Dashboard tour",
        "- Overview: clicks, registrations, FTDs and revenue at a glance.",
        "- Reports: filter by sub-ID, campaign, country or date range.",
        "- Creatives: banners and tracking links for landing pages, including Bangladesh-localised assets.",
        "- Finance: balance, payout history and KYC documents.",
        "## Sub-IDs and tracking",
        "Use sub-IDs to split traffic by source (Telegram, YouTube, blog). It is the single biggest lever for understanding which channel pays.",
        "## Security checklist",
        "Unique strong password, 2FA enabled, no shared logins. Affiliate accounts hold payout history and bank info — treat them like a bank login.",
        "## Need to switch wallets?",
        "Update your payout wallet inside Finance > Settings. Most changes require email confirmation.",
      ]}
      faqs={[
        { q: "Is this the official affiliate login page?", a: "No. GetJeetBuzz is a verified official affiliate partner of JeetBuzz, but this site is not the affiliate portal. The button above opens the official JeetBuzz affiliate portal where login happens." },
        { q: "I forgot my affiliate email — what now?", a: "Contact your affiliate manager with your partner ID or campaign URLs so they can locate the account." },
        { q: "Can I have more than one affiliate account?", a: "No. JeetBuzz allows one affiliate account per partner. Use sub-IDs to split traffic instead." },
        { q: "When are commissions paid?", a: "Monthly, typically in the first week, once your balance clears the minimum payout threshold and KYC is approved." },
      ]}
      related={[
        { to: "/affiliate-program", title: "JeetBuzz Affiliate Program", desc: "Revenue share, CPA and payout cycles." },
        { to: "/login-guide", title: "JeetBuzz Login Guide", desc: "Player login from Bangladesh." },
        { to: "/security-guide", title: "JeetBuzz Security Guide", desc: "2FA, password hygiene, phishing." },
      ]}
    />
  ),
});