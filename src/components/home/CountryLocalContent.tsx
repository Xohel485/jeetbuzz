import type { Country, Locale } from "@/lib/i18n";

type Block = {
  eyebrow: string;
  title: string;
  intro: string;
  paymentsHeading: string;
  payments: { name: string; detail: string }[];
  leagueHeading: string;
  leagueBody: string;
  faqHeading: string;
  faqs: { q: string; a: string }[];
};

type LocaleBlocks = Partial<Record<Locale, Block>>;

/**
 * Country + locale specific copy.
 * Hand-written, not machine translated. Each block uses local payment rails,
 * local cricket leagues, and the keyword phrasing real punters use in-market.
 */
const CONTENT: Record<Country, LocaleBlocks> = {
  bd: {
    bn: {
      eyebrow: "জিতবাজ বাংলাদেশ",
      title: "বাংলাদেশের প্লেয়ারদের জন্য জিতবাজ গাইড",
      intro:
        "জিতবাজ বাংলাদেশ-এ লগইন, সাইন আপ এবং প্রথম ডিপোজিট কীভাবে করবেন — ঢাকা, চট্টগ্রাম, সিলেট, রাজশাহী যেখানেই থাকুন, এই গাইডে স্থানীয় bKash, Nagad ও Rocket-এর জন্য আলাদা ধাপ দেওয়া আছে। জিতবাজ APK বাংলা ভার্সন ইনস্টল করে BPL, IPL এবং ইন্টারন্যাশনাল ক্রিকেট-এ লাইভ বেট করতে পারবেন।",
      paymentsHeading: "বাংলাদেশের লোকাল পেমেন্ট",
      payments: [
        {
          name: "bKash দিয়ে জিতবাজ ডিপোজিট",
          detail: "মিনিমাম ২০০ টাকা, পার্সোনাল-টু-পার্সোনাল ট্রান্সফার, ১–৩ মিনিটে অ্যাকাউন্টে ক্রেডিট হয়। ট্রান্সঅ্যাকশন আইডি অবশ্যই কপি করে cashier-এ paste করবেন।",
        },
        {
          name: "Nagad ডিপোজিট",
          detail: "Nagad-এ ক্যাশআউট চার্জ কম, তাই অনেক প্লেয়ার Nagad উইথড্রয়ালকে প্রাধান্য দেন। জিতবাজে সাপোর্টেড লিমিট: ২০০–২৫,০০০ টাকা।",
        },
        {
          name: "Rocket / DBBL",
          detail: "Dutch Bangla Mobile Banking (Rocket) দিয়ে রাত ১১টার পরেও তাৎক্ষণিক ডিপোজিট কাজ করে — গ্রামাঞ্চলের প্লেয়ারদের জন্য সবচেয়ে স্টেবল অপশন।",
        },
      ],
      leagueHeading: "BPL ও বাংলাদেশ ক্রিকেট মার্কেট",
      leagueBody:
        "Bangladesh Premier League (BPL)-এর প্রতি ম্যাচে জিতবাজে গড়ে ১৫০+ মার্কেট ওপেন থাকে — Match Winner, Top Bangladeshi Batsman, Over 6.5 Sixes, Tamim/Mushfiq Player Props ইত্যাদি। বাংলাদেশ vs ভারত বা বাংলাদেশ vs পাকিস্তান সিরিজে Cricket Exchange-এ Lay বেট সবচেয়ে ভালো ভ্যালু দেয়।",
      faqHeading: "বাংলাদেশের প্লেয়ারদের সাধারণ প্রশ্ন",
      faqs: [
        {
          q: "জিতবাজ কি বাংলাদেশে বৈধ?",
          a: "জিতবাজ Curaçao-licensed অফশোর অপারেটর। বাংলাদেশে অনলাইন বেটিং নিয়ে স্পষ্ট আইন নেই, তবে অপারেটর বিদেশ থেকে পরিচালিত হওয়ায় প্লেয়াররা ব্যক্তিগতভাবে অ্যাক্সেস করে।",
        },
        {
          q: "bKash এজেন্ট দিয়ে ডিপোজিট হবে?",
          a: "না — শুধু পার্সোনাল bKash অ্যাকাউন্ট থেকে Send Money করতে হবে। এজেন্ট ক্যাশ-ইন রিজেক্ট হবে।",
        },
        {
          q: "উইথড্রয়াল কত সময়ে আসে?",
          a: "bKash/Nagad-এ সাধারণত ৫–৩০ মিনিট। প্রথম উইথড্রয়ালে KYC ভেরিফিকেশন থাকলে ২৪ ঘণ্টা পর্যন্ত লাগতে পারে।",
        },
      ],
    },
  },
  pk: {
    ur: {
      eyebrow: "JeetBuzz پاکستان",
      title: "پاکستانی کھلاڑیوں کے لیے JeetBuzz گائیڈ",
      intro:
        "کراچی، لاہور، اسلام آباد یا پشاور — JeetBuzz پاکستان میں سائن اپ، لاگ ان اور پہلی ڈپازٹ کے لیے یہ گائیڈ مقامی JazzCash اور EasyPaisa کے لیے الگ مراحل دکھاتا ہے۔ JeetBuzz APK اردو ورژن انسٹال کر کے PSL، PCB سیریز اور ICC ٹورنامنٹس پر لائیو بیٹنگ کریں۔",
      paymentsHeading: "پاکستان کے مقامی پیمنٹ آپشنز",
      payments: [
        {
          name: "JazzCash سے JeetBuzz ڈپازٹ",
          detail: "کم از کم 500 PKR، موبائل اکاؤنٹ سے براہ راست منتقلی، 2–5 منٹ میں کریڈٹ۔ ٹرانزیکشن آئی ڈی کاپی کر کے کیشئر میں پیسٹ کریں۔",
        },
        {
          name: "EasyPaisa ڈپازٹ اور وِدڈرال",
          detail: "EasyPaisa کی فیس JazzCash سے کم ہے، اس لیے زیادہ تر کھلاڑی وِدڈرال کے لیے EasyPaisa کو ترجیح دیتے ہیں۔ حد: 500–50,000 PKR۔",
        },
        {
          name: "USDT / کرپٹو",
          detail: "بڑے کھلاڑیوں کے لیے TRC-20 USDT تیز ترین آپشن ہے — کوئی بینک ٹریل نہیں، 10 منٹ میں سیٹل ہو جاتا ہے۔",
        },
      ],
      leagueHeading: "PSL اور پاکستان کرکٹ مارکیٹس",
      leagueBody:
        "Pakistan Super League (PSL) کے ہر میچ پر JeetBuzz پر اوسطاً 150+ مارکیٹس کھلتی ہیں — Match Winner، Top Pakistani Bowler، Babar/Rizwan Player Props اور Powerplay Runs۔ Pakistan vs India سیریز میں Cricket Exchange پر Lay بیٹس بہترین ویلیو دیتی ہیں۔",
      faqHeading: "پاکستانی کھلاڑیوں کے عام سوالات",
      faqs: [
        {
          q: "کیا JeetBuzz پاکستان میں قانونی ہے؟",
          a: "JeetBuzz ایک Curaçao لائسنس یافتہ آف شور آپریٹر ہے۔ پاکستان میں آن لائن بیٹنگ کا واضح فریم ورک نہیں، اور آپریٹر بیرون ملک سے چلتا ہے۔",
        },
        {
          q: "JazzCash ایجنٹ سے ڈپازٹ ممکن ہے؟",
          a: "نہیں — صرف ذاتی JazzCash موبائل اکاؤنٹ سے Send Money کرنا ہوگا۔ ایجنٹ کیش ان قبول نہیں ہوتا۔",
        },
        {
          q: "وِدڈرال میں کتنا وقت لگتا ہے؟",
          a: "EasyPaisa / JazzCash پر عام طور پر 10–60 منٹ۔ پہلی بار KYC ویریفکیشن میں 24 گھنٹے تک لگ سکتے ہیں۔",
        },
      ],
    },
  },
  in: {
    hi: {
      eyebrow: "JeetBuzz इंडिया",
      title: "इंडियन प्लेयर्स के लिए JeetBuzz गाइड",
      intro:
        "मुंबई, दिल्ली, बेंगलुरु, कोलकाता या चेन्नई — JeetBuzz इंडिया पर साइनअप, लॉगिन और पहली डिपॉज़िट के लिए यह गाइड UPI, PhonePe, Paytm और Google Pay के लिए अलग-अलग स्टेप्स देता है। JeetBuzz APK हिंदी वर्ज़न इंस्टॉल करके IPL, Ranji Trophy और ICC टूर्नामेंट्स पर लाइव बेटिंग करें।",
      paymentsHeading: "इंडिया के लोकल पेमेंट ऑप्शन्स",
      payments: [
        {
          name: "UPI से JeetBuzz डिपॉज़िट",
          detail: "मिनिमम ₹300, किसी भी UPI ऐप (BHIM, GPay, PhonePe, Paytm) से डायरेक्ट ट्रांसफर, 1–3 मिनट में क्रेडिट। UTR नंबर कॉपी करके cashier में पेस्ट करना ज़रूरी है।",
        },
        {
          name: "PhonePe / Google Pay",
          detail: "VPA-to-VPA ट्रांसफर सबसे फास्ट है। बैंक होलिडे पर भी काम करता है क्योंकि NPCI रेल 24/7 चलती है।",
        },
        {
          name: "Paytm Wallet",
          detail: "जिनके पास UPI नहीं है उनके लिए Paytm Wallet बैकअप — KYC पूरा होने पर ₹2 लाख तक मंथली लिमिट।",
        },
      ],
      leagueHeading: "IPL और इंडिया क्रिकेट मार्केट्स",
      leagueBody:
        "IPL के हर मैच पर JeetBuzz पर 200+ मार्केट्स खुलती हैं — Match Winner, Top Indian Batsman, Virat/Rohit Player Props, Powerplay Runs, और Method of Dismissal। India vs Pakistan या World Cup मैचों में Cricket Exchange पर Lay बेट सबसे ज़्यादा वैल्यू देती है।",
      faqHeading: "इंडियन प्लेयर्स के आम सवाल",
      faqs: [
        {
          q: "क्या JeetBuzz इंडिया में लीगल है?",
          a: "JeetBuzz एक Curaçao लाइसेंस्ड ऑफशोर ऑपरेटर है। इंडिया में ऑनलाइन बेटिंग राज्य के हिसाब से अलग है — सिक्किम, नागालैंड में रेगुलेटेड, बाकी राज्यों में स्पष्ट फ्रेमवर्क नहीं।",
        },
        {
          q: "क्या UPI ट्रांज़ैक्शन ट्रैक होती है?",
          a: "UPI ट्रांज़ैक्शन बैंक स्टेटमेंट में P2P ट्रांसफर के तौर पर आती है। बड़े अमाउंट के लिए कई प्लेयर्स USDT या crypto पसंद करते हैं।",
        },
        {
          q: "विदड्रॉल कितनी देर में आता है?",
          a: "UPI पर आमतौर पर 5–30 मिनट। पहली बार KYC वेरिफिकेशन हो तो 24 घंटे तक लग सकते हैं।",
        },
      ],
    },
  },
};

