import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import { LOGIN_CLUSTER, siblings } from "@/lib/clusters";

export const Route = createFileRoute("/password-reset")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Password Reset — Step by Step (2026) | GetJeetBuzz" },
      { name: "description", content: "Reset your JeetBuzz password safely — phone OTP, email link, common errors and what to do if recovery fails. BD, PK and IN." },
      { property: "og:title", content: "JeetBuzz Password Reset — Step by Step" },
      { property: "og:description", content: "Step-by-step JeetBuzz password recovery for BD, PK and IN players." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("loginInterface") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("loginInterface") },
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">Password Reset</span></>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">পাসওয়ার্ড রিসেট</span></>,
        ur: <>JeetBuzz <span className="gold-text">پاس ورڈ ری سیٹ</span></>,
        hi: <>JeetBuzz <span className="gold-text">पासवर्ड रीसेट</span></>,
      }}
      subtitle="Reset your JeetBuzz password in under 2 minutes. Below we cover phone-OTP recovery, email reset link, and what to do when both fail."
      subtitleByLocale={{
        bn: "২ মিনিটের কম সময়ে জিতবাজ পাসওয়ার্ড রিসেট করুন। ফোন OTP, ইমেইল লিংক এবং দুইটাই কাজ না করলে কী করবেন।",
        ur: "2 منٹ سے کم میں JeetBuzz پاس ورڈ ری سیٹ کریں۔ فون OTP، ای میل لنک اور دونوں ناکام ہونے پر کیا کریں۔",
        hi: "2 मिनट से कम में JeetBuzz पासवर्ड रीसेट करें। फ़ोन OTP, ईमेल लिंक और दोनों फेल होने पर क्या करें।",
      }}
      ctaIntent="login"
      ctaLabel="Open JeetBuzz Login"
      heroImage="loginInterface"
      body={[
        "## Reset by phone (fastest)",
        "1. Open the JeetBuzz login page.",
        "2. Tap 'Forgot password'.",
        "3. Enter the phone number registered on the account.",
        "4. Wait for the 6-digit OTP — usually under 30 seconds.",
        "5. Enter the OTP, set a new password (12+ characters, mix of letters/numbers/symbols).",
        "## Reset by email",
        "Same flow, but you'll get a reset link instead of an OTP. The link is single-use and expires in 30 minutes. If you don't see it, check spam and promotions.",
        "## What if recovery fails?",
        "- Your registered phone or email no longer works → contact JeetBuzz live chat from the official site. They will verify your identity with deposit history and last successful login.",
        "- OTP keeps failing → confirm your phone time is auto-set; manual clocks drift and break OTP validation.",
        "- Reset link says 'expired' on first click → your email provider 'previewed' the link before you. Request a fresh one and click within 30 minutes.",
        "## After you reset",
        "Log in once on the official site, then enable 2FA from account settings. A reset doesn't enrol 2FA automatically.",
      ]}
      faqs={[
        { q: "Will resetting my password log me out of all devices?", a: "Yes. Active sessions on other devices are killed when the password changes — sign in again from each device." },
        { q: "Can I use the same password as before?", a: "JeetBuzz rejects the last few passwords for security. Pick something genuinely new." },
        { q: "I no longer have access to my phone or email. What now?", a: "Open live chat on the official site with your account ID and recent deposit details. Support can switch your recovery contact after manual verification." },
      ]}
      related={siblings(LOGIN_CLUSTER, "/password-reset")}
      articleHeadline="JeetBuzz Password Reset"
      articleDescription="Reset your JeetBuzz password safely via phone OTP or email link."
      articlePath="/password-reset"
    />
  ),
});