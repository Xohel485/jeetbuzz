import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import { SIGNUP_CLUSTER, siblings } from "@/lib/clusters";

export const Route = createFileRoute("/verification")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Account Verification — Phone, Email & KYC (2026) | GetJeetBuzz" },
      { name: "description", content: "JeetBuzz account verification — phone OTP, email confirmation and KYC (NID / CNIC / Aadhaar). What documents to send and how long it takes." },
      { property: "og:title", content: "JeetBuzz Account Verification" },
      { property: "og:description", content: "Step-by-step JeetBuzz verification — phone, email and KYC for BD, PK and IN." },
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
      subtitle="JeetBuzz has three verification layers — phone, email and KYC. You can start playing with phone alone, but KYC unlocks larger withdrawals. Here's exactly what each step needs."
      subtitleByLocale={{
        bn: "জিতবাজে তিনটি ভেরিফিকেশন ধাপ — ফোন, ইমেইল ও KYC। ফোন দিয়েই খেলা শুরু করা যায়, কিন্তু বড় উইথড্রয়ালে KYC লাগবে।",
        ur: "JeetBuzz پر تین تصدیق کے درجے — فون، ای میل اور KYC۔ فون سے کھیلنا شروع کر سکتے ہیں، مگر بڑی نکالنے کے لیے KYC ضروری ہے۔",
        hi: "JeetBuzz पर तीन वेरिफिकेशन स्तर — फ़ोन, ईमेल और KYC। फ़ोन से खेलना शुरू कर सकते हैं, पर बड़ी निकासी के लिए KYC ज़रूरी है।",
      }}
      ctaLabel="Verify your JeetBuzz account"
      heroImage="registration"
      body={[
        "## Layer 1 — Phone verification (required at signup)",
        "JeetBuzz sends a 6-digit OTP to the phone number you register. Enter it within 60 seconds. This is the only verification needed to deposit and place bets.",
        "## Layer 2 — Email verification (recommended)",
        "After signup, JeetBuzz emails a confirmation link. Click it once and you unlock email-based password recovery — much safer than relying on phone alone (your SIM can be lost, swapped or blocked).",
        "## Layer 3 — KYC (required for larger withdrawals)",
        "When your cumulative withdrawal crosses the platform threshold, JeetBuzz requests:",
        "- A government photo ID — NID (Bangladesh), CNIC (Pakistan) or Aadhaar/PAN (India).",
        "- A clear selfie holding the ID next to your face.",
        "- Proof of address (utility bill or bank statement, last 3 months) if asked.",
        "Upload sharp, glare-free photos — blurry uploads are the #1 reason KYC takes more than 24 hours.",
        "## How long does KYC take?",
        "Usually 2–24 hours during business hours. Weekends and holidays can push it to 48 hours. You can keep depositing and playing during review; only withdrawals are paused.",
        "## Common rejections",
        "- ID photo expired.",
        "- Name on the account doesn't match the ID.",
        "- Selfie doesn't clearly show your face AND the ID together.",
        "Fix the issue and re-upload — there's no penalty for resubmission.",
      ]}
      faqs={[
        { q: "Can I withdraw without KYC?", a: "Small withdrawals usually go through. Once you cross the platform's daily / cumulative threshold, KYC becomes mandatory." },
        { q: "Is my ID data safe?", a: "JeetBuzz operates under a Curaçao licence and stores KYC encrypted. Only compliance staff can view it. Don't send IDs via email — always upload through the in-account KYC panel." },
        { q: "I'm under 18 — what happens?", a: "You will fail KYC and the account will be closed. JeetBuzz, like every regulated operator, is 18+ only." },
      ]}
      related={siblings(SIGNUP_CLUSTER, "/verification")}
      articleHeadline="JeetBuzz Account Verification"
      articleDescription="Phone, email and KYC verification walkthrough for BD, PK and IN players."
      articlePath="/verification"
    />
  ),
});