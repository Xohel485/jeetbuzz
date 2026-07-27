import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangXDefaultOnly, ogUrl } from "@/lib/schema";
import { LAST_VERIFIED } from "@/lib/affiliate";
import { NETWORK_SITES, NETWORK_BYLINE, NETWORK_DISCLOSURE, NETWORK_INTERNAL_BLOCK } from "@/lib/network-sites";

const ROUTE = "/network";
const TITLE = "আমাদের গাইড নেটওয়ার্ক — MCW Casino, Baji Live, TekkaBuzz ও BetTekka";
const DESC =
  "GetJeetBuzz টিমের পাঁচটি স্বাধীন বাংলা গাইড সাইট এক পাতায়: MCW Casino login, Baji Live login, TekkaBuzz login, TekkaBuzz 88 app download ও BetTekka registration — মালিকানা, সম্পাদকীয় মান ও যাচাই পদ্ধতিসহ।";

export const Route = createFileRoute("/network/")({
  head: () => ({
    meta: [
      { title: TITLE + " | GetJeetBuzz" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index,follow" },
      ogUrl(ROUTE),
    ],
    links: [canonicalLink(ROUTE), ...hreflangXDefaultOnly(ROUTE)],
  }),
  component: () => (
    <GuidePage
      eyebrow={`নেটওয়ার্ক · শেষ আপডেট: ${LAST_VERIFIED}`}
      title="GetJeetBuzz গাইড নেটওয়ার্ক"
      subtitle="একই সম্পাদকীয় দলের পরিচালিত পাঁচটি স্বাধীন বাংলা গাইড সাইট — কে কোন অপারেটর কভার করে, কীভাবে তথ্য যাচাই হয় এবং কোথায় কী পাবেন।"
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Network", path: ROUTE }]}
      articlePath={ROUTE}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "GetJeetBuzz maintains five independent Bengali-language guide sites covering different operators in the Bangladesh market. See the Bengali section for the full overview of each property, its editorial scope and how we verify payment and bonus claims.",
      ]}
      bodyByLocale={{
        bn: [
          ...NETWORK_BYLINE,
          "## নেটওয়ার্ক কী এবং কেন",
          "GetJeetBuzz শুধু একটি সাইট নয়। বাংলাদেশের অনলাইন গেমিং বাজারে ব্যবহারকারীরা একাধিক অপারেটর নিয়ে সার্চ করেন — কেউ MCW বা Mega Casino World খোঁজেন, কেউ Baji Live, কেউ আবার নতুন TekkaBuzz বা BetTekka। প্রতিটি অপারেটরের পেমেন্ট প্রক্রিয়া, বোনাস শর্ত, অ্যাপ ইনস্টল পদ্ধতি ও সাপোর্ট রেসপন্স আলাদা। একই পাতায় সব অপারেটর ঢুকিয়ে দিলে তথ্য হালকা হয়ে যায় এবং কোনোটিই যথেষ্ট গভীর হয় না।",
          "এই কারণে আমরা প্রতিটি বড় অপারেটরের জন্য আলাদা ডোমেইনে আলাদা গাইড সাইট রাখি। প্রতিটি সাইটের নিজস্ব লেখক-নোট, নিজস্ব পেমেন্ট টেস্ট লগ এবং নিজস্ব আপডেট চক্র আছে। এই পেজটি সেই নেটওয়ার্কের কেন্দ্রীয় সূচি — কোন সাইট কী কভার করে তা এক নজরে দেখে আপনি সরাসরি প্রয়োজনীয় গাইডে যেতে পারবেন।",
          "## সাইটগুলো এক নজরে",
          "| সাইট | ফোকাস | ঠিকানা |",
          "| --- | --- | --- |",
          ...NETWORK_SITES.map((s) => `| [${s.anchor}](${s.url}) | ${s.note} | ${s.domain} |`),
          "## কোন সাইটে কখন যাবেন",
          "**MCW Casino:** আপনি যদি লাইভ ক্যাসিনো টেবিল, স্লট প্রোভাইডার তুলনা বা MCW-এর লগইন ও অ্যাকাউন্ট রিকভারি নিয়ে জানতে চান, তাহলে [MCW Casino login](https://mcwcasino.guru) গাইডটি সবচেয়ে প্রাসঙ্গিক। Semrush-এর বাংলাদেশ ডেটাবেসে ‘mcw’ সম্পর্কিত সার্চ মাসে ৬ মিলিয়নের বেশি, যার মধ্যে ‘mcw login’ একাই ৩ লাখের ওপরে — অর্থাৎ লগইন ও অ্যাক্সেস সমস্যাই সবচেয়ে বড় প্রশ্ন।",
          "**Baji Live:** ক্রিকেট-কেন্দ্রিক বেটিং, এক্সচেঞ্জ মার্কেট এবং লাইভ স্ট্রিমিং নিয়ে খোঁজ করলে [Baji Live login](https://bajilive.world) দেখুন। BD-তে ‘baji live’ মাসিক সার্চ প্রায় ১০ লাখ, তবে প্রতিযোগিতাও সবচেয়ে বেশি — তাই সেখানে আমরা লগইন, অ্যাপ ও ডিপোজিটের নির্দিষ্ট সমস্যাগুলোতে ফোকাস করি।",
          "**TekkaBuzz:** নতুন ব্র্যান্ড, তুলনামূলকভাবে কম প্রতিযোগিতা। রেজিস্ট্রেশন, প্রথম ডিপোজিট ও বোনাস শর্তের ব্যাখ্যার জন্য [TekkaBuzz login](https://tekkabuzz.win) গাইড।",
          "**TekkaBuzz 88:** অ্যাপ-কেন্দ্রিক প্রশ্ন — APK কোথা থেকে নামাবেন, ইনস্টল করতে গিয়ে ‘blocked by Play Protect’ এলে কী করবেন, আপডেট কীভাবে হয় — এসবের জন্য [TekkaBuzz 88 app download](https://tekkabuzz88.online)।",
          "**BetTekka:** সাইন আপ, KYC ভেরিফিকেশন ও উইথড্রয়াল প্রক্রিয়ার ধাপে ধাপে ব্যাখ্যা [BetTekka registration](https://bettekka.pro) পেজে।",
          "## আমরা কীভাবে তথ্য যাচাই করি",
          "নেটওয়ার্কের প্রতিটি সাইট একই পাঁচ-ধাপের যাচাই প্রক্রিয়া মানে। প্রথমত, আমরা নিজস্ব অ্যাকাউন্ট দিয়ে ছোট অঙ্কের প্রকৃত ডিপোজিট ও উইথড্রয়াল করি এবং সময় লিপিবদ্ধ করি — বিজ্ঞাপনের দাবি নয়, প্রকৃত সময়। দ্বিতীয়ত, বোনাস শর্তের টার্নওভার, ম্যাক্স উইন ক্যাপ ও ভ্যালিডিটি অপারেটরের টার্মস পেজ থেকে হুবহু নোট করা হয়। তৃতীয়ত, লাইসেন্স নম্বর ইস্যুকারী কর্তৃপক্ষের ভেরিফিকেশন পেজে মিলিয়ে দেখা হয়।",
          "চতুর্থত, প্রতিটি অ্যাপ ইনস্টল ফাইলের হ্যাশ ও সাইনিং তথ্য পরীক্ষা করে তবেই ডাউনলোড নির্দেশনা প্রকাশ করা হয়। পঞ্চমত, প্রতি ৯০ দিনে সব দাবি পুনরায় পরীক্ষা করা হয়; কোনো তথ্য পুরনো হলে পেজে তারিখসহ সংশোধন যোগ করা হয়।",
          "## নেটওয়ার্ক সাইটগুলোর মধ্যে পার্থক্য",
          "একই টিম হলেও কনটেন্ট আলাদা রাখাটাই আমাদের নীতি। একই লেখা পাঁচ ডোমেইনে কপি করলে ব্যবহারকারীর কোনো উপকার হয় না এবং সার্চ ইঞ্জিনও সেটিকে ডুপ্লিকেট হিসেবে দেখে। প্রতিটি সাইটের কনটেন্ট সেই অপারেটরের নিজস্ব ইন্টারফেস স্ক্রিনশট, নিজস্ব ন্যূনতম ডিপোজিট, নিজস্ব সাপোর্ট চ্যানেল ও নিজস্ব সমস্যার তালিকা ধরে লেখা।",
          "উদাহরণ: MCW-তে ডিপোজিট রেফারেন্স আইডি ম্যানুয়ালি বসাতে হয়, Baji-তে সেটি ভিন্ন; TekkaBuzz 88-এর অ্যাপ আপডেট ইন-অ্যাপ প্রম্পট দিয়ে আসে, BetTekka-তে ম্যানুয়াল APK রিফ্রেশ লাগে। এই পার্থক্যগুলোই আলাদা গাইডের যৌক্তিকতা।",
          "## দায়িত্বশীল গেমিং",
          "নেটওয়ার্কের সব সাইটে একই দায়িত্বশীল গেমিং নীতি প্রযোজ্য: ১৮ বছরের কম বয়সীদের জন্য নয়, ধার করা টাকায় খেলা নয়, এবং ক্ষতি পুষিয়ে নিতে বাজির অঙ্ক বাড়ানো নয়। ডিপোজিট লিমিট ও সেলফ-এক্সক্লুশন টুল প্রতিটি অপারেটরেই আছে; কীভাবে সেট করবেন তা প্রতিটি গাইডে ব্যাখ্যা করা।",
          ...NETWORK_INTERNAL_BLOCK,
          ...NETWORK_DISCLOSURE,
        ],
      }}
      faqs={[
        { q: "What is the GetJeetBuzz network?", a: "Five independent Bengali-language guide sites run by the same editorial team, each covering a different operator: MCW Casino, Baji Live, TekkaBuzz, TekkaBuzz 88 and BetTekka." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "এই সাইটগুলো কি একই মালিকের?", a: "হ্যাঁ। mcwcasino.guru, bajilive.world, tekkabuzz.win, tekkabuzz88.online এবং bettekka.pro — পাঁচটি সাইটই GetJeetBuzz-এর একই সম্পাদকীয় দলের মালিকানাধীন ও পরিচালিত। এগুলো কোনো অপারেটরের অফিসিয়াল সাইট নয়, স্বাধীন গাইড সাইট।" },
          { q: "একই টিম হলে কনটেন্ট কি একই?", a: "না। প্রতিটি সাইটের কনটেন্ট আলাদাভাবে লেখা, কারণ প্রতিটি অপারেটরের ডিপোজিট প্রক্রিয়া, বোনাস শর্ত, অ্যাপ ইনস্টল ধাপ ও সাপোর্ট চ্যানেল ভিন্ন। কপি-পেস্ট কনটেন্ট আমাদের নীতিবিরুদ্ধ।" },
          { q: "আপনারা কি এই সাইটগুলো থেকে আয় করেন?", a: "রেফারেল কমিশন থেকে আয় হতে পারে। তবে কমিশন কোনো রেটিং, সুপারিশ বা পেমেন্ট-সময়ের তথ্যকে প্রভাবিত করে না। প্রতিটি পেজে অ্যাফিলিয়েট ডিসক্লোজার স্পষ্টভাবে দেওয়া থাকে।" },
          { q: "কোন সাইট থেকে শুরু করব?", a: "আপনি যে অপারেটর ব্যবহার করছেন সেই সাইট থেকে। MCW ব্যবহারকারী হলে mcwcasino.guru, ক্রিকেট বেটিং করলে bajilive.world, নতুন ব্র্যান্ড চেষ্টা করতে চাইলে tekkabuzz.win বা bettekka.pro।" },
          { q: "তথ্য কত দিন পরপর আপডেট হয়?", a: "প্রতি ৯০ দিনে সব প্রধান দাবি পুনরায় যাচাই করা হয়। বোনাস বা পেমেন্ট নিয়ম বদলালে তার আগেই আপডেট দেওয়া হয় এবং পেজে সংশোধনের তারিখ উল্লেখ থাকে।" },
          { q: "এই সাইটগুলো কি নিরাপদ?", a: "আমাদের কোনো সাইট আপনার অ্যাকাউন্ট পাসওয়ার্ড, OTP বা কার্ড তথ্য চায় না। কেউ এই নাম ব্যবহার করে এমন তথ্য চাইলে সেটি ফিশিং — কখনো দেবেন না।" },
        ],
      }}
    />
  ),
});