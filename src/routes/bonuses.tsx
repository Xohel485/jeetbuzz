import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { BONUS_CLUSTER } from "@/lib/clusters";

const PATH = "/bonuses";
// Duplicate-intent audit (Batch 7): /bonuses is a light hub, /bonus-and-promotions
// is the deep editorial page. Consolidate authority on the deeper URL.
const CANONICAL_PATH = "/bonus-and-promotions";
const TITLE = "JeetBuzz Bonuses Hub — Promo Code, Welcome & Refer Bonus 2026";
const DESC = "Every active JeetBuzz bonus in one place — welcome bonus, promo codes, first deposit match, refer-a-friend and rollover rules explained plainly.";

export const Route = createFileRoute("/bonuses")({
  head: () => ({
    meta: [
      { title: TITLE + " | GetJeetBuzz" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      ogUrl(CANONICAL_PATH),
    ],
    links: [canonicalLink(CANONICAL_PATH), ...hreflangLinks(CANONICAL_PATH)],
    scripts: [jsonLdScript(articleSchema({ headline: TITLE, description: DESC, path: PATH }))],
  }),
  component: () => (
    <GuidePage
      eyebrow="Bonuses"
      title={<>JeetBuzz <span className="gold-text">Bonuses Hub</span></>}
      subtitle="Welcome bonus, promo codes, first deposit match, cashback and refer-a-friend — all JeetBuzz bonuses with clear wagering, in plain language."
      breadcrumbs={[{ name: "Bonuses", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Read this first",
        "Every bonus on JeetBuzz has a **rollover** (also called wagering). If a bonus reads \"100% up to 10,000 BDT with 15x rollover\", you must place bets totalling 15 × your bonus amount before the balance can be withdrawn. Wagering is the single most-misunderstood detail — skim it and you will not be able to cash out.",
        "## Recent updates",
        "- **2026-07** — Re-verified [Promo Code](/jeetbuzz-promo-code) list and region locks (BD / PK / IN).",
        "- **2026-07** — Expanded [First Deposit Bonus](/jeetbuzz-first-deposit-bonus) with rollover math and opt-in timing.",
        "- **2026-06** — Refreshed [Welcome Bonus](/welcome-bonus) with the current cap and eligible-game contribution table.",
        "## The four bonuses that matter",
        "- **[Welcome Bonus](/welcome-bonus)** — first-time players only, opt-in *before* the first deposit.",
        "- **[First Deposit Bonus](/jeetbuzz-first-deposit-bonus)** — match percentage on your very first transfer.",
        "- **[Promo Code](/jeetbuzz-promo-code)** — reload, cashback or free-bet codes that rotate weekly.",
        "- **[Refer Bonus](/jeetbuzz-refer-bonus)** — refer-a-friend reward paid after the friend deposits and turns over.",
        "## Which one should you claim",
        "Only one bonus can be active at a time on a single deposit. New accounts almost always claim the Welcome Bonus first — it is the highest match. If you missed it, the First Deposit Bonus is the runner-up. Promo codes are for existing accounts and stack on top of scheduled reload offers when the T&C explicitly say so.",
        "## Wagering, max-bet and game contribution",
        "Three rules eat most first bonuses:",
        "1. **Max-bet cap** — most bonuses cap the bet size (typically 500 BDT / 200 PKR / ₹500) while the bonus is active. One larger bet voids the whole bonus.",
        "2. **Game contribution** — slots often contribute 100%, live casino 10–20%, cricket exchange 0%. Casino play clears wagering fastest.",
        "3. **Expiry** — most bonuses expire 7–30 days after credit. Miss the window and both bonus and bonus-winnings are forfeited.",
        "## Neutral disclosure",
        "JeetBuzz operates under a Curaçao licence. Bonuses are a marketing incentive, not a guaranteed profit path — the math still favours the house on every game. Play within a fixed budget and stop when the fun stops. If gambling stops feeling optional, use the [Delete Account / self-exclusion guide](/how-to-delete-jeetbuzz-account) or contact BeGambleAware.",
      ]}
      related={BONUS_CLUSTER}
      faqs={[
        { q: "Do I need a promo code for the welcome bonus?", a: "Some JeetBuzz welcome offers auto-apply; others require a code shown on the promotions page or given by an affiliate. Check the [Welcome Bonus page](/welcome-bonus) for the current requirement." },
        { q: "Can I withdraw bonus money right away?", a: "No. Bonus balance and any winnings from it are locked until you complete the rollover. Only the cleared cash balance is withdrawable." },
        { q: "What happens if I place a bet larger than the max-bet cap?", a: "The bonus and all winnings derived from it can be voided. Read the promo T&C in the cashier before you place your first bet." },
        { q: "How often do JeetBuzz promo codes change?", a: "Codes rotate weekly and around big cricket events (IPL, BPL, PSL). The [Promo Code page](/jeetbuzz-promo-code) tracks the currently valid ones." },
        { q: "Do bonuses count on live cricket exchange bets?", a: "Exchange bets usually contribute 0% to wagering. Use slots or standard sportsbook markets to clear bonuses efficiently." },
      ]}
    />
  ),
});