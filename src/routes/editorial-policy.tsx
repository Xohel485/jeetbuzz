import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/editorial-policy";
const TITLE = "GetJeetBuzz Editorial Policy";
const DESC =
  "How GetJeetBuzz researches, writes and updates its JeetBuzz guides, sources, conflicts of interest, corrections and editorial independence.";

export const Route = createFileRoute("/editorial-policy")({
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
      eyebrow="Policy"
      title={<><span className="gold-text">Editorial</span> Policy</>}
      subtitle="The standards GetJeetBuzz applies to every guide and review, independence, sourcing, dating and corrections."
      showDisclosure={false}
      breadcrumbs={[{ name: "Editorial Policy", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Independence",
        "We earn commissions from JeetBuzz affiliate links. Commercial relationships never dictate what we recommend, what scores we give or what we criticise.",
        "## Sources",
        "We test JeetBuzz directly, signup, deposit, in-play, withdrawal, and document what we see, with dates. Operator statements are clearly attributed.",
        "## Dating",
        "Every guide carries a 'last verified' date. Numbers older than 90 days are reviewed or retired.",
        "## Corrections",
        "Material errors are corrected with a dated correction note. Email editorial@getjeetbuzz.com to flag one.",
        "## Bengali first",
        "Our primary audience is Bangladeshi players. Bengali language and Bangladesh-specific examples take priority.",
        "## What we don't do",
        "- Fake urgency ('limited spots')",
        "- Cloaked links pretending to be neutral",
        "- Reviews of products we have not tested",
        "- Coverage of unlicensed scam operators",
      ]}
      bodyByLocale={{
        bn: [
          "## স্বাধীনতা",
          "আমরা JeetBuzz অ্যাফিলিয়েট লিঙ্ক থেকে কমিশন পাই। কমার্শিয়াল সম্পর্ক কখনোই নির্ধারণ করে না আমরা কী সুপারিশ করি, কী স্কোর দিই বা কী সমালোচনা করি।",
          "## সূত্র",
          "আমরা JeetBuzz নিজেই পরীক্ষা করি, সাইনআপ, bKash/Nagad ডিপোজিট, ইন-প্লে, উইথড্র, এবং তারিখসহ যা দেখি লিপিবদ্ধ করি।",
          "## তারিখ চিহ্নিতকরণ",
          "প্রতিটি গাইডে 'last verified' তারিখ থাকে। ৯০ দিনের পুরোনো সংখ্যা পুনরায় যাচাই বা প্রত্যাহার করা হয়।",
          "## সংশোধন",
          "মূল ত্রুটি তারিখসহ সংশোধন নোটে ঠিক করা হয়। editorial@getjeetbuzz.com-এ জানান।",
          "## বাংলা প্রথমে",
          "আমাদের প্রধান অডিয়েন্স বাংলাদেশের প্লেয়ার। বাংলা ভাষা ও বাংলাদেশ-নির্দিষ্ট উদাহরণ অগ্রাধিকার পায়।",
          "## যা আমরা করি না",
          "- ভুয়া আর্জেন্সি ('সীমিত আসন')",
          "- নিরপেক্ষ সাজানো গোপন লিঙ্ক",
          "- যে প্রোডাক্ট পরীক্ষা করিনি তার রিভিউ",
          "- অলাইসেন্সড স্ক্যাম অপারেটরের কভারেজ",
        ],
        ur: [
          "## آزادی",
          "ہم JeetBuzz ایفیلیٹ لنکس سے کمیشن کماتے ہیں۔ تجارتی تعلقات کبھی طے نہیں کرتے کہ ہم کیا تجویز کرتے ہیں، کیا اسکور دیتے ہیں یا کیا تنقید کرتے ہیں۔",
          "## ذرائع",
          "ہم JeetBuzz کو خود ٹیسٹ کرتے ہیں, سائن اپ، EasyPaisa/JazzCash ڈپازٹ، ان پلے، وڈرا, اور تاریخ کے ساتھ درج کرتے ہیں۔",
          "## تاریخ گذاری",
          "ہر گائیڈ پر 'last verified' تاریخ ہے۔ 90 دن سے پرانے نمبر دوبارہ جانچے یا ہٹا دیے جاتے ہیں۔",
          "## تصحیحات",
          "اہم غلطیاں تاریخ شدہ نوٹ کے ساتھ درست کی جاتی ہیں۔ editorial@getjeetbuzz.com پر اطلاع دیں۔",
          "## مقامی زبان پہلے",
          "ہمارے بنیادی قارئین پاکستانی اور بنگلہ دیشی کھلاڑی ہیں۔ مقامی زبان اور مثالیں ترجیح پاتی ہیں۔",
          "## جو ہم نہیں کرتے",
          "- جعلی urgency",
          "- چھپے ہوئے لنکس",
          "- بغیر ٹیسٹ کیے ریویو",
          "- غیر لائسنس یافتہ سکام آپریٹرز کی کوریج",
        ],
        hi: [
          "## स्वतंत्रता",
          "हम JeetBuzz एफिलिएट लिंक से कमीशन कमाते हैं। व्यावसायिक संबंध कभी तय नहीं करते कि हम क्या सुझाते हैं, क्या स्कोर देते हैं या क्या आलोचना करते हैं।",
          "## स्रोत",
          "हम JeetBuzz को स्वयं टेस्ट करते हैं, साइनअप, UPI/PhonePe डिपॉज़िट, इन-प्ले, विदड्रॉल, और तारीख के साथ दर्ज करते हैं।",
          "## तिथि अंकन",
          "हर गाइड पर 'last verified' तिथि होती है। 90 दिन से पुराने नंबर पुनः जाँचे या हटाए जाते हैं।",
          "## सुधार",
          "महत्वपूर्ण त्रुटियाँ तिथि सहित सुधार नोट के साथ ठीक की जाती हैं। editorial@getjeetbuzz.com पर सूचित करें।",
          "## स्थानीय भाषा पहले",
          "हमारे प्राथमिक पाठक भारतीय और दक्षिण एशियाई खिलाड़ी हैं। स्थानीय भाषा और उदाहरण प्राथमिकता पाते हैं।",
          "## जो हम नहीं करते",
          "- नकली urgency",
          "- छिपे हुए लिंक",
          "- बिना टेस्ट किए रिव्यू",
          "- गैर-लाइसेंस्ड स्कैम ऑपरेटरों की कवरेज",
        ],
      }}
      related={[
        { to: "/review-policy", title: "Review Policy" },
        { to: "/fact-checking", title: "Fact-Checking Process" },
        { to: "/update-policy", title: "Update Policy" },
        { to: "/affiliate-disclosure", title: "Affiliate Disclosure" },
      ]}
    />
  ),
});