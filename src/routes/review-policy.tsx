import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/review-policy";
const TITLE = "GetJeetBuzz Review Policy";
const DESC = "How GetJeetBuzz scores JeetBuzz — methodology, weighting and what we test before publishing a review or rating.";

export const Route = createFileRoute("/review-policy")({
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
      title={<><span className="gold-text">Review</span> Policy</>}
      subtitle="The methodology behind every JeetBuzz score on GetJeetBuzz."
      showDisclosure={false}
      breadcrumbs={[{ name: "Review Policy", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## What we test",
        "Signup, KYC, deposits via bKash/Nagad/Rocket, sportsbook markets (especially cricket), live casino, mobile app, support response in Bengali, and a real cash-out.",
        "## Scoring",
        "Each category is scored 1–5. Weights: cricket markets 25%, payments 25%, app 15%, bonuses 15%, support 10%, safety 10%.",
        "## Re-tests",
        "Reviews are re-tested at least twice a year, more often when the operator changes payments or bonus terms.",
        "## Conflicts of interest",
        "We earn affiliate commission. That never changes a score; the moment it did, our reviews would be worthless.",
      ]}
      bodyByLocale={{
        bn: [
          "## আমরা কী টেস্ট করি",
          "সাইনআপ, KYC, bKash/Nagad/Rocket দিয়ে ডিপোজিট, স্পোর্টসবুক মার্কেট (বিশেষ করে ক্রিকেট — BPL/IPL), লাইভ ক্যাসিনো, মোবাইল অ্যাপ, বাংলায় সাপোর্ট রেসপন্স, এবং প্রকৃত ক্যাশ-আউট।",
          "## স্কোরিং",
          "প্রতিটি ক্যাটাগরিকে ১–৫ স্কেলে স্কোর। ওয়েট: ক্রিকেট মার্কেট ২৫%, পেমেন্ট ২৫%, অ্যাপ ১৫%, বোনাস ১৫%, সাপোর্ট ১০%, সিকিউরিটি ১০%।",
          "## পুনঃপরীক্ষা",
          "রিভিউগুলো বছরে অন্তত দুইবার, এবং অপারেটর পেমেন্ট বা বোনাস টার্ম পরিবর্তন করলে আরো ঘন ঘন পুনরায় পরীক্ষা করা হয়।",
          "## স্বার্থের সংঘাত",
          "আমরা অ্যাফিলিয়েট কমিশন পাই। এটি কখনো স্কোর পরিবর্তন করে না; করলে আমাদের রিভিউ মূল্যহীন হয়ে যাবে।",
        ],
        ur: [
          "## ہم کیا ٹیسٹ کرتے ہیں",
          "سائن اپ، KYC، EasyPaisa/JazzCash ڈپازٹ، اسپورٹس بک مارکیٹس (خاص طور پر کرکٹ — PSL/IPL)، لائیو کیسینو، موبائل ایپ، اردو سپورٹ ریسپانس، اور حقیقی کیش آؤٹ۔",
          "## اسکورنگ",
          "ہر زمرہ 1–5 پر اسکور۔ وزن: کرکٹ مارکیٹس 25%، ادائیگیاں 25%، ایپ 15%، بونس 15%، سپورٹ 10%، حفاظت 10%۔",
          "## دوبارہ ٹیسٹ",
          "ریویوز سال میں کم از کم دو بار، اور آپریٹر کی تبدیلیوں پر زیادہ کثرت سے دوبارہ ٹیسٹ کیے جاتے ہیں۔",
          "## مفادات کا ٹکراؤ",
          "ہم ایفیلیٹ کمیشن کماتے ہیں۔ یہ اسکور کو کبھی تبدیل نہیں کرتا۔",
        ],
        hi: [
          "## हम क्या टेस्ट करते हैं",
          "साइनअप, KYC, UPI/PhonePe/Paytm डिपॉज़िट, स्पोर्ट्सबुक मार्केट्स (विशेष रूप से क्रिकेट — IPL/BPL), लाइव कैसीनो, मोबाइल ऐप, हिंदी सपोर्ट रिस्पॉन्स, और वास्तविक कैश-आउट।",
          "## स्कोरिंग",
          "हर श्रेणी को 1–5 पर स्कोर। वज़न: क्रिकेट मार्केट्स 25%, पेमेंट 25%, ऐप 15%, बोनस 15%, सपोर्ट 10%, सुरक्षा 10%।",
          "## पुनः परीक्षण",
          "रिव्यू साल में कम से कम दो बार, और ऑपरेटर बदलावों पर अधिक बार पुनः जाँचे जाते हैं।",
          "## हितों का टकराव",
          "हम एफिलिएट कमीशन कमाते हैं। यह कभी स्कोर नहीं बदलता।",
        ],
      }}
      related={[
        { to: "/editorial-policy", title: "Editorial Policy" },
        { to: "/jeetbuzz-review", title: "JeetBuzz Review" },
        { to: "/fact-checking", title: "Fact-Checking" },
        { to: "/update-policy", title: "Update Policy" },
      ]}
    />
  ),
});