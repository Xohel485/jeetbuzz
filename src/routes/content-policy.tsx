import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/content-policy";
const TITLE = "GetJeetBuzz Content Policy";
const DESC = "What GetJeetBuzz publishes and what it does not, age gating, responsible gaming and content GetJeetBuzz refuses to produce.";

export const Route = createFileRoute("/content-policy")({
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
      title={<><span className="gold-text">Content</span> Policy</>}
      subtitle="What we publish, and the categories of content we refuse to produce on principle."
      showDisclosure={false}
      breadcrumbs={[{ name: "Content Policy", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Audience",
        "18+ only. All pages carry a responsible gaming reminder.",
        "## What we publish",
        "Practical guides, tested reviews, payment walkthroughs and balanced editorial on JeetBuzz for Bangladesh, Pakistan and India.",
        "## What we don't publish",
        "- Match-fixing or insider claims",
        "- 'Guaranteed win' systems",
        "- Content targeted at minors",
        "- Promotion of unlicensed scam operators",
        "- Hate, harassment, or discriminatory content",
        "## AI assistance",
        "We use AI to draft outlines and translate copy. A human editor verifies facts, dates and recommendations before publishing.",
      ]}
      bodyByLocale={{
        bn: [
          "## অডিয়েন্স",
          "১৮+ মাত্র। সমস্ত পেজে দায়িত্বশীল গেমিং রিমাইন্ডার থাকে।",
          "## আমরা যা প্রকাশ করি",
          "বাংলাদেশ, পাকিস্তান ও ভারতের জন্য JeetBuzz-এ বাস্তব গাইড, পরীক্ষিত রিভিউ, bKash/Nagad পেমেন্ট ওয়াকথ্রু এবং ভারসাম্যপূর্ণ এডিটোরিয়াল।",
          "## আমরা যা প্রকাশ করি না",
          "- ম্যাচ-ফিক্সিং বা ইনসাইডার দাবি",
          "- 'গ্যারান্টিড উইন' সিস্টেম",
          "- শিশুদের লক্ষ্য করে কনটেন্ট",
          "- অলাইসেন্সড স্ক্যাম অপারেটরের প্রচার",
          "- ঘৃণা, হয়রানি বা বৈষম্যমূলক কনটেন্ট",
          "## AI সহায়তা",
          "আমরা আউটলাইন ও অনুবাদের জন্য AI ব্যবহার করি। প্রকাশের আগে মানব সম্পাদক তথ্য, তারিখ ও সুপারিশ যাচাই করেন।",
        ],
        ur: [
          "## قارئین",
          "صرف 18+۔ تمام صفحات پر ذمہ دار گیمنگ یاد دہانی۔",
          "## ہم کیا شائع کرتے ہیں",
          "پاکستان، بنگلہ دیش اور بھارت کے لیے JeetBuzz پر عملی گائیڈز، ٹیسٹ شدہ ریویوز، EasyPaisa/JazzCash پیمنٹ واک تھرو۔",
          "## ہم کیا شائع نہیں کرتے",
          "- میچ فکسنگ یا اندرونی دعوے",
          "- 'گارنٹیڈ ون' سسٹم",
          "- کم عمر افراد کے لیے مواد",
          "- غیر لائسنس یافتہ سکام آپریٹرز کی تشہیر",
          "- نفرت یا امتیازی مواد",
          "## AI مدد",
          "ہم خاکوں اور ترجمے کے لیے AI استعمال کرتے ہیں۔ شائع کرنے سے پہلے انسانی ایڈیٹر تصدیق کرتا ہے۔",
        ],
        hi: [
          "## ऑडियंस",
          "केवल 18+। सभी पेजों पर जिम्मेदार गेमिंग रिमाइंडर।",
          "## हम क्या प्रकाशित करते हैं",
          "भारत, बांग्लादेश और पाकिस्तान के लिए JeetBuzz पर व्यावहारिक गाइड, परीक्षित रिव्यू, UPI/PhonePe पेमेंट वॉकथ्रू।",
          "## हम क्या प्रकाशित नहीं करते",
          "- मैच फिक्सिंग या इनसाइडर दावे",
          "- 'गारंटीड विन' सिस्टम",
          "- नाबालिगों के लिए सामग्री",
          "- गैर-लाइसेंस्ड स्कैम ऑपरेटरों का प्रचार",
          "- घृणा या भेदभावपूर्ण सामग्री",
          "## AI सहायता",
          "हम आउटलाइन और अनुवाद के लिए AI का उपयोग करते हैं। प्रकाशन से पहले मानव संपादक तथ्य सत्यापित करता है।",
        ],
      }}
      related={[
        { to: "/editorial-policy", title: "Editorial Policy" },
        { to: "/responsible-gaming", title: "Responsible Gaming" },
        { to: "/fact-checking", title: "Fact-Checking" },
      ]}
    />
  ),
});