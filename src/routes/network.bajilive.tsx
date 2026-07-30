import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangXDefaultOnly, ogUrl } from "@/lib/schema";
import { LAST_VERIFIED } from "@/lib/affiliate";
import { NETWORK_BYLINE, NETWORK_DISCLOSURE, NETWORK_INTERNAL_BLOCK, siblingNetworkBlock, networkSite } from "@/lib/network-sites";

const SITE = networkSite("bajilive");
const ROUTE = SITE.path;
const TITLE = "Baji Live বাংলা গাইড — লগইন ও ক্রিকেট এক্সচেঞ্জ";
const DESC =
  "Baji Live login, বাজি লাইভ অ্যাপ ইনস্টল, ক্রিকেট এক্সচেঞ্জ Back/Lay মার্কেট, bKash ডিপোজিট ও উইথড্রয়াল সময় — bajilive.world গাইড সাইটের সম্পূর্ণ পরিচিতি।";

export const Route = createFileRoute("/network/bajilive")({
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
      title="Baji Live গাইড — bajilive.world"
      subtitle="ক্রিকেট-কেন্দ্রিক বেটিং, এক্সচেঞ্জ মার্কেট এবং লাইভ স্ট্রিম নিয়ে বাংলাদেশে সবচেয়ে বেশি অনুসন্ধান হওয়া ব্র্যান্ডগুলোর একটি।"
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Network", path: "/network" }, { name: "Baji Live", path: ROUTE }]}
      articlePath={ROUTE}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "bajilive.world is our Bengali guide to Baji Live: login and access, the cricket exchange with Back/Lay markets, app installation, deposit and withdrawal handling. Full detail in the Bengali section.",
      ]}
      bodyByLocale={{
        bn: [
          ...NETWORK_BYLINE,
          "## চাহিদার চিত্র",
          "Semrush-এর বাংলাদেশ ডেটাবেস অনুযায়ী ‘baji live’ মাসে প্রায় ১০ লাখ বার সার্চ হয় এবং কীওয়ার্ড ডিফিকাল্টি ৬৯ — অর্থাৎ এটি নেটওয়ার্কের সবচেয়ে প্রতিযোগিতাপূর্ণ ক্ষেত্র। ‘bajilive’ আলাদাভাবে প্রায় ৭৪,০০০। এত বড় ভলিউমে সাধারণ ‘রিভিউ’ কনটেন্ট দিয়ে কিছু হয় না; তাই [Baji Live login](https://bajilive.world) সাইটে আমরা নির্দিষ্ট সমস্যা-ভিত্তিক পেজ তৈরি করি — যেখানে প্রতিযোগিতা কম কিন্তু উদ্দেশ্য স্পষ্ট।",
          "## ক্রিকেট এক্সচেঞ্জ — মূল ফোকাস",
          "Baji-র সবচেয়ে ব্যবহৃত সেকশন ক্রিকেট। সাধারণ স্পোর্টসবুকের সাথে এক্সচেঞ্জের পার্থক্য অনেক পাঠক জানেন না: এক্সচেঞ্জে আপনি শুধু কোনো ফলাফলের পক্ষে (Back) নয়, বিপক্ষেও (Lay) বাজি ধরতে পারেন, এবং দাম নির্ধারণ করে অন্য ব্যবহারকারীরা, বুকমেকার নয়। এখানে অপারেটর কমিশন নেয় জেতা বাজির উপর।",
          "গাইড সাইটে আমরা ধাপে ধাপে দেখাই — কীভাবে ম্যাচ অড দেখে বুঝবেন লিকুইডিটি যথেষ্ট কিনা, কেন ইনিংস ব্রেকে দাম হঠাৎ বদলায়, ক্যাশ-আউট কখন যৌক্তিক এবং কখন ক্ষতি বাড়ায়। BPL, IPL ও PSL-এর সময় ইন-প্লে মার্কেটের আচরণ আলাদা করে ব্যাখ্যা করা।",
          "## লগইন ও অ্যাক্সেস",
          "Baji-তে লগইন সমস্যার তিনটি প্রধান কারণ: ডোমেইন ব্লক, একাধিক ডিভাইসে একই সময়ে সেশন, এবং OTP না আসা। প্রতিটির জন্য আলাদা সমাধান-পাতা আছে। আমরা ভিপিএন ব্যবহারের পরামর্শ দেওয়ার আগে ঝুঁকিও বলি — কিছু অপারেটর VPN থেকে লগইন হলে ভেরিফিকেশন চায়, যা উইথড্রয়াল দেরি করাতে পারে।",
          "## অ্যাপ ও লাইভ স্ট্রিম",
          "অ্যান্ড্রয়েড অ্যাপ APK আকারে ইনস্টল করতে হয়, কারণ Play Store রিয়েল-মানি বেটিং অ্যাপ রাখে না। গাইডে ইনস্টল ধাপ, ‘unknown sources’ পারমিশন, এবং Play Protect সতর্কতা এলে করণীয় লেখা আছে। লাইভ স্ট্রিমিং সব ম্যাচে থাকে না এবং সাধারণত ফান্ডেড অ্যাকাউন্ট লাগে — এই শর্তটি অনেক সাইট চেপে যায়, আমরা স্পষ্ট করে লিখি।",
          "## পেমেন্ট বাস্তবতা",
          "bKash ও Nagad-এ ডিপোজিট সাধারণত তাৎক্ষণিক, কিন্তু উইথড্রয়ালে KYC সম্পন্ন না থাকলে দেরি নিশ্চিত। আমরা পরামর্শ দিই প্রথম ডিপোজিটের আগেই ভেরিফিকেশন শেষ করতে — এতে প্রথম উইথড্রয়ালে আটকে যাওয়ার সম্ভাবনা অনেক কমে।",
          "## কোন পাঠকের জন্য",
          "যিনি ক্রিকেট ম্যাচে ইন-প্লে বাজি ধরতে চান, যিনি এক্সচেঞ্জ কমিশন বুঝতে চান, এবং যিনি অ্যাপ ইনস্টলে আটকে গেছেন। JeetBuzz-এর ক্রিকেট মার্কেট তুলনা করতে চাইলে আমাদের [লাইভ ক্রিকেট বেটিং গাইড](/live-cricket-betting) দেখুন।",
          ...siblingNetworkBlock(SITE.slug),
          ...NETWORK_INTERNAL_BLOCK,
          ...NETWORK_DISCLOSURE,
        ],
      }}
      faqs={[
        { q: "What does bajilive.world cover?", a: "Baji Live login and access issues, the cricket exchange (Back/Lay, commission, cash-out), APK installation, live streaming conditions and payment timings, written in Bengali." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "bajilive.world কি Baji-র অফিসিয়াল সাইট?", a: "না। এটি GetJeetBuzz টিমের স্বাধীন বাংলা গাইড সাইট। এখানে ব্যবহারের নির্দেশনা ও শর্ত ব্যাখ্যা করা হয়; অ্যাকাউন্ট বা পেমেন্ট এই সাইট পরিচালনা করে না।" },
          { q: "Back আর Lay বাজির পার্থক্য কী?", a: "Back মানে কোনো ফলাফল ঘটবে ধরে বাজি, Lay মানে ঘটবে না ধরে বাজি — অর্থাৎ আপনি বুকমেকারের ভূমিকা নিচ্ছেন। Lay-তে দায় (liability) বাজির অঙ্কের চেয়ে বেশি হতে পারে, তাই শুরুতেই বড় Lay বাজি এড়ানো ভালো।" },
          { q: "এক্সচেঞ্জে কমিশন কীভাবে কাটে?", a: "সাধারণত জেতা বাজির নিট লাভের উপর একটি শতাংশ কাটা হয়, হারা বাজিতে কমিশন নেই। মার্কেটভেদে হার আলাদা হয়, তাই বাজি ধরার আগে মার্কেটের কমিশন লাইনটি দেখে নিন।" },
          { q: "লাইভ স্ট্রিম দেখতে পাচ্ছি না কেন?", a: "সব ম্যাচে স্ট্রিমিং রাইট থাকে না, এবং যেখানে থাকে সেখানেও সাধারণত ফান্ডেড অ্যাকাউন্ট বা সাম্প্রতিক বাজি প্রয়োজন। ভৌগোলিক সীমাবদ্ধতাও কাজ করে।" },
          { q: "অ্যাপ ইনস্টলে Play Protect সতর্কতা এলে কী করব?", a: "এটি স্টোরের বাইরের APK-এর জন্য স্বাভাবিক বার্তা। ফাইলটি অফিসিয়াল উৎস থেকে নামানো নিশ্চিত হলে ‘install anyway’ দিয়ে এগোনো যায়। অচেনা টেলিগ্রাম বা ফাইল-শেয়ারিং লিংক থেকে APK নামাবেন না।" },
          { q: "প্রথম উইথড্রয়াল দেরি হচ্ছে কেন?", a: "প্রায় সব ক্ষেত্রেই কারণ অসম্পূর্ণ KYC। NID, নামের মিল এবং ওয়ালেট নম্বরের মালিকানা যাচাই শেষ না হলে প্রথম উইথড্রয়াল ম্যানুয়াল রিভিউতে যায়।" },
          { q: "ক্যাশ-আউট নেওয়া কি সবসময় লাভজনক?", a: "না। ক্যাশ-আউট মূল্যে অপারেটরের মার্জিন থাকে, তাই দীর্ঘমেয়াদে ঘন ঘন ক্যাশ-আউট প্রত্যাশিত রিটার্ন কমায়। ঝুঁকি কমানোর টুল হিসেবে ব্যবহার করুন, মুনাফার কৌশল হিসেবে নয়।" },
        ],
      }}
    />
  ),
});