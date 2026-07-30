import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangXDefaultOnly, ogUrl, seoTitle } from "@/lib/schema";
import { LAST_VERIFIED } from "@/lib/affiliate";
import { NETWORK_BYLINE, NETWORK_DISCLOSURE, NETWORK_INTERNAL_BLOCK, siblingNetworkBlock, networkSite } from "@/lib/network-sites";

const SITE = networkSite("tekkabuzz88");
const ROUTE = SITE.path;
const TITLE = "TekkaBuzz 88 অ্যাপ গাইড — APK ডাউনলোড ও ইনস্টল";
const DESC =
  "TekkaBuzz 88 app download, APK ইনস্টল পারমিশন, Play Protect সতর্কতা, অ্যাপ আপডেট ও প্রোমো কোড — tekkabuzz88.online গাইড সাইটের সম্পূর্ণ পরিচিতি।";

export const Route = createFileRoute("/network/tekkabuzz88")({
  head: () => ({
    meta: [
      { title: seoTitle(TITLE) },
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
      title="TekkaBuzz 88 গাইড — tekkabuzz88.online"
      subtitle="অ্যাপ-কেন্দ্রিক গাইড: APK কোথা থেকে নামাবেন, ইনস্টলের সময় কোন সতর্কতা স্বাভাবিক আর কোনটি বিপদসংকেত।"
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Network", path: "/network" }, { name: "TekkaBuzz 88", path: ROUTE }]}
      articlePath={ROUTE}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "tekkabuzz88.online is our app-focused Bengali guide: APK sourcing and verification, install permissions, Play Protect warnings, storage and update handling, and promo code usage. Full detail in the Bengali section.",
      ]}
      bodyByLocale={{
        bn: [
          ...NETWORK_BYLINE,
          "## কেন আলাদা অ্যাপ গাইড",
          "‘88’ যুক্ত ব্র্যান্ড ভ্যারিয়েন্ট খোঁজা ব্যবহারকারীদের বড় অংশ আসলে অ্যাপ খুঁজছেন — ওয়েবসাইট নয়। বাংলাদেশে বেটিং অ্যাপ Google Play-তে থাকে না, ফলে APK ডাউনলোড ধাপটি সবচেয়ে ঝুঁকিপূর্ণ জায়গা: এখানেই ভুয়া ফাইল, ম্যালওয়্যার ও ফিশিং সবচেয়ে বেশি। [TekkaBuzz 88 app download](https://tekkabuzz88.online) সাইটটি পুরোপুরি এই ধাপের নিরাপত্তার উপর কেন্দ্রীভূত।",
          "## ডাউনলোডের আগে যাচাই",
          "গাইডে চারটি যাচাই শেখানো হয়: (১) ফাইলের উৎস অফিসিয়াল ডোমেইন কিনা, (২) ফাইল সাইজ প্রত্যাশিত সীমার মধ্যে কিনা — অস্বাভাবিক ছোট ফাইল প্রায়ই ইনস্টলার-শেল, (৩) ইনস্টলের সময় অ্যাপ কোন পারমিশন চাইছে (কন্টাক্ট, SMS পড়া বা কল লগ চাইলে সেটি বিপদসংকেত), এবং (৪) ইনস্টলের পর অ্যাপের প্যাকেজ নাম ও ডেভেলপার স্বাক্ষর।",
          "## ইনস্টল ধাপ",
          "Android-এ প্রথমে ব্রাউজার বা ফাইল ম্যানেজারকে ‘install unknown apps’ অনুমতি দিতে হয়। এরপর APK চালু করলে Play Protect একটি সতর্কবার্তা দেখাতে পারে — স্টোরের বাইরের যেকোনো অ্যাপের জন্য এটি স্বাভাবিক। কিন্তু বার্তায় যদি ‘harmful app’ বা ‘trojan’ লেখা থাকে, তাহলে ইনস্টল বাতিল করে ফাইল মুছে ফেলুন; সেটি স্বাভাবিক সতর্কতা নয়।",
          "iPhone ব্যবহারকারীদের জন্য আলাদা সেকশন আছে: iOS-এ APK চলে না, তাই সমাধান হলো ব্রাউজার থেকে ‘Add to Home Screen’ করে ওয়েব-অ্যাপ ব্যবহার। কেউ যদি iOS-এর জন্য ‘.ipa’ বা ডেভেলপার প্রোফাইল ইনস্টল করতে বলে, সেটি এড়িয়ে চলুন।",
          "## আপডেট ও স্টোরেজ",
          "স্টোর-বহির্ভূত অ্যাপ স্বয়ংক্রিয়ভাবে আপডেট হয় না। পুরনো ভার্সনে অড ঠিকমতো লোড না হওয়া, লগইন লুপ বা পেমেন্ট পেজ সাদা দেখানোর মতো সমস্যা হয়। গাইডে দেখানো হয় কীভাবে ইন-অ্যাপ আপডেট প্রম্পট চিনবেন এবং পুরনো ভার্সন আনইনস্টল করে নতুন ইনস্টলের সময় ডেটা হারাবে কিনা।",
          "ক্যাশ জমে গেলে অ্যাপ ধীর হয় বা ক্র্যাশ করে; সেটিংস থেকে শুধু ক্যাশ ক্লিয়ার করলে অ্যাকাউন্ট লগআউট হয় না, কিন্তু ‘clear storage’ দিলে হয় — এই পার্থক্যটি অনেকেই জানেন না।",
          "## প্রোমো কোড",
          "অ্যাপে প্রোমো কোড বসানোর জায়গা ওয়েবসাইটের চেয়ে আলাদা হতে পারে এবং কিছু কোড শুধু অ্যাপ-এক্সক্লুসিভ। কোড কাজ না করার সাধারণ কারণ — মেয়াদ শেষ, ন্যূনতম ডিপোজিট পূরণ না হওয়া, অথবা একই ডিভাইসে আগে ব্যবহার হওয়া। JeetBuzz-এর প্রোমো কোড সংক্রান্ত তুলনামূলক তথ্যের জন্য [প্রোমো কোড গাইড](/jeetbuzz-promo-code) দেখুন।",
          ...siblingNetworkBlock(SITE.slug),
          ...NETWORK_INTERNAL_BLOCK,
          ...NETWORK_DISCLOSURE,
        ],
      }}
      faqs={[
        { q: "What does tekkabuzz88.online cover?", a: "APK sourcing and verification, Android install permissions, Play Protect warnings, iOS home-screen web app alternative, updates, storage and promo code troubleshooting, in Bengali." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "TekkaBuzz 88 অ্যাপ কি Play Store-এ আছে?", a: "না। Google Play ও Apple App Store রিয়েল-মানি বেটিং অ্যাপ রাখে না। অ্যান্ড্রয়েডে APK ইনস্টল করতে হয় এবং iOS-এ ব্রাউজার থেকে হোম স্ক্রিনে যোগ করে ওয়েব-অ্যাপ ব্যবহার করতে হয়।" },
          { q: "Play Protect সতর্কতা মানে কি অ্যাপ ক্ষতিকর?", a: "সাধারণ ‘unknown developer’ সতর্কতা স্টোরের বাইরের সব অ্যাপেই আসে, এটি ক্ষতিকর হওয়ার প্রমাণ নয়। কিন্তু বার্তায় সরাসরি ‘harmful’ বা ‘malware’ লেখা থাকলে ইনস্টল বাতিল করুন।" },
          { q: "কোন পারমিশন দেখলে সতর্ক হব?", a: "SMS পড়া, কন্টাক্ট লিস্ট, কল লগ বা অ্যাক্সেসিবিলিটি সার্ভিস — বেটিং অ্যাপের এসব দরকার নেই। এমন চাইলে ইনস্টল করবেন না।" },
          { q: "অ্যাপ আপডেট না করলে কী হয়?", a: "পুরনো ভার্সনে লগইন লুপ, পেমেন্ট পেজ লোড না হওয়া বা লাইভ অড আটকে থাকার মতো সমস্যা হয়। স্টোর-বহির্ভূত অ্যাপ স্বয়ংক্রিয় আপডেট পায় না, তাই মাঝেমধ্যে নিজে দেখে নিতে হয়।" },
          { q: "ক্যাশ ক্লিয়ার করলে কি লগআউট হয়ে যাব?", a: "শুধু ক্যাশ ক্লিয়ার করলে সাধারণত লগআউট হয় না। ‘Clear storage’ বা ‘Clear data’ দিলে সেশন ও সেটিংস মুছে যায় এবং আবার লগইন করতে হয়।" },
          { q: "প্রোমো কোড কাজ করছে না কেন?", a: "সাধারণ কারণ: কোডের মেয়াদ শেষ, ন্যূনতম ডিপোজিট পূরণ হয়নি, কোডটি শুধু নতুন অ্যাকাউন্টের জন্য, অথবা একই ডিভাইস/নম্বরে আগে ব্যবহার হয়েছে।" },
          { q: "APK কি অন্য সাইট থেকে নামানো যাবে?", a: "নামানো উচিত নয়। তৃতীয় পক্ষের APK মিরর প্রায়ই পুনরায় প্যাকেজ করা ফাইল দেয় যেখানে বাড়তি কোড ঢোকানো থাকতে পারে। সবসময় অফিসিয়াল উৎস ব্যবহার করুন।" },
        ],
      }}
    />
  ),
});