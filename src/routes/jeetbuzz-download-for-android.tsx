import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { APP_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-download-for-android";
const TITLE = "JeetBuzz Download for Android 2026 — Safe APK Install Guide";
const DESC = "Download JeetBuzz for Android in 2026 — safe APK install steps, permission checks, avoiding fake mirrors and what to do when the app will not open.";

export const Route = createFileRoute("/jeetbuzz-download-for-android")({
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
      eyebrow="App"
      title={<>JeetBuzz Download <span className="gold-text">for Android</span></>}
      titleByLocale={{ bn: <>জিতবাজ <span className="gold-text">অ্যান্ড্রয়েড ডাউনলোড</span></> }}
      subtitle="Safe APK install for Android, permission-by-permission — plus fake mirror detection so you download the real JeetBuzz app, not a repackaged clone."
      subtitleByLocale={{ bn: "অ্যান্ড্রয়েডে নিরাপদ APK ইনস্টল, প্রতিটি পারমিশন ব্যাখ্যা — এবং নকল মিরর চিনে আসল জিতবাজ অ্যাপ ডাউনলোড।" }}
      ctaIntent="signup" ctaLabel="Download JeetBuzz APK"
      breadcrumbs={[{ name: "App", path: "/download" }, { name: "Download for Android", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Why not Play Store",
        "Google Play does not list real-money betting apps in Bangladesh, Pakistan or India, so the official Android build ships as a signed APK from the JeetBuzz site. This is normal — every regional operator (Baji, Betwinner, 1xBet) distributes the same way.",
        "## Install in five steps",
        "1. Open the [official JeetBuzz download page](/download) in Chrome. Never install from a link forwarded on WhatsApp / Telegram unless it points to the same domain.",
        "2. Tap **Download APK**. The file lands in **Downloads**.",
        "3. On the security prompt, tap **Settings → Allow from this source** for Chrome only. Turn the permission off again once install is done.",
        "4. Open the downloaded APK and tap **Install**. Total size is well under 40 MB.",
        "5. Launch, log in with your existing credentials or [register a new account](/registration-guide).",
        "## Permissions the real app asks for",
        "- **Storage** — cache game assets so live cricket loads without re-downloading.",
        "- **Notifications** — deposit confirmations, cash-out alerts. Optional.",
        "- **Camera** — only when you upload KYC documents. Optional until KYC.",
        "The real app **does not** ask for SMS reading, contacts, call log or accessibility. If it does, you have a repackaged clone — uninstall and re-download from the official page.",
        "## Detecting fake mirrors",
        "- Domain is anything other than the official JeetBuzz brand domains.",
        "- APK size is dramatically different from the official page.",
        "- Signing certificate does not match (advanced users: check with APK Analyzer).",
        "- App requests SMS or contacts permission on first launch.",
        "## Common install issues",
        "- **App not installed** — you have an older version. Uninstall first, then install the fresh APK.",
        "- **Parse error** — download interrupted; delete and re-download.",
        "- **Cannot open app** — clear cache from Android **Settings → Apps → JeetBuzz → Storage**.",
        "See the full [App Update guide](/jeetbuzz-app-update) if the update prompt keeps appearing.",
      ]}
      bodyByLocale={{
        bn: [
          "## প্লে স্টোরে কেন নেই",
          "গুগল প্লে বাংলাদেশ, পাকিস্তান বা ভারতে রিয়েল-মানি বেটিং অ্যাপ তালিকাভুক্ত করে না, তাই অফিশিয়াল অ্যান্ড্রয়েড বিল্ড JeetBuzz সাইট থেকে সাইনড APK হিসেবে আসে। এটি স্বাভাবিক — প্রতিটি আঞ্চলিক অপারেটর (Baji, Betwinner, 1xBet) একইভাবে বিতরণ করে।",
          "## পাঁচ ধাপে ইনস্টল",
          "১. Chrome-এ [অফিশিয়াল জিতবাজ ডাউনলোড পেজ](/download) খুলুন। WhatsApp/Telegram-এ ফরওয়ার্ড করা লিংক থেকে কখনো ইনস্টল করবেন না যতক্ষণ না সেটি একই ডোমেইনে যায়।",
          "২. **Download APK**-এ ট্যাপ করুন। ফাইলটি **Downloads**-এ যাবে।",
          "৩. সিকিউরিটি প্রম্পটে **Settings → Allow from this source** শুধু Chrome-এর জন্য চালু করুন। ইনস্টল হয়ে গেলে অপশনটি আবার বন্ধ করুন।",
          "৪. ডাউনলোড হওয়া APK খুলুন এবং **Install** ট্যাপ করুন। মোট সাইজ ৪০ MB-এর অনেক নিচে।",
          "৫. চালু করুন, বিদ্যমান তথ্য দিয়ে লগইন করুন বা [নতুন অ্যাকাউন্ট রেজিস্টার করুন](/registration-guide)।",
          "## আসল অ্যাপ যেসব পারমিশন চায়",
          "- **Storage** — গেম অ্যাসেট ক্যাশ করে যাতে লাইভ ক্রিকেট বারবার লোড না হয়।",
          "- **Notifications** — ডিপোজিট নিশ্চিতকরণ, ক্যাশআউট অ্যালার্ট। ঐচ্ছিক।",
          "- **Camera** — শুধু KYC ডকুমেন্ট আপলোডের সময়। KYC-এর আগে ঐচ্ছিক।",
          "আসল অ্যাপ **কখনোই** SMS, কনট্যাক্ট, কল লগ বা অ্যাক্সেসিবিলিটি পারমিশন চায় না। যদি চায়, তবে সেটি রিপ্যাকেজড ক্লোন — আনইনস্টল করুন এবং অফিশিয়াল পেজ থেকে পুনরায় ডাউনলোড করুন।",
          "## নকল মিরর চেনা",
          "- ডোমেইন অফিশিয়াল জিতবাজ ব্র্যান্ড ডোমেইনের বাইরে।",
          "- APK সাইজ অফিশিয়াল পেজের থেকে অনেক আলাদা।",
          "- সাইনিং সার্টিফিকেট মিলে না (উন্নত ব্যবহারকারী: APK Analyzer দিয়ে চেক করুন)।",
          "- প্রথম চালুতে SMS বা কনট্যাক্ট পারমিশন চায়।",
          "## সাধারণ ইনস্টল সমস্যা",
          "- **App not installed** — পুরনো ভার্সন আছে। আগে আনইনস্টল করুন, তারপর নতুন APK ইনস্টল করুন।",
          "- **Parse error** — ডাউনলোড বাধাগ্রস্ত হয়েছে; ডিলিট করে পুনরায় ডাউনলোড করুন।",
          "- **Cannot open app** — অ্যান্ড্রয়েডের **Settings → Apps → JeetBuzz → Storage** থেকে ক্যাশ ক্লিয়ার করুন।",
          "আপডেট প্রম্পট বারবার এলে সম্পূর্ণ [App Update গাইড](/jeetbuzz-app-update) দেখুন।",
        ],
      }}
      related={siblings(APP_CLUSTER, PATH)}
      faqs={[
        { q: "Is the JeetBuzz Android app safe?", a: "Yes when downloaded from the official domain. Real-money betting apps are not on Play Store for BD/PK/IN — signed APK distribution is standard for the category." },
        { q: "How big is the JeetBuzz APK?", a: "Under 40 MB. If the file you downloaded is dramatically larger or smaller, you have the wrong build — delete and re-download from the official page." },
        { q: "Do I need to uninstall the old app before updating?", a: "For most updates no — install over the top. If you hit \"App not installed\" you have a signature mismatch: uninstall first, then install the fresh APK. See [App Update](/jeetbuzz-app-update)." },
        { q: "Which Android versions are supported?", a: "Android 7 and above. On older phones the app installs but some live-casino games skip frames." },
        { q: "Does the app work on Xiaomi / MIUI with tighter security?", a: "Yes. On MIUI you may need to disable 'MIUI optimization' or add JeetBuzz to auto-start to keep the app alive in the background." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "জিতবাজ অ্যান্ড্রয়েড অ্যাপ কি নিরাপদ?", a: "অফিশিয়াল ডোমেইন থেকে ডাউনলোড করলে হ্যাঁ। বিডি/পিকে/ইন-এর জন্য রিয়েল-মানি বেটিং অ্যাপ প্লে স্টোরে নেই — সাইনড APK বিতরণ ক্যাটাগরির স্বাভাবিক নিয়ম।" },
          { q: "জিতবাজ APK সাইজ কত?", a: "৪০ MB-এর নিচে। ফাইলটি অনেক বড় বা ছোট হলে আপনি ভুল বিল্ড পেয়েছেন — ডিলিট করে অফিশিয়াল পেজ থেকে পুনরায় ডাউনলোড করুন।" },
          { q: "আপডেটের আগে পুরনো অ্যাপ আনইনস্টল করতে হবে?", a: "বেশিরভাগ আপডেটের জন্য না — উপরে ইনস্টল করুন। \"App not installed\" এলে সিগনেচার মিসম্যাচ — আগে আনইনস্টল করে নতুন APK ইনস্টল করুন।" },
          { q: "কোন অ্যান্ড্রয়েড ভার্সন সাপোর্টেড?", a: "অ্যান্ড্রয়েড ৭ ও তার উপর। পুরনো ফোনে অ্যাপ চলে কিন্তু কিছু লাইভ-ক্যাসিনো গেমে ফ্রেম ড্রপ হতে পারে।" },
          { q: "Xiaomi / MIUI-এ কাজ করে?", a: "হ্যাঁ। MIUI-তে 'MIUI optimization' বন্ধ করতে হতে পারে অথবা JeetBuzz-কে অটো-স্টার্টে যোগ করতে হতে পারে যাতে ব্যাকগ্রাউন্ডে সচল থাকে।" },
        ],
      }}
    />
  ),
});