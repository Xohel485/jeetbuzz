import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { AFFILIATE_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-referral-code";
const TITLE = "JeetBuzz Referral Code 2026. How Refer-a-Friend & Affiliate Codes Work";
const DESC = "How JeetBuzz referral codes work in 2026, refer-a-friend rewards, where to find your code, and the difference between player referrals and the affiliate program.";

export const Route = createFileRoute("/jeetbuzz-referral-code")({
  head: () => ({
    meta: [
      { title: TITLE + " | GetJeetBuzz" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      ogUrl(PATH),
    ],
    links: [canonicalLink(PATH)...hreflangLinks(PATH)],
    scripts: [jsonLdScript(articleSchema({ headline: TITLE, description: DESC, path: PATH }))],
  }),
  component: () => (
    <GuidePage
      eyebrow="Affiliate"
      title={<>JeetBuzz <span className="gold-text">Referral Code</span></>}
      subtitle="Two different codes exist, the in-app refer-a-friend code every player gets, and the affiliate tracking link. Here is when to use each."
      ctaIntent="signup"
      breadcrumbs={[{ name: "Help", path: "/help" }, { name: "Referral Code", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Two referral systems",
        "JeetBuzz has two separate referral flows. Confusing them is why most people never see their reward credited.",
        "1. **Player refer-a-friend**, every logged-in player has a personal code inside **My account → Refer a friend**. Small one-time reward when the referred friend deposits.",
        "2. **Affiliate tracking link**, a long-term revenue-share partnership handled by the [affiliate program](/affiliate-program). Weekly commission on NGR up to 60%.",
        "If you plan to refer more than a handful of people, apply for the affiliate program, the earnings are an order of magnitude higher.",
        "## Where to find your referral code",
        "1. Log into your JeetBuzz player account.",
        "2. Tap the profile icon → **Refer a friend**.",
        "3. Copy your unique code and share the link via WhatsApp, Telegram or SMS.",
        "## How the friend claims it",
        "The referred friend must:",
        "- Open a **new** JeetBuzz account (same-device or same-IP referrals are blocked).",
        "- Enter your code in the registration form (never after signup).",
        "- Complete KYC and make a qualifying first deposit.",
        "- Play through the qualifying turnover set by the current promo terms.",
        "Only after all four steps do both parties see the reward.",
        "## Common reasons the reward never lands",
        "- Friend forgot to enter the code at signup (the field cannot be added later).",
        "- Friend signed up from the same IP or device as you, anti-fraud rule.",
        "- Friend claimed a different welcome bonus at the same time (only one active promo).",
        "- Friend's account is still awaiting KYC.",
        "## Refer-a-friend vs affiliate program",
        "| | Refer a friend | Affiliate program |",
        "|---|---|---|",
        "| Who can join | Any player | Requires application |",
        "| Reward type | One-time fixed | Weekly % of NGR |",
        "| Reward size | Small | Up to 60% revenue share |",
        "| Tracking | In-account code | Full dashboard + links |",
        "| Best for | 1–2 friends | Anyone driving 5+ signups |",
        "Ready to go bigger? Read the [Affiliate Signup guide](/jeetbuzz-affiliate-signup).",
        "## Program overview & weekly commission",
        "For the full picture of what the partner side pays, see the [JeetBuzz affiliate program](/affiliate-program) page and the [JeetBuzz affiliate commission](/jeetbuzz-affiliate-commission) breakdown, weekly 25%–60% revenue share instead of a fixed refer-a-friend reward.",
      ]}
      related={siblings(AFFILIATE_CLUSTER, PATH)}
      faqs={[
        { q: "Where do I find my JeetBuzz referral code?", a: "Inside your player account under **My account → Refer a friend**. The code is unique to you and copies to your clipboard with one tap." },
        { q: "Can I use my own referral code on a second account?", a: "No. Self-referral is blocked by device / IP checks and voids the reward." },
        { q: "What if my friend forgot to enter my code?", a: "Referral codes must be entered at registration and cannot be added retroactively. Ask the friend to contact support, but the answer is usually no." },
        { q: "How is the refer-a-friend reward different from the affiliate program?", a: "Refer-a-friend is a small one-time reward for any player. The affiliate program pays weekly revenue share up to 60% but requires an application and a valid traffic source." },
        { q: "Are referral rewards paid in cash or bonus?", a: "Usually credited as a bonus that carries the standard wagering requirement before withdrawal. Read the current refer-a-friend T&C inside your account for the exact rollover." },
      ]}
    />
  ),
});