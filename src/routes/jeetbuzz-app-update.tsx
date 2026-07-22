import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { APP_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-app-update";
const TITLE = "JeetBuzz App Update 2026. Safe Update Steps for Android & iOS";
const DESC = "How to update the JeetBuzz app safely in 2026. Android APK over-the-top install, iOS PWA refresh, fixing old-version bugs and 'App not installed' errors.";

export const Route = createFileRoute("/jeetbuzz-app-update")({
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
      title={<>JeetBuzz <span className="gold-text">App Update</span></>}
      titleByLocale={{ bn: <>জিতবাজ <span className="gold-text">অ্যাপ আপডেট</span></> }}
      subtitle="How to update the JeetBuzz app on Android and iOS without losing your login, plus fixes for the 'App not installed' error."
      subtitleByLocale={{ bn: "লগইন না হারিয়ে অ্যান্ড্রয়েড ও iOS-এ জিতবাজ অ্যাপ আপডেট, সঙ্গে 'App not installed' সমস্যার সমাধান।" }}
      ctaIntent="signup" ctaLabel="Get Latest Version"
      breadcrumbs={[{ name: "App", path: "/download" }, { name: "App Update", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## When you need to update",
        "Update the JeetBuzz app when you see an in-app banner, live cricket streams stop loading, or the cashier throws unexplained errors. Old builds also miss new payment rails when operators are added.",
        "## Android update, over the top",
        "1. Open the [official download page](/download) in Chrome.",
        "2. Tap **Download APK**, the file lands in **Downloads**.",
        "3. Tap the APK. Android detects the existing install and offers **Update**.",
        "4. Tap **Update**. Your login session, favourites and notification preferences are preserved.",
        "## When 'App not installed' appears",
        "This means the new APK has a different signature (usually because you originally installed a repackaged clone from a random link). Fix:",
        "1. **Uninstall** the current JeetBuzz app (Settings → Apps → JeetBuzz → Uninstall).",
        "2. Reboot the phone.",
        "3. Install the fresh APK from the official page.",
        "You will need to log in once, your account, balance and history are safe server-side.",
        "## iOS update, refresh the PWA",
        "The Safari web app updates automatically the next time you open it. If something looks stuck:",
        "1. Long-press the JeetBuzz icon → **Remove App** → **Delete Bookmark**.",
        "2. Open Safari → JeetBuzz site → Share → **Add to Home Screen**.",
        "3. Log in once, session restores.",
        "## After updating",
        "- Reopen the app and check **Account → Version** to confirm the new build number.",
        "- Re-allow notifications if prompted (deposit and cash-out alerts).",
        "- Reload the cashier once, new payment options may appear.",
        "## What update never changes",
        "Your account balance, KYC status, bet history and bonuses are stored on JeetBuzz servers, not the phone. Uninstall / reinstall never touches them. Anyone asking for your password \"to help update the app\" is a scammer, the app updates itself.",
      ]}
      bodyByLocale={{
        bn: [
          "## কখন আপডেট করবেন",
          "ইন-অ্যাপ ব্যানার দেখলে, লাইভ ক্রিকেট স্ট্রিম লোড না হলে, বা ক্যাশিয়ারে অস্পষ্ট ত্রুটি এলে জিতবাজ অ্যাপ আপডেট করুন। পুরনো বিল্ডে নতুন পেমেন্ট রেল যোগ হলেও সেগুলো দেখা যায় না।",
          "## অ্যান্ড্রয়েড আপডেট, উপরে ইনস্টল",
          "১. Chrome-এ [অফিশিয়াল ডাউনলোড পেজ](/download) খুলুন।",
          "২. **Download APK** ট্যাপ করুন, ফাইলটি **Downloads**-এ যাবে।",
          "৩. APK ট্যাপ করুন। অ্যান্ড্রয়েড বিদ্যমান ইনস্টল ধরতে পারে এবং **Update** অপশন দেয়।",
          "৪. **Update** ট্যাপ করুন। আপনার লগইন সেশন, ফেভারিট এবং নোটিফিকেশন প্রেফারেন্স সংরক্ষিত থাকে।",
          "## 'App not installed' এলে",
          "এর মানে নতুন APK-এর সিগনেচার আলাদা (সাধারণত কারণ আপনি মূলত কোনো র‍্যান্ডম লিংক থেকে রিপ্যাকেজড ক্লোন ইনস্টল করেছিলেন)। সমাধান:",
          "১. বর্তমান JeetBuzz অ্যাপ **আনইনস্টল** করুন (Settings → Apps → JeetBuzz → Uninstall)।",
          "২. ফোন রিবুট করুন।",
          "৩. অফিশিয়াল পেজ থেকে নতুন APK ইনস্টল করুন।",
          "একবার লগইন করতে হবে, অ্যাকাউন্ট, ব্যালেন্স ও ইতিহাস সার্ভারে নিরাপদ।",
          "## iOS আপডেট. PWA রিফ্রেশ",
          "Safari ওয়েব অ্যাপ পরবর্তী চালুতে অটোমেটিক আপডেট হয়। কিছু আটকে গেলে:",
          "১. JeetBuzz আইকন লং-প্রেস করুন → **Remove App** → **Delete Bookmark**।",
          "২. Safari → JeetBuzz সাইট → Share → **Add to Home Screen** খুলুন।",
          "৩. একবার লগইন করুন, সেশন পুনরুদ্ধার হবে।",
          "## আপডেটের পর",
          "- অ্যাপ পুনরায় খুলুন এবং **Account → Version**-এ নতুন বিল্ড নম্বর নিশ্চিত করুন।",
          "- প্রম্পট এলে নোটিফিকেশন আবার অনুমতি দিন।",
          "- ক্যাশিয়ার একবার রিলোড করুন, নতুন পেমেন্ট অপশন আসতে পারে।",
          "## আপডেট যা কখনো পরিবর্তন করে না",
          "আপনার অ্যাকাউন্ট ব্যালেন্স, KYC স্ট্যাটাস, বাজির ইতিহাস ও বোনাস JeetBuzz সার্ভারে সংরক্ষিত, ফোনে নয়। আনইনস্টল/রিইনস্টল কখনো সেগুলো স্পর্শ করে না। \"অ্যাপ আপডেটে সাহায্য করতে\" পাসওয়ার্ড চাওয়া যে কেউ প্রতারক, অ্যাপ নিজেই আপডেট হয়।",
        ],
      }}
      related={siblings(APP_CLUSTER, PATH)}
      faqs={[
        { q: "Does JeetBuzz auto-update on Android?", a: "No. Because the APK is not on Play Store, Android does not auto-update it. Watch for the in-app banner or check the download page periodically." },
        { q: "Will updating erase my balance or history?", a: "No. Everything is stored server-side. Even a full uninstall + reinstall preserves your balance, KYC and bet history after you log in once." },
        { q: "Why do I keep getting 'App not installed'?", a: "Signature mismatch, you have an unofficial build. Uninstall the current app, reboot, then install the fresh APK from the official page." },
        { q: "How do I know which version I'm on?", a: "Open the app → Account → Version. Compare against the version shown on the official download page." },
        { q: "Is the iOS PWA update automatic?", a: "Yes. Safari fetches the latest version on the next launch. Force-quit and reopen to trigger the update immediately." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "অ্যান্ড্রয়েডে জিতবাজ কি অটো-আপডেট হয়?", a: "না। APK প্লে স্টোরে না থাকায় অ্যান্ড্রয়েড অটো-আপডেট করে না। ইন-অ্যাপ ব্যানার বা ডাউনলোড পেজ মাঝেমধ্যে চেক করুন।" },
          { q: "আপডেট করলে ব্যালেন্স বা ইতিহাস মুছে যাবে?", a: "না। সবকিছু সার্ভার-সাইডে সংরক্ষিত। সম্পূর্ণ আনইনস্টল + রিইনস্টল করলেও লগইনের পর ব্যালেন্স, KYC ও বাজি ইতিহাস অক্ষত থাকে।" },
          { q: "বারবার 'App not installed' কেন আসে?", a: "সিগনেচার মিসম্যাচ, আপনি অনফিশিয়াল বিল্ড ব্যবহার করছেন। বর্তমান অ্যাপ আনইনস্টল করুন, রিবুট করুন, তারপর অফিশিয়াল পেজ থেকে নতুন APK ইনস্টল করুন।" },
          { q: "আমি কোন ভার্সনে আছি বুঝব কীভাবে?", a: "অ্যাপ খুলে Account → Version। অফিশিয়াল ডাউনলোড পেজের ভার্সনের সঙ্গে মিলিয়ে দেখুন।" },
          { q: "iOS PWA কি অটো-আপডেট হয়?", a: "হ্যাঁ। Safari পরবর্তী চালুতে সর্বশেষ ভার্সন ফেচ করে। তাৎক্ষণিকভাবে ট্রিগার করতে ফোর্স-কুইট করে পুনরায় খুলুন।" },
        ],
      }}
    />
  ),
});