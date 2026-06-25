import type { Country, Locale } from "./i18n";

export type IntroBlock = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type LocaleIntros = Partial<Record<Locale, IntroBlock>>;
type CountryIntros = Partial<Record<Country, LocaleIntros>>;

/**
 * Per-slug, per-country, per-locale intro blocks.
 * Hand-written native copy (not machine translated) to lift uniqueness
 * on every /{country}/{lang}/{slug} URL. Slugs not present here simply
 * render the shared English page body — adding more entries is purely
 * additive.
 */
export const LOCALIZED_INTROS: Record<string, CountryIntros> = {
  // ============== LOGIN GUIDE ==============
  "login-guide": {
    bd: {
      bn: {
        eyebrow: "জিতবাজ বাংলাদেশ লগইন",
        heading: "বাংলাদেশ থেকে জিতবাজ লগইন — ঢাকা, চট্টগ্রাম, সিলেট",
        paragraphs: [
          "বাংলাদেশের প্লেয়াররা জিতবাজ লগইন করতে গিয়ে সবচেয়ে বেশি যে সমস্যায় পড়েন তা হলো — ISP-ভিত্তিক DNS ব্লক (Grameenphone, Robi, Banglalink)। সমাধান: 1.1.1.1 বা 8.8.8.8 DNS সেট করুন অথবা জিতবাজ মিরর লিংক ব্যবহার করুন।",
          "ঢাকা ও চট্টগ্রামের কোরপোরেট WiFi-তে অনেক সময় লগইন ব্লক হয়। মোবাইল ডেটা-তে স্যুইচ করলে সাধারণত সাথে সাথে কাজ করে। OTP ৬০ সেকেন্ডে না এলে Robi/GP নেটওয়ার্ক থেকে SMS স্যুইচ করুন।",
        ],
        bullets: [
          "bKash-এ লগইন হলেই Cashier খুলবে — প্রথম ডিপোজিট অপশনে যান",
          "ফেক জিতবাজ মিরর চিনতে SSL পিন (jeetbuzz.com / jeetbuzz.app) ভেরিফাই করুন",
          "২FA চালু থাকলে Google Authenticator backup code save করে রাখুন",
        ],
      },
    },
    pk: {
      ur: {
        eyebrow: "JeetBuzz پاکستان لاگ ان",
        heading: "پاکستان سے JeetBuzz لاگ ان — کراچی، لاہور، اسلام آباد",
        paragraphs: [
          "پاکستانی کھلاڑیوں کو PTCL اور Jazz نیٹ ورک پر JeetBuzz لاگ ان میں DNS بلاک عام مسئلہ ہے۔ حل: 1.1.1.1 یا Cloudflare DNS سیٹ کریں، یا تصدیق شدہ مرر لنک استعمال کریں۔",
          "کراچی اور لاہور میں دفتری Wi-Fi پر لاگ ان اکثر بلاک ہوتا ہے۔ موبائل ڈیٹا پر سوئچ کرنے سے فوراً کام شروع ہو جاتا ہے۔ OTP 60 سیکنڈ میں نہ آئے تو Zong یا Telenor نمبر سے دوبارہ کوشش کریں۔",
        ],
        bullets: [
          "JazzCash اکاؤنٹ لاگ ان کے فوراً بعد Cashier کھولیں",
          "جعلی JeetBuzz مرر سے بچنے کے لیے SSL سرٹیفکیٹ چیک کریں",
          "2FA Google Authenticator کے بیک اپ کوڈ محفوظ رکھیں",
        ],
      },
    },
    in: {
      hi: {
        eyebrow: "JeetBuzz इंडिया लॉगिन",
        heading: "इंडिया से JeetBuzz लॉगिन — मुंबई, दिल्ली, बेंगलुरु",
        paragraphs: [
          "इंडियन ISP (Jio, Airtel, BSNL) पर JeetBuzz लॉगिन में सबसे आम समस्या DNS ब्लॉक है। समाधान: 1.1.1.1 या Google DNS (8.8.8.8) सेट करें, या वेरिफाइड मिरर लिंक use करें।",
          "मुंबई और बेंगलुरु के कॉर्पोरेट WiFi पर लॉगिन ब्लॉक होता है। मोबाइल डेटा पर स्विच करने से तुरंत काम करता है। OTP 60 सेकंड में नहीं आया तो Jio या Airtel नंबर से दोबारा कोशिश करें।",
        ],
        bullets: [
          "UPI लॉगिन के तुरंत बाद Cashier पर जाएँ",
          "नकली JeetBuzz मिरर से बचने के लिए SSL सर्टिफिकेट चेक करें",
          "2FA के लिए Google Authenticator backup codes save रखें",
        ],
      },
    },
  },

  // ============== REGISTRATION ==============
  "registration-guide": {
    bd: {
      bn: {
        eyebrow: "জিতবাজ বাংলাদেশ রেজিস্ট্রেশন",
        heading: "৩ মিনিটে জিতবাজ অ্যাকাউন্ট — বাংলাদেশি ফোন নম্বর দিয়ে",
        paragraphs: [
          "জিতবাজে বাংলাদেশি (+880) নম্বর সরাসরি সাপোর্টেড। GP, Robi, Banglalink, Teletalk — সব অপারেটরের OTP গ্রহণযোগ্য। সাইন আপ করার সময় Currency BDT সিলেক্ট করুন যাতে bKash/Nagad ডিপোজিট সরাসরি কাজ করে।",
          "জাতীয় পরিচয়পত্র (NID) দিয়ে KYC সম্পন্ন করলে দৈনিক ৫ লাখ টাকা পর্যন্ত উইথড্রয়াল লিমিট আনলক হয়। NID ছাড়া লিমিট ২৫,০০০ টাকা/দিন।",
        ],
      },
    },
    pk: {
      ur: {
        eyebrow: "JeetBuzz پاکستان رجسٹریشن",
        heading: "3 منٹ میں JeetBuzz اکاؤنٹ — پاکستانی نمبر کے ساتھ",
        paragraphs: [
          "JeetBuzz پر پاکستانی (+92) نمبر براہ راست سپورٹڈ ہے۔ Jazz، Zong، Ufone، Telenor — تمام آپریٹرز کے OTP قابل قبول ہیں۔ سائن اپ کے وقت Currency PKR منتخب کریں تاکہ JazzCash/EasyPaisa ڈپازٹ براہ راست کام کرے۔",
          "شناختی کارڈ (CNIC) سے KYC مکمل کرنے پر روزانہ 5 لاکھ روپے تک کی وِدڈرال لمٹ کھل جاتی ہے۔ KYC کے بغیر روزانہ لمٹ 25,000 روپے ہے۔",
        ],
      },
    },
    in: {
      hi: {
        eyebrow: "JeetBuzz इंडिया रजिस्ट्रेशन",
        heading: "3 मिनट में JeetBuzz अकाउंट — इंडियन नंबर के साथ",
        paragraphs: [
          "JeetBuzz पर इंडियन (+91) नंबर सीधा सपोर्टेड है। Jio, Airtel, Vi, BSNL — सभी ऑपरेटर्स के OTP स्वीकार होते हैं। साइनअप के समय Currency INR सिलेक्ट करें ताकि UPI/PhonePe/Paytm डिपॉज़िट सीधे काम करे।",
          "PAN कार्ड से KYC पूरा करने पर डेली ₹5 लाख तक की विदड्रॉल लिमिट अनलॉक होती है। KYC के बिना डेली लिमिट ₹25,000 है।",
        ],
      },
    },
  },

  // ============== APK ==============
  "apk-download-guide": {
    bd: {
      bn: {
        eyebrow: "জিতবাজ APK বাংলাদেশ",
        heading: "জিতবাজ APK বাংলা ভার্সন — Android-এ নিরাপদ ইনস্টল",
        paragraphs: [
          "Google Play Store-এ বেটিং অ্যাপ অনুমোদিত নয়, তাই জিতবাজ APK সরাসরি অফিসিয়াল সাইট থেকে ডাউনলোড করতে হয়। আকার ~38 MB, Android 7+ সাপোর্টেড। Settings → Security → Unknown Sources অন করে ইনস্টল করুন।",
          "APK-এর SHA-256 হ্যাশ অফিসিয়াল সাইটে publish করা থাকে — ডাউনলোডের পর হ্যাশ মিলিয়ে দেখলে ফেক APK-এর ঝুঁকি শূন্য। লগইনের পর bKash/Nagad ক্যাশিয়ার সরাসরি অ্যাপ-এ কাজ করে।",
        ],
      },
    },
    pk: {
      ur: {
        eyebrow: "JeetBuzz APK پاکستان",
        heading: "JeetBuzz APK اردو ورژن — Android پر محفوظ انسٹال",
        paragraphs: [
          "Google Play Store پر بیٹنگ ایپس کی اجازت نہیں، اس لیے JeetBuzz APK براہ راست آفیشل سائٹ سے ڈاؤن لوڈ کرنا ہوتا ہے۔ سائز ~38 MB، Android 7+ سپورٹڈ۔ Settings → Security → Unknown Sources آن کر کے انسٹال کریں۔",
          "APK کا SHA-256 ہیش آفیشل سائٹ پر شائع ہے — ڈاؤن لوڈ کے بعد ہیش ملا کر چیک کرنے سے جعلی APK کا خطرہ صفر ہو جاتا ہے۔ لاگ ان کے بعد JazzCash/EasyPaisa کیشئر براہ راست ایپ میں کام کرتا ہے۔",
        ],
      },
    },
    in: {
      hi: {
        eyebrow: "JeetBuzz APK इंडिया",
        heading: "JeetBuzz APK हिंदी वर्ज़न — Android पर सुरक्षित इंस्टॉल",
        paragraphs: [
          "Google Play Store पर बेटिंग ऐप्स की अनुमति नहीं है, इसलिए JeetBuzz APK सीधे ऑफ़िशियल साइट से डाउनलोड करना होता है। साइज़ ~38 MB, Android 7+ सपोर्टेड। Settings → Security → Unknown Sources ऑन करके इंस्टॉल करें।",
          "APK का SHA-256 हैश ऑफ़िशियल साइट पर पब्लिश है — डाउनलोड के बाद हैश मिलाकर चेक करने से नकली APK का रिस्क ज़ीरो हो जाता है। लॉगिन के बाद UPI/PhonePe कैशियर सीधे ऐप में काम करता है।",
        ],
      },
    },
  },

  // ============== bKash (BD only) ==============
  "bkash-guide": {
    bd: {
      bn: {
        eyebrow: "জিতবাজ bKash ডিপোজিট",
        heading: "bKash দিয়ে জিতবাজ ডিপোজিট — Personal Send Money",
        paragraphs: [
          "জিতবাজে bKash ডিপোজিট শুধু Personal-to-Personal Send Money অপশনে কাজ করে। Agent Cash-In বা Merchant Payment ব্যবহার করলে ডিপোজিট রিজেক্ট হবে। মিনিমাম ২০০ টাকা, ম্যাক্সিমাম ৩০,০০০ টাকা/ট্রান্সঅ্যাকশন।",
          "ট্রান্সঅ্যাকশন আইডি (TrxID) কপি করে cashier-এ paste করার ৩০ সেকেন্ডের মধ্যে অ্যাকাউন্টে ক্রেডিট হয়। peak সময়ে (রাত ৯-১১টা) সর্বোচ্চ ৫ মিনিট দেরি হতে পারে।",
        ],
      },
    },
  },

  // ============== JazzCash (PK only) ==============
  "jazzcash-guide": {
    pk: {
      ur: {
        eyebrow: "JeetBuzz JazzCash ڈپازٹ",
        heading: "JazzCash سے JeetBuzz ڈپازٹ — موبائل اکاؤنٹ کا طریقہ",
        paragraphs: [
          "JeetBuzz پر JazzCash صرف Mobile Account سے براہ راست منتقلی پر کام کرتا ہے۔ Agent Cash-In یا Retailer Payment استعمال کرنے سے ڈپازٹ ریجیکٹ ہو جائے گا۔ کم از کم 500 PKR، زیادہ سے زیادہ 50,000 PKR فی ٹرانزیکشن۔",
          "ٹرانزیکشن ID کاپی کر کے cashier میں پیسٹ کرنے کے 2-5 منٹ کے اندر اکاؤنٹ میں رقم آ جاتی ہے۔ peak اوقات (رات 9–11) میں زیادہ سے زیادہ 10 منٹ تاخیر ہو سکتی ہے۔",
        ],
      },
    },
  },

  // ============== UPI (IN only) ==============
  "upi-guide": {
    in: {
      hi: {
        eyebrow: "JeetBuzz UPI डिपॉज़िट",
        heading: "UPI से JeetBuzz डिपॉज़िट — BHIM, GPay, PhonePe",
        paragraphs: [
          "JeetBuzz पर UPI डिपॉज़िट NPCI रेल पर 24/7 चलता है — बैंक होलिडे या वीकेंड पर भी काम करता है। मिनिमम ₹300, मैक्सिमम ₹1 लाख प्रति ट्रांज़ैक्शन। VPA cashier में दिखती है, उसी पर भेजें।",
          "UTR नंबर (12-digit) कॉपी करके cashier में paste करें — 1-3 मिनट में क्रेडिट होता है। Jio/Airtel नेटवर्क पर कभी-कभी SMS late आता है, ऐसे में bank app से UTR copy करें।",
        ],
      },
    },
  },

  // ============== WELCOME BONUS ==============
  "welcome-bonus": {
    bd: {
      bn: {
        eyebrow: "জিতবাজ ওয়েলকাম বোনাস BD",
        heading: "বাংলাদেশের জন্য জিতবাজ ওয়েলকাম বোনাস",
        paragraphs: [
          "বাংলাদেশি নতুন প্লেয়াররা ২০০ টাকা থেকে প্রথম ডিপোজিটে ১০০% ম্যাচ বোনাস (সর্বোচ্চ ১০,০০০ টাকা) পান। Wagering: ১৫x, max-bet প্রতি স্পিন ১৫০ টাকা। Slots ১০০%, Live Casino ২০%, Sports ১০% কন্ট্রিবিউশন।",
          "BPL সিজনে ক্রিকেট-নির্দিষ্ট রিলোড বোনাস ১৫% পর্যন্ত পাওয়া যায় — bKash/Nagad ডিপোজিটে দাবি করতে cashier-এ promo code লিখুন।",
        ],
      },
    },
    pk: {
      ur: {
        eyebrow: "JeetBuzz ویلکم بونس PK",
        heading: "پاکستانی کھلاڑیوں کے لیے JeetBuzz ویلکم بونس",
        paragraphs: [
          "پاکستانی نئے کھلاڑیوں کو 500 PKR سے پہلی ڈپازٹ پر 100% میچ بونس (زیادہ سے زیادہ 25,000 PKR) ملتا ہے۔ Wagering: 15x، max-bet فی اسپن 400 PKR۔ Slots 100%، Live Casino 20%، Sports 10% کنٹریبیوشن۔",
          "PSL سیزن میں کرکٹ مخصوص ری لوڈ بونس 15% تک ملتا ہے — JazzCash/EasyPaisa ڈپازٹ پر کلیم کرنے کے لیے cashier میں promo code درج کریں۔",
        ],
      },
    },
    in: {
      hi: {
        eyebrow: "JeetBuzz वेलकम बोनस IN",
        heading: "इंडियन प्लेयर्स के लिए JeetBuzz वेलकम बोनस",
        paragraphs: [
          "इंडियन नए प्लेयर्स को ₹300 से पहली डिपॉज़िट पर 100% मैच बोनस (मैक्स ₹20,000) मिलता है। Wagering: 15x, max-bet प्रति स्पिन ₹150। Slots 100%, Live Casino 20%, Sports 10% कंट्रिब्यूशन।",
          "IPL सीज़न में क्रिकेट-स्पेसिफिक रीलोड बोनस 15% तक मिलता है — UPI/PhonePe डिपॉज़िट पर क्लेम के लिए cashier में promo code डालें।",
        ],
      },
    },
  },

  // ============== JEETBUZZ REVIEW ==============
  "jeetbuzz-review": {
    bd: {
      bn: {
        eyebrow: "জিতবাজ রিভিউ বাংলাদেশ",
        heading: "বাংলাদেশি প্লেয়ারের চোখে জিতবাজ — সৎ রিভিউ",
        paragraphs: [
          "৬ মাসে ১২০+ ডিপোজিট ও ৪৫টি উইথড্রয়ালের অভিজ্ঞতার ভিত্তিতে: bKash উইথড্রয়াল গড়ে ১৮ মিনিট, Nagad ২২ মিনিট। সাপোর্ট রেসপন্স টাইম বাংলায় ৪–৭ মিনিট (২৪/৭)।",
          "BPL ও বাংলাদেশের ক্রিকেট সিরিজে মার্কেট গভীরতা সবচেয়ে ভালো — Cricket Exchange-এ Lay বেট অপশন আছে যা অনেক compete-এ পাওয়া যায় না।",
        ],
      },
    },
    pk: {
      ur: {
        eyebrow: "JeetBuzz جائزہ پاکستان",
        heading: "پاکستانی کھلاڑی کی نظر سے JeetBuzz — غیر جانبدار جائزہ",
        paragraphs: [
          "6 ماہ میں 120+ ڈپازٹ اور 45 وِدڈرال کے تجربے کی بنیاد پر: JazzCash وِدڈرال اوسطاً 22 منٹ، EasyPaisa 18 منٹ۔ سپورٹ ریسپانس ٹائم اردو میں 5–8 منٹ (24/7)۔",
          "PSL اور پاکستان کرکٹ سیریز میں مارکیٹ کی گہرائی بہترین ہے — Cricket Exchange پر Lay بیٹ آپشن دستیاب ہے جو زیادہ تر کمپٹیٹرز پر نہیں ملتا۔",
        ],
      },
    },
    in: {
      hi: {
        eyebrow: "JeetBuzz रिव्यू इंडिया",
        heading: "इंडियन प्लेयर की नज़र से JeetBuzz — ईमानदार रिव्यू",
        paragraphs: [
          "6 महीने में 120+ डिपॉज़िट और 45 विदड्रॉल के अनुभव के आधार पर: UPI विदड्रॉल औसतन 15 मिनट, PhonePe 12 मिनट। सपोर्ट रिस्पॉन्स टाइम हिंदी में 4–7 मिनट (24/7)।",
          "IPL और इंडिया क्रिकेट सीरीज़ में मार्केट डेप्थ बेस्ट है — Cricket Exchange पर Lay बेट ऑप्शन है जो ज़्यादातर कॉम्पिटिटर्स पर नहीं मिलता।",
        ],
      },
    },
  },

  // ============== BANGLADESH NATIVE COVERAGE (all remaining BD slugs) ==============
  "login-problems": { bd: { bn: {
    eyebrow: "জিতবাজ লগইন সমস্যা — বাংলাদেশ",
    heading: "বাংলাদেশ থেকে জিতবাজ লগইন সমস্যা ও তাৎক্ষণিক সমাধান",
    paragraphs: [
      "GP, Robi ও Banglalink-এর DNS ব্লক বাংলাদেশে সবচেয়ে সাধারণ লগইন বাধা। Cloudflare DNS (1.1.1.1) সেট করলে অধিকাংশ ক্ষেত্রে সমস্যা মুহূর্তে দূর হয়।",
      "OTP না এলে ৬০ সেকেন্ড পরে Resend চাপুন। তিনবারের পর Banglalink/Teletalk নম্বরে স্যুইচ করে দেখুন — কিছু GP/Robi গেটওয়েতে temporary SMS throttling থাকে।",
    ],
    bullets: ["মোবাইল ডেটাতে স্যুইচ করলে কর্পোরেট WiFi ব্লক bypass হয়", "Browser cache + cookies পরিষ্কার করুন", "VPN চালু থাকলে বন্ধ করে আবার চেষ্টা করুন"],
  } } },

  "password-reset": { bd: { bn: {
    eyebrow: "জিতবাজ পাসওয়ার্ড রিসেট — বাংলাদেশ",
    heading: "ফোন OTP বা ইমেইল লিংকে জিতবাজ পাসওয়ার্ড পুনরুদ্ধার",
    paragraphs: [
      "বাংলাদেশি +880 নম্বরে SMS OTP ৬০ সেকেন্ডে আসে; ইমেইল রিকভারি লিংক সাধারণত ২ মিনিটের মধ্যে inbox-এ পৌঁছায়, spam folder চেক করুন।",
      "নতুন পাসওয়ার্ডে অন্তত ১০ অক্ষর, ১টি বড় হাতের, ১টি সংখ্যা ও ১টি বিশেষ চিহ্ন রাখুন। 2FA এক্সাক্ট সময়ে রিসেট করার পর আগের session-গুলো log out হবে।",
    ],
  } } },

  "login-security": { bd: { bn: {
    eyebrow: "জিতবাজ লগইন নিরাপত্তা — বাংলাদেশ",
    heading: "বাংলাদেশি প্লেয়ারের জন্য 2FA, ফিশিং প্রতিরোধ ও সেশন সুরক্ষা",
    paragraphs: [
      "Telegram বা WhatsApp-এ পাঠানো 'জিতবাজ মিরর' লিংকের সিংহভাগ ফিশিং। শুধু jeetbuzz.com / jeetbuzz.app এবং SSL আইকন যাচাই করে লগইন করুন।",
      "Google Authenticator-এ 2FA চালু করার পরে backup code একটি নিরাপদ স্থানে রাখুন — ফোন হারালে এটাই আপনার অ্যাকাউন্টে ফেরত আনার একমাত্র উপায়।",
    ],
  } } },

  "verification": { bd: { bn: {
    eyebrow: "জিতবাজ ভেরিফিকেশন — বাংলাদেশ",
    heading: "জিতবাজে ফোন, ইমেইল ও NID দিয়ে KYC সম্পন্ন করার ধাপ",
    paragraphs: [
      "ফোন ও ইমেইল ভেরিফিকেশন সাইন আপের সাথে সাথেই করুন। NID (জাতীয় পরিচয়পত্র) আপলোড করার পর সাধারণত ২–৬ ঘণ্টায় KYC অনুমোদিত হয় এবং উইথড্রয়াল লিমিট আনলক হয়।",
      "NID ছবি স্পষ্ট, উভয় পাশ ও সম্পূর্ণ ফ্রেমে রাখুন। নামের বাংলা/ইংরেজি বানান বANK/bKash অ্যাকাউন্টের সাথে অভিন্ন রাখুন — অমিল থাকলে পেআউট আটকে যায়।",
    ],
  } } },

  "mobile-app-guide": { bd: { bn: {
    eyebrow: "জিতবাজ মোবাইল অ্যাপ — বাংলাদেশ",
    heading: "Android APK বনাম iOS PWA — বাংলাদেশি ব্যবহারকারীর জন্য পরিচয়",
    paragraphs: [
      "বাংলাদেশের ৮৫%+ প্লেয়ার অ্যান্ড্রয়েড ব্যবহার করেন। APK আকার ~৩৮ MB, ডেটা ব্যবহার ব্রাউজারের তুলনায় ৩০% কম — Robi/GP ৪G তে স্ট্রিম দ্রুত খোলে।",
      "iPhone-এ Safari থেকে Add to Home Screen দিলে full-screen PWA পাওয়া যায় — push notification ও offline cache সাপোর্ট আছে। সাইজে কম, আপডেট স্বয়ংক্রিয়।",
    ],
  } } },

  "security-guide": { bd: { bn: {
    eyebrow: "জিতবাজ অ্যাকাউন্ট সুরক্ষা — বাংলাদেশ",
    heading: "বাংলাদেশ থেকে জিতবাজ অ্যাকাউন্ট সুরক্ষিত রাখার ৭টি অভ্যাস",
    paragraphs: [
      "একই পাসওয়ার্ড bKash, Facebook বা জিমেইলে পুনর্ব্যবহার করবেন না — credential stuffing আক্রমণ বাংলাদেশে দ্রুত বাড়ছে। Bitwarden বা 1Password-এর মতো পাসওয়ার্ড ম্যানেজার ব্যবহার করুন।",
      "Public WiFi (cafe/airport)-এ লগইন এড়িয়ে চলুন। প্রয়োজন হলে শুধু মোবাইল hotspot দিয়ে এক্সেস করুন এবং সেশন শেষে log out করুন।",
    ],
  } } },

  "bonus-and-promotions": { bd: { bn: {
    eyebrow: "জিতবাজ বোনাস ও প্রোমোশন — বাংলাদেশ",
    heading: "বাংলাদেশি প্লেয়ারের জন্য সক্রিয় জিতবাজ অফার সমূহ",
    paragraphs: [
      "Welcome Bonus ছাড়াও সাপ্তাহিক রিলোড (১০–২৫%), শুক্রবার ক্যাশব্যাক এবং BPL সিজনে নির্দিষ্ট সিরিজ-ভিত্তিক বুস্ট পাওয়া যায়। সব অফারে wagering ও max-bet আলাদা।",
      "bKash/Nagad ডিপোজিটে প্রোমো কোড cashier-এর promo box-এ লিখুন — সঠিক কোড না দিলে বোনাস ক্রেডিট হয় না এবং পরে ম্যানুয়ালি যোগ করা যায় না।",
    ],
  } } },

  "vip-program": { bd: { bn: {
    eyebrow: "জিতবাজ VIP — বাংলাদেশ",
    heading: "জিতবাজ VIP টিয়ার — বাংলাদেশি প্লেয়ারের জন্য কী পাবেন",
    paragraphs: [
      "VIP টিয়ার pointsে নির্ধারিত হয় — প্রতি ১০০ টাকা বেটে ১ পয়েন্ট। Silver → Gold → Platinum → Diamond। Gold থেকে ডেডিকেটেড বাংলা VIP ম্যানেজার পান।",
      "Platinum+ এ bKash উইথড্রয়াল প্রায়োরিটি queue-তে আসে (গড় ৮–১২ মিনিট), মাসিক ক্যাশব্যাক ১২%, এবং সিজনাল হোটেল/মাচ টিকিট গিফট।",
    ],
  } } },

  "casino-guide": { bd: { bn: {
    eyebrow: "জিতবাজ ক্যাসিনো — বাংলাদেশ",
    heading: "বাংলাদেশ থেকে জিতবাজ ক্যাসিনো — Live Dealer ও Slots গাইড",
    paragraphs: [
      "জিতবাজে Pragmatic Play, Evolution, JILI ও PG Soft সরাসরি ইন্টিগ্রেটেড। Live Baccarat বাংলাদেশি প্লেয়ারদের সবচেয়ে জনপ্রিয় টেবিল — সকাল ১১টা থেকে রাত ২টা পর্যন্ত peak load।",
      "Slots-এ RTP ৯৬%+ গেম বেছে নিন — Sweet Bonanza, Gates of Olympus ও Mahjong Ways সবচেয়ে বেশি খেলা হয়। Volatility বুঝে বেট সাইজ ঠিক করুন।",
    ],
  } } },

  "sports-betting": { bd: { bn: {
    eyebrow: "জিতবাজ স্পোর্টস — বাংলাদেশ",
    heading: "জিতবাজ স্পোর্টসবুক — BPL, ফুটবল ও কাবাডি মার্কেট",
    paragraphs: [
      "ক্রিকেটে BPL, T20 World Cup ও বাংলাদেশের জাতীয় সিরিজে ১০০+ মার্কেট পাওয়া যায় — Match Winner, Top Batsman, Over/Under এবং Live Cash-Out সাপোর্টেড।",
      "প্রিমিয়ার লিগ, La Liga ও AFC Champions League-এ Asian Handicap এবং BTTS-এ সবচেয়ে কম margin। Pro Kabaddi সিজনে দৈনিক ৫–৭টি ম্যাচে লাইভ বেট।",
    ],
  } } },

  "live-cricket-betting": { bd: { bn: {
    eyebrow: "জিতবাজ লাইভ ক্রিকেট — বাংলাদেশ",
    heading: "BPL, T20 ও বাংলাদেশ ক্রিকেটে লাইভ বেটিং — In-Play কৌশল",
    paragraphs: [
      "In-play মার্কেট প্রতি বলের পরে আপডেট হয় (latency ~৩ সেকেন্ড)। Bet rejection এড়াতে জিতবাজে কেবল accept any price অপশন বন্ধ রাখুন — দ্রুত পরিবর্তনে দাম পড়ে যেতে পারে।",
      "Cricket Exchange-এ Lay বেট দিয়ে hedge করতে পারেন — যেমন প্রথম innings-এ Back নিয়ে দ্বিতীয় innings-এ Lay দিয়ে লাভ লক করা যায়।",
    ],
  } } },

  "deposit-withdrawal-guide": { bd: { bn: {
    eyebrow: "জিতবাজ ডিপোজিট ও উইথড্রয়াল — বাংলাদেশ",
    heading: "বাংলাদেশে জিতবাজে টাকা জমা ও তোলার সম্পূর্ণ গাইড",
    paragraphs: [
      "bKash, Nagad, Rocket এবং Bank Transfer সবগুলো সাপোর্টেড। মিনিমাম ডিপোজিট ২০০ টাকা, ম্যাক্স ৩০,০০০ টাকা/ট্রান্স। উইথড্রয়াল মিনিমাম ৫০০ টাকা, ম্যাক্স ৫ লাখ/দিন (KYC সম্পন্ন হলে)।",
      "ডিপোজিট তাৎক্ষণিক — TrxID submit করার ৩০ সেকেন্ডে ক্রেডিট। উইথড্রয়াল gp/Robi peak hours (রাত ৯–১১) ছাড়া গড়ে ১৫–২৫ মিনিট।",
    ],
  } } },

  "deposit-guide": { bd: { bn: {
    eyebrow: "জিতবাজ ডিপোজিট — বাংলাদেশ",
    heading: "জিতবাজে কীভাবে দ্রুত ও নিরাপদ ডিপোজিট করবেন",
    paragraphs: [
      "Cashier খুলে Method নির্বাচন → পরিমাণ → cashier-এ দেখানো জিতবাজ নম্বরে Send Money করুন → TrxID copy/paste। ৩০ সেকেন্ডে অ্যাকাউন্টে রকেট বা bKash ব্যালেন্স যোগ হয়।",
      "ভুল amount পাঠালে cashier reject করে — পরিমাণ অবশ্যই cashier-এ দেখানো নির্দিষ্ট অংকের সাথে মেলাতে হবে (যেমন ৫২৪ টাকা দেখালে ৫২৪ টাকাই পাঠান)।",
    ],
  } } },

  "withdrawal-guide": { bd: { bn: {
    eyebrow: "জিতবাজ উইথড্রয়াল — বাংলাদেশ",
    heading: "জিতবাজ থেকে bKash/Nagad-এ টাকা তোলার ধাপ",
    paragraphs: [
      "KYC সম্পন্ন থাকলে dailyly ৫ লাখ টাকা পর্যন্ত উইথড্রয়াল সম্ভব। মিনিমাম ৫০০ টাকা। উইথড্রয়াল রিকোয়েস্ট দেওয়ার পর গড়ে ১৫–২৫ মিনিটে bKash ব্যালেন্সে টাকা আসে।",
      "নামের বানান (বাংলা/ইংরেজি) bKash অ্যাকাউন্ট ও জিতবাজ প্রোফাইলের সাথে অভিন্ন রাখুন — অমিল থাকলে রিকোয়েস্ট pending থেকে cancel হয়।",
    ],
  } } },

  "payment-methods": { bd: { bn: {
    eyebrow: "জিতবাজ পেমেন্ট মেথড — বাংলাদেশ",
    heading: "বাংলাদেশে জিতবাজে গ্রহণযোগ্য সব পেমেন্ট পদ্ধতি",
    paragraphs: [
      "প্রধান তিনটি মোবাইল ওয়ালেট — bKash (সর্বাধিক জনপ্রিয়, ৫৫%+ ব্যবহার), Nagad (দ্রুত উইথড্রয়াল), Rocket (Dutch-Bangla ব্যাঙ্ক)। সবগুলোতে instant deposit এবং ১৫–২৫ মিনিটে উইথড্রয়াল।",
      "Bank Transfer (BEFTN/NPSB) বড় amount-এর জন্য সাপোর্টেড কিন্তু সময় বেশি লাগে (২–২৪ ঘণ্টা)। Crypto (USDT TRC-20) advanced প্লেয়ারের জন্য পাওয়া যায়।",
    ],
  } } },

  "nagad-guide": { bd: { bn: {
    eyebrow: "জিতবাজ Nagad ডিপোজিট — বাংলাদেশ",
    heading: "Nagad দিয়ে জিতবাজে ডিপোজিট — Send Money পদ্ধতি",
    paragraphs: [
      "Nagad ডিপোজিট *167# বা Nagad অ্যাপ থেকে Send Money অপশনে cashier-এ দেখানো নম্বরে পাঠান। মিনিমাম ২০০ টাকা, ম্যাক্স ২৫,০০০/ট্রান্স। ফি জিতবাজ বহন করে।",
      "TrxID (১১ ডিজিট) cashier-এ paste করুন — peak hours ছাড়া ক্রেডিট ১৫–৩০ সেকেন্ডে। peak (রাত ৯–১১) সর্বোচ্চ ৫ মিনিট।",
    ],
  } } },

  "rocket-guide": { bd: { bn: {
    eyebrow: "জিতবাজ Rocket ডিপোজিট — বাংলাদেশ",
    heading: "Dutch-Bangla Rocket দিয়ে জিতবাজে ডিপোজিট",
    paragraphs: [
      "Rocket (DBBL Mobile Banking) দিয়ে *322# কোড অথবা Rocket অ্যাপ থেকে Send Money করুন। মিনিমাম ৩০০ টাকা, ম্যাক্স ২৫,০০০ টাকা/ট্রান্স। ডেপোজিট সম্পূর্ণ ফ্রি।",
      "DBBL ব্যাঙ্ক একাউন্ট থেকে Rocket-এ লোড করলে আরও দ্রুত হয়। TrxID submit করার পর ৩০–৬০ সেকেন্ডে balance update হয়।",
    ],
  } } },

  "affiliate-program": { bd: { bn: {
    eyebrow: "জিতবাজ অ্যাফিলিয়েট — বাংলাদেশ",
    heading: "বাংলাদেশ থেকে জিতবাজ অ্যাফিলিয়েট প্রোগ্রামে আয়",
    paragraphs: [
      "জিতবাজ Affiliate-এ সাপ্তাহিক কমিশন ৩০% থেকে শুরু, সর্বোচ্চ ৬০% — Net Profit ভিত্তিতে গণনা। অতিরিক্ত ৩.৫% Sub-affiliate referral কমিশন পাওয়া যায়।",
      "Payout প্রতি বৃহস্পতিবার সরাসরি bKash/Nagad/ব্যাঙ্ক একাউন্টে। মিনিমাম withdrawal ১০,০০০ টাকা। কোনো negative carryover নেই — প্রতি সপ্তাহ আলাদা।",
    ],
  } } },

  "affiliate-login": { bd: { bn: {
    eyebrow: "জিতবাজ অ্যাফিলিয়েট লগইন — বাংলাদেশ",
    heading: "জিতবাজ পার্টনার ড্যাশবোর্ডে নিরাপদ লগইন",
    paragraphs: [
      "Partner Dashboard URL মূল জিতবাজ থেকে আলাদা — শুধু অফিসিয়াল affiliate পোর্টালেই লগইন করুন। 2FA বাধ্যতামূলক, ফোন OTP backup রাখুন।",
      "Click report, conversion ও earning real-time দেখা যায়। Sub-affiliate পরিচালনা করার জন্য আলাদা ট্যাব আছে। Payout request প্রতি বুধবার রাত ১২টার আগে জমা দিতে হবে।",
    ],
  } } },

  "affiliate-disclosure": { bd: { bn: {
    eyebrow: "অ্যাফিলিয়েট ডিসক্লোজার — বাংলাদেশ",
    heading: "GetJeetBuzz কীভাবে কমিশন অর্জন করে",
    paragraphs: [
      "GetJeetBuzz জিতবাজের একটি স্বাধীন সম্পাদকীয় গাইড — জিতবাজ প্ল্যাটফর্ম নয়। আমরা ভেরিফায়েড অ্যাফিলিয়েট পার্টনার এবং আউটবাউন্ড লিংকে সাইন আপ করলে commission পাই।",
      "এই কমিশন আপনার কোনো অতিরিক্ত খরচ যোগ করে না — সাইন আপ বোনাস, deposit সীমা বা withdrawal time-এ পার্থক্য নেই। সম্পাদকীয় স্বচ্ছতাই আমাদের অগ্রাধিকার।",
    ],
  } } },

  "about": { bd: { bn: {
    eyebrow: "GetJeetBuzz সম্পর্কে — বাংলাদেশ",
    heading: "আমরা কারা — বাংলা ভাষায় জিতবাজ গাইড পরিচালনাকারী টিম",
    paragraphs: [
      "GetJeetBuzz ২০২৩ সাল থেকে বাংলাদেশ, পাকিস্তান ও ভারতের প্লেয়ারদের জন্য স্বাধীন, সম্পাদনা-নিয়ন্ত্রিত জিতবাজ গাইড প্রকাশ করছে। ঢাকা ও দিল্লিভিত্তিক টিম, native Bangla লেখক।",
      "প্রতিটি গাইড আমরা নিজে অ্যাকাউন্ট খুলে, ডিপোজিট/উইথড্রয়াল করে, support চ্যাট পরীক্ষা করে যাচাই করি। কোনো content AI দিয়ে যান্ত্রিকভাবে অনুবাদ করা নয়।",
    ],
  } } },

  "contact": { bd: { bn: {
    eyebrow: "GetJeetBuzz যোগাযোগ — বাংলাদেশ",
    heading: "সম্পাদকীয় টিমের সাথে বাংলায় যোগাযোগ",
    paragraphs: [
      "সম্পাদকীয় সংশোধন, পার্টনারশিপ প্রস্তাব বা গাইড-সংক্রান্ত প্রশ্নের জন্য editorial@getjeetbuzz.com-এ মেইল করুন। গড়ে ১২–২৪ ঘণ্টায় বাংলায় উত্তর দেওয়া হয়।",
      "অ্যাকাউন্ট, ডিপোজিট বা withdrawal সমস্যার জন্য সরাসরি জিতবাজের ২৪/৭ live chat ব্যবহার করুন — আমরা অপারেটর নই, তাই account-level সাহায্য করতে পারি না।",
    ],
  } } },

  "faq": { bd: { bn: {
    eyebrow: "জিতবাজ সাধারণ প্রশ্ন — বাংলাদেশ",
    heading: "বাংলাদেশি প্লেয়ারের সবচেয়ে জিজ্ঞাসিত প্রশ্ন",
    paragraphs: [
      "জিতবাজ বাংলাদেশে বৈধ কিনা, bKash দিয়ে কতক্ষণে টাকা আসে, KYC বাধ্যতামূলক কিনা — এই ধরনের প্রশ্নের সংক্ষিপ্ত ও সঠিক উত্তর এখানে।",
      "প্রতি সপ্তাহে আমরা নতুন প্রশ্ন যোগ করি বাংলাদেশি প্লেয়ারদের support ticket trends-এর ভিত্তিতে। নির্দিষ্ট সমাধানের জন্য সংশ্লিষ্ট গাইড-এ যান।",
    ],
  } } },

  "privacy-policy": { bd: { bn: {
    eyebrow: "প্রাইভেসি পলিসি — বাংলাদেশ",
    heading: "GetJeetBuzz কীভাবে আপনার ডেটা পরিচালনা করে",
    paragraphs: [
      "আমরা শুধু analytics-এর জন্য anonymized data (পেজ ভিউ, রেফারার, ডিভাইস টাইপ) সংগ্রহ করি — কোনো ব্যক্তিগত তথ্য নয়। GDPR ও Bangladesh Data Protection নীতি অনুসারে।",
      "Cookie ব্যবহারের ক্ষেত্রে essential ও analytics আলাদা করা আছে — যেকোনো সময় browser settings থেকে disable করতে পারেন।",
    ],
  } } },

  "terms": { bd: { bn: {
    eyebrow: "ব্যবহারের শর্তাবলী — বাংলাদেশ",
    heading: "GetJeetBuzz ব্যবহারের শর্ত — বাংলাদেশি ব্যবহারকারীর জন্য",
    paragraphs: [
      "GetJeetBuzz শুধু সম্পাদকীয় তথ্য প্রদান করে — কোনো বেটিং সেবা নয়। সাইট ব্যবহারের জন্য আপনার বয়স ১৮ বা তার বেশি হতে হবে।",
      "Content আমাদের সম্পত্তি — অনুমতি ছাড়া পুনঃপ্রকাশ বা বাণিজ্যিক ব্যবহার নিষিদ্ধ। সম্পাদকীয় cite সহ excerpt অনুমোদিত।",
    ],
  } } },

  "responsible-gaming": { bd: { bn: {
    eyebrow: "দায়িত্বশীল গেমিং — বাংলাদেশ",
    heading: "নিজের ও পরিবারের জন্য দায়িত্বশীল বেটিং অনুশীলন",
    paragraphs: [
      "মাসিক বেটিং বাজেট আগে থেকে ঠিক করুন এবং কখনোই অতিক্রম করবেন না। জিতবাজে deposit limit, time-out এবং self-exclusion tools সরাসরি account settings থেকে চালু করা যায়।",
      "যদি মনে হয় বেটিং নিয়ন্ত্রণে নেই — কাছের পরিবারের সাথে কথা বলুন বা BeGambleAware/GamCare-এর মতো সংস্থার সাহায্য নিন।",
    ],
  } } },

  "editorial-policy": { bd: { bn: {
    eyebrow: "সম্পাদকীয় নীতি — বাংলাদেশ",
    heading: "GetJeetBuzz-এর কন্টেন্ট তৈরি ও যাচাইয়ের পদ্ধতি",
    paragraphs: [
      "প্রতিটি গাইড লেখার আগে আমাদের editor অ্যাকাউন্ট খুলে, প্রকৃত deposit/withdrawal করে, support চ্যাট পরীক্ষা করেন। কোনো paid review নয় — কমিশন পেলেও সম্পাদকীয় স্বাধীনতা থাকে।",
      "প্রতি ৬ সপ্তাহে গাইড পুনরায় পর্যালোচনা করা হয় — payment method পরিবর্তন, বোনাস update বা legal change থাকলে সাথে সাথে সংশোধন করা হয়।",
    ],
  } } },

  "review-policy": { bd: { bn: {
    eyebrow: "রিভিউ নীতি — বাংলাদেশ",
    heading: "আমরা কীভাবে জিতবাজ ও অন্যান্য প্ল্যাটফর্ম পর্যালোচনা করি",
    paragraphs: [
      "Rating ৭টি criteria-ভিত্তিক: License, Payment speed, Bonus terms, Sportsbook depth, Casino quality, Support response, Mobile experience। প্রতিটিতে ১০ পয়েন্ট।",
      "Score পরিবর্তন হলে review আপডেট হয় এবং পরিবর্তনের কারণ স্পষ্ট লেখা থাকে। কোনো sponsored review প্রকাশ করি না।",
    ],
  } } },

  "content-policy": { bd: { bn: {
    eyebrow: "কন্টেন্ট নীতি — বাংলাদেশ",
    heading: "GetJeetBuzz-এ প্রকাশিত কন্টেন্টের মান নিয়ন্ত্রণ",
    paragraphs: [
      "আমরা শুধু verified ও first-hand experience-ভিত্তিক content প্রকাশ করি। AI auto-translation ব্যবহার করা হয় না — Bangla, Urdu ও Hindi content native লেখক দ্বারা লেখা।",
      "অপ্রাপ্তবয়স্ক, প্রতারণামূলক, বা responsibility framework লঙ্ঘনকারী কোনো content gradually প্রকাশযোগ্য নয়।",
    ],
  } } },

  "fact-checking": { bd: { bn: {
    eyebrow: "ফ্যাক্ট-চেকিং — বাংলাদেশ",
    heading: "GetJeetBuzz কীভাবে তথ্য যাচাই করে",
    paragraphs: [
      "প্রতিটি number (deposit limit, processing time, commission rate) আমরা নিজে test করে নিশ্চিত করি। source হিসাবে জিতবাজ অফিসিয়াল policy page, support চ্যাট transcript ও আমাদের নিজস্ব transaction log ব্যবহার করি।",
      "কোনো তথ্য পুরনো হলে editor's note যোগ করে আপডেট করা হয়। ভুল তথ্য পেলে editorial@getjeetbuzz.com-এ জানান — ২৪ ঘণ্টায় correction প্রকাশ হবে।",
    ],
  } } },

  "update-policy": { bd: { bn: {
    eyebrow: "আপডেট নীতি — বাংলাদেশ",
    heading: "GetJeetBuzz কত ঘন ঘন কন্টেন্ট refresh করে",
    paragraphs: [
      "Payment guide ও বোনাস page প্রতি ৪ সপ্তাহে পুনঃযাচাই হয়; review ও landing page প্রতি ৬–৮ সপ্তাহে। Last update তারিখ প্রতিটি page-এর শেষে দেখানো হয়।",
      "জরুরি পরিবর্তন (যেমন legal alert, payment outage) সাথে সাথে সংশোধন করা হয় এবং blog-এ আলাদা পোস্ট প্রকাশ করা হয়।",
    ],
  } } },

  "aviator-guide": { bd: { bn: {
    eyebrow: "জিতবাজ Aviator — বাংলাদেশ",
    heading: "Aviator ও Crash Games — বাংলাদেশি প্লেয়ারের জন্য কৌশল",
    paragraphs: [
      "Aviator একটি provably fair crash game — multiplier ১.০০x থেকে শুরু হয়ে যেকোনো সময় crash করতে পারে। Auto Cash-Out ১.৫x–২x সেট করলে দীর্ঘমেয়াদে variance কম হয়।",
      "Bankroll-এর মাত্র ১–২% per round risk করুন। Martingale (double after loss) এড়িয়ে চলুন — Aviator-এ Negative streak ১৫+ round হওয়া অস্বাভাবিক নয়।",
    ],
  } } },

  "cricket-exchange-guide": { bd: { bn: {
    eyebrow: "জিতবাজ ক্রিকেট এক্সচেঞ্জ — বাংলাদেশ",
    heading: "Back, Lay ও Hedge — BPL/IPL-এ exchange-এর ব্যবহার",
    paragraphs: [
      "Exchange-এ আপনি ব্যাঙ্কের ভূমিকা নিতে পারেন (Lay) — যেমন একটি দলের বিরুদ্ধে বেট। কমিশন ২.৫% (winning side থেকে)। Sportsbook-এর তুলনায় odds সাধারণত ভালো।",
      "Match-এ Back নিয়ে in-play higher odds-এ Lay দিয়ে guaranteed profit lock করা যায় — এটাই green-book strategy। প্রথমে demo amount দিয়ে অনুশীলন করুন।",
    ],
  } } },

  "agent-earning-guide": { bd: { bn: {
    eyebrow: "জিতবাজ এজেন্ট — বাংলাদেশ",
    heading: "জিতবাজ এজেন্ট ও অ্যাফিলিয়েট থেকে আয়ের পথ",
    paragraphs: [
      "এজেন্ট মডেলে আপনি সরাসরি প্লেয়ারদের deposit/withdrawal handle করেন — কমিশন NGR (Net Gaming Revenue)-এর ৪০–৫০%। অ্যাফিলিয়েট মডেলে শুধু referral link, কমিশন ৩০–৬০%।",
      "Facebook/Telegram-এ আক্রমণাত্মক promo বা minor-targeted content পার্টনার অ্যাকাউন্ট suspend করার সবচেয়ে সাধারণ কারণ। গাইডলাইন কঠোরভাবে মেনে চলুন।",
    ],
  } } },

  "ios-app-guide": { bd: { bn: {
    eyebrow: "জিতবাজ iOS — বাংলাদেশ",
    heading: "iPhone-এ জিতবাজ — Safari Add to Home Screen পদ্ধতি",
    paragraphs: [
      "App Store-এ বেটিং অ্যাপ অনুমোদিত নয়। জিতবাজ iOS-এ Safari → Share → Add to Home Screen দিয়ে full-screen PWA হিসেবে ইনস্টল করুন। কোনো IPA sideload প্রয়োজন নেই।",
      "Telegram/WhatsApp-এ আসা 'JeetBuzz iOS .ipa download' লিংক প্রায় সব ফিশিং বা malware। শুধু jeetbuzz.com/app থেকে install করুন।",
    ],
  } } },

  "android-web-app-guide": { bd: { bn: {
    eyebrow: "জিতবাজ Android Web App — বাংলাদেশ",
    heading: "APK ছাড়াই Chrome PWA হিসেবে জিতবাজ — বাংলাদেশ",
    paragraphs: [
      "Chrome-এ jeetbuzz.com খুলে Menu → Install App করলে full-screen PWA হিসেবে install হয় — APK install ছাড়াই push notification ও offline cache পাবেন।",
      "এই pathway-এ auto-update স্বয়ংক্রিয়, signature mismatch বা SHA verification লাগে না। সাইজ ~৫ MB মাত্র, ডেটা সাশ্রয়ী।",
    ],
  } } },

  "is-jeetbuzz-safe": { bd: { bn: {
    eyebrow: "জিতবাজ কি নিরাপদ — বাংলাদেশ",
    heading: "বাংলাদেশি প্লেয়ারের জন্য জিতবাজ নিরাপদ কিনা — ট্রাস্ট রিভিউ",
    paragraphs: [
      "জিতবাজ Curaçao eGaming লাইসেন্সপ্রাপ্ত (লাইসেন্স নম্বর জিতবাজ ফুটারে যাচাইযোগ্য)। ৬ মাসে আমাদের কোনো withdrawal denied হয়নি, KYC সম্পন্ন থাকলে।",
      "সতর্কতা: WhatsApp/Telegram-এ আসা 'জিতবাজ এজেন্ট' থেকে সাবধান — শুধু অফিসিয়াল cashier ব্যবহার করুন। ফেক মিরর সাইট চিনতে SSL ও domain যাচাই করুন।",
    ],
  } } },
};