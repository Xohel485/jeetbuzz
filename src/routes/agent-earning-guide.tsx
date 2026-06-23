import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/agent-earning-guide";
const TITLE =
  "JeetBuzz Agent & Affiliate Earning Guide 2026 - Commission, Payouts & Tools";
const DESC =
  "How to earn as a JeetBuzz agent or affiliate in 2026 — commission models, sub-affiliate tiers, payout rails for BD/PK/IN, marketing rules and what gets a partner account suspended.";

export const Route = createFileRoute("/agent-earning-guide")({
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
      eyebrow="Agent & Affiliate"
      title={<>JeetBuzz <span className="gold-text">Agent</span> & Affiliate Earning Guide</>}
      subtitle="Two different programs sit under one umbrella: the affiliate program (you send traffic, you get paid on net player loss) and the agent program (you onboard and manage players directly). This guide explains both honestly."
      breadcrumbs={[{ name: "Affiliate", path: "/affiliate-program" }, { name: "Earning Guide", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Affiliate vs agent — pick the right model",
        "Affiliate: you publish content (site, channel, group), share a tracked link, and earn a revenue-share % on the net gaming revenue (NGR) of players who sign up via your link.",
        "Agent: you recruit and onboard players directly, often handle deposits/withdrawals via local rails, and earn a higher commission cut in exchange for more operational work and personal liability for your network.",
        "Most publishers should start as an affiliate. The agent path makes sense only if you already have an offline player network and can responsibly manage cashflow.",
        "## Commission models you'll see",
        "- Revenue share (RevShare): % of net player loss, paid monthly. The standard for content affiliates.",
        "- CPA: fixed payout per qualifying first-time depositor.",
        "- Hybrid: smaller CPA + smaller RevShare. Good for predictable cashflow.",
        "- Sub-affiliate: a small % of commissions earned by affiliates you refer.",
        "Exact percentages, tiers and qualification thresholds change by season and country — confirm the current schedule inside the JeetBuzz affiliate dashboard before publishing claims.",
        "## Payout rails",
        "- Bangladesh: bKash, Nagad and bank transfer are the most common payout rails for partners.",
        "- Pakistan: EasyPaisa, JazzCash and bank.",
        "- India: UPI and bank transfer.",
        "- Cross-border: USDT (TRC-20) is widely supported for larger partners.",
        "Payouts are typically monthly with a minimum threshold. The threshold and processing window are shown in the partner dashboard.",
        "## Marketing rules — what will get you suspended",
        "- Bidding on the JeetBuzz brand name in Google Ads.",
        "- Spam (cold WhatsApp/SMS blasts to lists you don't own).",
        "- Targeting minors or jurisdictions where online betting is restricted.",
        "- Promising guaranteed wins or fake bonuses.",
        "- Cookie stuffing, iframe stuffing, or any non-disclosed redirect.",
        "Affiliate disclosure is required — see our Affiliate Disclosure page for the language we use.",
        "## Tools you actually need",
        "- Tracked links (built into the dashboard).",
        "- A simple landing page with a real review, not a redirect.",
        "- Postback / S2S for paid traffic if you scale beyond organic.",
        "- A spreadsheet that reconciles dashboard NGR against your invoiced commission monthly.",
        "## Realistic earnings expectations",
        "Content affiliates with focused South Asia traffic typically see most revenue from a small number of high-LTV players, not from raw signup volume. One genuine cricket-betting reader who plays seasonally is worth dozens of one-deposit-and-gone signups.",
      ]}
      faqs={[
        { q: "Do I need a company to join?", a: "No — individuals can sign up. For larger monthly payouts you may need to provide tax/KYC documents, which is normal for any affiliate program." },
        { q: "How do I get paid in Bangladesh?", a: "bKash, Nagad or bank transfer are the standard rails. Set your preferred payout method in the partner dashboard and confirm the receiving account name matches your registered partner name." },
        { q: "Can I run paid ads on Google / Meta?", a: "Yes for compliant ad networks, but you may not bid on JeetBuzz brand keywords or run ads in countries where online gambling is restricted. Always check the program's PPC policy first." },
        { q: "What's the difference between agent and affiliate?", a: "Affiliate = traffic and content, commission on NGR, no player handling. Agent = you onboard and manage players directly, often handle local cash-in/cash-out, higher commission but more operational risk." },
      ]}
      related={[
        { to: "/affiliate-program", title: "Affiliate Program" },
        { to: "/affiliate-disclosure", title: "Affiliate Disclosure" },
        { to: "/affiliate-login", title: "Affiliate Login" },
        { to: "/jeetbuzz-review", title: "JeetBuzz Review" },
      ]}
    />
  ),
});