import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import { SIGNUP_CLUSTER, siblings } from "@/lib/clusters";

export const Route = createFileRoute("/verification")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Verification Guide 2026 - Phone OTP, Email & KYC (NID/CNIC/Aadhaar)" },
      { name: "description", content: "JeetBuzz account verification guide 2026, phone OTP, email confirmation and KYC with NID (BD), CNIC (PK) or Aadhaar (IN), documents to send and approval timing." },
      { property: "og:title", content: "JeetBuzz Account Verification" },
      { property: "og:description", content: "Step-by-step JeetBuzz verification, phone, email and KYC for BD, PK and IN." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("registration") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("registration") },
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">Account Verification</span></>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">অ্যাকাউন্ট ভেরিফিকেশন</span></>,
        ur: <>JeetBuzz <span className="gold-text">اکاؤنٹ تصدیق</span></>,
        hi: <>JeetBuzz <span className="gold-text">अकाउंट वेरिफिकेशन</span></>,
      }}
      subtitle="JeetBuzz has three verification layers, phone, email and KYC. You can start playing with phone alone, but KYC unlocks larger withdrawals. Here's exactly what each step needs."
      subtitleByLocale={{
        bn: "জিতবাজে তিনটি ভেরিফিকেশন ধাপ, ফোন, ইমেইল ও KYC। ফোন দিয়েই খেলা শুরু করা যায়, কিন্তু বড় উইথড্রয়ালে KYC লাগবে।",
        ur: "JeetBuzz پر تین تصدیق کے درجے, فون، ای میل اور KYC۔ فون سے کھیلنا شروع کر سکتے ہیں، مگر بڑی نکالنے کے لیے KYC ضروری ہے۔",
        hi: "JeetBuzz पर तीन वेरिफिकेशन स्तर, फ़ोन, ईमेल और KYC। फ़ोन से खेलना शुरू कर सकते हैं, पर बड़ी निकासी के लिए KYC ज़रूरी है।",
      }}
      ctaLabel="Verify your JeetBuzz account"
      ctaLabelByLocale={{
        bn: "আপনার জিতবাজ অ্যাকাউন্ট ভেরিফাই করুন",
        ur: "اپنا JeetBuzz اکاؤنٹ تصدیق کریں",
        hi: "अपना JeetBuzz अकाउंट वेरिफ़ाई करें",
      }}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Signup", path: "/registration-guide" },
        { name: "Verification", path: "/verification" },
      ]}
      heroImage="registration"
      body={[
        "## Layer 1. Phone verification (required at signup)",
        "JeetBuzz sends a 6-digit OTP to the phone number you register. Enter it within 60 seconds. This is the only verification needed to deposit and place bets.",
        "## Layer 2. Email verification (recommended)",
        "After signup, JeetBuzz emails a confirmation link. Click it once and you unlock email-based password recovery, much safer than relying on phone alone (your SIM can be lost, swapped or blocked).",
        "## Layer 3. KYC (required for larger withdrawals)",
        "When your cumulative withdrawal crosses the platform threshold, JeetBuzz requests:",
        "- A government photo ID. NID (Bangladesh), CNIC (Pakistan) or Aadhaar/PAN (India).",
        "- A clear selfie holding the ID next to your face.",
        "- Proof of address (utility bill or bank statement, last 3 months) if asked.",
        "Upload sharp, glare-free photos, blurry uploads are the #1 reason KYC takes more than 24 hours.",
        "## How long does KYC take?",
        "Usually 2–24 hours during business hours. Weekends and holidays can push it to 48 hours. You can keep depositing and playing during review; only withdrawals are paused.",
        "## Common rejections",
        "- ID photo expired.",
        "- Name on the account doesn't match the ID.",
        "- Selfie doesn't clearly show your face AND the ID together.",
        "Fix the issue and re-upload, there's no penalty for resubmission.",
      ]}
      bodyByLocale={{
        bn: [
          "## সংক্ষেপে",
          "জিতবাজে তিন স্তরের ভেরিফিকেশন, ফোন, ইমেইল ও KYC। প্রথম দুটি সাইনআপের সময়েই হয়ে যায়; KYC বড় উইথড্রয়ালের আগে।",
          "## স্তর ১, ফোন OTP (বাধ্যতামূলক)",
          "Grameenphone, Robi, Banglalink বা Teletalk, যেই অপারেটরই হোক, রেজিস্ট্রেশনের সময় আপনার নম্বরে ৬-ডিজিটের একটি OTP পাঠানো হয়। সাধারণত কয়েক সেকেন্ড থেকে এক মিনিটের মধ্যে আসে। Teletalk বা ব্যস্ত নেটওয়ার্কে কখনো একটু বেশি সময় নিতে পারে। OTP না এলে কিছুক্ষণ অপেক্ষা করে ‘Resend’ চাপুন বা নেটওয়ার্ক বদলে দেখুন।",
          "## স্তর ২, ইমেইল কনফার্মেশন (পরামর্শ)",
          "সাইনআপের পর জিতবাজ একটি কনফার্মেশন লিংক ইমেইল করে। একবার ক্লিক করলেই ইমেইল-ভিত্তিক পাসওয়ার্ড রিকভারি সক্রিয় হয়. SIM হারালেও অ্যাকাউন্ট ফেরত পাবেন। স্প্যাম/Promotions ফোল্ডার অবশ্যই চেক করুন।",
          "## স্তর ৩. KYC (বড় উইথড্রয়ালে)",
          "নির্দিষ্ট থ্রেশহোল্ড পার করলে অথবা ঝুঁকিভিত্তিক রিভিউ ট্রিগার হলে জিতবাজ KYC ডকুমেন্ট চাইবে। সঠিক থ্রেশহোল্ড অ্যাকাউন্ট ও কারেন্সি অনুসারে পরিবর্তিত হতে পারে। সাধারণত প্রয়োজন হয়:",
          "- জাতীয় পরিচয়পত্র (NID), স্মার্ট কার্ড বা পুরোনো লেমিনেটেড।",
          "- NID হাতে নিয়ে স্পষ্ট সেলফি (মুখ ও NID একই ফ্রেমে)।",
          "- প্রয়োজনে ঠিকানার প্রমাণ, বিদ্যুৎ/গ্যাস বিল বা ব্যাংক স্টেটমেন্ট (গত ৩ মাস)।",
          "## বাংলাদেশি প্লেয়ারদের জন্য বিশেষ টিপস",
          "- bKash/Nagad-এ যে নামে অ্যাকাউন্ট, NID-এর নামের সাথে হুবহু মিল থাকতে হবে। ‘Md.’ আর ‘Mohammad’ আলাদা ধরা হয়, ডিপোজিট রিভার্স হতে পারে।",
          "- NID-র ছবি ফ্ল্যাশ বন্ধ করে দিনের আলোতে তুলুন; চকচক বা ছায়া থাকলে রিজেক্ট হয়।",
          "- পাসপোর্ট বা ড্রাইভিং লাইসেন্স দিয়েও KYC করা যায়, তবে NID সবচেয়ে দ্রুত প্রসেস হয়।",
          "## KYC কত সময় লাগে?",
          "সাধারণত অফিস টাইমে কয়েক ঘণ্টার মধ্যেই হয়ে যায়, তবে ভিড় বা ছুটির দিনে আরও বেশি সময়ও লাগতে পারে। নির্দিষ্ট সময় আগে থেকে গ্যারান্টি দেওয়া সম্ভব নয়। রিভিউ চলাকালীন ডিপোজিট ও বেটিং বন্ধ থাকে না; শুধু উইথড্রয়াল সাময়িক হোল্ডে যায়।",
          "## সাধারণ রিজেকশন",
          "- ছবি ঝাপসা বা OTP চাপলে চলে যাচ্ছে।",
          "- NID-র মেয়াদ শেষ বা নাম মিলছে না।",
          "- সেলফিতে মুখ ও NID একসাথে দেখা যাচ্ছে না।",
          "ভুল ঠিক করে আবার আপলোড করুন, পেনাল্টি নেই।",
          "## নিরাপত্তা সতর্কতা",
          "KYC ডকুমেন্ট শুধু অফিসিয়াল অ্যাপ বা ওয়েবসাইটের আপলোড প্যানেল থেকে জমা দিন। টেলিগ্রাম, WhatsApp বা ইমেইলে কেউ ‘জিতবাজ এজেন্ট’ পরিচয়ে NID ছবি চাইলে সেটি প্রতারণা, পাঠাবেন না।",
          "## পরবর্তী ধাপ",
          "ভেরিফাই হয়ে গেলে [Welcome Bonus](/welcome-bonus) ক্লেইম করুন বা সরাসরি [Deposit Guide](/deposit-guide) দেখে bKash/Nagad-এ প্রথম ডিপোজিট করুন।",
          "> সর্বশেষ যাচাই: জুন ২০২৬। শুধুমাত্র ১৮+।",
        ],
        ur: [
          "## مختصراً",
          "JeetBuzz پر تین تصدیقی درجے, فون، ای میل اور KYC۔ پہلے دو سائن اپ کے دوران مکمل ہوتے ہیں؛ KYC بڑی ودڈرا سے پہلے۔",
          "## درجہ 1, فون OTP (لازمی)",
          "Jazz، Zong، Ufone یا Telenor, کسی بھی نیٹ ورک پر رجسٹریشن کے دوران آپ کے نمبر پر 6 ہندسوں کا OTP بھیجا جاتا ہے۔ زیادہ تر اوقات چند سیکنڈ سے ایک منٹ کے اندر آ جاتا ہے؛ Ufone، Telenor یا مصروف نیٹ ورک پر کبھی تھوڑی تاخیر بھی ہو سکتی ہے۔ OTP نہ آئے تو کچھ دیر انتظار کر کے 'Resend' دبائیں یا Wi-Fi چھوڑ کر موبائل ڈیٹا پر آ جائیں۔",
          "## درجہ 2, ای میل تصدیق (تجویز کردہ)",
          "سائن اپ کے بعد JeetBuzz آپ کو ای میل پر ایک تصدیقی لنک بھیجتا ہے۔ ایک کلک پر ای میل کے ذریعے پاس ورڈ ریکوری فعال ہو جاتی ہے, اگر SIM گم/بلاک ہو جائے تو بھی اکاؤنٹ بحال ہو سکتا ہے۔ Spam اور Promotions فولڈر ضرور دیکھیں۔",
          "## درجہ 3. KYC (بڑی ودڈرا کے لیے)",
          "مخصوص حد عبور کرنے پر یا رسک پر مبنی جائزے کی صورت میں JeetBuzz KYC دستاویزات طلب کرتا ہے۔ درست حد اکاؤنٹ اور کرنسی کے مطابق مختلف ہو سکتی ہے۔ عام طور پر درکار ہوتا ہے:",
          "- شناختی کارڈ (CNIC), اصل کارڈ، فوٹو کاپی نہیں۔",
          "- ہاتھ میں CNIC پکڑے ہوئے واضح سیلفی (چہرہ اور کارڈ ایک ہی فریم میں)۔",
          "- ضرورت پر پتے کا ثبوت, بجلی/گیس بل یا بینک سٹیٹمنٹ (پچھلے 3 ماہ)۔",
          "## پاکستانی پلیئرز کے لیے خاص نکات",
          "- JazzCash/EasyPaisa اکاؤنٹ کا نام آپ کے CNIC کے نام سے بالکل میل کھانا چاہیے۔ مختلف ہجے (مثلاً Muhammad بمقابلہ Mohammad) سے ڈپازٹ ریورس ہو سکتا ہے۔",
          "- CNIC کی تصویر دن کی روشنی میں فلیش بند کر کے لیں؛ چمک یا سایہ سے رد ہو سکتی ہے۔",
          "- پاسپورٹ بھی قبول ہے، لیکن CNIC تیز ترین پروسیس ہوتا ہے۔",
          "## KYC میں کتنا وقت لگتا ہے؟",
          "دفتر کے اوقات میں عموماً چند گھنٹوں کے اندر مکمل ہو جاتا ہے، تاہم رش یا چھٹیوں میں زیادہ وقت بھی لگ سکتا ہے۔ درست وقت کی پہلے سے ضمانت نہیں دی جا سکتی۔ جائزے کے دوران ڈپازٹ اور بیٹنگ بند نہیں ہوتی، صرف ودڈرا عارضی طور پر روکی جاتی ہے۔",
          "## عام رد کی وجوہات",
          "- تصویر دھندلی، گلیئر یا OTP کاٹ رہا ہو۔",
          "- CNIC کی میعاد ختم یا نام مماثل نہیں۔",
          "- سیلفی میں چہرہ اور CNIC ایک ساتھ نظر نہیں آرہے۔",
          "غلطی درست کر کے دوبارہ اپ لوڈ کریں, کوئی جرمانہ نہیں۔",
          "## اگلا قدم",
          "تصدیق مکمل ہو جائے تو [ویلکم بونس](/welcome-bonus) لیں یا براہ راست [ڈپازٹ گائیڈ](/deposit-guide) دیکھ کر EasyPaisa/JazzCash سے پہلی ڈپازٹ کریں۔",
          "> آخری تصدیق: جون 2026۔ صرف 18+۔",
        ],
        hi: [
          "## संक्षेप में",
          "JeetBuzz पर तीन वेरिफ़िकेशन परतें, फ़ोन, ईमेल और KYC। पहली दो साइनअप के दौरान पूरी हो जाती हैं; KYC बड़ी निकासी से पहले।",
          "## परत 1, फ़ोन OTP (अनिवार्य)",
          "Jio, Airtel, Vi या BSNL, किसी भी ऑपरेटर पर कुछ ही समय में 6-डिजिट OTP आ जाता है। छोटे ऑपरेटरों पर कभी-कभी थोड़ी देरी सामान्य है। OTP न आए तो पूरा एक मिनट इंतज़ार करें, फिर 'Resend' दबाएँ या Wi-Fi छोड़कर मोबाइल डेटा पर आएँ।",
          "## परत 2, ईमेल कन्फ़र्मेशन (सुझाव)",
          "साइनअप के बाद JeetBuzz ईमेल पर एक कन्फ़र्मेशन लिंक भेजता है। एक क्लिक से ईमेल-आधारित पासवर्ड रिकवरी सक्रिय हो जाती है. SIM गुम/पोर्ट हो जाए तो भी अकाउंट वापस मिल सकता है। Spam और Promotions फ़ोल्डर ज़रूर देखें।",
          "## परत 3. KYC (बड़ी निकासी के लिए)",
          "थ्रेशहोल्ड पार करने पर (आम तौर पर पहली बड़ी निकासी या ₹50,000+) JeetBuzz माँगता है:",
          "- सरकारी फ़ोटो ID. Aadhaar या PAN कार्ड।",
          "- ID हाथ में पकड़े हुए साफ़ सेल्फ़ी (चेहरा और कार्ड एक ही फ़्रेम में)।",
          "- ज़रूरत पड़ने पर पते का प्रमाण, बिजली/गैस बिल या बैंक स्टेटमेंट (पिछले 3 महीने)।",
          "## भारतीय खिलाड़ियों के लिए ख़ास टिप्स",
          "- PhonePe/Google Pay/Paytm/UPI अकाउंट का नाम आपके Aadhaar/PAN के नाम से बिल्कुल मेल खाना चाहिए। 'Kumar' और 'Kr.' जैसी छोटी अंतर भी डिपॉज़िट रिवर्स कर सकती है।",
          "- Aadhaar की तस्वीर दिन की रोशनी में फ़्लैश बंद करके लें; चमक या परछाई से रिजेक्ट हो सकती है।",
          "- सुरक्षा के लिए Aadhaar का मास्क्ड वर्ज़न (अंतिम 4 अंक दिखने वाला) UIDAI से डाउनलोड करके भेज सकते हैं. JeetBuzz इसे स्वीकार करता है।",
          "## KYC कितना समय लेता है?",
          "प्रोसेसिंग समय अलग-अलग हो सकता है, आम तौर पर कुछ घंटों में पूरा होता है, पर भीड़, सप्ताहांत या होली, दिवाली, ईद जैसी छुट्टियों में इससे अधिक भी लग सकता है। रिव्यू के दौरान डिपॉज़िट और बेटिंग बंद नहीं होती, सिर्फ़ निकासी रुक जाती है।",
          "## सामान्य रिजेक्शन के कारण",
          "- तस्वीर धुंधली, चमक या OTP कट रहा हो।",
          "- Aadhaar/PAN पर नाम मेल नहीं खाता।",
          "- सेल्फ़ी में चेहरा और ID एक साथ नहीं दिख रहे।",
          "ग़लती ठीक करके फिर से अपलोड करें, कोई पेनल्टी नहीं।",
          "## अगला क़दम",
          "वेरिफ़ाई होने पर [वेलकम बोनस](/welcome-bonus) क्लेम करें या सीधे [डिपॉज़िट गाइड](/deposit-guide) देखकर UPI/PhonePe से पहली डिपॉज़िट करें।",
          "> आख़िरी सत्यापन: जून 2026। केवल 18+।",
        ],
      }}
      faqs={[
        { q: "Can I withdraw without KYC?", a: "Small withdrawals usually go through. Once you cross the platform's daily / cumulative threshold, KYC becomes mandatory." },
        { q: "Is my ID data safe?", a: "JeetBuzz operates under a Curaçao licence and stores KYC encrypted. Only compliance staff can view it. Don't send IDs via email, always upload through the in-account KYC panel." },
        { q: "I'm under 18, what happens?", a: "You will fail KYC and the account will be closed. JeetBuzz, like every regulated operator, is 18+ only." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "KYC ছাড়া কি উইথড্রয়াল করা যায়?", a: "ছোট অংকের উইথড্রয়াল প্রাথমিকভাবে যেতে পারে, তবে নির্দিষ্ট কিউমুলেটিভ থ্রেশহোল্ড পেরোলে বা ঝুঁকিভিত্তিক রিভিউ ট্রিগার হলে KYC বাধ্যতামূলক হয়ে যায়।" },
          { q: "NID-র জায়গায় পাসপোর্ট দিতে পারব?", a: "হ্যাঁ, কিন্তু NID দ্রুত প্রসেস হয়। বিদেশে বসবাসকারী বাংলাদেশিরা পাসপোর্ট দিন।" },
          { q: "Teletalk-এ OTP আসছে না, কী করব?", a: "Teletalk-এর আন্তর্জাতিক SMS রুট তুলনামূলকভাবে ধীর। কিছুক্ষণ বেশি অপেক্ষা করে Resend দিন; এরপরও না এলে অন্য অপারেটরের নম্বর দিয়ে রি-রেজিস্টার করুন।" },
          { q: "bKash-এর নাম আর NID-র নাম একটু আলাদা হলে?", a: "ভেরিফিকেশনে আটকাতে পারে। bKash কাস্টমার কেয়ারে নাম আপডেট করুন (NID copy লাগবে), তারপর JeetBuzz-এ KYC জমা দিন।" },
          { q: "KYC কতদিনে হয়?", a: "সাধারণত অফিস টাইমে কয়েক ঘণ্টার মধ্যেই হয়, তবে ভিড় বা ছুটির দিনে আরও সময় লাগতে পারে। সঠিক সময়ের গ্যারান্টি দেওয়া যায় না।" },
          { q: "একজনের NID দিয়ে কি দুটি অ্যাকাউন্ট খোলা যায়?", a: "না। এক NID = এক অ্যাকাউন্ট। ডুপ্লিকেট ধরা পড়লে দুটোই বন্ধ হয় এবং ব্যালান্স আটকে যায়।" },
          { q: "সেলফিতে চশমা বা মাস্ক চলবে?", a: "চশমা চলবে যদি চোখ পরিষ্কার দেখা যায়। মাস্ক খোলা থাকতেই হবে।" },
          { q: "KYC ডেটা কোথায় রাখা হয়?", a: "জিতবাজের অপারেটিং লাইসেন্সের শর্ত অনুযায়ী এনক্রিপ্টেড সার্ভারে সংরক্ষিত হয় এবং সাধারণত শুধু কমপ্লায়েন্স টিম এটি অ্যাক্সেস করতে পারে।" },
          { q: "১৭ বছর বয়সে রেজিস্টার করলে কী হবে?", a: "KYC ব্যর্থ হবে এবং অ্যাকাউন্ট বন্ধ করা হতে পারে। ১৮+ হওয়ার পর তবেই অ্যাকাউন্ট খোলা ও খেলা শুরু করুন।" },
          { q: "টেলিগ্রামে ‘জিতবাজ এজেন্ট’ KYC সাহায্য করতে চাইলে?", a: "এড়িয়ে যান। অফিসিয়াল KYC শুধু অ্যাপ বা ওয়েবসাইটের নির্ধারিত আপলোড প্যানেল থেকে হয়; বাইরে কাউকে NID-র ছবি পাঠাবেন না।" },
        ],
        ur: [
          { q: "KYC کے بغیر ودڈرا ہو سکتی ہے؟", a: "ابتدائی چھوٹی رقم عموماً نکل جاتی ہے، لیکن مقررہ کیومولیٹو حد عبور کرنے پر یا رسک پر مبنی جائزے کی صورت میں KYC لازمی ہو جاتی ہے۔" },
          { q: "CNIC کے بجائے پاسپورٹ دے سکتا ہوں؟", a: "ہاں، لیکن CNIC جلدی پروسیس ہوتا ہے۔ بیرون ملک مقیم پاکستانی پاسپورٹ دیں۔" },
          { q: "Ufone پر OTP نہیں آرہا, کیا کروں؟", a: "Ufone کا انٹرنیشنل SMS روٹ نسبتاً سست ہے۔ کچھ دیر مزید انتظار کر کے Resend دبائیں؛ پھر بھی نہ آئے تو Jazz یا Zong نمبر سے دوبارہ رجسٹر کریں۔" },
          { q: "JazzCash اور CNIC کا نام تھوڑا مختلف ہے؟", a: "تصدیق رک سکتی ہے۔ پہلے JazzCash میں نام درست کروائیں (CNIC کاپی درکار)، پھر JeetBuzz پر KYC جمع کروائیں۔" },
          { q: "KYC کتنے دن میں ہوتا ہے؟", a: "عام طور پر دفتر کے اوقات میں چند گھنٹوں میں ہو جاتا ہے، رش یا چھٹیوں میں زیادہ بھی لگ سکتا ہے۔ درست وقت کی ضمانت نہیں دی جا سکتی۔" },
          { q: "ایک CNIC پر دو اکاؤنٹ بنا سکتا ہوں؟", a: "نہیں۔ ایک CNIC = ایک اکاؤنٹ۔ ڈپلیکیٹ پکڑے جانے پر دونوں بند اور بیلنس منجمد ہو سکتا ہے۔" },
          { q: "سیلفی میں عینک یا ماسک چلے گا؟", a: "عینک ٹھیک ہے اگر آنکھیں صاف نظر آئیں۔ ماسک اتارنا لازمی ہے۔" },
          { q: "KYC ڈیٹا کہاں رکھا جاتا ہے؟", a: "JeetBuzz کے آپریٹنگ لائسنس کی شرائط کے مطابق انکرپٹڈ سرورز پر محفوظ کیا جاتا ہے اور عام طور پر صرف کمپلائنس ٹیم اس تک رسائی رکھتی ہے۔" },
          { q: "17 سال کی عمر میں رجسٹر کرنے پر کیا ہو گا؟", a: "KYC ناکام ہو گی، اکاؤنٹ بند ہو گا اور ڈپازٹ واپس نہ ملنے کا خطرہ ہے۔ صرف 18+۔" },
        ],
        hi: [
          { q: "KYC के बिना निकासी हो सकती है?", a: "शुरुआती छोटी रकम सामान्यतः चली जाती है, लेकिन तय cumulative सीमा पार करने पर या जोखिम-आधारित समीक्षा शुरू होने पर KYC अनिवार्य हो जाता है।" },
          { q: "Aadhaar की जगह PAN दे सकता हूँ?", a: "हाँ, दोनों स्वीकार हैं। Aadhaar सबसे तेज़ प्रोसेस होता है। मास्क्ड Aadhaar (UIDAI से) भी मान्य।" },
          { q: "BSNL पर OTP नहीं आ रहा, क्या करूँ?", a: "BSNL का इंटरनेशनल SMS रूट धीमा है। 120 सेकंड रुकें, फिर भी न आए तो Jio/Airtel नंबर से दोबारा रजिस्टर करें।" },
          { q: "PhonePe और Aadhaar पर नाम थोड़ा अलग है?", a: "वेरिफ़िकेशन रुक सकता है। पहले PhonePe/UPI में नाम सुधारें (Aadhaar के अनुसार), फिर JeetBuzz पर KYC जमा करें।" },
          { q: "KYC कितने समय में होता है?", a: "आम तौर पर ऑफ़िस घंटों में कुछ घंटों के अंदर हो जाता है; भीड़ या छुट्टी के दिनों में अधिक समय लग सकता है। सटीक समय की गारंटी नहीं दी जा सकती।" },
          { q: "एक Aadhaar पर दो अकाउंट बन सकते हैं?", a: "नहीं। एक Aadhaar = एक अकाउंट। डुप्लिकेट पकड़े जाने पर दोनों बंद और बैलेंस फ़्रीज़।" },
          { q: "सेल्फ़ी में चश्मा या मास्क चलेगा?", a: "चश्मा ठीक है अगर आँखें साफ़ दिखें। मास्क उतारना ज़रूरी।" },
          { q: "KYC डेटा कहाँ रखा जाता है?", a: "JeetBuzz के operating लाइसेंस की शर्तों के तहत encrypted सर्वरों पर रखा जाता है और सामान्यतः केवल compliance टीम ही इस तक पहुँच रखती है।" },
          { q: "18 साल से कम उम्र में रजिस्टर करने पर क्या होगा?", a: "KYC फ़ेल होगा, अकाउंट बंद और डिपॉज़िट वापस न आने का जोखिम। केवल 18+।" },
          { q: "Telegram पर 'JeetBuzz KYC एजेंट' मदद की पेशकश करे तो?", a: "तुरंत अनदेखा करें। ऑफ़िशियल KYC केवल ऐप या वेबसाइट के निर्धारित upload panel से होती है; बाहर किसी को Aadhaar/PAN की फ़ोटो कभी न भेजें।" },
        ],
      }}
      related={siblings(SIGNUP_CLUSTER, "/verification")}
      articleHeadline="JeetBuzz Account Verification"
      articleDescription="Phone, email and KYC verification walkthrough for BD, PK and IN players."
      articlePath="/verification"
    />
  ),
});