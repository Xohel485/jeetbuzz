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
          "## সমর্থিত পদ্ধতি (বাংলাদেশ)",
          "- bKash",
          "- Nagad",
          "- Rocket",
          "- Upay",
          "- USDT (TRC20)",
          "## ডিপোজিট",
          "ক্যাশিয়ার খুলুন, পদ্ধতি বেছে নিন, স্ক্রিনের নির্দেশনা অনুসরণ করুন এবং TrxID পেস্ট করুন। ডিপোজিট সাধারণত তাৎক্ষণিক।",
          "## উইথড্রয়াল",
          "যেই ওয়ালেট থেকে ডিপোজিট করেছেন সেই একই ওয়ালেটেই উইথড্র করুন। প্রথমবার উইথড্রয়ের জন্য KYC লাগতে পারে। সাধারণ সময়: কয়েক মিনিট থেকে কয়েক ঘণ্টা।",
          "## সাধারণ ভুল",
          "- ভুল TrxID — পাঠানোর আগে দুইবার মিলিয়ে দেখুন",
          "- ওয়ালেট নাম ও অ্যাকাউন্ট হোল্ডারের নাম মিলছে না",
          "- তালিকাভুক্ত মার্চেন্টের বদলে কোনো পার্সোনাল নম্বরে টাকা পাঠানো",
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