export function CountryLocalContent({
  country,
  lang,
}: {
  country: Country;
  lang: Locale;
}) {
  const block = CONTENT[country]?.[lang];
  if (!block) return null;

  return (
    <section className="container-pro mt-16 md:mt-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {block.eyebrow}
        </p>
        <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          {block.title}
        </h2>
        <p className="mt-5 text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">
          {block.intro}
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <div className="glass p-6 md:p-7 md:col-span-2">
          <h3 className="text-lg font-semibold tracking-tight">
            {block.paymentsHeading}
          </h3>
          <ul className="mt-5 space-y-4">
            {block.payments.map((p) => (
              <li key={p.name} className="border-l-2 border-primary/40 pl-4">
                <p className="text-sm font-semibold text-foreground">
                  {p.name}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {p.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass p-6 md:p-7">
          <h3 className="text-lg font-semibold tracking-tight">
            {block.leagueHeading}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {block.leagueBody}
          </p>
        </div>
      </div>

      <div className="glass mt-5 p-6 md:p-8">
        <h3 className="text-lg font-semibold tracking-tight">
          {block.faqHeading}
        </h3>
        <dl className="mt-5 grid gap-5 md:grid-cols-3">
          {block.faqs.map((f) => (
            <div key={f.q}>
              <dt className="text-sm font-semibold text-foreground">
                {f.q}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}