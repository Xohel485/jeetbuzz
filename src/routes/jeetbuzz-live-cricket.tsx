import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { HUBS } from "@/lib/clusters";

const PATH = "/jeetbuzz-live-cricket";
const TITLE = "JeetBuzz Live Cricket 2026. BPL, IPL, PSL In-Play Markets & Odds";
const DESC = "JeetBuzz live cricket 2026, in-play markets for BPL, IPL, PSL and internationals, over-by-over odds, cash-out timing, ball-by-ball settlement and market-by-market strategy for BD, PK and IN.";

export const Route = createFileRoute("/jeetbuzz-live-cricket")({
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
      eyebrow="Cricket"
      title={<>JeetBuzz <span className="gold-text">Live Cricket</span></>}
      titleByLocale={{ bn: <>জিতবাজ <span className="gold-text">লাইভ ক্রিকেট</span></> }}
      subtitle="Every JeetBuzz live cricket market that matters. BPL, IPL, PSL and internationals, plus when each market prices sharpest, when the book is soft, and how cash-out really settles."
      subtitleByLocale={{ bn: "JeetBuzz-এর সব গুরুত্বপূর্ণ লাইভ ক্রিকেট মার্কেট. BPL, IPL, PSL ও আন্তর্জাতিক, কোন মার্কেট কখন ধারালো, কখন নরম, আর cash-out আসলে কীভাবে সেটেল হয়।" }}
      ctaIntent="signup"
      ctaLabel="Open Live Cricket"
      breadcrumbs={[{ name: "Games", path: "/games" }, { name: "Live Cricket", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## What 'live cricket' means on JeetBuzz",
        "JeetBuzz splits cricket into two surfaces: the **pre-match sportsbook**, fixed odds published 24–72 hours before start, and **in-play (live)**, odds that redraw every ball. Live is where the volume is: 70%+ of BPL and IPL cricket turnover on JeetBuzz is placed after the first ball. This page is only about live.",
        "Live coverage runs across BPL, IPL, PSL, T20 World Cup, ICC Champions Trophy, Test series, ODI bilateral series and second-tier events (CPL, Big Bash, county T20, LPL). Every match with a broadcast feed carries in-play markets; smaller games sometimes settle on scorecard only.",
        "## The 4 live market families you actually use",
        "1. **Match Winner / Match Odds**, the deepest, tightest market. Prices update every ball; commission is the lowest of any market. Best used pre-toss and inside the first 3 overs.",
        "2. **Over Runs (Next Over, First 6, First 10)**, high-volatility props. The book widens the spread mid-over so late entries pay a tax; place them between balls, not during.",
        "3. **Fall of Wicket / Next Wicket Method**, highest edge market for readers of the game, worst market for chasers. Suspended between deliveries whenever the strike batter changes.",
        "4. **Innings Total / Team Total**, settles at innings end. Odds compress fast after over 12 in T20s; the value window is overs 6–12.",
        "## Ball-by-ball timing, when the book actually suspends",
        "Live markets suspend for about 6–10 seconds around every event: bowler running in, wicket, boundary, review. Bets placed inside that window are held pending until markets reopen; if the price is still on offer they settle at the requested odds, otherwise they are voided. This is not a bug, it protects both sides from stale-price abuse.",
        "## Cash-out, what it really is",
        "Cash-out is JeetBuzz repricing your open bet at current live odds and offering you the difference (up or down) as an early settlement. It is not free money, the book keeps 2–4% as spread. Rules of thumb:",
        "- Use cash-out at **+15–20%** as a risk-off exit when a match swings your way early.",
        "- Do **not** cash out at –30% chasing a lost cause; the market has already priced you out.",
        "- Cash-out is **disabled** during suspensions (see above) and for a small set of prop markets.",
        "## Country-specific tournaments",
        "### Bangladesh. BPL is home",
        "BPL has the deepest liquidity for BD players. Comilla, Rangpur and Dhaka fixtures see the highest turnover; second-string franchises price wider. Night games in Chattogram carry a real dew advantage for chasing sides, factor it into your Match Winner picks after over 6.",
        "### Pakistan. PSL is the anchor",
        "PSL live markets stay open until the 19th over. Karachi is a chase venue; Lahore rewards par-plus totals. JeetBuzz posts PSL prop markets (top batter, top bowler, first six) 90 minutes before start, those are pre-match, not live.",
        "### India. IPL dominates",
        "IPL carries the tightest spreads and the deepest prop menu, player runs, player wickets, over-specific milestones. Chinnaswamy inflates totals; Chepauk suppresses them. Match Winner odds on early IPL games rebalance within 4 overs, faster than any other league.",
        "## A worked example, reading the price move",
        "Team A is 45/1 after 6 in a T20. Chase target 168. Match odds move from 1.90 to 1.65. What happened: the book saw the required rate stay under 8/over with 8 wickets in hand, the implied win probability jumped from ~53% to ~61%. A cash-out offer of +14% on a pre-match Team A bet at 2.10 is fair; refusing it and betting more at 1.65 is chasing.",
        "## Bankroll discipline, the 5% rule",
        "Cap any single match at 5% of your live-cricket bankroll. Cap any single in-play market inside that match at 25% of the match budget. Reset the cap match-by-match, never carry losses forward into the next fixture.",
        "## Common in-play mistakes",
        "- **Placing during a suspension** and assuming your ticket is live. Wait for the price to reappear.",
        "- **Chasing wickets on Next Wicket Method**, the market swings hardest against fresh entries.",
        "- **Ignoring dew** in day-night games in South Asia. Chasers get a 5–8% Match Winner edge after over 10.",
        "- **Using cash-out as habit** rather than tool. Every cash-out has a spread; the book profits from the reflex.",
        "## Deposits, KYC and payout speed",
        "In-play sessions get costly if a deposit fails mid-match. Fund the account before you start, see [bKash Deposit](/jeetbuzz-bkash-deposit), [Nagad Withdrawal](/jeetbuzz-nagad-withdrawal), and the [Minimum Deposit](/jeetbuzz-minimum-deposit) rails. Complete KYC before any large withdrawal so [Withdrawal Time](/jeetbuzz-withdrawal-time) stays in the same-day band.",
        "## Responsible play",
        "Set weekly deposit and loss limits in Account → Responsible Play. If a match feels like it stops being entertainment, use the 24-hour cool-off. See [Responsible Gaming](/responsible-gaming) for self-exclusion and support contacts.",
        "## Related",
        "- [Live Cricket Betting Guide](/live-cricket-betting), deeper walkthrough of markets and league schedules.",
        "- [Cricket Exchange Guide](/cricket-exchange-guide), peer-to-peer exchange pricing.",
        "- [Sports Betting](/sports-betting), pre-match and non-cricket coverage.",
        "- [Games Hub](/games), the map to every JeetBuzz product.",
      ]}
      bodyByLocale={{
        bn: [
          "## JeetBuzz-এ 'লাইভ ক্রিকেট' মানে কী",
          "JeetBuzz ক্রিকেটকে দুই ভাগে ভাগ করে: শুরুর ২৪–৭২ ঘণ্টা আগে fixed odds-এ **প্রি-ম্যাচ sportsbook**, আর প্রতিটি বলে redraw হওয়া **in-play (লাইভ)**। লাইভেই সমস্ত ভলিউম. BPL ও IPL-এর ৭০%+ turnover প্রথম বলের পরে বসে। এই পেজ শুধু লাইভ নিয়ে।",
          "কভারেজ: BPL, IPL, PSL, T20 World Cup, ICC Champions Trophy, Test, ODI দ্বিপাক্ষিক, এবং CPL/Big Bash/county T20/LPL। ব্রডকাস্ট feed যুক্ত প্রতিটি ম্যাচে in-play market আছে; ছোট ম্যাচে শুধু scorecard settlement।",
          "## যে ৪টি লাইভ মার্কেট আপনি আসলে ব্যবহার করবেন",
          "১. **Match Winner**, সবচেয়ে গভীর, সবচেয়ে টাইট স্প্রেড। প্রতিটি বলে price update; কমিশন সবচেয়ে কম। Pre-toss এবং প্রথম ৩ ওভারে সেরা।",
          "২. **Over Runs (পরের ওভার, প্রথম ৬, প্রথম ১০)**, উচ্চ অস্থিরতা। মধ্য-ওভারে book স্প্রেড বাড়ায়, তাই দেরিতে ঢুকলে বাড়তি কর দিতে হয়; বলের মাঝে দিন, বলের সময় নয়।",
          "৩. **পরের উইকেট পদ্ধতি**, খেলার পাঠকের জন্য সর্বোচ্চ edge, chase করলে সবচেয়ে খারাপ। Strike পরিবর্তন হলে suspend থাকে।",
          "৪. **Innings Total / Team Total**, ইনিংস শেষে settle। T20-এ ১২ ওভারের পর odds সংকুচিত হয়; value window ৬–১২ ওভার।",
          "## বলে বলে timing, কখন book suspend হয়",
          "প্রতিটি ঘটনার আশেপাশে (bowler-এর run-up, উইকেট, boundary, review) লাইভ market ৬–১০ সেকেন্ড suspend থাকে। এই window-তে দেওয়া bet pending থাকে; market আবার open হলে requested odds available থাকলে settle, নইলে void। এটা bug নয়, stale-price abuse ঠেকানোর জন্য।",
          "## Cash-out আসলে কী",
          "Cash-out মানে JeetBuzz আপনার open bet-কে বর্তমান live odds-এ reprice করে difference (up/down) offer করছে। এটা free money নয়, book ২–৪% spread রাখে। মাথায় রাখুন:",
          "- ম্যাচ আপনার দিকে ঘুরলে **+১৫–২০%** cash-out risk-off exit।",
          "- হারানো bet-এ –৩০% cash-out **করবেন না**, market ইতিমধ্যেই আপনাকে দাম দিয়েছে।",
          "- Suspension-এর সময় cash-out **disabled**; কিছু prop market-এও।",
          "## দেশভিত্তিক টুর্নামেন্ট",
          "### বাংলাদেশ. BPL মূল",
          "BD প্লেয়ারদের জন্য BPL-এ সবচেয়ে বেশি liquidity। Comilla, Rangpur, Dhaka সর্বোচ্চ turnover; দ্বিতীয় সারির franchise-এ spread বেশি। Chattogram-এর রাতের ম্যাচে dew advantage, ৬ ওভারের পর chase-এর pick নেওয়ার সময় ধরুন।",
          "### পাকিস্তান. PSL মেরুদণ্ড",
          "PSL live market ১৯তম ওভার পর্যন্ত open। Karachi chase venue; Lahore par-plus reward করে। PSL prop market (top batter/bowler/first six) ৯০ মিনিট আগে post, সেগুলো pre-match, live নয়।",
          "### ভারত. IPL শীর্ষে",
          "IPL-এ সবচেয়ে tight spread ও গভীর prop menu, player runs, player wickets, over-specific milestone। Chinnaswamy total বাড়ায়; Chepauk কমায়। IPL-এর Match Winner odds ৪ ওভারে rebalance, অন্য যেকোনো league-এর চেয়ে দ্রুত।",
          "## একটি worked example",
          "T20-তে A দল ৬ ওভারে ৪৫/১, target ১৬৮। Match odds ১.৯০ থেকে ১.৬৫। ঘটেছে কী: required rate ৮/ওভারের নিচে ৮ উইকেট হাতে, implied win probability ~৫৩% থেকে ~৬১%। ২.১০-এ pre-match A bet-এ +১৪% cash-out offer fair; সেটা refuse করে ১.৬৫-এ আরও bet করা chase।",
          "## Bankroll, ৫% নিয়ম",
          "কোনো এক ম্যাচে live-cricket bankroll-এর ৫%-এর বেশি নয়। সেই ম্যাচে কোনো একক in-play market-এ ম্যাচ budget-এর ২৫%-এর বেশি নয়। প্রতি ম্যাচে reset, পরের ম্যাচে ক্ষতি টেনে নেবেন না।",
          "## সাধারণ ভুল",
          "- Suspension চলাকালীন bet দিয়ে ticket live ধরে নেওয়া।",
          "- Next Wicket Method-এ wicket chase, ফ্রেশ entry-র বিরুদ্ধে market সবচেয়ে জোরে ঘোরে।",
          "- দক্ষিণ এশিয়ার day-night ম্যাচে dew উপেক্ষা, ১০ ওভারের পর chaser-দের ৫–৮% Match Winner edge।",
          "- Cash-out habit হিসেবে, প্রতিটি cash-out-এ spread; book reflex থেকে লাভ করে।",
          "## Deposit, KYC ও payout গতি",
          "ম্যাচের মাঝখানে deposit fail হলে ব্যয়বহুল। আগেই fund করুন, [bKash Deposit](/jeetbuzz-bkash-deposit), [Nagad Withdrawal](/jeetbuzz-nagad-withdrawal), [Minimum Deposit](/jeetbuzz-minimum-deposit)। বড় withdrawal-এর আগে KYC সম্পন্ন রাখলে [Withdrawal Time](/jeetbuzz-withdrawal-time) same-day band-এ থাকে।",
          "## দায়িত্বশীল খেলা",
          "Account → Responsible Play-এ সাপ্তাহিক deposit ও loss limit সেট করুন। ম্যাচ যদি বিনোদন না মনে হয়, ২৪-ঘণ্টা cool-off ব্যবহার করুন। বিস্তারিত [Responsible Gaming](/responsible-gaming)।",
        ],
      }}
      related={[
        { to: "/live-cricket-betting", title: "Live Cricket Betting Guide", desc: "Deeper walkthrough of markets and league schedules." },
        { to: "/cricket-exchange-guide", title: "Cricket Exchange", desc: "Peer-to-peer exchange pricing." },
        { to: "/sports-betting", title: "Sports Betting", desc: "Pre-match and non-cricket coverage." }...HUBS,
      ]}
      faqs={[
        { q: "Which JeetBuzz live cricket market has the tightest odds?", a: "Match Winner, deepest liquidity, lowest commission, updates every ball. Pre-toss and inside the first 3 overs give the fairest price." },
        { q: "Why did my in-play bet get voided?", a: "You placed it during a market suspension (wicket, boundary, review, bowler run-up). When markets reopened your requested price was no longer on offer, so the ticket voided instead of settling at a worse price." },
        { q: "How does cash-out actually work?", a: "JeetBuzz reprices your open bet at current live odds and keeps 2–4% spread. Use it to lock in profit at +15–20%, not to chase losses at –30%." },
        { q: "Are BPL, IPL and PSL live markets different?", a: "Same market structure, different liquidity and volatility. IPL has the tightest spreads and deepest prop menu. BPL and PSL keep Match Winner odds open into the 19th over." },
        { q: "Can I bet ball-by-ball on JeetBuzz?", a: "Yes, the Next Over Runs and Next Wicket Method markets refresh every ball. Both suspend for 6–10 seconds around every event." },
        { q: "Does the dew factor really change live odds?", a: "In BD, PK and IN day-night T20s, chasing sides get a measurable 5–8% Match Winner edge after over 10. The book bakes that in, but slower than sharp bettors do." },
        { q: "What is the minimum deposit for live cricket betting?", a: "The same as the site-wide minimum: BDT 100 first deposit, BDT 200 recurring in BD; JazzCash/EasyPaisa minimums for PK; UPI ₹100 for IN. See the Minimum Deposit page." },
        { q: "How fast do live cricket winnings withdraw?", a: "Same-day on bKash / Nagad / UPI with completed KYC. Withdrawals above the standard tier trigger manual review; keep KYC current before a big session." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "JeetBuzz লাইভ ক্রিকেটে সবচেয়ে tight odds কোথায়?", a: "Match Winner, সবচেয়ে গভীর liquidity, সবচেয়ে কম commission, প্রতিটি বলে update। Pre-toss ও প্রথম ৩ ওভারে সবচেয়ে fair price।" },
          { q: "আমার in-play bet void হলো কেন?", a: "Market suspension-এর সময় (উইকেট, boundary, review, bowler run-up) bet দিয়েছিলেন। Market আবার open হলে requested price আর available ছিল না, তাই worse price-এ settle না করে void হয়েছে।" },
          { q: "Cash-out আসলে কীভাবে কাজ করে?", a: "JeetBuzz open bet-কে current live odds-এ reprice করে এবং ২–৪% spread রাখে। +১৫–২০%-এ profit lock-এ ব্যবহার করুন, –৩০%-এ ক্ষতি chase-এ নয়।" },
          { q: "BPL, IPL, PSL live market কি ভিন্ন?", a: "Structure একই, liquidity ও volatility ভিন্ন। IPL-এ tight spread ও গভীর prop menu। BPL ও PSL-এর Match Winner ১৯তম ওভার পর্যন্ত open।" },
          { q: "JeetBuzz-এ কি বলে-বলে bet করা যায়?", a: "হ্যাঁ. Next Over Runs ও Next Wicket Method প্রতিটি বলে refresh। প্রতিটি ঘটনার আশেপাশে ৬–১০ সেকেন্ড suspend।" },
          { q: "Dew কি লাইভ odds সত্যিই বদলায়?", a: "BD, PK, IN-এর day-night T20-তে ১০ ওভারের পর chaser-দের ৫–৮% Match Winner edge, book সেটা ধরলেও sharp bettor-দের চেয়ে ধীরে।" },
          { q: "লাইভ ক্রিকেট bet-এ ন্যূনতম deposit কত?", a: "সাইটের standard minimum: BD-তে প্রথম BDT ১০০, recurring ২০০; PK-তে JazzCash/EasyPaisa minimum; IN-তে UPI ₹১০০।" },
          { q: "লাইভ ক্রিকেট জেতা টাকা কত দ্রুত withdraw হয়?", a: "KYC সম্পন্ন থাকলে bKash / Nagad / UPI-তে same-day। Standard tier-এর উপরে withdrawal manual review; বড় session-এর আগে KYC current রাখুন।" },
        ],
      }}
    />
  ),
});