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
      subtitleByLocale={{
        bn: "এক্সচেঞ্জ সাধারণ স্পোর্টসবুক নয় — এখানে আপনি অন্য ব্যবহারকারীর বিরুদ্ধে বাজি ধরছেন, JeetBuzz-এর বিরুদ্ধে নয়। ফলে অডস, লায়াবিলিটি ও কমিশনের নিয়ম আলাদা। BPL, IPL ও PSL বেটরদের জন্য ব্যবহারিক বাংলা সংস্করণ।",
      }}
      bodyByLocale={{
        bn: [
          "## এক্সচেঞ্জ বনাম স্পোর্টসবুক — মূল পার্থক্য",
          "স্পোর্টসবুকে JeetBuzz নিজেই অডস ঠিক করে এবং আপনার বেটের বিপরীত পক্ষ নেয়। এক্সচেঞ্জে অডস ঠিক করে অন্য ব্যবহারকারীরা — আপনি যখন কোনো দলকে **Back** করেন, অন্য কেউ তাকে **Lay** করছে। JeetBuzz মার্জিন না নিয়ে নেট উইনিংয়ের উপর সামান্য কমিশন নেয়, তাই একই ম্যাচে এক্সচেঞ্জের দাম সাধারণত বুকের চেয়ে শার্প হয়।",
          "## Back ও Lay — সহজ ভাষায়",
          "- **Back** = একটি ঘটনা ঘটবে এই বাজি (যেমন ভারতকে ১.৮৫ অডসে Back)। ঠিক হলে = স্টেক × (odds-১) লাভ।",
          "- **Lay** = একটি ঘটনা ঘটবে না এই বাজি (যেমন ভারতকে ১.৮৫-এ Lay)। ভারত হারলে বা ড্র হলে আপনি ব্যাকারের স্টেক পাবেন; কিন্তু ভারত জিতলে স্টেক × (odds-১) দিতে হবে — এই এক্সপোজারকে **লায়াবিলিটি** বলে, কনফার্ম করার আগেই দেখানো হয়।",
          "## কমিশন",
          "এক্সচেঞ্জ কমিশন নেয় প্রতিটি মার্কেটের নেট উইনিং-এর উপর — ক্ষতিতে নয়। এটি প্রতিটি জিতন্ত বেটের উপর সামান্য টানা হিসেবে দেখুন, ক্লিক-প্রতি ফি নয়। JeetBuzz এক্সচেঞ্জ ইনফো পেজে বর্তমান কমিশন রেট দেখানো থাকে।",
          "## ইন-প্লে ও Matched Odds",
          "এক্সচেঞ্জে অডস তখনই পূরণ হয় যখন বিপরীত পক্ষ ম্যাচ করে। শান্ত মার্কেটে আপনার Back/Lay unmatched হয়ে বসে থাকতে পারে। উইকেট, ছক্কা বা শেষ ওভারের মতো দ্রুত মুহূর্তে ট্যাপ করার আগেই দাম সরে যেতে পারে — JeetBuzz নতুন দামটি অফার করে, আপনি গ্রহণ বা বাতিল করতে পারেন।",
          "## লিগ-ভিত্তিক প্রেক্ষাপট",
          "- **BPL (বাংলাদেশ):** জানুয়ারির শেষ / ফেব্রুয়ারির শুরু। মিরপুরের পিচ স্পিন-বান্ধব, তাই মিড-ইনিংস টোটাল মার্কেটে এক্সচেঞ্জে সবচেয়ে বেশি লিকুইডিটি।",
          "- **IPL (ভারত):** মার্চ–মে। বছরের সবচেয়ে গভীর ক্রিকেট এক্সচেঞ্জ — মধ্য-স্টেক প্লেয়ারও দাম প্রায় নাড়াতে পারে না।",
          "- **PSL (পাকিস্তান):** ফেব্রুয়ারি–মার্চ। লাহোর ও মুলতানের পিচ ব্যাটিং-বান্ধব; টুর্নামেন্ট শেষের দিকে টপ-ব্যাটার ও টোটাল রান মার্কেট বেশি অ্যাকশন পায়।",
          "## ব্যাংকরোল ও দায়িত্বশীল প্লে",
          "Lay লায়াবিলিটিই অ্যাকাউন্ট ফাটানোর প্রধান কারণ। ৫.০ অডসে ১,০০০ স্টেকের Lay-তে ৪,০০০-এর এক্সপোজার তৈরি হয়। শুধু স্টেক নয়, প্রতিটি মার্কেটে সর্বোচ্চ লায়াবিলিটির সীমা নির্ধারণ করুন।",
          "## পেমেন্ট",
          "একই রেইল — [bKash](/bkash-guide), [Nagad](/nagad-guide), [Rocket](/rocket-guide), USDT TRC20। উইথড্রয়াল সাধারণত যেই রেইল দিয়ে ডিপোজিট করেছেন সেটিতেই ফেরত আসে।",
        ],
      }}
      faqs={[
        { q: "Is the exchange better odds than the sportsbook?", a: "Usually yes on liquid cricket markets like IPL — exchange prices have no built-in margin, only a commission on net winnings. On thin markets the exchange can be worse because depth is shallow." },
        { q: "What's the difference between back and lay?", a: "Back = the outcome happens; lay = the outcome does not happen. Lay bets carry liability greater than the stake at any odds above 2.0, so confirm liability before clicking." },
        { q: "Can I trade in-play (cash out before the match ends)?", a: "Yes — open a back, then place a lay at lower odds on the same selection (or vice versa) to lock a green book. JeetBuzz also offers Cash Out on supported markets when a counter-price exists." },
        { q: "Does the welcome bonus apply to exchange bets?", a: "Most operators exclude exchange turnover from sports welcome wagering because the house edge is commission, not margin. Read the bonus T&Cs in the cashier before opting in." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "এক্সচেঞ্জের অডস কি স্পোর্টসবুকের চেয়ে ভালো?", a: "IPL-এর মতো লিকুইড মার্কেটে সাধারণত হ্যাঁ — এক্সচেঞ্জে অডসে মার্জিন নেই, শুধু নেট উইনিং-এ কমিশন। ছোট মার্কেটে depth কম থাকায় কখনো বুক বেশি প্রতিযোগিতামূলক হতে পারে।" },
          { q: "Back ও Lay-এর পার্থক্য কী?", a: "Back = ঘটনা ঘটবে; Lay = ঘটনা ঘটবে না। ২.০-এর বেশি যেকোনো অডসে Lay বেটের লায়াবিলিটি স্টেকের চেয়ে বেশি — কনফার্ম করার আগে দেখানো লায়াবিলিটি অবশ্যই পড়ুন।" },
          { q: "ম্যাচ শেষ হওয়ার আগে কি ‘ট্রেড’ করে লক করা যায়?", a: "হ্যাঁ — একটি Back খোলার পর একই সিলেকশনে কম অডসে Lay (বা বিপরীত) দিলে green book লক হয়। JeetBuzz সমর্থিত মার্কেটে Cash Out অপশনও দেয়।" },
          { q: "ওয়েলকাম বোনাস কি এক্সচেঞ্জ বেটে কাজ করে?", a: "বেশিরভাগ অপারেটর এক্সচেঞ্জ টার্নওভার ওয়েলকাম ওয়েজারিং থেকে বাদ দেয়, কারণ এখানে হাউস এজ মার্জিন নয় — কমিশন। অপ্ট-ইন করার আগে শর্ত পড়ুন।" },
          { q: "Unmatched বেট কতক্ষণ পর্যন্ত থাকে?", a: "মার্কেট খোলা থাকা পর্যন্ত — মিলে গেলে এক্টিভ হয়, ম্যাচ শুরু হলে বা মার্কেট suspend হলে বাতিল হয়।" },
        ],
      }}
      related={[
        { to: "/sports-betting", title: "Sports Betting" },
        { to: "/live-cricket-betting", title: "Live Cricket Betting" },
        { to: "/jeetbuzz-review", title: "JeetBuzz Review" },
        { to: "/responsible-gaming", title: "Responsible Gaming" },
      ]}
    />
  ),
});