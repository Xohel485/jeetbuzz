import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";

export const Route = createFileRoute("/responsible-gaming")({
  head: () => ({
    meta: [
      { title: "Responsible Gaming | GetJeetBuzz" },
      { name: "description", content: "Set limits, recognise the signs, and find help. Resources for Bangladeshi players who need support." },
      { property: "og:title", content: "Responsible Gaming | GetJeetBuzz" },
      { property: "og:description", content: "Set limits and find help." },
      { property: "og:type", content: "article" },
    ],
  }),
  component: () => (
    <GuidePage
      eyebrow="Stay safe"
      title={<>Responsible <span className="gold-text">Gaming</span></>}
      showDisclosure={false}
      body={[
        "## Bet what you can lose",
        "Treat betting as paid entertainment, not income. Never bet rent, food or borrowed money.",
        "## Use account tools",
        "JeetBuzz offers deposit limits, loss limits, session reminders and self-exclusion. Use them.",
        "## Signs to take a break",
        "- Chasing losses",
        "- Hiding bets from family",
        "- Betting bigger to feel the same excitement",
        "## Get help",
        "BeGambleAware (begambleaware.org) and GamCare (gamcare.org.uk) offer free, confidential support 24/7.",
      ]}
      bodyByLocale={{
        bn: [
          "## যতটুকু হারাতে পারেন ততটুকু বাজি ধরুন",
          "বাজিকে আয়ের উৎস নয়, পেইড বিনোদন হিসেবে নিন। ভাড়া, খাবার বা ধার করা টাকায় কখনোই বাজি ধরবেন না।",
          "## অ্যাকাউন্ট টুল ব্যবহার করুন",
          "JeetBuzz ডিপোজিট লিমিট, লস লিমিট, সেশন রিমাইন্ডার এবং সেলফ-এক্সক্লুশন অফার করে। সেগুলো ব্যবহার করুন।",
          "## বিরতি নেওয়ার লক্ষণ",
          "- লস চেজ করা",
          "- পরিবার থেকে বাজি লুকানো",
          "- একই উত্তেজনা পেতে বড় বাজি ধরা",
          "## সাহায্য নিন",
          "BeGambleAware (begambleaware.org) এবং GamCare (gamcare.org.uk) ২৪/৭ ফ্রি, গোপন সহায়তা দেয়।",
        ],
        ur: [
          "## اتنا ہی لگائیں جتنا ہار سکیں",
          "بیٹنگ کو آمدنی نہیں، تفریح سمجھیں۔ کرایہ، کھانا یا قرض لیے گئے پیسوں پر کبھی بیٹ نہ لگائیں۔",
          "## اکاؤنٹ ٹولز استعمال کریں",
          "JeetBuzz ڈپازٹ لمٹ، لاس لمٹ، سیشن یاد دہانیاں اور سیلف ایکسکلوژن فراہم کرتا ہے۔ انہیں استعمال کریں۔",
          "## وقفہ لینے کے اشارے",
          "- نقصانات کا پیچھا کرنا",
          "- گھر والوں سے بیٹ چھپانا",
          "- ایک ہی جوش کے لیے بڑی بیٹ لگانا",
          "## مدد لیں",
          "BeGambleAware (begambleaware.org) اور GamCare (gamcare.org.uk) 24/7 مفت، خفیہ مدد فراہم کرتے ہیں۔",
        ],
        hi: [
          "## उतना ही दांव लगाएं जितना खो सकें",
          "बेटिंग को आय नहीं, मनोरंजन समझें। किराया, खाना या उधार लिए पैसों पर कभी दांव न लगाएं।",
          "## अकाउंट टूल्स का उपयोग करें",
          "JeetBuzz डिपॉज़िट लिमिट, लॉस लिमिट, सेशन रिमाइंडर और सेल्फ-एक्सक्लूज़न प्रदान करता है।",
          "## ब्रेक लेने के संकेत",
          "- नुकसान का पीछा करना",
          "- परिवार से बेट छिपाना",
          "- वही उत्साह पाने के लिए बड़ा दांव लगाना",
          "## मदद लें",
          "BeGambleAware (begambleaware.org) और GamCare (gamcare.org.uk) 24/7 मुफ़्त, गोपनीय सहायता प्रदान करते हैं।",
        ],
      }}
    />
  ),
});