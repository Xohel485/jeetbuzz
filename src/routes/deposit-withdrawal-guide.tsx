import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";

export const Route = createFileRoute("/deposit-withdrawal-guide")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Deposit & Withdrawal Guide Bangladesh 2026 - bKash, Nagad, Rocket" },
      { name: "description", content: "Complete JeetBuzz deposit and withdrawal guide for Bangladesh 2026 — bKash, Nagad and Rocket minimums, fees, processing times and fixes for common errors." },
      { property: "og:title", content: "JeetBuzz Deposit & Withdrawal Guide" },
      { property: "og:description", content: "bKash, Nagad and Rocket on JeetBuzz — minimums, fees and processing times." },
      { property: "og:type", content: "article" },
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">Deposits & Withdrawals</span></>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">ডিপোজিট ও উইথড্রয়াল</span></>,
        ur: <>JeetBuzz <span className="gold-text">ڈپازٹ اور ودڈرا</span></>,
        hi: <>JeetBuzz <span className="gold-text">डिपॉज़िट और विदड्रॉल</span></>,
      }}
      subtitle="Everything about funding your JeetBuzz account with bKash, Nagad and Rocket — minimums, fees, processing times and the most common errors."
      subtitleByLocale={{
        bn: "bKash, Nagad ও Rocket দিয়ে জিতবাজে ফান্ড যোগ করার সব তথ্য — সর্বনিম্ন পরিমাণ, ফি, প্রসেসিং সময় ও সাধারণ ভুল।",
        ur: "EasyPaisa، JazzCash اور SadaPay سے JeetBuzz اکاؤنٹ فنڈ کرنے کی مکمل معلومات — کم از کم رقم، فیس، پروسیسنگ وقت اور عام غلطیاں۔",
        hi: "UPI, PhonePe, Paytm और Google Pay से JeetBuzz खाते में फ़ंड डालने की पूरी जानकारी — न्यूनतम राशि, फ़ीस, प्रोसेसिंग समय और आम ग़लतियाँ।",
      }}
      body={[
        "## Supported methods",
        "- bKash",
        "- Nagad",
        "- Rocket",
        "- UPI (for cross-border users)",
        "- Crypto (USDT TRC20)",
        "## Deposits",
        "Open the Cashier, choose a method, follow the on-screen instructions and paste your TrxID. Deposits usually credit within a few minutes, subject to wallet and operator processing.",
        "## Withdrawals",
        "Withdraw to the same wallet you deposited from. KYC may be required for the first cash-out. Typical clearing time: minutes to a few hours.",
        "## Common errors",
        "- Wrong TrxID — double-check before submitting",
        "- Wallet not matching account holder name",
        "- Sending to a personal number instead of the listed merchant",
      ]}
      bodyByLocale={{
        bn: [
          "## এক নজরে",
          "বাংলাদেশে জিতবাজে ডিপোজিট ও উইথড্রয়াল মূলত মোবাইল ফাইন্যান্সিয়াল সার্ভিসেস (MFS) দিয়ে হয়। নিচে কাজের ধাপ, সাধারণ সময়সীমা এবং ভুল হলে কী করবেন — সবকিছুই সরল বাংলায়।",
          "## সমর্থিত পদ্ধতি",
          "- bKash — সবচেয়ে বেশি ব্যবহৃত, প্রায় সব এলাকায় উপলব্ধ।",
          "- Nagad — দ্রুত বৃদ্ধি পাচ্ছে, প্রতিযোগিতামূলক লিমিট।",
          "- Rocket (DBBL Mobile Banking) — গ্রামাঞ্চলের এজেন্ট নেটওয়ার্ক ভালো।",
          "- Upay — bKash/Nagad মেইনটেন্যান্সের সময় ব্যাকআপ।",
          "- USDT (TRC20) — বড় অংকের উইথড্রয়াল ও ক্রস-বর্ডার ব্যবহারের জন্য।",
          "## ডিপোজিট কীভাবে করবেন",
          "১. অফিসিয়াল জিতবাজ অ্যাকাউন্টে লগইন করে Cashier → Deposit খুলুন।",
          "২. পছন্দের পদ্ধতি ও পরিমাণ বেছে নিন।",
          "৩. স্ক্রিনে দেখানো মার্চেন্ট নম্বরে আপনার ওয়ালেট অ্যাপ থেকে Send Money করুন (Cash Out নয়, যদি না নির্দেশ থাকে)।",
          "৪. সফল ট্রানজেকশনের TrxID হুবহু কপি করে ক্যাশিয়ার ফর্মে পেস্ট করুন এবং সাবমিট দিন।",
          "৫. সাধারণত কয়েক মিনিটের মধ্যে ব্যালান্স দেখা যায়; ব্যস্ত সময়ে একটু বেশি সময় লাগতে পারে।",
          "## উইথড্রয়াল কীভাবে করবেন",
          "যেই ওয়ালেট থেকে ডিপোজিট করেছেন সেই ওয়ালেটেই উইথড্র করুন — নাম-মিসম্যাচ এড়াতে এটি সবচেয়ে নিরাপদ। প্রথম উইথড্রয়ালের আগে সাধারণত KYC যাচাই (NID ছবি + সেলফি) সম্পন্ন থাকতে হয়। বড় অংকের উইথড্রয়াল অতিরিক্ত রিভিউ ট্রিগার করতে পারে — এটি স্বাভাবিক anti-fraud প্রক্রিয়া। সঠিক প্রসেসিং সময় ব্যাংক/MFS-এর ব্যস্ততা ও অ্যাকাউন্ট স্ট্যাটাসের ওপর নির্ভর করে; নির্দিষ্ট সময়ের গ্যারান্টি দেওয়া যায় না।",
          "## সাধারণ ভুল ও সমাধান",
          "- **ভুল TrxID** — পাঠানোর আগে দুইবার মিলিয়ে দেখুন; ভুল হলে লাইভ চ্যাটে স্ক্রিনশট ও সঠিক TrxID দিন।",
          "- **ওয়ালেট নাম ≠ অ্যাকাউন্ট নাম** — KYC ও পেআউটে সমস্যা তৈরি করে। ডিপোজিটের আগেই নাম মিলিয়ে নিন।",
          "- **পার্সোনাল নম্বরে টাকা পাঠানো** — জিতবাজ কখনো ‘এজেন্ট’-এর পার্সোনাল bKash নম্বর দেয় না। শুধু ক্যাশিয়ারে দেখানো অফিসিয়াল মার্চেন্ট ব্যবহার করুন।",
          "- **Send Money vs Cash Out মিশিয়ে ফেলা** — ক্যাশিয়ারে দেখানো ধরনই অনুসরণ করুন; ভুল ধরনে পাঠালে রিকনসিলিয়েশন দেরি হয়।",
          "## আরও বিস্তারিত গাইড",
          "প্রতিটি পদ্ধতির ধাপে ধাপে গাইডের জন্য দেখুন [bKash গাইড](/bkash-guide), [Nagad গাইড](/nagad-guide), [Rocket গাইড](/rocket-guide), [Deposit Guide](/deposit-guide) ও [Withdrawal Guide](/withdrawal-guide)। সব পেমেন্ট পদ্ধতির তুলনা একই পেজে — [Payment Methods](/payment-methods)।",
          "> ১৮+ মাত্র। দায়িত্বশীল গেমিং সম্পর্কে [Responsible Gaming](/responsible-gaming) পেজটি দেখুন।",
        ],
        ur: [
          "## معاون طریقے (پاکستان)",
          "- EasyPaisa",
          "- JazzCash",
          "- SadaPay",
          "- بینک ٹرانسفر",
          "- USDT (TRC20)",
          "## ڈپازٹ",
          "کیشیئر کھولیں، طریقہ منتخب کریں، اسکرین کی ہدایات پر عمل کریں اور TrxID پیسٹ کریں۔ ڈپازٹ عام طور پر فوری ہوتا ہے۔",
          "## ودڈرا",
          "اسی والیٹ پر نکالیں جس سے ڈپازٹ کیا تھا۔ پہلی بار کیش آؤٹ پر KYC درکار ہو سکتا ہے۔ عام وقت: چند منٹ سے چند گھنٹے۔",
          "## عام غلطیاں",
          "- غلط TrxID — جمع کرنے سے پہلے دوبار دیکھ لیں",
          "- والیٹ کا نام اور اکاؤنٹ ہولڈر نام مماثل نہ ہونا",
          "- درج کردہ مرچنٹ کے بجائے کسی پرسنل نمبر پر رقم بھیجنا",
        ],
        hi: [
          "## समर्थित तरीक़े (भारत)",
          "- UPI",
          "- PhonePe",
          "- Paytm",
          "- Google Pay",
          "- IMPS / NetBanking",
          "- USDT (TRC20)",
          "## डिपॉज़िट",
          "Cashier खोलें, तरीक़ा चुनें, स्क्रीन के निर्देश पालन करें और TrxID पेस्ट करें। डिपॉज़िट आम तौर पर तुरंत होती है।",
          "## विदड्रॉल",
          "उसी वॉलेट पर निकालें जिससे डिपॉज़िट किया था। पहली बार कैश-आउट के लिए KYC ज़रूरी हो सकता है। आम समय: कुछ मिनट से कुछ घंटे।",
          "## आम ग़लतियाँ",
          "- ग़लत TrxID — सबमिट करने से पहले दो बार जाँचें",
          "- वॉलेट नाम और खाताधारक का नाम मेल न खाना",
          "- सूचीबद्ध मर्चेंट के बजाय किसी पर्सनल नंबर पर पैसे भेजना",
        ],
      }}
    />
  ),
});