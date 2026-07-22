import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { LAST_VERIFIED } from "@/lib/affiliate";
import { canonicalLink, hreflangLinks, ogUrl } from "@/lib/schema";
import { useI18n, type Locale } from "@/lib/i18n";

const PATH = "/author" as const;
const NAME = "GetJeetBuzz Editorial Team";
const LEAD_AUTHOR = "Nahid";
const LEAD_AUTHOR_ROLE_EN = "Author, GetJeetBuzz Editorial Team";
const REVIEWER = "GetJeetBuzz Compliance Desk";
const REVIEWER_ROLE_EN = "Reviewer, Compliance & Fact-check";
const TITLE = "About the GetJeetBuzz Editorial Team";
const DESC =
  "Who writes GetJeetBuzz: a small team of Bangladeshi bettors who test JeetBuzz with real accounts, real bKash/Nagad deposits and real withdrawals, and re-verify every guide on a published schedule.";

export const Route = createFileRoute("/author")({
  head: () => ({
    meta: [
      { title: TITLE + " | GetJeetBuzz" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      ogUrl(PATH),
    ],
    links: [canonicalLink(PATH), ...hreflangLinks(PATH)],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://getjeetbuzz.com/author#nahid",
              name: LEAD_AUTHOR,
              jobTitle: LEAD_AUTHOR_ROLE_EN,
              url: "https://getjeetbuzz.com/author",
              worksFor: { "@type": "Organization", name: "GetJeetBuzz", url: "https://getjeetbuzz.com" },
              knowsAbout: [
                "JeetBuzz signup from Bangladesh",
                "bKash, Nagad, Rocket deposits and withdrawals",
                "BPL and IPL in-play markets",
                "Affiliate commission structures",
              ],
            },
            {
              "@type": "Person",
              "@id": "https://getjeetbuzz.com/author#compliance",
              name: REVIEWER,
              jobTitle: REVIEWER_ROLE_EN,
              url: "https://getjeetbuzz.com/author",
              worksFor: { "@type": "Organization", name: "GetJeetBuzz", url: "https://getjeetbuzz.com" },
            },
          ],
        }),
      },
    ],
  }),
  component: AuthorPage,
});

