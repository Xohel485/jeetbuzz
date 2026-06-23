import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/cricket-exchange-guide";
const TITLE =
  "JeetBuzz Cricket Exchange Guide 2026 - Back, Lay & IPL/BPL/PSL Markets";
const DESC =
  "JeetBuzz cricket exchange explained for 2026 — back vs lay bets, commission, in-play liability and how IPL, BPL and PSL markets work for players in Bangladesh, India and Pakistan.";

export const Route = createFileRoute("/cricket-exchange-guide")({
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
      eyebrow="Cricket Exchange"
      title={<>JeetBuzz <span className="gold-text">Cricket Exchange</span> Guide</>}
      subtitle="The exchange is not a sportsbook. You're betting against other users, not against JeetBuzz — and that changes how odds, liability and commission work. This is the practical version for BPL, IPL and PSL bettors."
      breadcrumbs={[{ name: "Sports", path: "/sports-betting" }, { name: "Cricket Exchange", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Exchange vs sportsbook — the actual difference",
        "On the sportsbook, JeetBuzz sets the price and takes the other side of your bet. On the exchange, other users set the prices: when you Back a team, somebody else is Laying it. JeetBuzz takes a small commission on net winnings instead of building margin into the odds, which is why exchange prices are usually sharper than book prices on the same match.",
        "## Back and Lay in plain words",
        "- Back = bet that an outcome WILL happen (e.g. back India to win at 1.85). Wins the stake × (odds-1) if correct.",
        "- Lay = bet that an outcome will NOT happen (e.g. lay India at 1.85). You collect the backer's stake if India loses or draws, but if India wins you owe stake × (odds-1) — that exposure is called liability and is shown before you confirm.",
        "## Commission",
        "Exchanges charge commission on net winnings per market, not on losses. Treat it as a small drag on every winning bet rather than a fee per click. Confirm the current commission rate on the JeetBuzz exchange info page before you start — it is shown in the exchange UI.",
        "## In-play and matched odds",
        "Prices on the exchange only fill if a counterparty matches them. In a quiet market your back/lay may sit unmatched. In a fast in-play moment (wicket, six, last over) the price you tap may move before it locks — JeetBuzz will offer the new price; you can accept or cancel.",
        "## League-specific framing",
        "- BPL (Bangladesh Premier League): late January / early February window. Pitches at Mirpur tend to favour spin, making mid-innings totals markets the most liquid on the exchange.",
        "- IPL (India): March-May. Highest exchange liquidity of any cricket event of the year — depth is deep enough that even mid-stake players move very little.",
        "- PSL (Pakistan Super League): February-March window. Lahore and Multan tracks reward batting; total runs and top-batter markets get more action than match odds late in the tournament.",
        "## Bankroll & responsible play",
        "Lay liability is what blows accounts up. A lay at 5.0 with 1,000 stake exposes you to 4,000 if the outcome wins. Set max liability per market, not just stake per bet.",
        "## Payments for exchange play",
        "Same rails as the rest of JeetBuzz: bKash/Nagad/Rocket (BD), EasyPaisa/JazzCash (PK), UPI/PhonePe/GPay/Paytm (IN). Withdrawals only return to the rail you funded from.",
      ]}
      faqs={[
        { q: "Is the exchange better odds than the sportsbook?", a: "Usually yes on liquid cricket markets like IPL — exchange prices have no built-in margin, only a commission on net winnings. On thin markets the exchange can be worse because depth is shallow." },
        { q: "What's the difference between back and lay?", a: "Back = the outcome happens; lay = the outcome does not happen. Lay bets carry liability greater than the stake at any odds above 2.0, so confirm liability before clicking." },
        { q: "Can I trade in-play (cash out before the match ends)?", a: "Yes — open a back, then place a lay at lower odds on the same selection (or vice versa) to lock a green book. JeetBuzz also offers Cash Out on supported markets when a counter-price exists." },
        { q: "Does the welcome bonus apply to exchange bets?", a: "Most operators exclude exchange turnover from sports welcome wagering because the house edge is commission, not margin. Read the bonus T&Cs in the cashier before opting in." },
      ]}
      related={[
        { to: "/sports-betting", title: "Sports Betting" },
        { to: "/live-cricket-betting", title: "Live Cricket Betting" },
        { to: "/jeetbuzz-review", title: "JeetBuzz Review" },
        { to: "/responsible-gaming", title: "Responsible Gaming" },
      ]}
    />
  ),
});