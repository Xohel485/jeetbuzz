import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { APP_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-apk-download";
const TITLE = "JeetBuzz APK Download 2026 — Latest Version, Safe Install & Update";
const DESC = "JeetBuzz APK download for 2026 — latest version, safe Android install with permission checks, update path and how to spot fake mirror APKs.";

export const Route = createFileRoute("/jeetbuzz-apk-download")({
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
      title={<>JeetBuzz <span className="gold-text">APK Download</span></>}
      subtitle="Latest JeetBuzz Android APK — where to get it, how to install safely, the four permissions that matter, and how to keep the app updated."
      ctaIntent="signup" ctaLabel="Get Latest APK"
      breadcrumbs={[{ name: "App", path: "/download" }, { name: "APK Download", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Why the APK is not on Google Play",
        "Google Play blocks real-money gambling apps in most jurisdictions, so JeetBuzz distributes its Android build directly as an **APK**. That is normal for licensed operators in South Asia — but it is also the reason fake mirror APKs exist. The safest download source is the official site itself; every third-party APK aggregator is a risk.",
        "## Where to get the real APK",
        "1. Open the official site (cross-check via [facebook.com/GetJeetBuzz](https://facebook.com/GetJeetBuzz)).",
        "2. Tap **Download App** or scroll to the app section.",
        "3. The file downloads directly from the operator's servers.",
        "Never install an APK from a WhatsApp/Telegram forward, an ad, a random blog, or an APK mirror site. Fake APKs mimic the icon and splash screen but bundle spyware or clipboard hijackers that swap deposit addresses on the fly.",
        "## Install in five steps",
        "1. Download the APK from the official site.",
        "2. When prompted, allow **Install unknown apps** for your browser (Settings → Apps → Chrome → Install unknown apps).",
        "3. Open the downloaded file and tap **Install**.",
        "4. Launch the app and log in.",
        "5. Turn off **Install unknown apps** again for that browser — it is a permission you only need for one install.",
        "## The four permissions that matter",
        "The genuine JeetBuzz APK asks for:",
        "- **Internet** — obvious, needed to load the site.",
        "- **Storage** — to cache assets and store your session.",
        "- **Notifications** — for match alerts and bonus reminders (optional; deny if you prefer).",
        "- **Camera** (only when opening KYC) — to photograph your ID.",
        "If an APK asks for **SMS**, **Contacts**, **Accessibility Services** or **Device Admin**, it is not the official app. Uninstall immediately and change your password from a clean device.",
        "## Keeping the APK updated",
        "The app checks for updates on launch and prompts when a new build is available. **Always** update — old builds silently fail on newer URLs and are the top reason for 'app not opening' complaints.",
        "If auto-update fails, open the official site in a browser and download the fresh APK — installing over the existing app preserves your login. Full walkthrough: [App Update](/jeetbuzz-app-update).",
        "## APK vs iOS",
        "iPhone / iPad users cannot install an APK. Follow the [iOS Web App Guide](/ios-app-guide) instead — Safari's Add to Home Screen creates a full-screen web app that behaves like a native app, without needing the App Store.",
        "## Troubleshooting quick reference",
        "- **App not installed** — free up storage, delete the old version, re-install fresh.",
        "- **Parse error** — download failed midway. Delete the APK and download again on a stable connection.",
        "- **App crashes on launch** — clear app cache (Settings → Apps → JeetBuzz → Storage → Clear Cache) before uninstalling. Full checklist: [App Not Opening](/jeetbuzz-app-not-opening).",
        "- **Play Protect warning** — expected because Google flags all unrecognised gambling APKs. Tap **Install Anyway** only if you downloaded from the official site.",
        "## Neutral disclosure",
        "GetJeetBuzz is an editorial affiliate. The APK is distributed by the operator, not by us — we link to the official download for transparency. Gambling carries risk; play within a fixed budget and use [responsible-gaming tools](/how-to-delete-jeetbuzz-account) if it stops being fun.",
      ]}
      bodyByLocale={{
        bn: [
          "## APK কেন Google Play-তে নেই",
          "Google Play বেশিরভাগ দেশে রিয়েল-মানি জুয়া অ্যাপ ব্লক করে, তাই JeetBuzz সরাসরি **APK** হিসেবে Android বিল্ড দেয়। এটাই দক্ষিণ এশিয়ার লাইসেন্সপ্রাপ্ত অপারেটরদের জন্য স্বাভাবিক — কিন্তু এই কারণেই ফেক মিরর APK-ও থাকে। সবচেয়ে নিরাপদ সোর্স অফিসিয়াল সাইট নিজেই।",
          "## আসল APK কোথায় পাবেন",
          "১. অফিসিয়াল সাইট খুলুন ([facebook.com/GetJeetBuzz](https://facebook.com/GetJeetBuzz) থেকে যাচাই)।",
          "২. **Download App** চাপুন।",
          "৩. ফাইল সরাসরি অপারেটরের সার্ভার থেকে ডাউনলোড হবে।",
          "WhatsApp/Telegram ফরওয়ার্ড, বিজ্ঞাপন, র‍্যান্ডম ব্লগ, বা APK মিরর সাইট থেকে APK ইনস্টল করবেন না। ফেক APK আইকন হুবহু, কিন্তু ভেতরে স্পাইওয়্যার বা ক্লিপবোর্ড হাইজ্যাকার থাকে যা ডিপোজিট ঠিকানা বদলে দেয়।",
          "## ৫ ধাপে ইনস্টল",
          "১. অফিসিয়াল সাইট থেকে APK ডাউনলোড।",
          "২. **Install unknown apps** ব্রাউজারের জন্য চালু করুন (Settings → Apps → Chrome → Install unknown apps)।",
          "৩. ফাইল খুলে **Install** চাপুন।",
          "৪. অ্যাপ চালু করে লগইন করুন।",
          "৫. Install unknown apps আবার বন্ধ করুন — এটা শুধু এক ইনস্টলের জন্য দরকার।",
          "## যে ৪টি পারমিশন দরকার",
          "আসল JeetBuzz APK চায়:",
          "- **Internet** — সাইট লোডের জন্য।",
          "- **Storage** — অ্যাসেট ক্যাশ ও সেশন।",
          "- **Notifications** — ম্যাচ অ্যালার্ট ও বোনাস (optional; বন্ধ রাখতে পারেন)।",
          "- **Camera** (শুধু KYC-এর সময়) — ID ছবির জন্য।",
          "যদি APK **SMS**, **Contacts**, **Accessibility** বা **Device Admin** চায়, সেটা আসল না। সঙ্গে সঙ্গে uninstall করুন ও পাসওয়ার্ড বদলান।",
          "## APK আপডেট রাখুন",
          "অ্যাপ চালু করার সময় নতুন বিল্ড থাকলে prompt দেয়। **সবসময়** আপডেট করুন — পুরনো বিল্ড 'app not opening' সমস্যার প্রধান কারণ। Auto-update ব্যর্থ হলে সাইট থেকে ফ্রেশ APK নামান, পুরনো অ্যাপের ওপর ইনস্টল হলে লগইন থাকে। বিস্তারিত: [App Update](/jeetbuzz-app-update)।",
          "## APK বনাম iOS",
          "iPhone/iPad-এ APK ইনস্টল হয় না। [iOS Web App গাইড](/ios-app-guide) দেখুন — Safari-র Add to Home Screen অ্যাপের মতোই কাজ করে।",
          "## সমস্যা সমাধান",
          "- **App not installed** — স্টোরেজ খালি করুন, পুরনো ভার্সন মুছে নতুন ইনস্টল।",
          "- **Parse error** — ডাউনলোড অসম্পূর্ণ। মুছে stable connection-এ পুনরায় ডাউনলোড।",
          "- **App crashes** — অ্যাপ ক্যাশ ক্লিয়ার করুন। [App Not Opening](/jeetbuzz-app-not-opening)।",
          "- **Play Protect warning** — স্বাভাবিক। অফিসিয়াল সাইট থেকে হলে **Install Anyway** চাপুন।",
          "## নিরপেক্ষ ঘোষণা",
          "GetJeetBuzz সম্পাদকীয় অ্যাফিলিয়েট। জুয়ায় ঝুঁকি আছে — [responsible-gaming tools](/how-to-delete-jeetbuzz-account) ব্যবহার করুন।",
        ],
      }}
      related={siblings(APP_CLUSTER, PATH)}
      faqs={[
        { q: "Is the JeetBuzz APK safe?", a: "Yes when downloaded from the official site. Third-party APK mirrors are the risky vector — they often bundle spyware. Cross-check the download URL against the brand's official social profiles before installing." },
        { q: "Why does Google Play block the JeetBuzz app?", a: "Google Play policy disallows real-money gambling apps in most markets, so licensed operators like JeetBuzz distribute directly as an APK. This is standard for the industry, not a red flag." },
        { q: "What is the current APK version?", a: "The official site always shows the latest build number. The in-app update prompt tells you when a new version is available — always update, since old builds silently fail on rotated URLs." },
        { q: "Can I keep the old APK version?", a: "Not recommended. Old builds usually stop working within weeks when the operator rotates the primary domain. See [App Update](/jeetbuzz-app-update) for a safe rollback path if a new build broke something for you." },
        { q: "Do I need to uninstall before updating?", a: "No — install the new APK over the existing one and your login stays. Uninstall first only if the current version is corrupted (Parse error, repeated crashes)." },
        { q: "Will Play Protect delete the APK?", a: "Play Protect may warn on install but does not auto-delete once installed. You can disable the scan for the JeetBuzz app in Settings → Google → Play Protect if the warning is a nuisance." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "JeetBuzz APK কি নিরাপদ?", a: "হ্যাঁ, অফিসিয়াল সাইট থেকে হলে। থার্ড-পার্টি APK মিরর সবচেয়ে বড় ঝুঁকি — সেগুলোতে স্পাইওয়্যার থাকতে পারে। ইনস্টলের আগে ডাউনলোড URL অফিসিয়াল সোশ্যাল থেকে মিলিয়ে নিন।" },
          { q: "Google Play কেন JeetBuzz অ্যাপ ব্লক করে?", a: "Google Play নীতিতে বেশিরভাগ বাজারে রিয়েল-মানি জুয়া অ্যাপ নিষিদ্ধ, তাই লাইসেন্সপ্রাপ্ত অপারেটর APK হিসেবে দেয়। এটা ইন্ডাস্ট্রি স্ট্যান্ডার্ড, ঝুঁকি নয়।" },
          { q: "বর্তমান APK ভার্সন কত?", a: "অফিসিয়াল সাইটে সর্বশেষ বিল্ড নম্বর দেখানো থাকে। অ্যাপ নিজেই নতুন ভার্সনের জন্য prompt দেয়।" },
          { q: "পুরনো APK রাখা যাবে?", a: "প্রস্তাবিত নয়। কয়েক সপ্তাহের মধ্যে ডোমেইন রোটেট হলে পুরনো বিল্ড কাজ করা বন্ধ হয়। [App Update](/jeetbuzz-app-update) দেখুন।" },
          { q: "আপডেটের আগে uninstall দরকার?", a: "না — নতুন APK পুরনোর ওপর ইনস্টল করলে লগইন থাকে। শুধু corrupted হলে uninstall করুন।" },
          { q: "Play Protect কি APK মুছে দেবে?", a: "ইনস্টলের সময় warning দিতে পারে কিন্তু auto-delete করে না। Settings → Google → Play Protect থেকে JeetBuzz-এর জন্য scan বন্ধ করা যায়।" },
        ],
      }}
    />
  ),
});