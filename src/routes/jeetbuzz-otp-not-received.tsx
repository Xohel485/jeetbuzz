import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { PROBLEMS_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-otp-not-received";
const TITLE = "JeetBuzz OTP Not Received 2026 — Every Cause & Fast Fix";
const DESC = "JeetBuzz OTP not arriving in 2026 — DND, SMS filter, wrong country code, carrier block, mistyped number and full support-escalation script that gets an OTP delivered.";

export const Route = createFileRoute("/jeetbuzz-otp-not-received")({
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
      title={<>JeetBuzz OTP <span className="gold-text">Not Received</span></>}
      subtitle="Fix the missing SMS in under two minutes — the six real reasons OTPs get blocked, the phone-side settings to change, and the support script if it's carrier-level."
      ctaIntent="login" ctaLabel="Try Login Again"
      breadcrumbs={[{ name: "Help", path: "/help" }, { name: "OTP Not Received", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## First 30 seconds — do this before anything else",
        "Nine times out of ten the OTP is sitting in your phone but hidden. Try these three checks in order:",
        "1. **Look inside the SMS app's Spam / Junk folder.** Android's Messages app auto-files unknown short-code senders here.",
        "2. **Turn Do Not Disturb off.** DND silences OTP alerts on most Android phones and every iPhone since iOS 15.",
        "3. **Wait 60 seconds, then request a fresh OTP.** Requesting a second OTP within 10 seconds is treated as a duplicate and neither arrives.",
        "If the OTP is still missing, work through the six real causes below.",
        "## The six real causes",
        "### 1. Wrong country code",
        "The most common mistake. Selecting +91 (India) when your number is +880 (Bangladesh) means the OTP is sent to a non-existent Indian number and disappears. Fix: on the phone-entry screen, confirm the flag/prefix matches your actual SIM.",
        "### 2. Mistyped digit",
        "One transposed digit is enough. Bangladeshi numbers are 10 digits after +880; Pakistani are 10 digits after +92; Indian are 10 after +91. Count them. Copy-paste from your Contacts app if you are unsure.",
        "### 3. Carrier-level short-code block",
        "Some carriers (especially secondary networks in PK/BD) filter international short-code SMS as spam. Symptom: no OTP arrives regardless of retries, but SMS from friends work fine. Fix: contact your carrier and ask them to whitelist international short-code SMS. Grameenphone, Robi, Jazz and Zong all have this setting under 'DND'.",
        "### 4. DND / TRAI-style consent (India specific)",
        "Indian TRAI regulations require explicit consent for transactional SMS. If you dialled *1909 to activate full DND, all short-code messages are blocked. Fix: dial *1909, choose 'partial DND' and specifically allow banking/transactional SMS.",
        "### 5. SIM inactive or roaming",
        "A SIM that has not received a call/SMS in 90 days may be marked inactive by the carrier. Roaming SIMs may also refuse international short-codes. Fix: make one outgoing call to activate the SIM; retry OTP from within your home country.",
        "### 6. Number never registered",
        "Trying to log in with a number that was never registered returns a generic 'OTP sent' message even though nothing is actually dispatched (a privacy protection, to avoid confirming which numbers hold accounts). Fix: register the number via [Sign Up](/jeetbuzz-sign-up) first.",
        "## Phone-side settings to change (Android)",
        "1. Open **Messages → three-dot menu → Settings → Spam protection** — ensure 'Enable spam protection' is ON so real senders aren't blocked, and periodically empty Spam.",
        "2. **Settings → Notifications → Do Not Disturb → Exceptions** — add Messages to always allow.",
        "3. **Settings → Apps → Messages → Notifications → All categories ON**.",
        "## Phone-side settings to change (iOS)",
        "1. **Settings → Focus → Do Not Disturb → OFF** (or add Messages to Allowed Apps).",
        "2. **Settings → Messages → Unknown & Spam → Filter Unknown Senders** — turn OFF while troubleshooting; re-enable later if you prefer.",
        "3. **Settings → Notifications → Messages → Allow Notifications ON**.",
        "## Voice-OTP fallback",
        "If SMS is genuinely blocked, request the voice-OTP option (usually a link labelled 'Call me with the code' on the OTP screen). The system dials your number and reads out the code. Voice calls are rarely filtered even when SMS is blocked.",
        "## Email fallback",
        "For account recovery flows (password reset, KYC updates), a code can be emailed instead. Check Inbox and Spam in your registered email. If nothing arrives within 5 minutes, the email may not match KYC — use [Password Reset](/password-reset) with your phone number.",
        "## Support-escalation script",
        "> *Hello. I am not receiving OTP SMS on my registered number [+COUNTRY CODE NUMBER]. I have already: (1) disabled DND, (2) checked the SMS spam folder, (3) requested a fresh OTP after 60 seconds, (4) verified the country code is correct. Please push an OTP manually from your side or enable voice-OTP for my account. Username: [USERNAME].*",
        "This tells the agent every self-help step you already tried, saving 10 minutes of back-and-forth.",
        "## When to change the registered number",
        "If your registered number is dead or you switched SIMs, request a number change from support. This forces a full KYC re-verification (fresh ID upload, live selfie) — expect 24–48 hours. Do not create a new account under your existing KYC: it will be flagged as multi-accounting.",
        "## Related help",
        "- [Login Problems](/login-problems) — companion troubleshooting.",
        "- [Password Reset](/password-reset) — the alternate recovery path.",
        "- [Account Verification](/jeetbuzz-account-verification) — KYC checklist for number changes.",
        "- [Login Security](/login-security) — enable 2FA once OTP is working.",
        "## Neutral disclosure",
        "GetJeetBuzz is an editorial affiliate. OTP delivery depends on your carrier, phone settings and the operator's SMS gateway — most fixes are on your side. Play within a fixed budget and use [self-exclusion](/how-to-delete-jeetbuzz-account) if it stops feeling optional.",
      ]}
      bodyByLocale={{
        bn: [
          "## প্রথম ৩০ সেকেন্ড",
          "১০-বারের ৯ বার OTP ফোনে আছে কিন্তু লুকানো। ৩টি চেক আগে করুন:",
          "১. **SMS অ্যাপের Spam/Junk ফোল্ডার দেখুন।** Android Messages অজানা short-code sender এখানে রাখে।",
          "২. **Do Not Disturb বন্ধ করুন।** DND OTP alert চুপ করে দেয়।",
          "৩. **৬০ সেকেন্ড অপেক্ষা করে নতুন OTP চান।** ১০ সেকেন্ডে দুটি request duplicate হিসেবে ধরা হয় — কেউই আসে না।",
          "এরপরও না এলে নিচের ৬ কারণ দেখুন।",
          "## ৬টি আসল কারণ",
          "### ১. ভুল কান্ট্রি কোড",
          "সবচেয়ে সাধারণ ভুল। বাংলাদেশ +৮৮০, পাকিস্তান +৯২, ভারত +৯১। ফ্ল্যাগ/prefix আপনার SIM-এর সঙ্গে মিলিয়ে নিন।",
          "### ২. একটা ডিজিট ভুল",
          "একটা সংখ্যা এদিক-ওদিক যথেষ্ট। BD ১০ ডিজিট, PK ১০ ডিজিট, IN ১০ ডিজিট (কান্ট্রি কোডের পর)। Contacts থেকে কপি-পেস্ট করুন।",
          "### ৩. Carrier short-code block",
          "কিছু ক্যারিয়ার আন্তর্জাতিক short-code SMS স্প্যাম হিসেবে ফিল্টার করে। উপসর্গ: বন্ধুদের SMS আসে কিন্তু OTP আসে না। ক্যারিয়ার (Grameenphone/Robi/Banglalink) কে ফোন করে whitelist করতে বলুন।",
          "### ৪. DND (India specific)",
          "*1909 dial করে full DND on থাকলে সব short-code ব্লক। *1909-এ 'partial DND' নির্বাচন করে banking/transactional SMS allow করুন।",
          "### ৫. SIM inactive বা roaming",
          "৯০ দিন কল/SMS না হলে SIM inactive হতে পারে। roaming-এ থাকলেও international short-code refuse হয়। একটা outgoing call করে SIM active করুন।",
          "### ৬. নম্বর কখনো রেজিস্টার হয়নি",
          "অনিবন্ধিত নম্বরে লগইন try করলে privacy-এর জন্য generic 'OTP sent' বার্তা আসে, আসলে কিছুই পাঠানো হয় না। [Sign Up](/jeetbuzz-sign-up) করুন।",
          "## Android সেটিংস",
          "১. **Messages → Settings → Spam protection** — Spam ফোল্ডার নিয়মিত চেক করুন।",
          "২. **Settings → Notifications → Do Not Disturb → Exceptions** — Messages allow।",
          "৩. **Settings → Apps → Messages → Notifications → All categories ON**।",
          "## iOS সেটিংস",
          "১. **Settings → Focus → Do Not Disturb → OFF**।",
          "২. **Settings → Messages → Unknown & Spam** — troubleshoot-এর সময় বন্ধ রাখুন।",
          "৩. **Settings → Notifications → Messages → Allow Notifications ON**।",
          "## Voice-OTP বিকল্প",
          "SMS ব্লক থাকলে 'Call me with the code' চাপুন। সিস্টেম আপনাকে কল করে কোড পড়ে শোনাবে। Voice call SMS-এর তুলনায় প্রায় সবসময় কাজ করে।",
          "## Email বিকল্প",
          "পাসওয়ার্ড রিসেট/KYC আপডেটের জন্য ইমেইলে কোড পাঠানো যায়। Inbox ও Spam দুটোই দেখুন। ৫ মিনিটেও না এলে ইমেইল KYC-র সঙ্গে match হয়তো না।",
          "## সাপোর্টে যা লিখবেন",
          "> *Hello. I am not receiving OTP SMS on [+COUNTRY CODE NUMBER]. Already: (1) DND off, (2) SMS spam folder checked, (3) fresh OTP after 60s, (4) country code verified. Please push OTP manually or enable voice-OTP. Username: [USERNAME].*",
          "## নম্বর বদলাতে হলে",
          "নম্বর dead বা SIM বদলেছেন? সাপোর্ট থেকে নম্বর পরিবর্তন request করুন — full KYC re-verification লাগবে, ২৪–৪৮ ঘণ্টা। নতুন অ্যাকাউন্ট খুলবেন না — multi-accounting হিসেবে ফ্ল্যাগ হবে।",
          "## সম্পর্কিত সাহায্য",
          "- [Login Problems](/login-problems)",
          "- [Password Reset](/password-reset)",
          "- [Account Verification](/jeetbuzz-account-verification)",
          "- [Login Security](/login-security)",
          "## নিরপেক্ষ ঘোষণা",
          "GetJeetBuzz সম্পাদকীয় অ্যাফিলিয়েট। OTP ডেলিভারি ক্যারিয়ার, ফোন সেটিং ও অপারেটর গেটওয়ের ওপর নির্ভরশীল।",
        ],
      }}
      related={siblings(PROBLEMS_CLUSTER, PATH)}
      faqs={[
        { q: "How long should I wait for a JeetBuzz OTP?", a: "SMS OTPs arrive within 60 seconds under normal carrier conditions. Beyond 90 seconds, request a fresh OTP — don't spam the resend button, since duplicate requests within 10 seconds are dropped." },
        { q: "Why does the OTP arrive on old logins but not today?", a: "Usually a temporary carrier gateway issue or DND turning on automatically at night (Focus Mode schedules). Check DND status, then try voice-OTP." },
        { q: "Can I switch off OTP for logins?", a: "No — OTP is mandatory the first time you log in from a new device. Once you enable 2FA, subsequent logins on the same device may skip the SMS step depending on your security settings." },
        { q: "Is it safe to share an OTP with support?", a: "No. Real support never asks for your OTP. Anyone asking you to 'confirm your OTP' by voice, chat or SMS is a scammer impersonating support. Terminate the conversation and change your password." },
        { q: "What if the OTP arrives but says 'Expired'?", a: "OTPs expire in 60–120 seconds. Enter it immediately, or if you missed the window, request a fresh code and enter it faster next time." },
        { q: "I changed my SIM but kept the number — will OTP still work?", a: "Yes. OTP is tied to the phone number, not the SIM chip. Activate the new SIM (make one outgoing call), then retry." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "OTP-এর জন্য কত সময় অপেক্ষা করব?", a: "স্বাভাবিক অবস্থায় ৬০ সেকেন্ডের মধ্যে আসে। ৯০ সেকেন্ড পার হলে নতুন OTP চান — কিন্তু বারবার resend চাপবেন না।" },
          { q: "আগে আসত, আজ কেন আসছে না?", a: "সাধারণত ক্যারিয়ার গেটওয়ে সমস্যা বা রাতের Focus Mode স্বয়ংক্রিয়ভাবে DND চালু করেছে। DND চেক করে voice-OTP try করুন।" },
          { q: "OTP বন্ধ করা যায়?", a: "না — নতুন ডিভাইস থেকে প্রথম লগইনে OTP বাধ্যতামূলক। 2FA চালু থাকলে পরের লগইন SMS ধাপ skip হতে পারে।" },
          { q: "সাপোর্টকে OTP দেওয়া নিরাপদ?", a: "না। আসল সাপোর্ট কখনো OTP চায় না। যে চায় সে স্ক্যামার — কথা বন্ধ করে পাসওয়ার্ড বদলান।" },
          { q: "OTP আসে কিন্তু 'Expired' দেখায়?", a: "OTP ৬০–১২০ সেকেন্ডে expire হয়। সঙ্গে সঙ্গে বসান বা নতুন কোড নিন।" },
          { q: "SIM বদলেছি, নম্বর একই — OTP আসবে?", a: "হ্যাঁ। OTP নম্বরের সঙ্গে যুক্ত, chip-এর সঙ্গে নয়। নতুন SIM active করে (একটা outgoing call) try করুন।" },
        ],
      }}
    />
  ),
});