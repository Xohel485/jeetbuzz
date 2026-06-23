import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/aviator-guide";
const TITLE =
  "JeetBuzz Aviator & Crash Games Guide 2026 - Strategy, Auto Cash-Out & RTP";
const DESC =
  "JeetBuzz Aviator and crash games guide for 2026 — how the multiplier works, auto cash-out setup, bankroll sizing, RTP basics and honest myth-busting for BD, PK and IN players.";

export const Route = createFileRoute("/aviator-guide")({
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
      eyebrow="Aviator & Crash"
      title={<>JeetBuzz <span className="gold-text">Aviator</span> & Crash Games Guide</>}
      subtitle="Aviator is a provably-fair crash game by Spribe — a plane takes off, the multiplier climbs from 1.00x, and you cash out before it flies away. This guide explains how to play it on JeetBuzz without falling for the common myths."
      breadcrumbs={[{ name: "Casino", path: "/casino-guide" }, { name: "Aviator", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## What Aviator actually is",
        "Aviator is a Spribe-developed crash game listed on JeetBuzz under the casino / arcade lobby. Each round is provably fair: a server seed combined with player seeds determines the crash point before the round starts. Past results have zero predictive value on future rounds — no pattern, no streak, no due multiplier.",
        "## How a round works",
        "1. Place your bet (one or two parallel bets per round are supported).",
        "2. When the round starts the multiplier rises from 1.00x.",
        "3. Cash out at any point before the plane flies away — you win stake × multiplier at the moment you cashed.",
        "4. If the plane leaves before you cash out, the stake is lost.",
        "## Auto cash-out and auto bet",
        "Set Auto Cash Out to a specific multiplier (for example 1.50x or 2.00x) and the round will close that bet automatically when reached. Use this if you can't react fast on mobile or if you're using a flat strategy. Auto Bet repeats the same stake each round and pairs naturally with auto cash-out.",
        "## Bankroll sizing — the only \"strategy\" that survives math",
        "- Treat each session as a fixed bankroll you can lose in full. 50 to 100 rounds at 1-2% of bankroll per round is a sane ceiling.",
        "- Lower target multipliers (1.30x-1.50x) hit more often but the expected value is still negative — house edge is built in.",
        "- Doubling after a loss (Martingale) blows up faster than people expect on Aviator because long losing streaks happen routinely in a random-multiplier game.",
        "## RTP and house edge",
        "Aviator's published RTP is around 97% (Spribe lists it on the in-game info panel — confirm the number shown in the JeetBuzz client at the time of play, since some operators run an alternative RTP build). 97% RTP still means an expected long-run loss of 3% of total turnover.",
        "## Country-specific notes",
        "- Bangladesh: bKash and Nagad deposits clear fast enough to fund quick Aviator sessions; keep the unique reference handy.",
        "- Pakistan: EasyPaisa and JazzCash Mobile Account transfers work; avoid Retailer sends.",
        "- India: UPI is the fastest rail — PhonePe / GPay / Paytm all push to the same UPI ID shown in the cashier.",
        "## Common mistakes",
        "- Chasing a previous \"big crash\" assuming the next one is smaller — rounds are independent.",
        "- Treating in-game chat tips as signals; they are not.",
        "- Funding a session with money needed for bills. Set a hard stop and walk away when it hits.",
      ]}
      faqs={[
        { q: "Is Aviator rigged?", a: "No. Aviator is provably fair — each round's crash point is committed before the round starts and can be verified after. The house edge comes from the RTP (~97%), not from manipulating outcomes." },
        { q: "What's the safest auto cash-out value?", a: "There is no safe value — every value has negative expected value over the long run. Low multipliers (1.30x-1.50x) hit more often but pay less; high ones pay more but hit rarely. Pick what matches your bankroll plan, not what feels lucky." },
        { q: "Can I use a script or bot on JeetBuzz Aviator?", a: "No. Third-party automation breaches JeetBuzz terms and can lead to balance forfeiture. The in-game auto cash-out and auto bet features are the only sanctioned automation." },
        { q: "Does the welcome bonus work on Aviator?", a: "Casino welcome bonuses on JeetBuzz typically exclude or only partially count crash-style games toward wagering. Read the bonus T&Cs in the cashier before opting in — see our Welcome Bonus guide." },
      ]}
      related={[
        { to: "/casino-guide", title: "Casino Guide" },
        { to: "/welcome-bonus", title: "Welcome Bonus" },
        { to: "/deposit-guide", title: "Deposit Guide" },
        { to: "/responsible-gaming", title: "Responsible Gaming" },
      ]}
    />
  ),
});