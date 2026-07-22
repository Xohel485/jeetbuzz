import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { GAMES_CLUSTER } from "@/lib/clusters";

const PATH = "/games";
const TITLE = "JeetBuzz Games Hub. Live Cricket, Casino, Aviator & Slots 2026";
const DESC = "Every JeetBuzz game category in one map, live cricket, sportsbook, live casino, Aviator crash game, slots and Teen Patti with the right strategy guide.";

export const Route = createFileRoute("/games")({
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
      eyebrow="Games"
      title={<>JeetBuzz <span className="gold-text">Games Hub</span></>}
      subtitle="Cricket, casino, crash and slots, one map to every JeetBuzz game category with the right guide for each."
      breadcrumbs={[{ name: "Games", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "লাইভ ক্রিকেট থেকে ক্যাসিনো, কোথায় কী পাবেন তার সহজ গাইড এই হাবে সাজানো আছে। JeetBuzz মূলত একটি ক্রিকেট-কেন্দ্রিক স্পোর্টসবুক, IPL, BPL, PSL আর আন্তর্জাতিক সিরিজে বল-বাই-বল ইন-প্লে মার্কেট পাওয়া যায়, ক্যাশআউট আর পার্শিয়াল ক্যাশআউট অপশনসহ। এর পাশাপাশি ফুটবল, টেনিস, কাবাডি এবং ই-স্পোর্টস কভারেজ আছে বড় ইভেন্টগুলোতে। লাইভ ক্যাসিনো সেকশনে Evolution, Ezugi আর Pragmatic-এর স্টুডিও থেকে রিয়েল ডিলার টেবিল, রুলেট, ব্ল্যাকজ্যাক, বাকারা আর টিন পাত্তি খেলা যায়। স্লট প্রেমীদের জন্য হাজারের বেশি গেম, RTP আর ভোলাটিলিটি ফিল্টার সহ। প্রতিটা ক্যাটাগরির নিজস্ব নিয়ম, বেট লিমিট আর বোনাস কন্ট্রিবিউশন আছে, তাই খেলার আগে সংশ্লিষ্ট গাইড পড়ে নিলে ভুল বাজি এড়ানো যায়। নিচের কার্ড থেকে আপনার পছন্দের খেলা বেছে নিন, প্রতিটার জন্য আলাদা এডিটোরিয়াল রিভিউ আর কৌশল-গাইড আছে।",
        "## Cricket first",
        "JeetBuzz is a cricket-first sportsbook. Coverage runs across IPL, BPL, PSL, international tours and domestic T20 leagues, with live in-play markets that update ball-by-ball.",
        "- [Live Cricket Betting Guide](/live-cricket-betting), full walkthrough of in-play markets, cashout and momentum reading.",
        "- [Sports Betting Guide](/sports-betting), beyond cricket: football, tennis, kabaddi and esports.",
        "- [Cricket Exchange Guide](/cricket-exchange-guide), how the peer-to-peer exchange differs from a fixed-odds book.",
        "## Casino and crash",
        "- [Casino Guide](/casino-guide), full lobby tour: slots, live dealer, table games with RTP-friendly picks.",
        "- [Aviator Guide](/aviator-guide), the crash game everyone asks about, with realistic bankroll notes.",
        "## What to play when",
        "- **You want quick, mostly-luck rounds** → slots or Aviator.",
        "- **You like social table games** → live dealer roulette, baccarat, Teen Patti.",
        "- **You want skill and market reading** → live cricket in-play, cricket exchange.",
        "## Fair play notes",
        "Every listed game runs on licensed studio software (Evolution, Pragmatic Play, Spribe and others) with published RTP. RTP is a long-run average, a single session can and will vary wildly. Never chase losses; stop when your session budget is spent.",
        "## Responsible gaming",
        "JeetBuzz supports deposit limits, session-time reminders and self-exclusion. Set them from your account settings *before* your first losing session, they are much harder to enable in the middle of one.",
        "## More cricket coverage",
        "- [JeetBuzz Live Cricket](/jeetbuzz-live-cricket), brand-focused live cricket streaming and in-play markets.",
      ]}
      related={GAMES_CLUSTER}
      faqs={[
        { q: "Which JeetBuzz game has the best odds for players?", a: "Blackjack and baccarat have the highest theoretical RTP (~98–99%). Slots vary widely (94–97%). Aviator is around 97%. No game has a positive expected value long term." },
        { q: "Is live cricket in-play delayed?", a: "In-play odds are calibrated against a live data feed with a small delay to prevent latency arbitrage. This is standard across every regulated sportsbook." },
        { q: "Can I try games for free?", a: "Most slots offer demo mode; live dealer and sportsbook markets do not. Use demo to learn the interface, not to \"test a strategy\", outcomes still match live RTP." },
        { q: "Are the games rigged?", a: "Games from named studios are certified by third-party labs (eCOGRA, iTech Labs). Losing streaks feel unfair but are within normal variance for the stated RTP." },
      ]}
    />
  ),
});