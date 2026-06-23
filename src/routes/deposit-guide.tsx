import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { SIGNUP_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/deposit-guide";
const TITLE =
  "JeetBuzz Deposit Guide Bangladesh Pakistan India 2026 - bKash, Nagad, UPI";
const DESC =
  "How to deposit on JeetBuzz in 2026 from Bangladesh, Pakistan and India — bKash, Nagad, Rocket, EasyPaisa, JazzCash, UPI and USDT with minimums, fees and timing.";

export const Route = createFileRoute("/deposit-guide")({
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
      eyebrow="Payments"
      title={<>JeetBuzz <span className="gold-text">Deposit Guide</span></>}
      subtitle="The complete deposit handbook for JeetBuzz Bangladesh — bKash, Nagad, Rocket and UPI minimums, processing times and common errors."
      breadcrumbs={[{ name: "Payments", path: "/payment-methods" }, { name: "Deposit Guide", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## সংক্ষেপে",
        "JeetBuzz এ ডিপোজিট করার জন্য সবচেয়ে জনপ্রিয় মাধ্যম হল bKash, Nagad এবং Rocket। সাধারণত ডিপোজিট ইনস্ট্যান্ট হয় এবং মিনিমাম খুব কম।",
        "## Step-by-step deposit",
        "1. Log in to JeetBuzz via the official site or app.",
        "2. Open Cashier > Deposit.",
        "3. Pick your method (bKash / Nagad / Rocket / UPI / USDT).",
        "4. Enter the amount — minimums are typically 200–500 BDT.",
        "5. Send money from your wallet to the displayed merchant number with the unique reference.",
        "6. Paste the TrxID back into the form and submit.",
        "## Processing times",
        "- bKash: usually instant",
        "- Nagad: usually instant",
        "- Rocket: usually instant to 5 minutes",
        "- UPI: instant during business hours, otherwise up to 30 minutes",
        "- USDT: 1–3 network confirmations",
        "## Why deposits fail",
        "- Wrong TrxID — double-check before submitting",
        "- Sending to a personal number instead of the merchant",
        "- Using someone else's wallet — JeetBuzz requires wallet ownership match",
        "- Below the minimum amount",
        "## Fees",
        "JeetBuzz typically does not charge a deposit fee. Your wallet provider may charge a small send-money fee.",
        "## Bonus eligibility",
        "If you plan to claim a welcome bonus, opt in BEFORE depositing. The minimum bonus-qualifying deposit may differ from the cashier minimum.",
        "## After your first deposit",
        "Place a small bet to confirm everything works, then read our Withdrawal Guide so you know how to cash out before you need to.",
      ]}
      subtitleByLocale={{
        bn: "JeetBuzz বাংলাদেশ ডিপোজিট হ্যান্ডবুক — bKash, Nagad, Rocket-এর মিনিমাম, প্রসেসিং সময় ও ভুল।",
        ur: "JeetBuzz پاکستان ڈپازٹ گائیڈ — EasyPaisa, JazzCash کی کم از کم رقم اور پروسیسنگ ٹائم۔",
        hi: "JeetBuzz इंडिया डिपॉज़िट गाइड — UPI, PhonePe, Paytm की मिनिमम और प्रोसेसिंग टाइम।",
      }}
      bodyByLocale={{
        bn: [
          "## সংক্ষেপে",
          "JeetBuzz-এ ডিপোজিটের জনপ্রিয় মাধ্যম bKash, Nagad ও Rocket। সাধারণত ইনস্ট্যান্ট।",
          "## ধাপে ধাপে",
          "১. লগইন করুন।",
          "২. Cashier > Deposit খুলুন।",
          "৩. মাধ্যম বাছুন।",
          "৪. অ্যামাউন্ট দিন (মিনিমাম ২০০–৫০০ BDT)।",
          "৫. মার্চেন্ট নম্বরে রেফারেন্সসহ পাঠান।",
          "৬. TrxID সাবমিট করুন।",
          "## প্রসেসিং সময়",
          "- bKash/Nagad: ইনস্ট্যান্ট",
          "- Rocket: ৫ মিনিট পর্যন্ত",
          "- USDT: ১–৩ কনফার্মেশন",
          "## ফেইল হওয়ার কারণ",
          "- ভুল TrxID",
          "- পারসোনাল নম্বরে পাঠানো",
          "- অন্যের ওয়ালেট",
          "- মিনিমামের নিচে",
          "## ফি",
          "JeetBuzz ফি নেয় না।",
          "## বোনাস",
          "ডিপোজিটের আগে অপ্ট-ইন করুন।",
          "## প্রথম ডিপোজিটের পর",
          "ছোট বেট দিয়ে কনফার্ম, তারপর Withdrawal Guide পড়ুন।",
        ],
        ur: [
          "## مختصراً",
          "JeetBuzz پاکستان میں EasyPaisa اور JazzCash مقبول۔ عموماً فوری۔",
          "## مرحلہ وار",
          "1. لاگ ان کریں۔",
          "2. Cashier > Deposit کھولیں۔",
          "3. طریقہ منتخب کریں۔",
          "4. رقم درج کریں (کم از کم 500 PKR)۔",
          "5. مرچنٹ نمبر پر ریفرنس کے ساتھ بھیجیں۔",
          "6. TRX ID جمع کرائیں۔",
          "## پروسیسنگ ٹائم",
          "- EasyPaisa/JazzCash: فوری",
          "- USDT: 1–3 تصدیقات",
          "## ناکامی کی وجوہات",
          "- غلط TRX ID",
          "- ذاتی نمبر پر بھیجنا",
          "- کسی اور کا والیٹ",
          "- کم از کم سے کم رقم",
          "## فیس",
          "JeetBuzz فیس نہیں لیتا۔",
          "## بونس",
          "ڈپازٹ سے پہلے آپٹ ان کریں۔",
          "## پہلے ڈپازٹ کے بعد",
          "چھوٹا بیٹ لگائیں، پھر Withdrawal Guide پڑھیں۔",
        ],
        hi: [
          "## संक्षेप में",
          "JeetBuzz इंडिया में UPI सबसे लोकप्रिय — PhonePe, Google Pay, Paytm सब काम करते हैं।",
          "## स्टेप-बाय-स्टेप",
          "1. लॉगिन करें।",
          "2. Cashier > Deposit खोलें।",
          "3. तरीका चुनें।",
          "4. राशि डालें (मिनिमम ₹500)।",
          "5. मर्चेंट UPI ID पर रेफरेंस के साथ भेजें।",
          "6. UTR/TrxID सबमिट करें।",
          "## प्रोसेसिंग टाइम",
          "- UPI: इंस्टैंट",
          "- USDT: 1–3 पुष्टि",
          "## फेल होने के कारण",
          "- गलत UTR",
          "- पर्सनल UPI पर भेजना",
          "- किसी और का वॉलेट",
          "- मिनिमम से कम",
          "## फीस",
          "JeetBuzz फीस नहीं लेता।",
          "## बोनस",
          "डिपॉज़िट से पहले ऑप्ट-इन करें।",
          "## पहले डिपॉज़िट के बाद",
          "छोटा बेट लगाएँ, फिर Withdrawal Guide पढ़ें।",
        ],
      }}
      faqsByLocale={{
        bn: [
          { q: "ডিপোজিট ফি?", a: "JeetBuzz ফি নেয় না। ওয়ালেট প্রোভাইডারের ছোট ফি থাকতে পারে।" },
          { q: "bKash পেন্ডিং কেন?", a: "ভুল TrxID বা পারসোনাল নম্বর। স্ক্রিনশটসহ লাইভ চ্যাট।" },
          { q: "বন্ধুর ওয়ালেট?", a: "না। ওয়ালেট নাম অ্যাকাউন্টের সাথে মিলতে হবে।" },
          { q: "মিনিমাম?", a: "মোবাইল ওয়ালেটে ২০০–৫০০ BDT।" },
        ],
        ur: [
          { q: "ڈپازٹ فیس؟", a: "JeetBuzz فیس نہیں لیتا۔ والیٹ پروائڈر کی معمولی فیس ہو سکتی ہے۔" },
          { q: "EasyPaisa پینڈنگ کیوں؟", a: "غلط TRX ID یا ذاتی نمبر۔ سکرین شاٹ کے ساتھ لائیو چیٹ۔" },
          { q: "دوست کا والیٹ؟", a: "نہیں۔ نام میچ ہونا چاہیے۔" },
          { q: "کم از کم؟", a: "500 PKR۔" },
        ],
        hi: [
          { q: "डिपॉज़िट फीस?", a: "JeetBuzz फीस नहीं लेता।" },
          { q: "UPI पेंडिंग क्यों?", a: "गलत UTR या पर्सनल UPI। स्क्रीनशॉट के साथ लाइव चैट।" },
          { q: "दोस्त का वॉलेट?", a: "नहीं। नाम मेल खाना चाहिए।" },
          { q: "मिनिमम?", a: "₹500।" },
        ],
      }}
      faqs={[
        { q: "Is there a deposit fee?", a: "JeetBuzz does not typically charge a deposit fee. Your wallet provider may charge a small send-money fee, especially for non-merchant transfers." },
        { q: "Why is my bKash deposit pending?", a: "Most commonly the wrong TrxID was submitted, or money was sent to a personal number. Contact live chat with your TrxID screenshot." },
        { q: "Can I deposit from a friend's wallet?", a: "No. The depositing wallet must match your registered JeetBuzz account name, otherwise the deposit can be reversed." },
        { q: "What's the minimum deposit?", a: "Typically 200–500 BDT for mobile wallets. Confirm the current minimum on the official cashier page before sending money." },
      ]}
      related={[
        { to: "/withdrawal-guide", title: "JeetBuzz Withdrawal Guide" },
        { to: "/bkash-guide", title: "bKash on JeetBuzz" },
        { to: "/nagad-guide", title: "Nagad on JeetBuzz" },
        { to: "/rocket-guide", title: "Rocket on JeetBuzz" },
        { to: "/payment-methods", title: "All Payment Methods" },
        ...siblings(SIGNUP_CLUSTER, "/deposit-guide"),
      ]}
    />
  ),
});