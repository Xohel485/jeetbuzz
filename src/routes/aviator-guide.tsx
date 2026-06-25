import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/aviator-guide";
const TITLE =
  "JeetBuzz Aviator & Crash Games Guide 2026 - Strategy, Auto Cash-Out & RTP";
const DESC =
  "JeetBuzz Aviator and crash games guide for 2026 — how the multiplier works, auto cash-out setup, bankroll sizing and honest myth-busting for BD, PK and IN players.";

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
        "Aviator's RTP is not officially published by JeetBuzz and can vary between provider builds and game versions. Always check the in-game info panel in the JeetBuzz client at the time of play for the current value. Regardless of the exact number, every crash game carries a built-in house edge — expect a long-run negative return on total turnover.",
        "## Country-specific notes",
        "- Bangladesh: bKash and Nagad deposits clear fast enough to fund quick Aviator sessions; keep the unique reference handy.",
        "- Pakistan: EasyPaisa and JazzCash Mobile Account transfers work; avoid Retailer sends.",
        "- India: UPI is the fastest rail — PhonePe / GPay / Paytm all push to the same UPI ID shown in the cashier.",
        "## Common mistakes",
        "- Chasing a previous \"big crash\" assuming the next one is smaller — rounds are independent.",
        "- Treating in-game chat tips as signals; they are not.",
        "- Funding a session with money needed for bills. Set a hard stop and walk away when it hits.",
      ]}
      subtitleByLocale={{
        bn: "Aviator হলো Spribe-এর provably fair ক্র্যাশ গেম — প্লেন ওড়ে, মাল্টিপ্লায়ার ১.০০x থেকে উপরে উঠতে থাকে, প্লেন উড়ে যাওয়ার আগেই Cash Out করতে হয়। JeetBuzz-এ ভ্রান্ত মিথে পা না দিয়ে কীভাবে খেলবেন — এই গাইডে বিস্তারিত।",
      }}
      bodyByLocale={{
        bn: [
          "## Aviator আসলে কী",
          "Aviator হলো Spribe-নির্মিত একটি ক্র্যাশ গেম, JeetBuzz-এর ক্যাসিনো / আর্কেড লবিতে পাওয়া যায়। প্রতিটি রাউন্ড **provably fair** — সার্ভার সিড ও প্লেয়ার সিডের কম্বিনেশন থেকে রাউন্ড শুরুর আগেই ক্র্যাশ পয়েন্ট নির্ধারিত হয়। অতীত ফলাফল ভবিষ্যৎ রাউন্ডের কোনো ইঙ্গিত দেয় না — কোনো প্যাটার্ন, কোনো স্ট্রিক, কোনো ‘due’ মাল্টিপ্লায়ার নেই।",
          "## একটি রাউন্ড কীভাবে চলে",
          "1. বাজি রাখুন (প্রতি রাউন্ডে এক বা দুটি সমান্তরাল বেট সমর্থিত)।",
          "2. রাউন্ড শুরু হলে মাল্টিপ্লায়ার ১.০০x থেকে উপরে উঠতে থাকবে।",
          "3. প্লেন উড়ে যাওয়ার আগে যেকোনো মুহূর্তে Cash Out করুন — আপনার পেআউট = স্টেক × ঐ মুহূর্তের মাল্টিপ্লায়ার।",
          "4. Cash Out না করতে পারলে স্টেক হারাবেন।",
          "## Auto Cash Out ও Auto Bet",
          "নির্দিষ্ট মাল্টিপ্লায়ারে (যেমন ১.৫০x বা ২.০০x) Auto Cash Out সেট করলে সেই পয়েন্টে অটোমেটিক বেট ক্লোজ হবে। মোবাইলে দ্রুত রিঅ্যাক্ট করতে না পারলে বা ফ্ল্যাট স্ট্র্যাটেজি ব্যবহার করলে এটি কাজে আসে। Auto Bet একই স্টেকে প্রতিটি রাউন্ড পুনরাবৃত্তি করে এবং Auto Cash Out-এর সঙ্গে স্বাভাবিকভাবে মিলে যায়।",
          "## ব্যাংকরোল ব্যবস্থাপনা — একমাত্র টিকে থাকা ‘স্ট্র্যাটেজি’",
          "- প্রতিটি সেশনকে একটি স্থির ব্যাংকরোল হিসেবে দেখুন — পুরোটাই হারানোর জন্য প্রস্তুত থাকুন।",
          "- ৫০–১০০ রাউন্ড, প্রতি রাউন্ডে ব্যাংকরোলের ১–২%-এর বেশি নয়।",
          "- নিচু টার্গেট (১.৩০x–১.৫০x) বেশি হিট করে, কিন্তু expected value তবু নেগেটিভ — হাউস এজ গাঁথা আছে।",
          "- লসের পর স্টেক ডবল করা (Martingale) Aviator-এ দ্রুত ব্যাংকরোল শূন্য করে দেয়, কারণ লং লসিং স্ট্রিক এখানে স্বাভাবিক।",
          "## RTP ও হাউস এজ",
          "Aviator-এর RTP JeetBuzz অফিসিয়ালভাবে প্রকাশ করে না এবং প্রোভাইডার বিল্ড ও গেম সংস্করণ অনুসারে এটি ভিন্ন হতে পারে। খেলার সময় JeetBuzz ক্লায়েন্টের ইন-গেম ইনফো প্যানেলে বর্তমান মান যাচাই করুন। সংখ্যা যাই হোক, প্রতিটি ক্র্যাশ গেমে একটি বিল্ট-ইন হাউস এজ থাকে — দীর্ঘমেয়াদে মোট টার্নওভারে নেগেটিভ রিটার্ন প্রত্যাশিত।",
          "## বাংলাদেশের প্লেয়ারদের জন্য নোট",
          "- [bKash](/bkash-guide) ও [Nagad](/nagad-guide) ডিপোজিট দ্রুত ক্লিয়ার হয় — ছোট, দ্রুত সেশনের জন্য আদর্শ।",
          "- প্রতিটি ডিপোজিটে ইউনিক রেফারেন্স কোড সঠিকভাবে ব্যবহার করুন।",
          "- VPN দিয়ে লোকেশন পরিবর্তন করে খেলা টার্মস ভঙ্গ — অ্যাকাউন্ট স্থগিতের ঝুঁকি আছে।",
          "## সাধারণ ভুল",
          "- বড় ক্র্যাশের পর ‘পরেরটা ছোট হবে’ ধরে নেওয়া — রাউন্ড স্বাধীন।",
          "- ইন-গেম চ্যাটের ‘টিপ’-কে সিগন্যাল ভাবা — এগুলো নয়।",
          "- বিল বা পারিবারিক খরচের টাকায় সেশন চালানো — হার্ড স্টপ সেট করুন।",
        ],
      }}
      faqs={[
        { q: "Is Aviator rigged?", a: "No. Aviator is provably fair — each round's crash point is committed before the round starts and can be verified after. The house edge comes from the game's built-in RTP, not from manipulating outcomes. The current RTP value is shown inside the game's info panel and may vary by provider build." },
        { q: "What's the safest auto cash-out value?", a: "There is no safe value — every value has negative expected value over the long run. Low multipliers (1.30x-1.50x) hit more often but pay less; high ones pay more but hit rarely. Pick what matches your bankroll plan, not what feels lucky." },
        { q: "Can I use a script or bot on JeetBuzz Aviator?", a: "No. Third-party automation breaches JeetBuzz terms and can lead to balance forfeiture. The in-game auto cash-out and auto bet features are the only sanctioned automation." },
        { q: "Does the welcome bonus work on Aviator?", a: "Casino welcome bonuses on JeetBuzz typically exclude or only partially count crash-style games toward wagering. Read the bonus T&Cs in the cashier before opting in — see our Welcome Bonus guide." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "Aviator কি কারচুপি করা?", a: "না। Aviator provably fair — প্রতিটি রাউন্ডের ক্র্যাশ পয়েন্ট রাউন্ড শুরুর আগেই কমিট করা হয় এবং পরে যাচাই করা যায়। হাউস এজ আসে গেমের বিল্ট-ইন RTP থেকে, ফলাফল কারচুপি থেকে নয়। সঠিক RTP মান গেমের ইন-গেম ইনফো প্যানেলে দেখানো থাকে এবং প্রোভাইডার বিল্ড অনুযায়ী পরিবর্তিত হতে পারে।" },
          { q: "Auto Cash Out-এর ‘নিরাপদ’ ভ্যালু কত?", a: "কোনো নিরাপদ ভ্যালু নেই — দীর্ঘমেয়াদে সব মানেরই expected value নেগেটিভ। ১.৩০x–১.৫০x বেশি হিট করে কিন্তু পেআউট কম; বড় মাল্টিপ্লায়ার বিরল কিন্তু বেশি দেয়। ব্যাংকরোল প্ল্যানের সঙ্গে যেটা মেলে সেটাই বেছে নিন।" },
          { q: "Aviator-এ স্ক্রিপ্ট/বট ব্যবহার করা যাবে?", a: "না। তৃতীয় পক্ষের অটোমেশন JeetBuzz টার্মস ভঙ্গ করে এবং ব্যালেন্স বাজেয়াপ্ত হতে পারে। শুধু ইন-গেম Auto Cash Out ও Auto Bet অনুমোদিত।" },
          { q: "ওয়েলকাম বোনাস কি Aviator-এ কাজ করে?", a: "ক্যাসিনো ওয়েলকাম বোনাস সাধারণত ক্র্যাশ গেমকে ওয়েজারিং-এ আংশিক বা শূন্য কন্ট্রিবিউশন দেয়। অপ্ট-ইন করার আগে [ওয়েলকাম বোনাস](/welcome-bonus) শর্ত দেখুন।" },
          { q: "একই সঙ্গে দুটি বেট রাখা কি ভালো কৌশল?", a: "একটি নিচু টার্গেটে (যেমন ১.৫x) ও অন্যটি উচ্চতর টার্গেটে রাখলে ভ্যারিয়েন্স কিছুটা ভারসাম্যপূর্ণ হয়, তবে দীর্ঘমেয়াদে EV নেগেটিভই থাকে।" },
        ],
      }}
      related={[
        { to: "/casino-guide", title: "Casino Guide" },
        { to: "/welcome-bonus", title: "Welcome Bonus" },
        { to: "/deposit-guide", title: "Deposit Guide" },
        { to: "/responsible-gaming", title: "Responsible Gaming" },
      ]}
    />
  ),
});