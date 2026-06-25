import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/affiliate-login" as const;
const TITLE = "JeetBuzz Affiliate Login Guide — Partner Portal Access";
const DESC =
  "How to access the JeetBuzz affiliate partner portal — login, password reset, dashboard tour and payout reports for Bangladesh partners.";

export const Route = createFileRoute("/affiliate-login")({
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
      eyebrow="Affiliate"
      title={<>JeetBuzz Affiliate <span className="gold-text">Login Guide</span></>}
      titleByLocale={{
        bn: <>JeetBuzz Affiliate <span className="gold-text">লগইন গাইড</span></>,
        ur: <>JeetBuzz Affiliate <span className="gold-text">لاگ ان گائیڈ</span></>,
      }}
      subtitle="A short, security-first walkthrough of the JeetBuzz affiliate partner portal — login, dashboard, sub-IDs and payout reports."
      subtitleByLocale={{
        bn: "JeetBuzz Affiliate পার্টনার পোর্টালে নিরাপদে লগইন, ড্যাশবোর্ড পরিচিতি, sub-ID ট্র্যাকিং ও পেআউট রিপোর্টের সংক্ষিপ্ত বাংলা গাইড।",
        ur: "JeetBuzz Affiliate پارٹنر پورٹل میں محفوظ لاگ ان، ڈیش بورڈ کا تعارف، sub-ID ٹریکنگ اور پے آؤٹ رپورٹس کی مختصر اردو گائیڈ۔",
      }}
      ctaIntent="partners"
      ctaLabel="Open JeetBuzz Login"
      ctaLabelByLocale={{
        bn: "অফিসিয়াল Affiliate পোর্টাল খুলুন",
        ur: "آفیشل Affiliate پورٹل کھولیں",
      }}
      breadcrumbs={[{ name: "Affiliate", path: "/affiliate-program" }, { name: "Affiliate Login", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## What this page is",
        "GetJeetBuzz is an editorial guide. We do not host the affiliate login page. The button above opens the official JeetBuzz partner portal.",
        "## Before you log in",
        "Make sure you have already registered as a JeetBuzz affiliate. If not, start with our Affiliate Program guide first.",
        "## How to log in",
        "1. Open the JeetBuzz affiliate portal from a trusted bookmark or our outbound link.",
        "2. Enter the email used when you registered as an affiliate.",
        "3. Enter your password and submit.",
        "4. If 2FA is enabled, complete the prompt.",
        "## Forgot password",
        "Use the 'Forgot password' link on the portal — a reset link is sent to your affiliate email. If you don't receive it, check spam, then contact your affiliate manager.",
        "## Dashboard tour",
        "- Overview: clicks, registrations, FTDs and revenue at a glance.",
        "- Reports: filter by sub-ID, campaign, country or date range.",
        "- Creatives: banners and tracking links for landing pages, including Bangladesh-localised assets.",
        "- Finance: balance, payout history and KYC documents.",
        "## Sub-IDs and tracking",
        "Use sub-IDs to split traffic by source (Telegram, YouTube, blog). It is the single biggest lever for understanding which channel pays.",
        "## Security checklist",
        "Unique strong password, 2FA enabled, no shared logins. Affiliate accounts hold payout history and bank info — treat them like a bank login.",
        "## Need to switch wallets?",
        "Update your payout wallet inside Finance > Settings. Most changes require email confirmation.",
      ]}
      bodyByLocale={{
        bn: [
          "## এই পেজ আসলে কী",
          "GetJeetBuzz একটি স্বাধীন এডিটোরিয়াল গাইড সাইট — এখানে অফিসিয়াল Affiliate পোর্টাল হোস্ট করা হয় না। উপরের বাটন আপনাকে অফিসিয়াল JeetBuzz Partners পোর্টালে নিয়ে যাবে, যেখানে আসল লগইন হয়।",
          "## লগইনের আগে যা থাকা দরকার",
          "আগে থেকেই JeetBuzz Affiliate হিসেবে রেজিস্ট্রেশন সম্পন্ন থাকতে হবে। যদি না করে থাকেন, প্রথমে আমাদের [Affiliate Program](/affiliate-program) ও [Agent & Affiliate Earning Guide](/agent-earning-guide) পড়ে নিন।",
          "## কীভাবে লগইন করবেন",
          "১. বিশ্বস্ত বুকমার্ক অথবা আমাদের verified আউটবাউন্ড লিংক থেকে অফিসিয়াল Affiliate পোর্টাল খুলুন।",
          "২. রেজিস্ট্রেশনের সময় ব্যবহৃত ইমেইল লিখুন।",
          "৩. পাসওয়ার্ড দিন এবং সাবমিট করুন।",
          "৪. 2FA চালু থাকলে কোড দিয়ে যাচাই সম্পন্ন করুন।",
          "## পাসওয়ার্ড ভুলে গেলে",
          "পোর্টালের ‘Forgot password’ লিংক ব্যবহার করুন — Affiliate-এ রেজিস্টার করা ইমেইলে রিসেট লিংক পাঠানো হয়। Spam ও Promotions ফোল্ডার চেক করুন; এরপরও না পেলে নিজের Affiliate Manager-এর সঙ্গে যোগাযোগ করুন।",
          "## ড্যাশবোর্ডের পরিচিতি",
          "- Overview: ক্লিক, রেজিস্ট্রেশন, FTD ও রেভিনিউ এক জায়গায়।",
          "- Reports: sub-ID, ক্যাম্পেইন, দেশ বা তারিখ অনুযায়ী ফিল্টার।",
          "- Creatives: ব্যানার ও ট্র্যাকিং লিংক — বাংলাদেশি ল্যান্ডিং পেজের জন্য আলাদা ক্রিয়েটিভও পাওয়া যায়।",
          "- Finance: ব্যালেন্স, পেআউট হিস্ট্রি এবং KYC ডকুমেন্ট।",
          "## sub-ID ও ট্র্যাকিং",
          "সবচেয়ে গুরুত্বপূর্ণ অভ্যাস — প্রতিটি ট্রাফিক উৎসের জন্য আলাদা sub-ID ব্যবহার করুন (যেমন Telegram, YouTube, ব্লগ পোস্ট)। এতে কোন চ্যানেল আসলে আয় করছে সেটি স্পষ্ট হয় এবং বাজেট কোথায় দিতে হবে তা সিদ্ধান্ত নেওয়া সহজ হয়।",
          "## নিরাপত্তা চেকলিস্ট",
          "শক্ত ইউনিক পাসওয়ার্ড, যেখানে সম্ভব 2FA চালু, কখনো শেয়ারড লগইন নয়। Affiliate অ্যাকাউন্টে আপনার পেআউট হিস্ট্রি ও ব্যাংক/ওয়ালেট তথ্য থাকে — একে ব্যাংকিং অ্যাপের সমান গুরুত্ব দিন। আরও বিস্তারিত [Security Guide](/security-guide)-এ।",
          "## পেআউট ওয়ালেট পরিবর্তন",
          "Finance → Settings থেকে পেআউট ওয়ালেট আপডেট করা যায়। নিরাপত্তার জন্য বেশিরভাগ পরিবর্তনে ইমেইল কনফার্মেশন প্রয়োজন।",
          "> বাণিজ্যিক প্রকাশনার আগে [Affiliate Disclosure](/affiliate-disclosure) পেজে আমাদের ভাষাগত মান দেখে নিন।",
        ],
        ur: [
          "## یہ پیج اصل میں کیا ہے",
          "GetJeetBuzz ایک خود مختار ادارتی گائیڈ سائٹ ہے — یہاں آفیشل Affiliate پورٹل ہوسٹ نہیں کیا جاتا۔ اوپر دیا گیا بٹن آپ کو آفیشل JeetBuzz Partners پورٹل پر لے جاتا ہے، جہاں اصل لاگ ان ہوتا ہے۔",
          "## لاگ ان سے پہلے کیا ہونا چاہیے",
          "پہلے سے JeetBuzz Affiliate کے طور پر رجسٹریشن مکمل ہونی چاہیے۔ اگر ابھی تک نہیں کیا تو پہلے ہماری [Affiliate Program](/affiliate-program) اور [Agent & Affiliate Earning Guide](/agent-earning-guide) پڑھ لیں۔",
          "## لاگ ان کیسے کریں",
          "1. قابل اعتماد بک مارک یا ہمارے verified آؤٹ باؤنڈ لنک سے آفیشل Affiliate پورٹل کھولیں۔",
          "2. رجسٹریشن کے وقت استعمال شدہ ای میل درج کریں۔",
          "3. پاس ورڈ درج کر کے Submit دبائیں۔",
          "4. اگر 2FA فعال ہے تو کوڈ سے تصدیق مکمل کریں۔",
          "## پاس ورڈ بھول گئے؟",
          "پورٹل کا ‘Forgot password’ لنک استعمال کریں — Affiliate پر رجسٹرڈ ای میل پر ری سیٹ لنک بھیجا جاتا ہے۔ Spam اور Promotions فولڈر بھی چیک کریں؛ پھر بھی نہ ملے تو اپنے Affiliate Manager سے رابطہ کریں۔",
          "## ڈیش بورڈ کا تعارف",
          "- Overview: کلکس، رجسٹریشنز، FTD اور ریونیو ایک جگہ۔",
          "- Reports: sub-ID، کیمپین، ملک یا تاریخ کے مطابق فلٹر۔",
          "- Creatives: بینرز اور ٹریکنگ لنکس — پاکستانی لینڈنگ پیجز کے لیے علیحدہ کریٹیوز بھی دستیاب۔",
          "- Finance: بیلنس، پے آؤٹ ہسٹری اور KYC دستاویزات۔",
          "## sub-ID اور ٹریکنگ",
          "سب سے اہم عادت — ہر ٹریفک سورس کے لیے علیحدہ sub-ID استعمال کریں (مثلاً Telegram، YouTube، بلاگ پوسٹ)۔ اس سے واضح ہو جاتا ہے کہ کون سا چینل اصل میں آمدنی پیدا کر رہا ہے اور بجٹ کہاں لگانا ہے۔",
          "## سیکیورٹی چیک لسٹ",
          "مضبوط منفرد پاس ورڈ، جہاں دستیاب ہو 2FA فعال، کبھی شیئرڈ لاگ ان نہیں۔ Affiliate اکاؤنٹ میں آپ کی پے آؤٹ ہسٹری اور بینک/والیٹ معلومات ہوتی ہیں — اسے بینکنگ ایپ جتنی اہمیت دیں۔ مزید تفصیل [Security Guide](/security-guide) میں۔",
          "## پے آؤٹ والیٹ کی تبدیلی",
          "Finance → Settings سے پے آؤٹ والیٹ اپ ڈیٹ کیا جا سکتا ہے۔ سیکیورٹی کے لیے زیادہ تر تبدیلیوں پر ای میل کنفرمیشن درکار ہوتی ہے۔",
          "> اشتہاری اشاعت سے پہلے [Affiliate Disclosure](/affiliate-disclosure) پر ہمارا لسانی معیار ضرور دیکھیں۔",
        ],
      }}
      faqs={[
        { q: "Is this the official affiliate login page?", a: "No. GetJeetBuzz is a verified affiliate partner of JeetBuzz, but this site is not the affiliate portal. The button above opens the official JeetBuzz affiliate portal where login happens." },
        { q: "I forgot my affiliate email — what now?", a: "Contact your affiliate manager with your partner ID or campaign URLs so they can locate the account." },
        { q: "Can I have more than one affiliate account?", a: "No. JeetBuzz allows one affiliate account per partner. Use sub-IDs to split traffic instead." },
        { q: "When are commissions paid?", a: "Monthly, typically in the first week, once your balance clears the minimum payout threshold and KYC is approved." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "এটি কি অফিসিয়াল Affiliate লগইন পেজ?", a: "না। GetJeetBuzz JeetBuzz-এর verified affiliate পার্টনার, কিন্তু এই সাইটে লগইন হয় না। উপরের বাটন অফিসিয়াল JeetBuzz Affiliate পোর্টালে নিয়ে যাবে যেখানে আসল লগইন হয়।" },
          { q: "Affiliate ইমেইল ভুলে গেছি — কী করব?", a: "নিজের Affiliate Manager-এর সঙ্গে যোগাযোগ করুন এবং পার্টনার আইডি বা সাম্প্রতিক ক্যাম্পেইন URL দিন; তারা অ্যাকাউন্ট খুঁজে দেবেন।" },
          { q: "একাধিক Affiliate অ্যাকাউন্ট রাখা যাবে?", a: "না। প্রতি পার্টনারের জন্য একটি অ্যাকাউন্ট। ভিন্ন ট্রাফিক উৎস আলাদা করতে sub-ID ব্যবহার করুন।" },
          { q: "কমিশন কখন পেআউট হয়?", a: "অফিসিয়াল সিডিউল ও মিনিমাম থ্রেশহোল্ড অনুযায়ী পেআউট প্রসেস হয়; নির্দিষ্ট মান অফিসিয়াল Affiliate চুক্তি ও ড্যাশবোর্ডে দেখানো হয়। KYC সম্পন্ন না হলে পেআউট আটকে থাকতে পারে।" },
          { q: "Affiliate অ্যাকাউন্টে 2FA চালু থাকা কি বাধ্যতামূলক?", a: "যেখানে উপলব্ধ, 2FA চালু রাখাই শক্ত সুপারিশ — পেআউট ও ব্যাংক তথ্য সুরক্ষিত থাকে।" },
        ],
        ur: [
          { q: "کیا یہ آفیشل Affiliate لاگ ان پیج ہے؟", a: "نہیں۔ GetJeetBuzz JeetBuzz کا verified affiliate پارٹنر ہے، لیکن یہاں لاگ ان نہیں ہوتا۔ اوپر دیا گیا بٹن آفیشل JeetBuzz Affiliate پورٹل کھولتا ہے، جہاں اصل لاگ ان ہوتا ہے۔" },
          { q: "میں Affiliate ای میل بھول گیا — اب کیا کروں؟", a: "اپنے Affiliate Manager سے رابطہ کریں اور پارٹنر ID یا حالیہ کیمپین URL دیں؛ وہ اکاؤنٹ ڈھونڈ دیں گے۔" },
          { q: "کیا ایک سے زیادہ Affiliate اکاؤنٹ رکھے جا سکتے ہیں؟", a: "نہیں۔ ہر پارٹنر کے لیے ایک ہی اکاؤنٹ۔ مختلف ٹریفک سورسز کو الگ کرنے کے لیے sub-ID استعمال کریں۔" },
          { q: "کمیشن کب پے آؤٹ ہوتا ہے؟", a: "آفیشل شیڈول اور کم از کم حد کے مطابق پے آؤٹ پروسیس ہوتا ہے؛ صحیح اقدار آفیشل Affiliate معاہدے اور ڈیش بورڈ پر دکھائی دیتی ہیں۔ KYC مکمل نہ ہو تو پے آؤٹ روکا جا سکتا ہے۔" },
          { q: "کیا Affiliate اکاؤنٹ پر 2FA لازمی ہے؟", a: "جہاں دستیاب ہو، 2FA فعال رکھنا سختی سے تجویز کیا جاتا ہے — پے آؤٹ اور بینک معلومات محفوظ رہتی ہیں۔" },
        ],
      }}
      related={[
        { to: "/affiliate-program", title: "JeetBuzz Affiliate Program", desc: "Revenue share, CPA and payout cycles." },
        { to: "/login-guide", title: "JeetBuzz Login Guide", desc: "Player login from Bangladesh." },
        { to: "/security-guide", title: "JeetBuzz Security Guide", desc: "2FA, password hygiene, phishing." },
      ]}
    />
  ),
});