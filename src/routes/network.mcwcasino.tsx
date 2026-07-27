import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangXDefaultOnly, ogUrl } from "@/lib/schema";
import { LAST_VERIFIED } from "@/lib/affiliate";
import { NETWORK_BYLINE, NETWORK_DISCLOSURE, NETWORK_INTERNAL_BLOCK, siblingNetworkBlock, networkSite } from "@/lib/network-sites";

const SITE = networkSite("mcwcasino");
const ROUTE = SITE.path;
const TITLE = "MCW Casino (Mega Casino World) বাংলা গাইড — লগইন, লাইভ ক্যাসিনো ও ডিপোজিট";
const DESC =
  "MCW Casino login, Mega Casino World অ্যাকাউন্ট রিকভারি, লাইভ ক্যাসিনো টেবিল, bKash-Nagad ডিপোজিট ও উইথড্রয়াল সময় — mcwcasino.guru গাইড সাইটের সম্পূর্ণ পরিচিতি।";

export const Route = createFileRoute("/network/mcwcasino")({
  head: () => ({
    meta: [
      { title: TITLE + " | GetJeetBuzz" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { name: "robots", content: "index,follow" },
      ogUrl(ROUTE),
    ],
    links: [canonicalLink(ROUTE), ...hreflangXDefaultOnly(ROUTE)],
  }),
  component: () => (
    <GuidePage
      eyebrow={`নেটওয়ার্ক প্রোফাইল · শেষ আপডেট: ${LAST_VERIFIED}`}
      title="MCW Casino গাইড — mcwcasino.guru"
      subtitle="Mega Casino World নিয়ে বাংলাদেশে সবচেয়ে বেশি প্রশ্ন লগইন ও ডিপোজিট নিয়ে। আমাদের ডেডিকেটেড গাইড সাইট কী কভার করে, তার বিস্তারিত।"
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Network", path: "/network" }, { name: "MCW Casino", path: ROUTE }]}
      articlePath={ROUTE}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "mcwcasino.guru is our dedicated Bengali guide to Mega Casino World (MCW): login and account recovery, live casino tables, bKash and Nagad deposits, and realistic withdrawal timings. Full detail in the Bengali section.",
      ]}
      bodyByLocale={{
        bn: [
          ...NETWORK_BYLINE,
          "## MCW কেন আলাদা গাইড দাবি করে",
          "Mega Casino World, সংক্ষেপে MCW, বাংলাদেশে সবচেয়ে বেশি সার্চ হওয়া গেমিং ব্র্যান্ডগুলোর একটি। Semrush-এর BD ডেটাবেসে ‘mcw’ সম্পর্কিত সার্চ মাসে ৬১ লাখের বেশি, ‘mcw login’ প্রায় ৩,০১,০০০ এবং ‘mcw casino’ ৯০,৫০০। এই সংখ্যাগুলো একটি স্পষ্ট বার্তা দেয়: ব্যবহারকারীদের প্রধান সমস্যা ব্র্যান্ড খুঁজে পাওয়া নয়, বরং অ্যাকাউন্টে ঢোকা।",
          "MCW-এর ইন্টারফেসে লগইন ফ্লো JeetBuzz বা Baji-এর চেয়ে আলাদা। ইউজারনেম-ভিত্তিক অ্যাকাউন্ট, আলাদা ‘MCW Asia’ ডোমেইন ভ্যারিয়েন্ট এবং একাধিক মিরর — এই তিনটি মিলে নতুন ব্যবহারকারীর জন্য বিভ্রান্তি তৈরি করে। তাই আমরা [MCW Casino login](https://mcwcasino.guru) গাইডে শুধু এই অপারেটরের নিজস্ব ধাপগুলো ব্যাখ্যা করি, সাধারণ পরামর্শ নয়।",
          "## গাইড সাইটে কী কী আছে",
          "প্রথম অংশ অ্যাক্সেস ও নিরাপত্তা নিয়ে: সঠিক ডোমেইন চেনা, ‘mcw login bd’ সার্চে আসা ভুয়া মিররগুলো এড়ানো, পাসওয়ার্ড রিসেটের সঠিক ক্রম এবং ফোন নম্বর বদলে গেলে অ্যাকাউন্ট পুনরুদ্ধারের প্রক্রিয়া। ISP ব্লকের ক্ষেত্রে DNS পরিবর্তনের ধাপ এবং কোন পদ্ধতি বাংলাদেশে বাস্তবে কাজ করে তা আলাদা করে লেখা।",
          "দ্বিতীয় অংশ ক্যাসিনো কনটেন্ট: MCW-এর লাইভ ডিলার টেবিল কোন প্রোভাইডার থেকে আসে, বাংলা-ভাষী ডিলার টেবিল কোথায়, বাকারাত ও রুলেটের সর্বনিম্ন বাজি কত, এবং ক্র্যাশ গেমের RTP কীভাবে যাচাই করবেন।",
          "তৃতীয় অংশ পেমেন্ট: bKash, Nagad ও Rocket-এ ন্যূনতম ডিপোজিট, রেফারেন্স আইডি বসানোর সঠিক নিয়ম (MCW-তে এটি ম্যানুয়াল, ভুল হলে টাকা আটকে যায়), এবং উইথড্রয়ালের প্রকৃত সময় — যা আমরা নিজস্ব লেনদেনে মেপে লিপিবদ্ধ করি।",
          "চতুর্থ অংশ সমস্যা-সমাধান: ‘deposit successful but balance not updated’, ‘withdrawal pending’, KYC ডকুমেন্ট রিজেক্ট, এবং অ্যাকাউন্ট সাসপেনশনের কারণ ও আপিলের ধাপ।",
          "## কীওয়ার্ড ফোকাস",
          "গাইড সাইটটি যে অনুসন্ধানগুলোর জন্য লেখা: mcw login, mcw লগইন, mcw casino login, mcw login bd, mega casino world, mega casino login, mcw asia। প্রতিটির জন্য আলাদা সেকশন আছে, কারণ ‘mcw asia’ খোঁজা ব্যবহারকারী আর ‘mega casino login’ খোঁজা ব্যবহারকারীর প্রশ্ন এক নয়।",
          "## কারা এই গাইড পড়বেন",
          "নতুন ব্যবহারকারী যিনি প্রথমবার অ্যাকাউন্ট খুলছেন; পুরনো ব্যবহারকারী যিনি লগইন করতে পারছেন না; এবং যিনি ডিপোজিট করেছেন কিন্তু ব্যালেন্স দেখছেন না। তিন ধরনের পাঠকের জন্য তিনটি আলাদা প্রবেশপথ সাইটের হোমপেজেই দেওয়া।",
          "## JeetBuzz-এর সাথে তুলনা প্রসঙ্গে",
          "আমরা নেটওয়ার্কের কোনো সাইটে ‘X ভালো, Y খারাপ’ ধরনের র‍্যাঙ্কিং দিই না। বরং প্রতিটি অপারেটরের নিজস্ব শর্ত তুলে ধরি, যাতে পাঠক নিজে সিদ্ধান্ত নিতে পারেন। JeetBuzz-এর শর্তগুলো দেখতে [JeetBuzz রিভিউ](/jeetbuzz-review) পড়ুন, আর MCW-এর জন্য নেটওয়ার্ক সাইটটি দেখুন।",
          ...siblingNetworkBlock(SITE.slug),
          ...NETWORK_INTERNAL_BLOCK,
          ...NETWORK_DISCLOSURE,
        ],
      }}
      faqs={[
        { q: "What does mcwcasino.guru cover?", a: "MCW (Mega Casino World) login and recovery, live casino tables, bKash/Nagad deposits with manual reference IDs, withdrawal timings and common account issues, written in Bengali." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "mcwcasino.guru কি MCW-এর অফিসিয়াল সাইট?", a: "না। এটি GetJeetBuzz টিমের পরিচালিত একটি স্বাধীন বাংলা গাইড সাইট। এখানে MCW ব্যবহারের নির্দেশনা ও শর্ত ব্যাখ্যা করা হয়, কিন্তু অ্যাকাউন্ট, ব্যালেন্স বা পেমেন্ট এই সাইট নিয়ন্ত্রণ করে না।" },
          { q: "MCW লগইন করতে না পারলে প্রথমে কী করব?", a: "প্রথমে দেখুন ইউজারনেম ঠিক লিখেছেন কিনা — MCW ইমেইল নয়, ইউজারনেম-ভিত্তিক। এরপর পাসওয়ার্ড রিসেট চেষ্টা করুন। পেজ একেবারেই না খুললে সেটি সাধারণত ISP ব্লক; মোবাইল ডেটায় সুইচ করে বা DNS বদলে দেখুন।" },
          { q: "MCW-তে ডিপোজিট করেছি কিন্তু ব্যালেন্স আসেনি, কেন?", a: "সবচেয়ে সাধারণ কারণ ভুল বা অনুপস্থিত রেফারেন্স আইডি। MCW-তে bKash/Nagad পেমেন্টের সময় যে রেফারেন্স দেওয়া হয় সেটি হুবহু বসাতে হয়। ভুল হলে লেনদেন ম্যানুয়াল রিভিউতে যায়। ট্রানজেকশন আইডি ও স্ক্রিনশট নিয়ে সাপোর্টে যোগাযোগ করুন।" },
          { q: "‘MCW Asia’ আর ‘MCW Casino’ কি আলাদা?", a: "একই ব্র্যান্ডের আলাদা ডোমেইন উপস্থাপনা। সমস্যা হলো এই নামগুলো ব্যবহার করে অনেক ভুয়া মিরর তৈরি হয়। তাই ডোমেইন যাচাই না করে কোনো লিংকে লগইন করবেন না।" },
          { q: "উইথড্রয়ালে কত সময় লাগে?", a: "আমাদের নিজস্ব পরীক্ষায় সাধারণ সময়ে বেশিরভাগ মোবাইল ওয়ালেট উইথড্রয়াল কয়েক ঘণ্টার মধ্যে নিষ্পত্তি হয়। রাত ৮টা থেকে ১১টার পিক আওয়ার এবং সপ্তাহান্তে দেরি বেশি হয়। ২৪ ঘণ্টার বেশি হলে সাপোর্টে টিকিট দিন।" },
          { q: "KYC ডকুমেন্ট রিজেক্ট হলে কী করব?", a: "সাধারণত ঝাপসা ছবি, কাটা প্রান্ত বা মেয়াদোত্তীর্ণ ডকুমেন্টের কারণে রিজেক্ট হয়। NID-এর পুরো পৃষ্ঠা সমতল আলোয়, ফ্ল্যাশ ছাড়া তুলে আবার আপলোড করুন এবং নামের বানান অ্যাকাউন্টের সাথে হুবহু মেলান।" },
          { q: "গাইড সাইটে কি অ্যাকাউন্ট খোলা যায়?", a: "না। গাইড সাইটে কোনো রেজিস্ট্রেশন ফর্ম নেই এবং আমরা কখনো পাসওয়ার্ড বা OTP চাই না। কেউ এমন চাইলে সেটি ফিশিং।" },
        ],
      }}
    />
  ),
});