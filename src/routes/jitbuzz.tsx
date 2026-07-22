import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { HUBS } from "@/lib/clusters";
import { RELATED_ARTICLES_BLOCK, BYLINE_LINES } from "@/lib/misspelling-shared";
import { LAST_VERIFIED } from "@/lib/affiliate";

const ROUTE = "/jitbuzz";
// Self-referencing canonical — each misspelling page is unique long-form content.
const PATH = ROUTE;
const TITLE = "Jitbuzz Login ২০২৬ — আসল JeetBuzz সাইট, IPL বেটিং ও UPI ডিপোজিট";
const DESC = "Jitbuzz হিন্দি/উর্দু ট্রান্সলিটারেশন — সঠিক ব্র্যান্ড JeetBuzz। অফিসিয়াল লগইন, UPI/bKash ডিপোজিট, IPL-BPL লাইভ বেটিং ও ২০০% ওয়েলকাম বোনাসের গাইড।";

export const Route = createFileRoute("/jitbuzz")({
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
    links: [canonicalLink(PATH), ...hreflangLinks(PATH)],
    scripts: [jsonLdScript(articleSchema({ headline: TITLE, description: DESC, path: ROUTE }))],
  }),
  component: () => (
    <GuidePage
      eyebrow={`ব্র্যান্ড গাইড · শেষ আপডেট: ${LAST_VERIFIED}`}
      title="Jitbuzz — হিন্দি উচ্চারণ, ব্র্যান্ড JeetBuzz"
      subtitle="‘Jitbuzz’ (‘ee’-এর জায়গায় ‘i’) হিন্দি/উর্দু উচ্চারণজনিত বানান। আসল JeetBuzz-এর সম্পূর্ণ ব্যবহারিক গাইড এই পেজে।"
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Jitbuzz", path: ROUTE }]}
      articlePath={ROUTE} articleHeadline={TITLE} articleDescription={DESC}
      body={["'Jitbuzz' is a Hindi/Urdu-influenced transliteration of JeetBuzz. See the Bengali section for the full brand guide."]}
      bodyByLocale={{
        bn: [
          ...BYLINE_LINES,
          "## ১. ভূমিকা: ‘Jitbuzz’ কেন লেখেন মানুষ",
          "**Jitbuzz** বানানটি প্রধানত হিন্দি ও উর্দু ভাষাভাষী ব্যবহারকারীদের কাছ থেকে আসে। হিন্দিতে ‘जीत’ (জিত) শব্দকে ইংরেজিতে রোমান করলে অনেকে ‘jit’ লেখেন — যদিও বাংলায় ‘jeet’ বেশি প্রচলিত। ভারত ও পাকিস্তানের ব্যবহারকারীরা এই কারণে ‘jitbuzz’ সার্চ করেন। বাংলাদেশেও যারা হিন্দি সিনেমা/সিরিয়াল দেখেন তারা কখনো কখনো এই বানান ব্যবহার করেন।",
          "‘Jitbuzz’ নামে আলাদা কোনো অপারেটর বা কোম্পানি নেই। সব ফলাফল আসলে JeetBuzz ব্র্যান্ডেই ফিরে আসে। এটি একই সাইট — শুধু বানানের বৈচিত্র্য।",
          "getjeetbuzz.com-এর সম্পাদকীয় দল হিসেবে আমরা এই পেজ তৈরি করেছি ক্রস-লিঙ্গুয়াল ব্যবহারকারীদের সাহায্য করতে। বাংলা, হিন্দি বা উর্দু — যেকোনো ভাষা থেকে সঠিক ব্র্যান্ডে পৌঁছান এবং নিরাপদে সাইট ব্যবহার করুন। নিচে সম্পূর্ণ ব্যবহারিক গাইড।",
          "সঠিক বানান — **JeetBuzz** (বাংলা রোমানাইজেশন: দুই ‘e’, দুই ‘z’)।",
          "## ২. JeetBuzz সংক্ষিপ্ত পরিচিতি — ভারত ও বাংলাদেশ কেন্দ্রিক",
          "JeetBuzz একটি Curaçao লাইসেন্সপ্রাপ্ত অনলাইন বেটিং প্ল্যাটফর্ম যা দক্ষিণ এশিয়ার তিন প্রধান বাজার — বাংলাদেশ (BDT), ভারত (INR) ও পাকিস্তান (PKR) — কভার করে। প্রতি দেশে আলাদা পেমেন্ট ইন্টিগ্রেশন। ভারতে UPI, PhonePe, Google Pay সরাসরি সাপোর্ট; বাংলাদেশে bKash, Nagad, Rocket; পাকিস্তানে EasyPaisa, JazzCash।",
          "‘Jitbuzz’ সার্চ করা যাদের অনেকেই ভারতীয় ব্যবহারকারী, তাদের জন্য বিশেষ সুবিধা — IPL কভারেজ ১০০%। প্রতিটি IPL ম্যাচে ৫০-৭০টি প্রি-ম্যাচ মার্কেট এবং ৩০০+ ইন-প্লে অপশন। Test cricket, ODI, T20I — সব ফরম্যাট।",
          "বাংলাদেশে যারা এই বানানে সার্চ করেন তারা মূলত হিন্দি কনটেন্ট কনজিউমার। বাংলাদেশে সাইটের ফিচার একই — bKash/Nagad/Rocket সরাসরি ইন্টিগ্রেটেড, বাংলা ইন্টারফেস উপলভ্য, ন্যূনতম ডিপোজিট ১০০ টাকা।",
          "প্ল্যাটফর্মে ১০০০+ স্লট, ৫০+ লাইভ ক্যাসিনো টেবিল, Aviator ও অন্যান্য ক্র্যাশ গেম, Cricket Exchange (Back/Lay মার্কেট)।",
          "Android APK-এর মাধ্যমে ইনস্টল, iPhone-এ Add to Home Screen। Google Play/App Store-এ পাওয়া যাবে না।",
          "## ৩. লগইন গাইড",
          "‘Jitbuzz’ সার্চের ফাঁদ এড়াতে সরাসরি অফিসিয়াল ডোমেইন টাইপ করুন ব্রাউজারের অ্যাড্রেস বারে। Google-এর প্রথম paid বিজ্ঞাপনে ক্লিক না করাই ভালো।",
          "লগইন প্রক্রিয়া: হোমপেজে ‘Login’ বাটন → ফোন নম্বর/ইউজারনেম → পাসওয়ার্ড → Sign In। নতুন ডিভাইসে OTP। বিস্তারিত লগইন গাইডের জন্য আমাদের [জেতাবাজ লগইন গাইড](/blog/jeetbuzz-login-guide) পড়ুন — সেখানে ভাষা পরিবর্তনের (বাংলা/হিন্দি/ইংরেজি/উর্দু) স্ক্রিনশটসহ ধাপে ধাপে ব্যাখ্যা।",
          "ভাষা পরিবর্তন: হেডারে গ্লোব আইকন → বাংলা/English/हिन्दी/اردو বাছাই করুন। JeetBuzz-এ ৪ ভাষার সম্পূর্ণ ইন্টারফেস আছে।",
          "পাসওয়ার্ড রিসেট: ‘Forgot Password’ → ফোন নম্বর → OTP → নতুন পাসওয়ার্ড। বিস্তারিত [পাসওয়ার্ড রিসেট গাইড](/jeetbuzz-password-reset) দেখুন।",
          "2FA সেটআপ: প্রোফাইল > Security > 2FA। Google Authenticator অ্যাপ ব্যবহার করুন।",
          "ISP ব্লক: ভারতেও কিছু state-level ব্লকিং হয়েছে, বাংলাদেশে BTRC ব্লকিং। সমাধান — DNS পরিবর্তন (1.1.1.1) বা VPN।",
          "সেশন ম্যানেজমেন্ট: Account > Active Sessions — অচেনা ডিভাইস দেখলে সব লগআউট।",
          "## ৪. রেজিস্ট্রেশন গাইড",
          "নতুন অ্যাকাউন্ট: হোমপেজে ‘Sign Up’ → ফোন নম্বর (বাংলাদেশ: +880 এর পর ১১ ডিজিট; ভারত: +91 এর পর ১০ ডিজিট)। OTP আসবে ৩০ সেকেন্ডে। এন্টার করে Verify।",
          "পাসওয়ার্ড সেট (৮+ অক্ষর, বড়/ছোট, সংখ্যা, বিশেষ চিহ্ন)। কারেন্সি BDT বা INR। পুরো নাম KYC ডকুমেন্ট অনুযায়ী। রেফারেল কোড থাকলে দিন। T&C টিক দিয়ে Register।",
          "বিস্তারিত [রেজিস্ট্রেশন গাইড](/registration-guide) পেজে ধাপে ধাপে।",
          "KYC: NID (বাংলাদেশ), Aadhaar/PAN (ভারত), CNIC (পাকিস্তান)-এর ছবি ও লাইভ সেলফি। ২৪ ঘণ্টায় অনুমোদন। ছবি স্পষ্ট এবং নামের বানান পুরো ডকুমেন্ট অনুযায়ী হতে হবে। বিস্তারিত [অ্যাকাউন্ট ভেরিফিকেশন গাইড](/jeetbuzz-account-verification) দেখুন।",
          "Welcome Bonus রেজিস্ট্রেশনের ৭ দিনের মধ্যে ক্লেইম করুন।",
          "পেমেন্ট মেথডে যে নাম আছে সেটাই অ্যাকাউন্টে দিন — না মিললে উইথড্রয়াল রিজেক্ট।",
          "## ৫. বোনাস ও প্রমো কোড",
          "**Welcome Bonus:** ১০০% পর্যন্ত, সর্বোচ্চ ১০,০০০ টাকা (বাংলাদেশ) বা ২০,০০০ রুপি (ভারত)। ওয়াগারিং ১৫x।",
          "**Reload Bonus:** সাপ্তাহিক ৫০% পর্যন্ত। **Cashback:** ৫-১৫% সাপ্তাহিক লস ফেরত। **Refer Bonus:** ২০০-৫০০ প্রতি সফল রেফার।",
          "প্রমো কোড: ডিপোজিট পেজে ‘Promo Code’ বক্সে লিখে ডিপোজিট। কেস-সেনসিটিভ। আজকের সক্রিয় প্রমো কোড দেখতে [প্রমো কোড পেজ](/blog/jeetbuzz-promo-code-today) ভিজিট করুন।",
          "বোনাসের বিস্তারিত শর্ত জানতে [বোনাস হাব](/bonus-and-promotions) দেখুন।",
          "সতর্কতা: সর্বোচ্চ বাজি ২০০-৫০০, excluded games বাদে, মেয়াদ ৩০ দিন।",
          "IPL বিশেষ প্রোমো: IPL মৌসুমে ক্রিকেট-স্পেসিফিক বোনাস চালু হয় — Free Bet, Bet Insurance, Enhanced Odds ইত্যাদি।",
          "## ৬. ডিপোজিট ও উইথড্রয়াল",
          "**বাংলাদেশ — bKash:** ন্যূনতম ১০০, প্রসেসিং ২-৫ মিনিট। bKash দিয়ে ডিপোজিটের সম্পূর্ণ নিয়ম [bKash গাইড](/bkash-guide)-এ বিস্তারিত।",
          "**Nagad:** ন্যূনতম ১০০, ২-৪ মিনিট। Nagad দিয়ে ডিপোজিট করতে চাইলে [Nagad গাইড](/nagad-guide) দেখুন।",
          "**Rocket:** ন্যূনতম ২০০, ৩-৭ মিনিট।",
          "**ভারত — UPI:** ন্যূনতম ৩০০ রুপি, তাৎক্ষণিক। Google Pay, PhonePe, Paytm — সব UPI অ্যাপ সাপোর্টেড। ব্যাংক ট্রান্সফার ও IMPS ও কাজ করে।",
          "**উইথড্রয়াল:** ন্যূনতম ৫০০। bKash ১৫-৩০ মিনিট, Nagad ২০-৪৫, UPI ১০-৩০ মিনিট। উইথড্রয়াল কত সময় লাগে তা জানতে [উইথড্রয়াল গাইড](/blog/jeetbuzz-withdrawal-time-bangladesh) পড়ুন।",
          "ফি: JeetBuzz সরাসরি ফি নেয় না; bKash/Nagad এজেন্ট থেকে ক্যাশ-আউট করলে ১.৮৫% আলাদা।",
          "## ৭. লাইভ ক্রিকেট বেটিং — IPL ফোকাস",
          "IPL প্রতি বছর মার্চ-মে মাসে চলে। JeetBuzz-এ প্রতিটি IPL ম্যাচে ৫০-৭০ প্রি-ম্যাচ মার্কেট এবং ইন-প্লে ৩০০+ অপশন। Match Winner, Top Batsman, Top Bowler, Total Runs Over/Under, First 6 Overs Score, Powerplay Score ইত্যাদি।",
          "BPL (ডিসেম্বর-ফেব্রুয়ারি) এবং PSL (ফেব্রুয়ারি-মার্চ) কভারেজ সমান বিস্তৃত। লাইভ ক্রিকেট বেটিং গাইডের জন্য [ক্রিকেট বেটিং পেজ](/live-cricket-betting) দেখুন।",
          "Cricket Exchange: Back/Lay দুই দিক থেকে বাজি, কমিশন ২.৫-৫%। প্রফেশনাল trader-দের জন্য আদর্শ।",
          "লাইভ ক্যাশ-আউট এবং শর্তসাপেক্ষে ৭২০p স্ট্রিমিং।",
          "Test cricket-এ লাইভ ইন-প্লে বেটিং কম, কিন্তু session, over-runs, wicket মার্কেট আছে।",
          "## ৮. অ্যাফিলিয়েট প্রোগ্রাম",
          "JeetBuzz অ্যাফিলিয়েট প্রোগ্রামে যোগ দিতে [অ্যাফিলিয়েট পেজ](/affiliate-program) দেখুন। কমিশন NGR-ভিত্তিক, ২৫-৬০%। সাব-অ্যাফিলিয়েট ৩.৫%।",
          "পেমেন্ট bKash, Nagad, UPI, USDT, ব্যাংক ট্রান্সফারে সাপ্তাহিক। বহুভাষিক ট্র্যাকিং ড্যাশবোর্ড — বাংলা/হিন্দি/উর্দু/ইংরেজি।",
          "ভারতে YouTube ক্রিকেট চ্যানেল ও Telegram tipster-দের জন্য বিশেষ ‘cricket season’ কমিশন বুস্ট থাকে IPL/BPL/PSL সময়।",
          "## ৯. সাধারণ সমস্যা ও সমাধান",
          "**অ্যাকাউন্ট লক হলে করণীয়** জানতে [অ্যাকাউন্ট লক গাইড](/blog/jeetbuzz-account-locked) পড়ুন।",
          "**ডিপোজিট সমস্যার সমাধান পেতে** [ডিপোজিট সমস্যার গাইড](/blog/jeetbuzz-deposit-problem-fix) দেখুন।",
          "**UPI ব্যর্থ (ভারত)**: NPCI ম্যান্টেন্যান্স, ডেইলি লিমিট (₹১ লক্ষ) পার, বা ব্যাংকের internal rule হতে পারে। ৩০ মিনিট পরে চেষ্টা করুন।",
          "**OTP আসছে না**: SMS ব্লক, DND, নেটওয়ার্ক ব্যস্ত। Resend, তারপর ইমেইল।",
          "**নাম মিসম্যাচ**: KYC-তে নাম এবং bKash/UPI-এর নাম হুবহু মিলতে হবে।",
          "## শেষ কথা",
          `শেষ আপডেট: ${LAST_VERIFIED}। ‘Jitbuzz’ হিন্দি ট্রান্সলিটারেশনের ভুল, আসল ব্র্যান্ড JeetBuzz। ১৮ বছরের নিচে নিষিদ্ধ।`,
          ...RELATED_ARTICLES_BLOCK,
        ],
      }}
      faqs={[
        { q: "Is 'Jitbuzz' a different brand from JeetBuzz?", a: "No, 'Jitbuzz' is a Hindi/Urdu-influenced transliteration. The official brand is JeetBuzz." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "‘Jitbuzz’ কি ‘JeetBuzz’-এর হিন্দি সংস্করণ?", a: "না, আলাদা কোনো সংস্করণ নেই। JeetBuzz-এর ইন্টারফেসে বাংলা, ইংরেজি, হিন্দি এবং উর্দু ভাষা উপলব্ধ, কিন্তু ব্র্যান্ড নাম একটাই — JeetBuzz। ‘Jitbuzz’ শুধু হিন্দি রোমানাইজেশনের ভুল (হিন্দিতে जीत = ‘jit’ কিন্তু বাংলা রোমানাইজেশনে ‘jeet’ প্রচলিত)।" },
          { q: "‘Jitbuzz’ ভারতে বৈধ?", a: "ভারতে অনলাইন জুয়ার আইন state-অনুযায়ী পরিবর্তিত। কিছু state (যেমন Sikkim, Nagaland) লাইসেন্স ইস্যু করে; কিছু state (Tamil Nadu, Andhra Pradesh) নিষিদ্ধ করেছে; বেশিরভাগ state গ্রে জোন। JeetBuzz Curaçao লাইসেন্সে অফশোর অপারেটর হিসেবে কাজ করে। ব্যবহারকারী নিজের এখতিয়ারে সিদ্ধান্ত নিতে হবে।" },
          { q: "IPL-এ কি ‘Jitbuzz’ Free Bet বা Enhanced Odds দেয়?", a: "হ্যাঁ, IPL মৌসুমে JeetBuzz বিশেষ প্রোমো চালায় — Free Bet (নির্দিষ্ট ম্যাচে বিনা ঝুঁকিতে বাজি), Bet Insurance (হারলে টাকা ফেরত), Enhanced Odds (কিছু মার্কেটে বাড়ানো ওডস)। প্রতিটি প্রোমোর রোলওভার, ন্যূনতম ওডস এবং বৈধতার তারিখ বোনাস অ্যান্ড প্রোমোশনস পেজে বিস্তারিত দেওয়া আছে; বাজি ধরার আগে অবশ্যই শর্তগুলো পড়ে নিন।" },
          { q: "ভারতে UPI দিয়ে ডিপোজিট নিরাপদ?", a: "UPI নিজেই NPCI-নিয়ন্ত্রিত এবং সাধারণত নিরাপদ। JeetBuzz-এ UPI ডিপোজিট সরাসরি অ্যাপে যায়, তৃতীয় পক্ষের এজেন্ট নয়। তবে সাম্প্রতিক NPCI নীতিতে কিছু ব্যাংক (SBI, HDFC) গেমিং সাইটে UPI ট্রানজেকশন সীমিত করেছে। বিকল্প — Paytm, PhonePe, বা IMPS।" },
          { q: "‘Jitbuzz APK’ কি Google থেকে ডাউনলোড করা নিরাপদ?", a: "Google Play Store-এ আসল JeetBuzz অ্যাপ নেই। ‘Jitbuzz APK’ নামে যে ফাইলগুলো তৃতীয় পক্ষের সাইটে পাওয়া যায় সেগুলো প্রায়ই ম্যালওয়্যার সহ। শুধু অফিসিয়াল JeetBuzz ওয়েবসাইট থেকে APK ডাউনলোড করুন। ইনস্টলের আগে ফাইল হ্যাশ (SHA-256) মিলিয়ে নিন।" },
          { q: "উর্দু ভাষায় JeetBuzz ইন্টারফেস আছে?", a: "হ্যাঁ। পাকিস্তানি ব্যবহারকারীদের জন্য সম্পূর্ণ উর্দু ইন্টারফেস উপলব্ধ। EasyPaisa এবং JazzCash সরাসরি পেমেন্ট মেথড হিসেবে ইন্টিগ্রেটেড। পাকিস্তানি ব্যবহারকারীদের ন্যূনতম ডিপোজিট ৩০০ PKR।" },
          { q: "ক্রস-কারেন্সি খেলা যায়?", a: "সাধারণত না — এক অ্যাকাউন্টে একটাই কারেন্সি (BDT বা INR বা PKR)। রেজিস্ট্রেশনের সময় বেছে নেওয়া কারেন্সি পরে পরিবর্তন করা যায় না। যদি ভ্রমণ করেন বা দেশ পরিবর্তন করেন, নতুন অ্যাকাউন্ট খুলতে হবে।" },
          { q: "‘Jitbuzz’ SEO দৃষ্টিকোণ থেকে টার্গেটযোগ্য কীওয়ার্ড?", a: "মাঝারি স্তরের — মাসিক সার্চ ভলিউম ভারতে ৫,০০০-১৫,০০০, বাংলাদেশে ১,০০০-৩,০০০। কম্পিটিশন কম কারণ এটি একটি long-tail brand misspelling. এই পেজটির উদ্দেশ্য এই কোয়েরিগুলোকে আসল JeetBuzz-এ ফিরিয়ে আনা এবং ফিশিং সাইটের রিস্ক কমানো।" },
        ],
      }}
      related={HUBS}
    />
  ),
});
