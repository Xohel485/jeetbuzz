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
      titleByLocale={{
        bn: <>JeetBuzz <span className="gold-text">এজেন্ট</span> ও Affiliate আয় গাইড</>,
      }}
      subtitle="Two different programs sit under one umbrella: the affiliate program (you send traffic, you get paid on net player loss) and the agent program (you onboard and manage players directly). This guide explains both honestly."
      subtitleByLocale={{
        bn: "একই ছাতার নিচে দুটি আলাদা প্রোগ্রাম: Affiliate (ট্রাফিক পাঠান, প্লেয়ারের নেট লসের ওপর কমিশন) এবং Agent (নিজে প্লেয়ার অনবোর্ড ও পরিচালনা)। দুটির পার্থক্য সরল বাংলায়।",
      }}
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
      bodyByLocale={{
        bn: [
          "## Affiliate বনাম Agent — কোনটি আপনার জন্য?",
          "**Affiliate:** নিজের ব্লগ, YouTube চ্যানেল, Telegram বা Facebook পেজে কনটেন্ট প্রকাশ করেন, ট্র্যাকড লিংক শেয়ার করেন এবং সেই লিংক দিয়ে রেজিস্টার করা প্লেয়ারদের **নেট গেমিং রেভিনিউ (NGR)**-এর একটি অংশ পান।",
          "**Agent:** নিজে প্লেয়ার onboarding করেন, প্রায়ই স্থানীয় bKash/Nagad লেনদেন পরিচালনা করেন এবং আপনার নেটওয়ার্কের জন্য ব্যক্তিগত দায়িত্ব নেন — বিনিময়ে কমিশনের অংশও তুলনামূলক বেশি।",
          "বেশিরভাগ পাবলিশারের শুরু করা উচিত Affiliate হিসেবে। Agent মডেল শুধু তখনই উপযোগী, যখন আপনার আগে থেকেই অফলাইন প্লেয়ার নেটওয়ার্ক আছে এবং দায়িত্বশীলভাবে ক্যাশফ্লো সামলাতে পারবেন।",
          "## কমিশন মডেলগুলো চিনুন",
          "- **RevShare (Revenue Share):** প্লেয়ারের নেট লসের শতাংশ, মাসিক পেআউট। কনটেন্ট অ্যাফিলিয়েটদের জন্য মান।",
          "- **CPA:** প্রতিটি যোগ্য FTD (প্রথম ডিপোজিট) এর বিপরীতে নির্দিষ্ট পেআউট।",
          "- **Hybrid:** ছোট CPA + ছোট RevShare — অনুমেয় ক্যাশফ্লোর জন্য ভালো।",
          "- **Sub-affiliate:** আপনি যাকে রেফার করেছেন, তার আয়ের ছোট একটি অংশ।",
          "নির্দিষ্ট শতাংশ, tier এবং যোগ্যতার শর্ত অফার ও দেশের ওপর নির্ভর করে বদলায় — প্রকাশের আগে JeetBuzz Affiliate ড্যাশবোর্ডে চলমান schedule যাচাই করুন। কোনো নির্দিষ্ট আয় আগে থেকে গ্যারান্টি দেওয়া যাবে না।",
          "## পেআউট রেল",
          "- **বাংলাদেশ:** bKash, Nagad ও ব্যাংক ট্রান্সফার সবচেয়ে কমন। ছোট প্রকাশকদের জন্য MFS সাধারণত সবচেয়ে সুবিধাজনক।",
          "- **পাকিস্তান:** JazzCash, EasyPaisa, ব্যাংক।",
          "- **ভারত:** UPI ও ব্যাংক।",
          "- **ক্রস-বর্ডার:** বড় পার্টনারদের জন্য USDT (TRC-20) বহুল ব্যবহৃত।",
          "পেআউট সাধারণত নির্দিষ্ট সিডিউলে এবং মিনিমাম থ্রেশহোল্ড পার করলে হয়। সঠিক সময় ও মিনিমাম অফিসিয়াল ড্যাশবোর্ডে দেখানো হয়।",
          "## বিপণনের শৃঙ্খলা — যা করলে অ্যাকাউন্ট সাসপেন্ড হতে পারে",
          "- Google Ads-এ JeetBuzz ব্র্যান্ড কীওয়ার্ডে বিড।",
          "- অপ্রাসঙ্গিক WhatsApp/SMS spam বা ক্রয়কৃত লিস্টে cold message।",
          "- ১৮-এর কম বয়সী বা যেসব দেশে অনলাইন বেটিং নিষিদ্ধ সেখানে টার্গেটিং।",
          "- নিশ্চিত জিতের প্রতিশ্রুতি বা ভুয়া বোনাস বিজ্ঞাপন।",
          "- Cookie stuffing, iframe stuffing বা undisclosed redirect।",
          "প্রকাশ করা প্রতিটি কনটেন্টে স্পষ্ট affiliate disclosure থাকা জরুরি — আমাদের [Affiliate Disclosure](/affiliate-disclosure) পেজে ব্যবহৃত ভাষা দেখে নিন।",
          "## আসল টুল যেগুলো লাগবেই",
          "- ড্যাশবোর্ডের ট্র্যাকড লিংক ও sub-ID।",
          "- একটি সাধারণ ল্যান্ডিং পেজ — সত্যিকারের রিভিউ, শুধু redirect নয়।",
          "- পেইড ট্রাফিক স্কেল করলে S2S/postback সেটআপ।",
          "- একটি স্প্রেডশিট, যা প্রতি মাসে ড্যাশবোর্ডের NGR-এর সঙ্গে আপনার ইনভয়েস কমিশন মেলায়।",
          "## বাস্তবিক আয়ের প্রত্যাশা",
          "দক্ষিণ এশিয়ার ফোকাসড কনটেন্ট অ্যাফিলিয়েটদের আয়ের বেশিরভাগ আসে অল্প সংখ্যক উচ্চ-LTV প্লেয়ার থেকে — শুধু সাইনআপের সংখ্যা থেকে নয়। একজন প্রকৃত ক্রিকেট-বেটিং পাঠক যিনি BPL/IPL মৌসুমে নিয়মিত খেলেন, তিনি একশো ‘এক ডিপোজিট দিয়েই চলে যাওয়া’ সাইনআপের চেয়ে বেশি মূল্যবান। তাই কনটেন্টের মান, সততা এবং নির্দিষ্ট দর্শকের জন্য প্রাসঙ্গিকতাই দীর্ঘমেয়াদে বেশি কার্যকর — দ্রুত বিজ্ঞাপন স্প্যাম নয়।",
          "## পরবর্তী ধাপ",
          "শুরু করতে চাইলে আমাদের [Affiliate Program](/affiliate-program) পেজে রেজিস্ট্রেশন প্রবাহ ও [Affiliate Login](/affiliate-login)-এ পোর্টাল গাইড দেখে নিন।",
          "> দায়িত্বশীল মার্কেটিং: ১৮+। কোনো ক্ষেত্রেই ‘নিশ্চিত আয়’ বা ‘গ্যারান্টিড জয়’ প্রচার করা যাবে না।",
        ],
      }}
      faqs={[
        { q: "Do I need a company to join?", a: "No — individuals can sign up. For larger monthly payouts you may need to provide tax/KYC documents, which is normal for any affiliate program." },
        { q: "How do I get paid in Bangladesh?", a: "bKash, Nagad or bank transfer are the standard rails. Set your preferred payout method in the partner dashboard and confirm the receiving account name matches your registered partner name." },
        { q: "Can I run paid ads on Google / Meta?", a: "Yes for compliant ad networks, but you may not bid on JeetBuzz brand keywords or run ads in countries where online gambling is restricted. Always check the program's PPC policy first." },
        { q: "What's the difference between agent and affiliate?", a: "Affiliate = traffic and content, commission on NGR, no player handling. Agent = you onboard and manage players directly, often handle local cash-in/cash-out, higher commission but more operational risk." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "যোগ দিতে কি কোম্পানি থাকা লাগবে?", a: "না — ব্যক্তি হিসেবেও সাইনআপ করা যায়। বড় মাসিক পেআউটের জন্য কর/KYC ডকুমেন্ট চাইতে পারে, যা যেকোনো affiliate প্রোগ্রামের জন্য স্বাভাবিক।" },
          { q: "বাংলাদেশে পেআউট কীভাবে আসে?", a: "bKash, Nagad বা ব্যাংক ট্রান্সফার সবচেয়ে কমন রেল। ড্যাশবোর্ডে পেআউট পদ্ধতি সেট করুন এবং নিশ্চিত করুন গ্রহীতার নাম আপনার রেজিস্টার্ড partner নামের সঙ্গে মেলে।" },
          { q: "Google/Meta-তে পেইড অ্যাড চালাতে পারব?", a: "সম্মতিযোগ্য নেটওয়ার্কে চালানো যায়, কিন্তু JeetBuzz ব্র্যান্ড কীওয়ার্ডে বিড বা বেটিং নিষিদ্ধ দেশে অ্যাড চালানো যাবে না। প্রোগ্রামের PPC নীতি আগেই পড়ে নিন।" },
          { q: "Agent আর Affiliate-এর পার্থক্য কী?", a: "Affiliate = ট্রাফিক ও কনটেন্ট, NGR-এর ওপর কমিশন, প্লেয়ার পরিচালনা নয়। Agent = সরাসরি প্লেয়ার onboard ও পরিচালনা, স্থানীয় cash-in/cash-out — বেশি কমিশন, কিন্তু বেশি অপারেশনাল ঝুঁকি।" },
          { q: "কমিশন গ্যারান্টি কতটুকু?", a: "কোনো affiliate প্রোগ্রাম নির্দিষ্ট আয় গ্যারান্টি করে না। কমিশন প্লেয়ারের প্রকৃত কার্যকলাপ ও অফিসিয়াল চুক্তির শর্ত অনুযায়ী হিসাব হয়।" },
          { q: "প্লেয়ারকে ‘নিশ্চিত জয়’ অফার করা যাবে?", a: "একেবারেই না। এমন কনটেন্ট affiliate চুক্তি ভঙ্গ করে এবং অ্যাকাউন্ট সাসপেনশনের কারণ হয়। সর্বদা দায়িত্বশীল গেমিং ভাষা ব্যবহার করুন।" },
        ],
      }}
      related={[
        { to: "/affiliate-program", title: "Affiliate Program" },
        { to: "/affiliate-disclosure", title: "Affiliate Disclosure" },
        { to: "/affiliate-login", title: "Affiliate Login" },
        { to: "/jeetbuzz-review", title: "JeetBuzz Review" },
      ]}
    />
  ),
});