function AuthorPage() {
  const { locale } = useI18n();
  const t = COPY[locale] ?? COPY.en;
  return (
    <PageShell>
      <PageHero
        eyebrow={t.eyebrow}
        title={<>{t.title1}<span className="gold-text">{t.title2}</span></>}
        subtitle={t.subtitle}
      />
      <section className="container-pro">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              {t.lastVerified}
            </p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              {LAST_VERIFIED}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-border/60 bg-card/40 p-5">
              <div className="flex items-center gap-3">
                <div
                  aria-hidden
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary ring-1 ring-primary/20"
                >
                  N
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-foreground">{LEAD_AUTHOR}</h2>
                  <p className="text-xs text-muted-foreground">{t.authorRole}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.authorBio}
              </p>
            </article>

            <article className="rounded-2xl border border-border/60 bg-card/40 p-5">
              <div className="flex items-center gap-3">
                <div
                  aria-hidden
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary ring-1 ring-primary/20"
                >
                  CD
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-foreground">{REVIEWER}</h2>
                  <p className="text-xs text-muted-foreground">{t.reviewerRole}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.reviewerBio}
              </p>
            </article>
          </div>

          <AffiliateDisclosure variant="inline" />

          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-base font-semibold text-foreground">{t.whoH}</h2>
              <p className="mt-2">{t.whoP}</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">{t.testH}</h2>
              <p className="mt-2">{t.testP}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {t.testList.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">{t.reverifyH}</h2>
              <p className="mt-2">{t.reverifyP}</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">{t.indepH}</h2>
              <p className="mt-2">
                {t.indepP1}{" "}
                <Link
                  to="/review-policy"
                  className="text-primary hover:underline"
                >
                  {t.reviewPolicy}
                </Link>{" "}
                {t.and}{" "}
                <Link
                  to="/editorial-policy"
                  className="text-primary hover:underline"
                >
                  {t.editorialPolicy}
                </Link>{" "}
                {t.indepP2}
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">{t.notH}</h2>
              <p className="mt-2">{t.notP}</p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">{t.contactH}</h2>
              <p className="mt-2">
                {t.contactP1}{" "}
                <Link
                  to="/contact"
                  className="text-primary hover:underline"
                >
                  {t.contactPage}
                </Link>{" "}
                {t.contactP2}
              </p>
            </section>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

type Copy = {
  eyebrow: string; title1: string; title2: string; subtitle: string;
  lastVerified: string;
  authorRole: string; authorBio: string;
  reviewerRole: string; reviewerBio: string;
  whoH: string; whoP: string;
  testH: string; testP: string; testList: string[];
  reverifyH: string; reverifyP: string;
  indepH: string; indepP1: string; indepP2: string; reviewPolicy: string; editorialPolicy: string; and: string;
  notH: string; notP: string;
  contactH: string; contactP1: string; contactP2: string; contactPage: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    eyebrow: "Author profile", title1: "About the ", title2: "GetJeetBuzz Editorial Team",
    subtitle: "A small team of South Asian bettors testing JeetBuzz with real accounts, real deposits and real withdrawals, then writing it up honestly.",
    lastVerified: "Last full site re-verification",
    authorRole: "Author, GetJeetBuzz Editorial Team",
    authorBio: "Nahid leads editorial for GetJeetBuzz. He tests JeetBuzz signup, bKash and Nagad deposits, in-play BPL/IPL markets and withdrawals from a Bangladeshi player account, and writes the primary Bengali and English guides.",
    reviewerRole: "Reviewer, Compliance and Fact-check",
    reviewerBio: "The Compliance Desk fact-checks every guide before publishing: payment limits, KYC steps, bonus terms and affiliate commission figures are re-verified against JeetBuzz's live platform.",
    whoH: "Who we are",
    whoP: "GetJeetBuzz is written by a small editorial team covering Bangladesh, Pakistan and India. We are everyday cricket bettors first and writers second, most of us started betting on BPL, IPL and PSL on JeetBuzz before this site existed. We publish under the team byline rather than individual names because online betting is a sensitive topic in our markets.",
    testH: "How we test",
    testP: "Every guide on this site is based on hands-on testing, not press releases or affiliate decks. Specifically, we:",
    testList: [
      "Maintain real JeetBuzz player accounts in Bangladesh, Pakistan and India to verify country-specific behaviour.",
      "Make real deposits via bKash, Nagad and Rocket (and EasyPaisa / JazzCash / UPI for the PK and IN guides) so the screenshots and times in our payment guides come from our own cashier.",
      "Run real withdrawal attempts, including the slow ones, and note how long KYC actually takes in practice.",
      "Bet on in-play BPL, IPL, PSL, internationals and live casino so the market depth and cash-out behaviour in our reviews are first-hand.",
    ],
    reverifyH: "How often we re-verify",
    reverifyP: "Every guide carries a \"Last verified\" date. Core pages (Registration, Login, Deposit, Withdrawal, Bonus, Security) are re-verified at least quarterly and whenever the operator changes wallet limits, KYC steps or promo terms.",
    indepH: "Editorial independence from JeetBuzz",
    indepP1: "GetJeetBuzz is a verified affiliate partner of JeetBuzz on a revenue-share commission basis. We disclose this on every page. The commercial relationship does not change our review scores: JeetBuzz has no editorial veto. See our",
    indepP2: "for the full firewall.",
    reviewPolicy: "Review Policy", editorialPolicy: "Editorial Policy", and: "and",
    notH: "What we are not",
    notP: "We are not JeetBuzz, not a login portal, not an APK host and not a customer support channel. Account signup, deposits, withdrawals and disputes all happen on JeetBuzz's own platform.",
    contactH: "Contact the editor",
    contactP1: "Spotted a factual error, a stale number, or a guide that no longer matches what JeetBuzz does today? Tell us via the",
    contactP2: "and we will re-verify and update or correct it.",
    contactPage: "Contact page",
  },
  bn: {
    eyebrow: "লেখক প্রোফাইল", title1: "পরিচিতি, ", title2: "GetJeetBuzz Editorial Team",
    subtitle: "বাংলাদেশের একদল সাধারণ বেটর, প্রকৃত অ্যাকাউন্ট, প্রকৃত bKash/Nagad ডিপোজিট ও প্রকৃত উইথড্রয়াল দিয়ে JeetBuzz পরীক্ষা করি, তারপর সৎভাবে লিখি।",
    lastVerified: "সর্বশেষ সম্পূর্ণ সাইট পুনঃযাচাই",
    authorRole: "লেখক, GetJeetBuzz Editorial Team",
    authorBio: "নাহিদ GetJeetBuzz-এর সম্পাদকীয় দলের প্রধান লেখক। তিনি বাংলাদেশি প্লেয়ার অ্যাকাউন্ট থেকে JeetBuzz সাইনআপ, bKash ও Nagad ডিপোজিট, BPL/IPL ইন-প্লে মার্কেট এবং উইথড্রয়াল নিজে পরীক্ষা করেন, এবং প্রধান বাংলা ও ইংরেজি গাইডগুলো লিখেন।",
    reviewerRole: "রিভিউয়ার, Compliance ও Fact-check",
    reviewerBio: "Compliance Desk প্রকাশের আগে প্রতিটি গাইড যাচাই করে: পেমেন্ট লিমিট, KYC ধাপ, বোনাস টার্মস এবং অ্যাফিলিয়েট কমিশন সংখ্যা JeetBuzz-এর লাইভ প্ল্যাটফর্মের বিপরীতে পুনঃযাচাই করা হয়।",
    whoH: "আমরা কারা",
    whoP: "GetJeetBuzz লিখছে একটি ছোট সম্পাদকীয় দল, মূলত বাংলাদেশ ভিত্তিক, পাকিস্তান ও ভারতের জন্যও কাজ করি। আমরা প্রথমে ক্রিকেট বেটর, পরে লেখক, বেশিরভাগ আমরা এই সাইট তৈরির আগে JeetBuzz-এ BPL ও IPL-এ বাজি ধরতাম। বাংলাদেশে অনলাইন বেটিং সংবেদনশীল বিষয় বলেই আমরা ব্যক্তি নয়, টিম বাইলাইনে প্রকাশ করি।",
    testH: "আমরা কীভাবে টেস্ট করি",
    testP: "এই সাইটের প্রতিটি গাইড হাতে-কলমে পরীক্ষার উপর ভিত্তি করে, প্রেস রিলিজ বা অ্যাফিলিয়েট ডেক নয়। নির্দিষ্টভাবে আমরা:",
    testList: [
      "বাংলাদেশ, পাকিস্তান ও ভারতে প্রকৃত JeetBuzz প্লেয়ার অ্যাকাউন্ট রক্ষণাবেক্ষণ করি দেশ-নির্দিষ্ট আচরণ যাচাই করতে।",
      "bKash, Nagad, Rocket (এবং PK/IN গাইডের জন্য EasyPaisa/JazzCash/UPI) দিয়ে প্রকৃত ডিপোজিট করি, তাই স্ক্রিনশট ও সময় আমাদের নিজের ক্যাশিয়ার থেকে আসে।",
      "প্রকৃত উইথড্রয়াল চেষ্টা করি, ধীরগুলোসহ, এবং KYC প্রকৃতপক্ষে কত সময় নেয় তা নথিভুক্ত করি।",
      "ইন-প্লে BPL, IPL, PSL, ইন্টারন্যাশনাল ও লাইভ ক্যাসিনোতে বাজি ধরি যাতে আমাদের রিভিউয়ের মার্কেট ডেপথ ও ক্যাশ-আউট আচরণ প্রথম হাতে যাচাইকৃত।",
    ],
    reverifyH: "কত ঘন ঘন পুনঃযাচাই",
    reverifyP: "প্রতিটি গাইডে বাইলাইনে \"Last verified\" তারিখ থাকে। কোর পেজ (রেজিস্ট্রেশন, লগইন, ডিপোজিট, উইথড্রয়াল, বোনাস, সিকিউরিটি) অন্তত ত্রৈমাসিক এবং অপারেটর পরিবর্তন (ওয়ালেট লিমিট, KYC, প্রমো) আমরা যখনই দেখি তখনই পুনঃযাচাই হয়।",
    indepH: "JeetBuzz থেকে সম্পাদকীয় স্বাধীনতা",
    indepP1: "GetJeetBuzz হলো JeetBuzz-এর ভেরিফায়েড অফিসিয়াল অ্যাফিলিয়েট পার্টনার রেভিনিউ-শেয়ার ভিত্তিতে। প্রতিটি পেজে এটি প্রকাশ করি। কমার্শিয়াল সম্পর্ক আমাদের রিভিউ স্কোর পরিবর্তন করে না: JeetBuzz-এর কোনো সম্পাদকীয় ভেটো নেই। বিস্তারিত দেখুন আমাদের",
    indepP2: "— সম্পূর্ণ ফায়ারওয়াল।",
    reviewPolicy: "Review Policy", editorialPolicy: "Editorial Policy", and: "এবং",
    notH: "আমরা কী নই",
    notP: "আমরা JeetBuzz নই, লগইন পোর্টাল নই, APK হোস্ট নই এবং কাস্টমার সাপোর্ট চ্যানেলও নই। অ্যাকাউন্ট সাইনআপ, ডিপোজিট, উইথড্রয়াল ও বিরোধ সবকিছু JeetBuzz-এর নিজস্ব প্ল্যাটফর্মে হয়।",
    contactH: "সম্পাদকের সাথে যোগাযোগ",
    contactP1: "তথ্যগত ভুল, পুরোনো সংখ্যা বা JeetBuzz আজ যা করে তার সাথে মিলে না এমন গাইড দেখলে আমাদের জানান",
    contactP2: "— আমরা পুনঃযাচাই করে আপডেট বা সংশোধন করব।",
    contactPage: "Contact পেজে",
  },
  ur: {
    eyebrow: "مصنف پروفائل", title1: "تعارف, ", title2: "GetJeetBuzz Editorial Team",
    subtitle: "جنوبی ایشیائی کھلاڑیوں کی ایک چھوٹی ٹیم, حقیقی اکاؤنٹس، حقیقی EasyPaisa/JazzCash ڈپازٹ اور حقیقی وڈرا کے ساتھ JeetBuzz کو ٹیسٹ کرتے ہیں۔",
    lastVerified: "آخری مکمل سائٹ ری ویریفکیشن",
    authorRole: "مصنف، GetJeetBuzz Editorial Team",
    authorBio: "ناہد GetJeetBuzz کی ادارتی ٹیم کے مرکزی مصنف ہیں۔ وہ حقیقی پلیئر اکاؤنٹ سے JeetBuzz سائن اپ، ادائیگیاں اور وڈرا کو خود ٹیسٹ کرتے ہیں۔",
    reviewerRole: "ریویو ور، Compliance اور Fact-check",
    reviewerBio: "Compliance Desk اشاعت سے پہلے ہر گائیڈ کو JeetBuzz کے لائیو پلیٹ فارم کے مقابلے میں دوبارہ چیک کرتی ہے۔",
    whoH: "ہم کون ہیں",
    whoP: "GetJeetBuzz ایک چھوٹی ادارتی ٹیم لکھتی ہے جو پاکستان، بنگلہ دیش اور بھارت کو کور کرتی ہے۔ ہم پہلے کرکٹ بیٹرز اور پھر لکھاری ہیں, ہم میں سے اکثر اس سائٹ سے پہلے JeetBuzz پر PSL، BPL اور IPL پر بیٹ لگاتے تھے۔",
    testH: "ہم کیسے ٹیسٹ کرتے ہیں",
    testP: "اس سائٹ پر ہر گائیڈ ہینڈز آن ٹیسٹنگ پر مبنی ہے، پریس ریلیز یا ایفیلیٹ ڈیک پر نہیں۔ خاص طور پر ہم:",
    testList: [
      "پاکستان، بنگلہ دیش اور بھارت میں اصل JeetBuzz پلیئر اکاؤنٹس برقرار رکھتے ہیں۔",
      "EasyPaisa، JazzCash، bKash اور UPI کے ذریعے حقیقی ڈپازٹ کرتے ہیں۔",
      "حقیقی وڈرا کی کوششیں کرتے ہیں اور KYC کا اصل وقت نوٹ کرتے ہیں۔",
      "ان پلے PSL، BPL، IPL، انٹرنیشنل اور لائیو کیسینو پر بیٹ لگاتے ہیں۔",
    ],
    reverifyH: "ہم کتنی بار دوبارہ توثیق کرتے ہیں",
    reverifyP: "ہر گائیڈ پر \"Last verified\" تاریخ ہے۔ کور صفحات کم از کم سہ ماہی اور آپریٹر کی تبدیلیوں پر دوبارہ تصدیق کیے جاتے ہیں۔",
    indepH: "JeetBuzz سے ادارتی آزادی",
    indepP1: "GetJeetBuzz، JeetBuzz کا تصدیق شدہ آفیشل ایفیلیٹ پارٹنر ہے۔ تجارتی تعلق ہمارے ریویو سکور کو تبدیل نہیں کرتا۔ ہماری",
    indepP2: "مکمل firewall کے لیے دیکھیں۔",
    reviewPolicy: "Review Policy", editorialPolicy: "Editorial Policy", and: "اور",
    notH: "ہم کیا نہیں ہیں",
    notP: "ہم JeetBuzz نہیں، لاگ ان پورٹل نہیں، APK ہوسٹ نہیں اور کسٹمر سپورٹ چینل نہیں۔",
    contactH: "ایڈیٹر سے رابطہ",
    contactP1: "حقائق میں غلطی یا پرانا نمبر دیکھا؟ ہمیں بتائیں",
    contactP2: "— ہم دوبارہ تصدیق اور درست کریں گے۔",
    contactPage: "Contact صفحہ پر",
  },
  hi: {
    eyebrow: "लेखक प्रोफ़ाइल", title1: "परिचय, ", title2: "GetJeetBuzz Editorial Team",
    subtitle: "दक्षिण एशियाई बेटर्स की एक छोटी टीम, असली अकाउंट, असली UPI/PhonePe डिपॉज़िट और असली विदड्रॉल के साथ JeetBuzz टेस्ट करते हैं।",
    lastVerified: "अंतिम पूर्ण साइट पुन: सत्यापन",
    authorRole: "लेखक, GetJeetBuzz Editorial Team",
    authorBio: "नाहिद GetJeetBuzz की संपादकीय टीम के मुख्य लेखक हैं। वे असली प्लेयर अकाउंट से JeetBuzz साइनअप, भुगतान और विदड्रॉल स्वयं टेस्ट करते हैं।",
    reviewerRole: "समीक्षक, Compliance और Fact-check",
    reviewerBio: "Compliance Desk प्रकाशन से पहले हर गाइड को JeetBuzz के लाइव प्लेटफ़ॉर्म के विरुद्ध पुनः सत्यापित करती है।",
    whoH: "हम कौन हैं",
    whoP: "GetJeetBuzz एक छोटी संपादकीय टीम लिखती है जो भारत, बांग्लादेश और पाकिस्तान को कवर करती है। हम पहले क्रिकेट बेटर्स हैं, फिर लेखक, हम में से अधिकांश इस साइट से पहले JeetBuzz पर IPL, BPL और PSL पर दांव लगाते थे।",
    testH: "हम कैसे टेस्ट करते हैं",
    testP: "इस साइट की हर गाइड हैंड्स-ऑन टेस्टिंग पर आधारित है, प्रेस रिलीज़ या एफिलिएट डेक पर नहीं। विशेष रूप से, हम:",
    testList: [
      "भारत, बांग्लादेश और पाकिस्तान में असली JeetBuzz प्लेयर अकाउंट बनाए रखते हैं।",
      "UPI, PhonePe, Paytm, bKash और EasyPaisa के माध्यम से असली डिपॉज़िट करते हैं।",
      "असली विदड्रॉल प्रयास करते हैं और KYC का वास्तविक समय नोट करते हैं।",
      "इन-प्ले IPL, BPL, PSL, इंटरनेशनल और लाइव कैसीनो पर दांव लगाते हैं।",
    ],
    reverifyH: "हम कितनी बार पुनः सत्यापन करते हैं",
    reverifyP: "हर गाइड पर \"Last verified\" तिथि होती है। कोर पेज कम से कम तिमाही और ऑपरेटर बदलावों पर पुनः सत्यापित होते हैं।",
    indepH: "JeetBuzz से संपादकीय स्वतंत्रता",
    indepP1: "GetJeetBuzz, JeetBuzz का वेरिफाइड ऑफिशियल एफिलिएट पार्टनर है। व्यावसायिक संबंध हमारे रिव्यू स्कोर को नहीं बदलता। हमारी",
    indepP2: "पूर्ण firewall के लिए देखें।",
    reviewPolicy: "Review Policy", editorialPolicy: "Editorial Policy", and: "और",
    notH: "हम क्या नहीं हैं",
    notP: "हम JeetBuzz नहीं हैं, लॉगिन पोर्टल नहीं, APK होस्ट नहीं और कस्टमर सपोर्ट चैनल नहीं।",
    contactH: "संपादक से संपर्क करें",
    contactP1: "तथ्यात्मक त्रुटि या पुराना नंबर देखा? हमें बताएं",
    contactP2: "— हम पुनः सत्यापित करके अपडेट या सुधार करेंगे।",
    contactPage: "Contact पेज पर",
  },
};