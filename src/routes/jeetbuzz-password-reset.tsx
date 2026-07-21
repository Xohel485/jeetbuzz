import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { PROBLEMS_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-password-reset";
const TITLE = "JeetBuzz Password Reset 2026 — Recover Access in 3 Minutes";
const DESC = "JeetBuzz password reset for 2026 — recover via phone OTP or email link, what to do when both channels fail, and how to set a password that never gets brute-forced.";

export const Route = createFileRoute("/jeetbuzz-password-reset")({
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
      eyebrow="Login"
      title={<>JeetBuzz <span className="gold-text">Password Reset</span></>}
      subtitle="Reset via phone OTP or email link in three minutes. What to do if OTP won't arrive, the email lands in Spam, or the reset page throws an error."
      ctaIntent="login" ctaLabel="Open Reset Page"
      breadcrumbs={[{ name: "Help", path: "/help" }, { name: "Password Reset", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Two reset channels — pick the one you can access",
        "JeetBuzz supports **phone OTP** and **email link** reset. Use whichever channel you still control today. Both work independently, so if one is blocked (SIM lost, email hacked) the other still recovers the account.",
        "## Phone OTP reset — the 5-step flow",
        "1. On the login page, tap **Forgot Password**.",
        "2. Select **Phone**.",
        "3. Enter your registered phone number and receive the OTP.",
        "4. Enter the 6-digit code within the 60-second window.",
        "5. Set a new password. Confirm and log in.",
        "If the OTP doesn't arrive, work through [OTP Not Received](/jeetbuzz-otp-not-received) first — that fixes 90% of cases without touching support.",
        "## Email link reset — the 5-step flow",
        "1. On the login page, tap **Forgot Password**.",
        "2. Select **Email**.",
        "3. Enter the email address you registered with.",
        "4. Open the inbox — check Spam / Promotions if it doesn't arrive in 60 seconds.",
        "5. Click the reset link (valid for 30 minutes) and set a new password.",
        "The email arrives from a JeetBuzz sender address. Never click a reset link forwarded from Telegram or WhatsApp — always request one fresh from the login page.",
        "## Building a password that actually protects you",
        "The most common cause of account takeovers is a reused password leaked from another site. A JeetBuzz password should be:",
        "- **At least 14 characters** — length matters more than special characters.",
        "- **Unique to this site** — never reuse the password from Facebook, Gmail, or a delivery app.",
        "- **Not a dictionary word or date** — 'ILoveCricket2024!' is trivial to guess; the year and 'cricket' are in every wordlist.",
        "- **Stored in a password manager** — Bitwarden, 1Password or Apple Keychain generate and remember them for you.",
        "Once set, enable 2FA immediately — see [Login Security](/login-security). A stolen password alone cannot unlock a 2FA account.",
        "## When both OTP and email fail",
        "If your phone number and email are both inaccessible, only support can recover the account. Prepare:",
        "1. **The original KYC document** — same ID you uploaded at signup.",
        "2. **A live selfie holding the ID next to your face.**",
        "3. **Any transaction reference** from a past deposit or withdrawal (proves you own the account).",
        "4. **Approximate account creation date.**",
        "Contact live chat, attach everything, and expect 24–48 hours for identity re-verification. Support will help — but they cannot skip the verification step, so provide the full evidence pack up front.",
        "## Error messages and what they mean",
        "- **'Reset link expired'** — the 30-minute window passed. Request a fresh link.",
        "- **'Reset link already used'** — someone (probably you) already clicked it. Log in with the new password.",
        "- **'Account not found'** — either wrong number/email, or the account was permanently deleted. Support can confirm status.",
        "- **'Too many attempts'** — five failed resets in an hour triggers a temporary block. Wait 60 minutes.",
        "- **'Password does not meet requirements'** — the new password needs 8+ characters, at least one letter and one number. 14+ characters is our recommendation.",
        "## After the reset",
        "1. Log in with the new password.",
        "2. Immediately check **Account → Activity log** for logins you don't recognise.",
        "3. Enable 2FA if it isn't already on.",
        "4. Remove any saved sessions on other devices (Account → Security → Sign out other devices).",
        "5. Update your saved password in your browser or password manager.",
        "## Common mistakes to avoid",
        "- **Setting a password identical to your old one.** Blocked by the server for security.",
        "- **Using autofill from another site.** Verify autofill picked up the JeetBuzz entry, not a look-alike.",
        "- **Clicking a 'password reset' link you didn't request.** That's a phishing attempt — ignore it. If you didn't hit Forgot Password, do not click.",
        "## Related help",
        "- [OTP Not Received](/jeetbuzz-otp-not-received) — the top blocker to a phone reset.",
        "- [Login Problems](/login-problems) — broader troubleshooting.",
        "- [Login Security](/login-security) — enable 2FA today.",
        "- [Account Locked](/jeetbuzz-account-locked) — separate recovery flow if the account was locked after multiple failures.",
        "## Neutral disclosure",
        "GetJeetBuzz is an editorial affiliate. Password recovery is designed to be self-service — the account is yours and the tools should always be available to you. If gambling is causing stress, use [self-exclusion](/how-to-delete-jeetbuzz-account) rather than resetting to keep playing.",
      ]}
      bodyByLocale={{
        bn: [
          "## দুটি reset চ্যানেল — যেটা আপনার হাতে আছে সেটা ব্যবহার করুন",
          "JeetBuzz **phone OTP** এবং **email link** — দুটি reset চ্যানেল সমর্থন করে। যেটা আজ আপনার নিয়ন্ত্রণে আছে সেটাই ব্যবহার করুন। একটি ব্লক থাকলেও অন্যটি অ্যাকাউন্ট recover করতে পারে।",
          "## Phone OTP reset — ৫ ধাপ",
          "১. লগইন পেজে **Forgot Password** চাপুন।",
          "২. **Phone** নির্বাচন।",
          "৩. রেজিস্টার্ড নম্বর দিন, OTP নিন।",
          "৪. ৬-অঙ্কের কোড ৬০ সেকেন্ডে বসান।",
          "৫. নতুন পাসওয়ার্ড দিন, confirm করে লগইন।",
          "OTP না এলে আগে [OTP Not Received](/jeetbuzz-otp-not-received) দেখুন — ৯০% ক্ষেত্রেই সাপোর্ট ছাড়া মেটে।",
          "## Email link reset — ৫ ধাপ",
          "১. লগইন পেজে **Forgot Password**।",
          "২. **Email** নির্বাচন।",
          "৩. রেজিস্টার্ড ইমেইল দিন।",
          "৪. Inbox খুলুন — ৬০ সেকেন্ডে না এলে Spam/Promotions দেখুন।",
          "৫. Reset link (৩০ মিনিট valid) ক্লিক করে নতুন পাসওয়ার্ড দিন।",
          "ইমেইল JeetBuzz sender থেকে আসে। Telegram/WhatsApp-এ forward হওয়া reset link কখনো ক্লিক করবেন না — লগইন পেজ থেকে ফ্রেশ চাইুন।",
          "## যে পাসওয়ার্ড আসলেই সুরক্ষা দেয়",
          "Account takeover-এর প্রধান কারণ অন্য সাইট থেকে leaked reused password। JeetBuzz পাসওয়ার্ড হতে হবে:",
          "- **কমপক্ষে ১৪ ক্যারেক্টার** — length special character-এর চেয়ে বেশি গুরুত্বপূর্ণ।",
          "- **শুধু এই সাইটের জন্য ইউনিক** — Facebook, Gmail, delivery app-এর পাসওয়ার্ড কখনো reuse নয়।",
          "- **Dictionary word বা তারিখ নয়** — 'ILoveCricket2024!' সহজে guess হয়।",
          "- **Password manager-এ সংরক্ষণ** — Bitwarden, 1Password, Apple Keychain।",
          "Set করার পর সঙ্গে সঙ্গে 2FA চালু করুন — [Login Security](/login-security)। 2FA-সুরক্ষিত অ্যাকাউন্টে চুরি হওয়া পাসওয়ার্ডে ঢোকা যায় না।",
          "## OTP ও ইমেইল দুটোই fail করলে",
          "ফোন ও ইমেইল দুটোই inaccessible হলে শুধু সাপোর্ট recover করতে পারবে। প্রস্তুত রাখুন:",
          "১. **মূল KYC document** — সাইনআপে যেটা upload করেছিলেন।",
          "২. **লাইভ সেলফি** — ID পাশে ধরে।",
          "৩. **পুরনো deposit/withdrawal reference** — মালিকানার প্রমাণ।",
          "৪. **আনুমানিক অ্যাকাউন্ট তৈরির তারিখ।**",
          "লাইভ চ্যাটে সব attach করুন, ২৪–৪৮ ঘণ্টার re-verification প্রত্যাশা করুন।",
          "## Error message-এর অর্থ",
          "- **'Reset link expired'** — ৩০ মিনিট পেরিয়েছে। ফ্রেশ link নিন।",
          "- **'Reset link already used'** — কেউ (সম্ভবত আপনি) ইতিমধ্যে ক্লিক করেছে। নতুন পাসওয়ার্ডে লগইন করুন।",
          "- **'Account not found'** — ভুল নম্বর/ইমেইল, বা অ্যাকাউন্ট স্থায়ীভাবে deleted।",
          "- **'Too many attempts'** — ১ ঘণ্টায় ৫টি failed reset temporary block ট্রিগার করে। ৬০ মিনিট অপেক্ষা করুন।",
          "- **'Password does not meet requirements'** — নতুন পাসওয়ার্ডে ৮+ ক্যারেক্টার, ১টি অক্ষর, ১টি সংখ্যা লাগবে।",
          "## Reset-এর পর",
          "১. নতুন পাসওয়ার্ডে লগইন।",
          "২. সঙ্গে সঙ্গে **Account → Activity log** দেখুন — অচেনা লগইন আছে কিনা।",
          "৩. 2FA চালু করুন।",
          "৪. অন্য ডিভাইসের saved sessions মুছুন (Account → Security → Sign out other devices)।",
          "৫. Browser/password manager-এ পাসওয়ার্ড আপডেট।",
          "## যা এড়াবেন",
          "- **পুরনো পাসওয়ার্ডের মতোই নতুন পাসওয়ার্ড।** Security-র জন্য server block করে।",
          "- **অন্য সাইটের autofill।** JeetBuzz-এর entry পিক করেছে কিনা যাচাই করুন।",
          "- **যে reset link আপনি চাননি সেটা ক্লিক।** ওটা phishing — ignore করুন।",
          "## সম্পর্কিত সাহায্য",
          "- [OTP Not Received](/jeetbuzz-otp-not-received)",
          "- [Login Problems](/login-problems)",
          "- [Login Security](/login-security)",
          "- [Account Locked](/jeetbuzz-account-locked)",
          "## নিরপেক্ষ ঘোষণা",
          "GetJeetBuzz সম্পাদকীয় অ্যাফিলিয়েট। Password recovery self-service — অ্যাকাউন্ট আপনার, tools সবসময় থাকা উচিত। জুয়া চাপ সৃষ্টি করলে reset করে খেলা চালিয়ে না গিয়ে [self-exclusion](/how-to-delete-jeetbuzz-account) নিন।",
        ],
      }}
      related={siblings(PROBLEMS_CLUSTER, PATH)}
      faqs={[
        { q: "How long does the JeetBuzz reset link stay valid?", a: "30 minutes from the moment it's emailed. Beyond that, request a fresh one — the old link will fail with 'Reset link expired'." },
        { q: "Can I use the same password again?", a: "No. The server rejects a new password identical to your previous one. Set something genuinely different — ideally generated by a password manager." },
        { q: "What if I don't remember the phone number or email I used?", a: "Contact support with your KYC ID, a live selfie holding it, and any past transaction reference. This is a formal identity check and takes 24–48 hours." },
        { q: "Is there a 'security question' fallback?", a: "No. JeetBuzz uses phone OTP and email link only — security questions are considered insecure by modern account-recovery standards." },
        { q: "Does the reset log me out of other devices?", a: "Yes. All active sessions are terminated on password change. You'll need to log in again on every device." },
        { q: "How do I know a reset email is genuine?", a: "It comes from a JeetBuzz sender address and contains a link back to the official domain. If either doesn't match, it's phishing — delete it and request a fresh link from the login page yourself." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "Reset link কত সময় valid?", a: "ইমেইলের ৩০ মিনিট পর্যন্ত। পরে 'Reset link expired' error দেখাবে — ফ্রেশ চাইুন।" },
          { q: "একই পাসওয়ার্ড আবার ব্যবহার?", a: "না। Server পুরনো পাসওয়ার্ডের অনুরূপ reject করে। Password manager দিয়ে ভিন্ন কিছু generate করুন।" },
          { q: "নম্বর/ইমেইল কোনটাই মনে নেই?", a: "KYC ID, লাইভ সেলফি (ID পাশে), পুরনো transaction reference সহ সাপোর্টকে জানান। ২৪–৪৮ ঘণ্টার formal identity check।" },
          { q: "Security question fallback আছে?", a: "না। শুধু phone OTP ও email link — security question আধুনিক মানদণ্ডে insecure।" },
          { q: "Reset-এ অন্য ডিভাইস থেকে logout হয়?", a: "হ্যাঁ। সব active session terminate হয়। প্রতিটি ডিভাইসে আবার লগইন করতে হবে।" },
          { q: "Reset email আসল কিনা বুঝব কীভাবে?", a: "JeetBuzz sender থেকে আসবে, link অফিসিয়াল ডোমেইনে যাবে। না মিললে phishing — মুছে দিন, লগইন পেজ থেকে নিজে ফ্রেশ চাইুন।" },
        ],
      }}
    />
  ),
});