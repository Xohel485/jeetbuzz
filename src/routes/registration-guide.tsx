import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import { articleSchema, jsonLdScript, canonicalLink } from "@/lib/schema";
import { SIGNUP_CLUSTER, siblings } from "@/lib/clusters";

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
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Signup", path: "/registration-guide" },
      ]}
      faqs={[
        { q: "How long does JeetBuzz signup take?", a: "Under 3 minutes for phone signup if your OTP arrives on time. KYC, when required, is a separate step." },
        { q: "Do I need an email to register?", a: "Phone is enough to start. Add email later from account settings — it enables email-based password recovery if you lose your SIM." },
        { q: "Can I change my username later?", a: "Usually no. Pick a username you're happy with. Display name (the public one) can sometimes be edited." },
        { q: "Is there a registration fee?", a: "No. JeetBuzz signup is free. You only pay your first deposit, which becomes your starting balance." },
        { q: "Can one person open multiple accounts?", a: "No. One person = one account, verified via NID/CNIC/Aadhaar at KYC. Duplicate accounts are closed and balances frozen." },
        { q: "I'm 17 — can I still sign up?", a: "No. JeetBuzz is strictly 18+. Underage accounts fail KYC and deposits may not be refunded." },
        { q: "What if OTP doesn't arrive?", a: "Wait 60 seconds, then tap Resend. If it still doesn't arrive, switch from Wi-Fi to mobile data, or try another operator." },
        { q: "Should I claim the welcome bonus at signup?", a: "Only if you understand the wagering and max-bet rules. See our [Welcome Bonus](/welcome-bonus) page first." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "জিতবাজ সাইনআপ কত সময় লাগে?", a: "ফোন সাইনআপে ৩ মিনিটের কম, যদি OTP দ্রুত আসে। KYC প্রয়োজন হলে আলাদা ধাপ।" },
          { q: "ইমেইল ছাড়া কি রেজিস্টার করা যায়?", a: "হ্যাঁ, ফোন নম্বরই যথেষ্ট। পরে অ্যাকাউন্ট সেটিংস থেকে ইমেইল যোগ করুন — SIM হারালে রিকভারি সহজ হয়।" },
          { q: "ইউজারনেম কি পরে পরিবর্তন করা যায়?", a: "সাধারণত না। চিন্তা করে বেছে নিন। শুধু Display Name বদলানো যেতে পারে।" },
          { q: "রেজিস্ট্রেশন ফি কি আছে?", a: "না। সাইনআপ ফ্রি। শুধু প্রথম ডিপোজিট লাগে যা আপনার ব্যালান্স হবে।" },
          { q: "একজন ব্যক্তি কি একাধিক অ্যাকাউন্ট খুলতে পারবে?", a: "না। এক NID = এক অ্যাকাউন্ট। ডুপ্লিকেট ধরা পড়লে সব অ্যাকাউন্ট বন্ধ।" },
          { q: "১৭ বছর বয়সে সাইনআপ করলে?", a: "JeetBuzz শুধুমাত্র ১৮+। KYC ফেইল হবে, ডিপোজিট ফেরত নাও আসতে পারে।" },
          { q: "Grameenphone/Robi-তে OTP আসছে না — কী করব?", a: "৬০ সেকেন্ড অপেক্ষা করে Resend দিন। Wi-Fi থেকে মোবাইল ডেটায় স্যুইচ করুন বা অন্য অপারেটর চেষ্টা করুন।" },
          { q: "সাইনআপের সময়েই কি বোনাস নেব?", a: "শর্ত বুঝে নিন। আগে [Welcome Bonus](/welcome-bonus) পেজ পড়ুন — max bet ও wagering নিয়ম গুরুত্বপূর্ণ।" },
          { q: "bKash অ্যাকাউন্টের নাম আর JeetBuzz নাম আলাদা হলে?", a: "ডিপোজিট/উইথড্রয়াল আটকাতে পারে। দুটোই NID-র সাথে মিলিয়ে রাখুন।" },
        ],
        ur: [
          { q: "JeetBuzz سائن اپ کتنا وقت لیتا ہے؟", a: "فون سائن اپ میں 3 منٹ سے کم، اگر OTP وقت پر آجائے۔ KYC کی ضرورت پر الگ مرحلہ۔" },
          { q: "بغیر ای میل کے رجسٹر ہو سکتا ہوں؟", a: "ہاں، فون نمبر کافی ہے۔ بعد میں اکاؤنٹ سیٹنگز سے ای میل شامل کریں — SIM گم ہونے پر ریکوری آسان۔" },
          { q: "یوزرنیم بعد میں تبدیل ہو سکتا ہے؟", a: "عموماً نہیں۔ سوچ سمجھ کر منتخب کریں۔ صرف Display Name تبدیل ہو سکتا ہے۔" },
          { q: "رجسٹریشن فیس ہے؟", a: "نہیں۔ سائن اپ مفت۔ صرف پہلی ڈپازٹ آپ کا بیلنس بنتی ہے۔" },
          { q: "ایک شخص متعدد اکاؤنٹس کھول سکتا ہے؟", a: "نہیں۔ ایک CNIC = ایک اکاؤنٹ۔ ڈپلیکیٹ پکڑے جانے پر سب بند۔" },
          { q: "17 سال کی عمر میں سائن اپ کرنے پر؟", a: "JeetBuzz صرف 18+۔ KYC ناکام، ڈپازٹ واپس نہ ملنے کا خطرہ۔" },
          { q: "Jazz/Zong پر OTP نہیں آرہا — کیا کروں؟", a: "60 سیکنڈ انتظار کر کے Resend دبائیں۔ Wi-Fi چھوڑ کر موبائل ڈیٹا یا دوسرا نیٹ ورک آزمائیں۔" },
          { q: "سائن اپ پر ہی بونس لیں؟", a: "شرائط سمجھ کر۔ پہلے [ویلکم بونس](/welcome-bonus) صفحہ پڑھیں — max bet اور wagering اصول اہم۔" },
          { q: "EasyPaisa اور JeetBuzz نام مختلف ہوں تو؟", a: "ڈپازٹ/ودڈرا رک سکتی ہے۔ دونوں کو CNIC کے مطابق ایک جیسا رکھیں۔" },
        ],
        hi: [
          { q: "JeetBuzz साइनअप कितना समय लेता है?", a: "फ़ोन साइनअप में 3 मिनट से कम, अगर OTP समय पर आए। KYC ज़रूरी हो तो अलग चरण।" },
          { q: "बिना ईमेल के रजिस्टर हो सकता हूँ?", a: "हाँ, फ़ोन नंबर काफ़ी है। बाद में अकाउंट सेटिंग्स से ईमेल जोड़ें — SIM गुम होने पर रिकवरी आसान।" },
          { q: "यूज़रनेम बाद में बदल सकते हैं?", a: "आम तौर पर नहीं। सोच-समझकर चुनें। केवल Display Name बदल सकता है।" },
          { q: "रजिस्ट्रेशन फ़ीस है?", a: "नहीं। साइनअप मुफ़्त। केवल पहली डिपॉज़िट आपका बैलेंस बनती है।" },
          { q: "एक व्यक्ति कई अकाउंट खोल सकता है?", a: "नहीं। एक Aadhaar = एक अकाउंट। डुप्लिकेट पकड़े जाने पर सब बंद।" },
          { q: "17 साल की उम्र में साइनअप करने पर?", a: "JeetBuzz केवल 18+। KYC फ़ेल, डिपॉज़िट वापस न आने का जोखिम।" },
          { q: "Jio/Airtel पर OTP नहीं आ रहा — क्या करूँ?", a: "60 सेकंड रुककर Resend दबाएँ। Wi-Fi छोड़कर मोबाइल डेटा या दूसरा ऑपरेटर आज़माएँ।" },
          { q: "साइनअप पर ही बोनस लें?", a: "शर्तें समझकर। पहले [वेलकम बोनस](/welcome-bonus) पेज पढ़ें — max bet और wagering नियम अहम।" },
          { q: "PhonePe/UPI और JeetBuzz नाम अलग हों तो?", a: "डिपॉज़िट/निकासी रुक सकती है। दोनों को Aadhaar के अनुसार एक जैसा रखें।" },
        ],
      }}
      related={siblings(SIGNUP_CLUSTER, "/registration-guide")}
    />
  ),
});