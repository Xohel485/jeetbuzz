import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangXDefaultOnly, ogUrl } from "@/lib/schema";
import { LAST_VERIFIED } from "@/lib/affiliate";
import { NETWORK_BYLINE, NETWORK_DISCLOSURE, NETWORK_INTERNAL_BLOCK, siblingNetworkBlock, networkSite } from "@/lib/network-sites";

const SITE = networkSite("bettekka");
const ROUTE = SITE.path;
const TITLE = "BetTekka বাংলা গাইড — সাইন আপ, ভেরিফিকেশন ও উইথড্রয়াল";
const DESC =
  "BetTekka registration, KYC ভেরিফিকেশন, ডিপোজিট পদ্ধতি ও উইথড্রয়ালের ধাপ — bettekka.pro গাইড সাইটে কী কী কভার করা হয় তার সম্পূর্ণ পরিচিতি।";

export const Route = createFileRoute("/network/bettekka")({
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
      title="BetTekka গাইড — bettekka.pro"
      subtitle="সাইন আপ থেকে প্রথম উইথড্রয়াল পর্যন্ত পুরো পথটি ধাপে ধাপে, বিশেষ করে KYC ভেরিফিকেশনের জায়গায় যেখানে বেশিরভাগ ব্যবহারকারী আটকান।"
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Network", path: "/network" }, { name: "BetTekka", path: ROUTE }]}
      articlePath={ROUTE}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "bettekka.pro is our Bengali guide to BetTekka: registration, KYC verification, deposit options and the withdrawal path, with an emphasis on the verification step where most users get stuck.",
      ]}
      bodyByLocale={{
        bn: [
          ...NETWORK_BYLINE,
          "## ফোকাস: অ্যাকাউন্ট লাইফসাইকেল",
          "BetTekka নেটওয়ার্কের সবচেয়ে নতুন সাইট এবং সার্চ ভলিউমও সবচেয়ে কম — Semrush-এর BD ডেটাবেসে ব্র্যান্ডটির জন্য এখনো উল্লেখযোগ্য ডেটা নেই। এই অবস্থায় সঠিক কৌশল হলো ভলিউম তাড়া না করে অ্যাকাউন্ট লাইফসাইকেলের প্রতিটি ধাপের জন্য গভীর, নির্ভুল কনটেন্ট তৈরি করা। [BetTekka registration](https://bettekka.pro) সাইটটি ঠিক সেভাবেই সাজানো: সাইন আপ, ভেরিফিকেশন, ডিপোজিট, বাজি, উইথড্রয়াল, অ্যাকাউন্ট ক্লোজার।",
          "## সাইন আপ",
          "রেজিস্ট্রেশনের সময় তিনটি সিদ্ধান্ত পরে বদলানো কঠিন: কারেন্সি, ফোন নম্বর এবং নামের বানান। গাইডে প্রতিটির প্রভাব ব্যাখ্যা করা — যেমন BDT-এর বদলে অন্য কারেন্সি বেছে নিলে bKash/Nagad ডিপোজিটে কনভার্শন লস হয় এবং কিছু প্রোমো অযোগ্য হয়ে যায়।",
          "## KYC ভেরিফিকেশন — সবচেয়ে বেশি আটকানোর জায়গা",
          "আমাদের অভিজ্ঞতায় নতুন ব্র্যান্ডে প্রথম উইথড্রয়াল আটকানোর প্রধান কারণ ডকুমেন্ট রিজেকশন। গাইডে আলাদা চেকলিস্ট আছে: NID-এর দুই পাশ, চার কোণা দৃশ্যমান, ফ্ল্যাশ ছাড়া সমতল আলো, ফাইল ফরম্যাট ও সাইজ সীমা, এবং সেলফি ভেরিফিকেশনে মুখ ঢেকে না রাখা। ঠিকানা প্রমাণ চাইলে কোন ইউটিলিটি বিল গ্রহণযোগ্য এবং তারিখ কত পুরনো হলে বাতিল হয় — সেটিও লেখা।",
          "নামের অমিল সবচেয়ে ব্যয়বহুল ভুল। ওয়ালেট অ্যাকাউন্টের মালিক আর গেমিং অ্যাকাউন্টের নাম আলাদা হলে উইথড্রয়াল বাতিল হয়, কারণ এটি তৃতীয় পক্ষের পেমেন্ট হিসেবে গণ্য হয় — প্রায় সব লাইসেন্সপ্রাপ্ত অপারেটরেই এটি নিষিদ্ধ।",
          "## ডিপোজিট ও উইথড্রয়াল",
          "গাইডে প্রতিটি পদ্ধতির ন্যূনতম-সর্বোচ্চ সীমা, প্রসেসিং সময় এবং সম্ভাব্য ফি আলাদা টেবিলে দেওয়া। আমরা অপারেটরের বিজ্ঞাপিত সময় নয়, নিজস্ব লেনদেনে মাপা সময় লিখি এবং কখন সেটি মাপা হয়েছে তার তারিখ উল্লেখ করি।",
          "উইথড্রয়াল অনুরোধ করার আগে খেয়াল রাখতে হবে সক্রিয় বোনাসের টার্নওভার শেষ হয়েছে কিনা। অসম্পূর্ণ টার্নওভার থাকলে উইথড্রয়াল দিলে অনেক ক্ষেত্রে বোনাস ও তার থেকে অর্জিত জয় বাতিল হয়ে যায়।",
          "## অ্যাকাউন্ট বন্ধ ও দায়িত্বশীল গেমিং",
          "কীভাবে ডিপোজিট লিমিট সেট করবেন, কুলিং-অফ পিরিয়ড নেবেন বা স্থায়ীভাবে সেলফ-এক্সক্লুড করবেন — গাইডের শেষ সেকশন পুরোটাই এই বিষয়ে। খেলা যদি আর বিনোদন না থেকে চাপ হয়ে দাঁড়ায়, বিরতি নেওয়াই সঠিক সিদ্ধান্ত। সাধারণ ভেরিফিকেশন প্রক্রিয়া বুঝতে আমাদের [ভেরিফিকেশন গাইড](/verification) পড়ুন।",
          ...siblingNetworkBlock(SITE.slug),
          ...NETWORK_INTERNAL_BLOCK,
          ...NETWORK_DISCLOSURE,
        ],
      }}
      faqs={[
        { q: "What does bettekka.pro cover?", a: "BetTekka registration choices, KYC document checklists, deposit and withdrawal limits with measured timings, bonus turnover pitfalls, and responsible gaming controls, written in Bengali." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "bettekka.pro কি অফিসিয়াল সাইট?", a: "না। এটি GetJeetBuzz টিমের একটি স্বাধীন বাংলা গাইড সাইট। এখানে ব্যবহারের ধাপ ও শর্ত ব্যাখ্যা করা হয়, অ্যাকাউন্ট বা অর্থ পরিচালনা করা হয় না।" },
          { q: "KYC ডকুমেন্ট কেন রিজেক্ট হয়?", a: "ঝাপসা ছবি, কাটা প্রান্ত, ফ্ল্যাশের প্রতিফলন, মেয়াদোত্তীর্ণ ডকুমেন্ট বা নামের অমিল — এই পাঁচটিই সবচেয়ে সাধারণ কারণ।" },
          { q: "অন্যের bKash নম্বরে উইথড্রয়াল করা যাবে?", a: "না। ওয়ালেটের মালিক ও গেমিং অ্যাকাউন্টের নাম একই হতে হবে। তৃতীয় পক্ষের পেমেন্ট প্রায় সব অপারেটরেই নিষিদ্ধ এবং এতে অ্যাকাউন্ট রিভিউতে যেতে পারে।" },
          { q: "বোনাস চালু থাকা অবস্থায় উইথড্রয়াল দিলে কী হয়?", a: "টার্নওভার অসম্পূর্ণ থাকলে বোনাস এবং সেটির থেকে অর্জিত জয় বাতিল হয়ে যেতে পারে; শুধু মূল ডিপোজিট ফেরত আসে। উইথড্রয়ালের আগে বোনাস স্ট্যাটাস দেখে নিন।" },
          { q: "প্রথম উইথড্রয়ালে কত সময় লাগে?", a: "ভেরিফিকেশন সম্পূর্ণ থাকলে সাধারণত কয়েক ঘণ্টা। ভেরিফিকেশন বাকি থাকলে ম্যানুয়াল রিভিউয়ের কারণে ২৪ ঘণ্টা বা তার বেশি লাগতে পারে।" },
          { q: "অ্যাকাউন্ট বন্ধ করতে চাইলে কী করব?", a: "সাপোর্টে লিখিতভাবে অ্যাকাউন্ট ক্লোজার বা সেলফ-এক্সক্লুশনের অনুরোধ করুন। সাময়িক বিরতি চাইলে কুলিং-অফ, স্থায়ী হলে সেলফ-এক্সক্লুশন বেছে নিন।" },
          { q: "নতুন ব্র্যান্ডে বড় অঙ্ক ডিপোজিট করা কি ঠিক?", a: "আমাদের পরামর্শ — না। ন্যূনতম অঙ্ক দিয়ে শুরু করে একবার ছোট উইথড্রয়াল সফলভাবে সম্পন্ন করুন, তারপরই বড় সিদ্ধান্ত নিন।" },
        ],
      }}
    />
  ),
});