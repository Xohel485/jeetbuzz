import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import { LOGIN_CLUSTER, siblings } from "@/lib/clusters";

export const Route = createFileRoute("/login-problems")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Login Problems — Fix Access Issues (2026) | GetJeetBuzz" },
      { name: "description", content: "JeetBuzz site not opening, OTP not arriving, login button greyed out — diagnose and fix the most common JeetBuzz login problems in BD, PK and IN." },
      { property: "og:title", content: "JeetBuzz Login Problems — Fix Access Issues" },
      { property: "og:description", content: "Common JeetBuzz login problems and step-by-step fixes for Bangladesh, Pakistan and India." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("loginInterface") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("loginInterface") },
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">Login Problems</span> — Fixes</>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">লগইন সমস্যা</span> — সমাধান</>,
        ur: <>JeetBuzz <span className="gold-text">لاگ ان مسائل</span> — حل</>,
        hi: <>JeetBuzz <span className="gold-text">लॉगिन समस्याएँ</span> — समाधान</>,
      }}
      subtitle="Most JeetBuzz login problems fall into five buckets. Find yours below and apply the fix — no app reinstall needed in most cases."
      subtitleByLocale={{
        bn: "জিতবাজের বেশিরভাগ লগইন সমস্যা ৫টি ভাগে পড়ে। নিজেরটা খুঁজে নিন — অ্যাপ রিইনস্টল প্রায়ই দরকার হয় না।",
        ur: "JeetBuzz کے زیادہ تر لاگ ان مسائل 5 اقسام میں آتے ہیں۔ اپنا مسئلہ ڈھونڈیں — عام طور پر ایپ دوبارہ انسٹال کرنے کی ضرورت نہیں۔",
        hi: "JeetBuzz की ज़्यादातर लॉगिन समस्याएँ 5 श्रेणियों में आती हैं। अपनी समस्या ढूँढें — ज़्यादातर बार ऐप दोबारा इंस्टॉल करने की ज़रूरत नहीं।",
      }}
      ctaIntent="login"
      ctaLabel="Try JeetBuzz Login"
      heroImage="loginInterface"
      body={[
        "## 1. Site won't open / 'this site can't be reached'",
        "This is almost always an ISP route block. Switch network (Wi-Fi to mobile data or vice versa) and reload. If still blocked, change phone DNS to 1.1.1.1 (Cloudflare) or 8.8.8.8 (Google).",
        "## 2. OTP not arriving",
        "Wait the full 60 seconds before tapping 'Resend' — duplicate OTPs invalidate each other. Check spam if you used email. For SMS, confirm your number has international SMS enabled.",
        "## 3. 'Invalid credentials' on the right password",
        "Caps Lock, mixed-up phone/email field, or a recent password reset that hasn't propagated. Use 'Forgot password' and set a new one — fastest fix.",
        "## 4. Login button greyed out",
        "Usually a stale browser cache. Hard-reload (Ctrl+Shift+R / pull-to-refresh) or clear site data for jeetbuzz.com.",
        "## 5. 2FA code rejected",
        "Your phone clock is drifting. Enable automatic time sync in phone settings, then request a fresh 6-digit code.",
        "> Still stuck? Contact JeetBuzz live support from the official site — they can unlock accounts that triggered automated fraud protection.",
      ]}
      faqs={[
        { q: "Why is JeetBuzz not opening on my Wi-Fi?", a: "Most home ISPs in BD/PK/IN selectively block iGaming domains. Switch to mobile data, change DNS to 1.1.1.1, or use the verified outbound link on this page." },
        { q: "How long does an OTP take?", a: "Usually under 30 seconds. If nothing arrives in 60 seconds, request once more — don't spam the resend button or you'll be rate-limited." },
        { q: "Can support reset my 2FA?", a: "Yes. Contact JeetBuzz live chat from the official site, verify identity (deposit history, last login device), and they can disable 2FA so you can re-enrol a new device." },
      ]}
      related={siblings(LOGIN_CLUSTER, "/login-problems")}
      articleHeadline="JeetBuzz Login Problems — Fix Access Issues"
      articleDescription="Diagnose and fix the most common JeetBuzz login problems in BD, PK and IN."
      articlePath="/login-problems"
    />
  ),
});