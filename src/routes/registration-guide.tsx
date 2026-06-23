import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import { articleSchema, jsonLdScript, canonicalLink } from "@/lib/schema";

export const Route = createFileRoute("/registration-guide")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Registration Guide for Bangladesh | GetJeetBuzz" },
      { name: "description", content: "How to register a JeetBuzz account from Bangladesh — phone signup, KYC, first deposit. Bengali & English." },
      { property: "og:title", content: "JeetBuzz Registration Guide for Bangladesh" },
      { property: "og:description", content: "Step-by-step JeetBuzz signup from Bangladesh." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("registration") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("registration") },
    ],
    links: [canonicalLink("/registration-guide")],
    scripts: [
      jsonLdScript(
        articleSchema({
          headline: "JeetBuzz Registration Guide for Bangladesh",
          description: "Step-by-step JeetBuzz signup from Bangladesh.",
          path: "/registration-guide",
          image: imageAbsoluteUrl("registration"),
        }),
      ),
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">Registration Guide</span> for Bangladesh</>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">রেজিস্ট্রেশন গাইড</span> — বাংলাদেশ</>,
        ur: <>JeetBuzz <span className="gold-text">رجسٹریشن گائیڈ</span> — پاکستان</>,
        hi: <>JeetBuzz <span className="gold-text">रजिस्ट्रेशन गाइड</span> — भारत</>,
      }}
      subtitle="Open a JeetBuzz account in under 3 minutes. We'll walk through phone signup, OTP, KYC and your first deposit."
      subtitleByLocale={{
        bn: "৩ মিনিটেরও কম সময়ে জিতবাজে অ্যাকাউন্ট খুলুন। ফোন সাইনআপ, OTP, KYC এবং প্রথম bKash/Nagad ডিপোজিট — প্রতিটি ধাপ সহজভাবে দেখানো হলো।",
        ur: "JeetBuzz پر 3 منٹ سے کم وقت میں اکاؤنٹ بنائیں۔ فون سائن اپ، OTP، KYC اور پہلے EasyPaisa/JazzCash ڈپازٹ تک ہر قدم۔",
        hi: "JeetBuzz पर 3 मिनट से कम में अकाउंट खोलें। फ़ोन साइनअप, OTP, KYC और पहली UPI/PhonePe डिपॉज़िट — हर स्टेप आसान भाषा में।",
      }}
      ctaLabel="Register on JeetBuzz"
      ctaLabelByLocale={{
        bn: "জিতবাজে রেজিস্টার করুন",
        ur: "JeetBuzz پر رجسٹر کریں",
        hi: "JeetBuzz पर रजिस्टर करें",
      }}
      heroImage="registration"
      body={[
        "## What you'll need",
        "A valid mobile number, an email, and a local payment method like bKash, Nagad, Rocket (BD), EasyPaisa/JazzCash (PK) or UPI/PhonePe (IN).",
        "## Step 1 — Open the official site",
        "Use the 'Register on JeetBuzz' button. Avoid third-party APKs and 'mirror' sites.",
        "## Step 2 — Click Sign Up",
        "Choose phone registration (fastest in South Asia). Enter your number and request OTP.",
        "## Step 3 — Profile details",
        "Set a strong password. Pick your currency (BDT / PKR / INR). Apply any promo code at this step.",
        "## Step 4 — Verify OTP",
        "Enter the 4–6 digit code sent to your phone.",
        "## Step 5 — First deposit & bonus",
        "Open the Cashier, choose your preferred local method, and opt into the welcome bonus only if the terms suit you.",
        "## KYC",
        "For larger withdrawals, JeetBuzz may ask for an NID and a selfie. Submit clear photos to avoid back-and-forth.",
      ]}
      bodyByLocale={{
        bn: [
          "## আপনার যা প্রয়োজন",
          "একটি বৈধ মোবাইল নম্বর, একটি ইমেইল, এবং bKash / Nagad / Rocket এর মত একটি বাংলাদেশি পেমেন্ট মাধ্যম। বাংলাদেশ থেকে রেজিস্ট্রেশনের জন্য NID থাকলে KYC দ্রুত হয়।",
          "## ধাপ ১ — অফিসিয়াল সাইটে যান",
          "উপরের 'জিতবাজে রেজিস্টার করুন' বাটন ব্যবহার করুন। থার্ড-পার্টি APK বা ‘মিরর’ সাইট এড়িয়ে চলুন — এগুলো ফেক হতে পারে।",
          "## ধাপ ২ — সাইন আপে ক্লিক করুন",
          "ফোন রেজিস্ট্রেশন বেছে নিন (বাংলাদেশের জন্য সবচেয়ে দ্রুত)। আপনার নম্বর দিন এবং OTP চাইলে রিকোয়েস্ট পাঠান।",
          "## ধাপ ৩ — প্রোফাইল তথ্য",
          "শক্তিশালী পাসওয়ার্ড সেট করুন। মুদ্রা হিসেবে BDT বেছে নিন। যদি কোনো প্রোমো কোড থাকে এই ধাপে দিন।",
          "## ধাপ ৪ — OTP যাচাই",
          "আপনার ফোনে পাঠানো ৪–৬ ডিজিটের কোড লিখুন।",
          "## ধাপ ৫ — প্রথম ডিপোজিট ও বোনাস",
          "ক্যাশিয়ার খুলুন, bKash / Nagad / Rocket বেছে নিন, এবং শর্ত পছন্দ হলেই ওয়েলকাম বোনাস নিন।",
          "## KYC যাচাই",
          "বড় উইথড্রয়ের জন্য জিতবাজ NID এবং সেলফি চাইতে পারে। ঝামেলা এড়াতে স্পষ্ট ছবি জমা দিন।",
          "> সর্বশেষ যাচাই: জুন ২০২৬। বাংলাদেশের প্লেয়ারদের জন্য — শুধুমাত্র ১৮+, দায়িত্বশীলভাবে খেলুন।",
        ],
        ur: [
          "## آپ کو کیا چاہیے",
          "ایک درست موبائل نمبر، ایک ای میل، اور EasyPaisa / JazzCash / SadaPay جیسا پاکستانی پیمنٹ طریقہ۔ KYC کے لیے CNIC رکھنا تیز عمل کے لیے بہتر ہے۔",
          "## مرحلہ 1 — آفیشل سائٹ کھولیں",
          "اوپر دیا گیا 'JeetBuzz پر رجسٹر کریں' بٹن استعمال کریں۔ تھرڈ پارٹی APK یا 'مرر' سائٹس سے بچیں۔",
          "## مرحلہ 2 — Sign Up پر کلک کریں",
          "فون رجسٹریشن منتخب کریں (پاکستان کے لیے سب سے تیز)۔ اپنا نمبر درج کریں اور OTP کی درخواست کریں۔",
          "## مرحلہ 3 — پروفائل کی تفصیلات",
          "مضبوط پاس ورڈ بنائیں۔ کرنسی کے طور پر PKR منتخب کریں۔ کوئی پروموشن کوڈ ہو تو اسی مرحلے میں لگائیں۔",
          "## مرحلہ 4 — OTP کی تصدیق",
          "آپ کے فون پر آنے والا 4–6 ہندسوں کا کوڈ درج کریں۔",
          "## مرحلہ 5 — پہلی ڈپازٹ اور بونس",
          "کیشیئر کھولیں، EasyPaisa / JazzCash منتخب کریں، اور صرف اسی وقت ویلکم بونس قبول کریں جب شرائط مناسب لگیں۔",
          "## KYC",
          "بڑی ودڈرا کے لیے JeetBuzz CNIC اور سیلفی مانگ سکتا ہے۔ صاف تصاویر جمع کروائیں تاکہ تاخیر نہ ہو۔",
          "> آخری تصدیق: جون 2026۔ صرف 18+، ذمہ داری سے کھیلیں۔",
        ],
        hi: [
          "## आपको क्या चाहिए",
          "एक वैध मोबाइल नंबर, एक ईमेल, और UPI / PhonePe / Paytm / Google Pay जैसा भारतीय पेमेंट तरीका। KYC के लिए Aadhaar/PAN तैयार रखें।",
          "## स्टेप 1 — ऑफिशियल साइट खोलें",
          "ऊपर दिए गए 'JeetBuzz पर रजिस्टर करें' बटन का इस्तेमाल करें। थर्ड-पार्टी APK या 'मिरर' साइट से बचें।",
          "## स्टेप 2 — Sign Up पर क्लिक करें",
          "फ़ोन रजिस्ट्रेशन चुनें (भारत के लिए सबसे तेज़)। अपना नंबर डालें और OTP रिक्वेस्ट करें।",
          "## स्टेप 3 — प्रोफ़ाइल डिटेल्स",
          "मज़बूत पासवर्ड बनाएँ। करेंसी में INR चुनें। कोई प्रोमो कोड हो तो इसी स्टेप पर अप्लाई करें।",
          "## स्टेप 4 — OTP वेरिफ़ाई करें",
          "आपके फ़ोन पर आए 4–6 अंकों का कोड डालें।",
          "## स्टेप 5 — पहली डिपॉज़िट और बोनस",
          "Cashier खोलें, UPI / PhonePe / Paytm चुनें, और शर्तें ठीक लगें तभी वेलकम बोनस लें।",
          "## KYC",
          "बड़ी विदड्रॉल के लिए JeetBuzz Aadhaar / PAN और सेल्फ़ी माँग सकता है। साफ़ फ़ोटो भेजें ताकि देरी न हो।",
          "> आख़िरी सत्यापन: जून 2026। केवल 18+, ज़िम्मेदारी से खेलें।",
        ],
      }}
      articleHeadline="JeetBuzz Registration Guide"
      articleDescription="Step-by-step JeetBuzz signup from Bangladesh, Pakistan and India."
      articlePath="/registration-guide"
      related={[
        { to: "/login-guide", title: "Login Guide", description: "Safe access to your JeetBuzz account." },
        { to: "/deposit-guide", title: "Deposit Guide", description: "Fund your account via bKash, Nagad, JazzCash, UPI and more." },
        { to: "/bonus-and-promotions", title: "Welcome Bonus", description: "Understand the welcome offer before depositing." },
        { to: "/jeetbuzz-review", title: "JeetBuzz Review", description: "Pillar review of the operator." },
      ]}
    />
  ),
});