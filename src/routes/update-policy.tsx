import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/update-policy";
const TITLE = "GetJeetBuzz Update Policy";
const DESC = "How often GetJeetBuzz updates JeetBuzz guides, what triggers an update and how outdated content is marked.";

export const Route = createFileRoute("/update-policy")({
  head: () => ({
    meta: [
      { title: TITLE + " | GetJeetBuzz" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      ogUrl(PATH),
    ],
    links: [canonicalLink(PATH)...hreflangLinks(PATH)],
    scripts: [jsonLdScript(articleSchema({ headline: TITLE, description: DESC, path: PATH }))],
  }),
  component: () => (
    <GuidePage
      eyebrow="Policy"
      title={<><span className="gold-text">Update</span> Policy</>}
      subtitle="When and why GetJeetBuzz refreshes its JeetBuzz guides."
      showDisclosure={false}
      breadcrumbs={[{ name: "Update Policy", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Scheduled updates",
        "- Money-related guides (deposit, withdrawal, bonus, VIP): every 90 days",
        "- Reviews: every 6 months",
        "- Static legal pages: annually",
        "## Trigger-based updates",
        "Operator changes (new payment method, new license, app rebuild, bonus terms) trigger an immediate update.",
        "## How updates are marked",
        "Every page shows a 'last verified' date. Major content changes also carry a change-log note inline.",
        "## Retiring content",
        "Pages we no longer maintain are removed and 301 redirected to the most relevant active guide.",
      ]}
      bodyByLocale={{
        bn: [
          "## নির্ধারিত আপডেট",
          "- টাকা-সম্পর্কিত গাইড (ডিপোজিট, উইথড্রয়াল, বোনাস, VIP): প্রতি ৯০ দিনে",
          "- রিভিউ: প্রতি ৬ মাসে",
          "- স্ট্যাটিক লিগ্যাল পেজ: বার্ষিক",
          "## ট্রিগার-ভিত্তিক আপডেট",
          "অপারেটরের পরিবর্তন (নতুন পেমেন্ট মেথড, নতুন লাইসেন্স, অ্যাপ রিবিল্ড, বোনাস টার্ম) তাৎক্ষণিক আপডেট ট্রিগার করে।",
          "## আপডেট কীভাবে চিহ্নিত হয়",
          "প্রতিটি পেজে 'last verified' তারিখ দেখানো হয়। বড় পরিবর্তনে ইনলাইন চেঞ্জ-লগ নোট থাকে।",
          "## কনটেন্ট অবসর",
          "যেসব পেজ আমরা আর রক্ষণাবেক্ষণ করি না, সেগুলো সরিয়ে সবচেয়ে প্রাসঙ্গিক সক্রিয় গাইডে 301 রিডাইরেক্ট করা হয়।",
        ],
        ur: [
          "## شیڈولڈ اپڈیٹس",
          "- پیسوں سے متعلق گائیڈز (ڈپازٹ، وڈرا، بونس، VIP): ہر 90 دن",
          "- ریویوز: ہر 6 ماہ",
          "- مستحکم قانونی صفحات: سالانہ",
          "## ٹرگر بیسڈ اپڈیٹس",
          "آپریٹر کی تبدیلیاں (نیا پیمنٹ طریقہ، نیا لائسنس، ایپ ری بلڈ، بونس شرائط) فوری اپڈیٹ کا سبب بنتی ہیں۔",
          "## اپڈیٹس کی نشاندہی",
          "ہر صفحہ پر 'last verified' تاریخ ہے۔ اہم تبدیلیوں کے ساتھ change-log نوٹ بھی ہوتا ہے۔",
          "## مواد ریٹائر کرنا",
          "جن صفحات کو ہم مزید برقرار نہیں رکھتے انہیں ہٹا کر متعلقہ ایکٹو گائیڈ پر 301 ری ڈائریکٹ کر دیا جاتا ہے۔",
        ],
        hi: [
          "## निर्धारित अपडेट",
          "- पैसे-संबंधित गाइड (डिपॉज़िट, विदड्रॉल, बोनस, VIP): हर 90 दिन",
          "- रिव्यू: हर 6 महीने",
          "- स्थिर कानूनी पेज: वार्षिक",
          "## ट्रिगर-आधारित अपडेट",
          "ऑपरेटर परिवर्तन (नया पेमेंट तरीका, नया लाइसेंस, ऐप रीबिल्ड, बोनस शर्तें) तुरंत अपडेट ट्रिगर करते हैं।",
          "## अपडेट कैसे चिह्नित होते हैं",
          "हर पेज पर 'last verified' तिथि होती है। बड़े बदलावों के साथ इनलाइन change-log नोट भी।",
          "## कंटेंट रिटायर करना",
          "जिन पेजों को हम अब बनाए नहीं रखते उन्हें हटाकर सबसे प्रासंगिक एक्टिव गाइड पर 301 रीडायरेक्ट कर दिया जाता है।",
        ],
      }}
      related={[
        { to: "/editorial-policy", title: "Editorial Policy" },
        { to: "/fact-checking", title: "Fact-Checking" },
        { to: "/review-policy", title: "Review Policy" },
      ]}
    />
  ),
});