import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { lazy, Suspense } from "react";
import { imageAbsoluteUrl } from "@/lib/images";
import {
  articleSchema,
  organizationSchema,
  softwareApplicationSchema,
  jsonLdScript,
  canonicalLink,
  hreflangLinks,
  ogUrl,
} from "@/lib/schema";

const PWAInstallPrompt = lazy(() =>
  import("@/components/PWAInstallPrompt").then((m) => ({ default: m.PWAInstallPrompt })),
);

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "JeetBuzz APK Download & Web App Install 2026 | Fast & Secure | GetJeetBuzz" },
      {
        name: "description",
        content:
          "Download the JeetBuzz Web App or install it directly from your browser. Learn how to add the app to your home screen, enjoy fast loading, secure access and a smooth mobile experience.",
      },
      { property: "og:title", content: "JeetBuzz Download — Android APK & iOS Web App" },
      {
        property: "og:description",
        content:
          "Official JeetBuzz APK download and iOS web app install path with security checks and offline-friendly install.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("androidApp") },
      ogUrl("/download"),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("androidApp") },
    ],
    links: [canonicalLink("/download"), ...hreflangLinks("/download")],
    scripts: [
      jsonLdScript(organizationSchema()),
      jsonLdScript(softwareApplicationSchema()),
      jsonLdScript(
        articleSchema({
          headline: "JeetBuzz Download — Android APK & iOS Web App",
          description:
            "Official JeetBuzz APK download and iOS web app install path with security checks and ISP-block bypass.",
          path: "/download",
          image: imageAbsoluteUrl("androidApp"),
        }),
      ),
    ],
  }),
  component: () => (
    <GuidePage
      title={
        <>
          JeetBuzz <span className="gold-text">Download</span> — Official App Hub
        </>
      }
      subtitle="Get the verified JeetBuzz Android APK or install the iOS web app in two minutes. Faster login, push OTP, and a clean way around ISP-level blocks in BD, PK and IN."
      ctaIntent="login"
      ctaLabel="Download JeetBuzz"
      heroImage="androidApp"
      inlineImage="iosCasino"
      breadcrumbs={[{ name: "Download", path: "/download" }]}
      articleHeadline="JeetBuzz Download — Android APK & iOS Web App"
      articleDescription="Official JeetBuzz APK download and iOS web app install path with security checks and ISP-block bypass."
      articlePath="/download"
      body={[
        "## Why bother with the app at all",
        "The JeetBuzz mobile site is excellent, so the app is not mandatory. It is, however, the most reliable way to keep playing when your ISP blocks the public domain — common in Bangladesh, Pakistan and parts of India in 2026. The app talks to JeetBuzz over its own routing, so DNS-level filtering at the Grameenphone, Robi, Jazz, Zong, Airtel or Vi level usually slides off it. The app also delivers push OTP (faster than SMS), enables fingerprint or face-unlock for the login screen, and uses noticeably less data on weak networks because the shell is local.",
        "## Two install paths: Android APK and iOS web app",
        "Android: the official Android APK is sideloaded from JeetBuzz's own servers, not from Google Play (Play Store does not list real-money betting apps in BD, PK or IN). The Download JeetBuzz button above is a server redirect to the operator's current APK URL — bookmark it. iOS: Apple does not allow the equivalent native app on the App Store for these regions, so JeetBuzz ships an iOS web app you install via Safari → Share → Add to Home Screen. It behaves like a native app once installed.",
        "## Android APK install in 90 seconds",
        "1. Tap Download JeetBuzz above. Your browser downloads jeetbuzz.apk to your Downloads folder.",
        "2. Open the file. Android prompts \"Install unknown app\" — tap Settings, toggle Allow from this source for your browser, then go back.",
        "3. Tap Install. The first install takes under 30 seconds on a recent phone.",
        "4. Open the app. The first launch loads the lobby and saves your interface language.",
        "5. Log in with your existing JeetBuzz credentials, or tap Sign Up if you do not have an account yet — see [Signup](/signup).",
        "## SHA-256 verification (optional but recommended)",
        "Paranoid users can verify the downloaded APK matches the file JeetBuzz publishes. After download, on Android, use an app like Hash Droid or any file-info tool to compute the SHA-256 of jeetbuzz.apk and compare it against the hash listed on JeetBuzz support. A mismatch means the file was modified in transit — delete it and re-download over mobile data.",
        "## iOS install path",
        "On iPhone, Safari is mandatory (Chrome on iOS uses the same WebKit engine but does not expose Add to Home Screen). Tap Download JeetBuzz above, then on the JeetBuzz site tap the Share icon (square with arrow) at the bottom, scroll down and tap Add to Home Screen. Confirm the name JeetBuzz, then tap Add. The new icon launches a chrome-less full-screen JeetBuzz that looks and feels native. iOS notifications are limited compared to Android, but the login flow, OTP, deposits, withdrawals and live cricket streams all work identically.",
        "## What the app actually contains",
        "Sportsbook — full cricket coverage including IPL, BPL, PSL, T20I, ODI, Test, plus football, kabaddi, tennis. Casino — slots from Pragmatic Play, JILI, PG Soft, Spadegaming, plus Aviator. Live — Evolution and Ezugi live dealer Baccarat, Roulette, Andar Bahar, Teen Patti, Crazy Time, Sweet Bonanza CandyLand. Exchange — peer-to-peer cricket odds. Cashier — bKash, Nagad, Rocket, Upay, EasyPaisa, JazzCash, SadaPay, UPI, PhonePe, Paytm, Google Pay. Support — 24/7 live chat at the bottom of every screen.",
        "## ISP block bypass in practice",
        "If JeetBuzz on Chrome shows \"this site can not be reached\" but the app loads fine, the issue is DNS or a routing block at your ISP. Use the app as your daily driver. If the app also struggles, switch from Wi-Fi to mobile data (different network, different filtering), or change Wi-Fi DNS to 1.1.1.1 / 8.8.8.8 in router settings. Avoid public free VPNs — JeetBuzz flags VPN traffic at withdrawal.",
        "## App permissions explained",
        "JeetBuzz asks for: internet (mandatory), storage (to cache lobby assets), notifications (OTP push and bet results), camera (KYC selfie only — optional, you can decline and use the web KYC flow), biometric (fingerprint / face unlock — optional). It does not ask for SMS, contacts or location. If you see an APK demanding those permissions, it is a fake — delete and re-download from the verified hub above.",
        "## Updating the app",
        "JeetBuzz auto-prompts you to update when a new APK ships. Updates are small (under 10 MB usually) and include security patches and new game integrations. On iOS, the web app updates automatically because it is just a Safari shortcut to the latest live site. Never accept update prompts that arrive via WhatsApp or Telegram — open the app yourself and check Settings → About → Update.",
        "## Spotting fake JeetBuzz apps",
        "Red flags: an APK from a domain you do not recognise (jetbuzz-something, jitbuzz-app, betjeet); a Play Store listing claiming to be JeetBuzz (it is not — JeetBuzz is not on Play Store for these regions); an installer that asks for SMS or contacts; a launcher icon with the wrong colour or wrong J. When in doubt, uninstall and re-download from this page.",
        "## App vs. browser — quick comparison",
        "- App is more stable under ISP blocks; browser breaks first.",
        "- App is faster on cold start; browser is fine on a kept-open tab.",
        "- App supports biometric unlock; browser requires password each session.",
        "- App push OTP beats SMS OTP in delivery speed.",
        "- Browser is better for one-off use on a borrowed device — no install footprint.",
        "## After install",
        "Sign in via [Login](/login). If you do not have an account, tap Sign Up inside the app or use our [Signup](/signup) page. Set 2FA from Account → Security. Open the Cashier and link your local wallet — [Payment Methods](/payment-methods) walks through the options. Then explore: live cricket, live casino, Aviator, the Exchange.",
        "## Removing the app",
        "Android: long-press the JeetBuzz icon, tap Uninstall. iOS: long-press the home-screen icon, tap Remove App, Delete from Home Screen. Your JeetBuzz account is untouched — log back in any time from any device.",
        "## Storage, battery and data usage in practice",
        "Storage: the JeetBuzz Android APK installs at under 50 MB; cached game assets push the on-device footprint to roughly 120–180 MB after a week of mixed Sportsbook and Casino use. Battery: a 30-minute live cricket session drains a similar amount as 30 minutes of Instagram, because the stream is the costly part — pure bet placement is negligible. Data: live cricket video uses around 1 MB per minute on the default quality; bet placement and casino spins are well under 1 MB per hour combined. Cap stream quality in Settings on metered plans.",
        "## Sideloading risks and how to mitigate them",
        "Sideloading any Android APK carries the abstract risk of a tampered file. Mitigations: only download from the verified outbound button on this page, verify the SHA-256 hash, keep Google Play Protect enabled (it scans sideloaded APKs in real time), and refuse to install any APK that asks for SMS, contacts or background location. The official JeetBuzz app passes Play Protect cleanly because the permissions match what the operator declares.",
        "## Push notifications and what they tell you",
        "Once installed, the JeetBuzz Android app can send push for OTP codes during login, deposit confirmations, withdrawal status changes, bet settlement on big tickets, and live event reminders for fixtures you opted into. Turn them all on at first launch — OTP via push routinely arrives in under three seconds versus 30–60 seconds for SMS in BD, PK and IN. Granular toggles live under Account → Notifications if you later want to mute promotional messages.",
        "## When to skip the app entirely",
        "On a borrowed phone, on a desktop or laptop, on a one-off netcafe session, or when you simply want zero install footprint, the mobile site is the right answer — it delivers the same Sportsbook, Casino, Live and Cashier in any modern browser. The app earns its place only when you play often enough that biometric login, push OTP and ISP-block resilience genuinely save you time.",
        "## How the JeetBuzz app compares across the South Asian market",
        "Readers often arrive after trying installers from several brands — JeetBuzz, Baji and Crickex are the most-searched in this category. We do not host those APKs. This page only links to the official JeetBuzz Android build and the JeetBuzz iOS web app, both downloaded directly from the operator. Any APK forwarded over WhatsApp or Telegram claiming to be JeetBuzz is, by definition, not from this hub — re-download from the verified button above instead.",
      ]}
      faqs={[
        {
          q: "Is the JeetBuzz app on Google Play Store?",
          a: "No. Google Play does not list real-money betting apps in Bangladesh, Pakistan or India. The official JeetBuzz Android APK is sideloaded from the operator's own servers — use the Download JeetBuzz button above.",
        },
        {
          q: "Is the JeetBuzz APK safe?",
          a: "Yes, when downloaded from the official source. Verify the SHA-256 hash against the value JeetBuzz publishes if you want extra assurance. Avoid APKs forwarded on WhatsApp, Telegram or random forums.",
        },
        {
          q: "Does JeetBuzz have an iPhone app?",
          a: "Not on the App Store. JeetBuzz ships an iOS web app installed via Safari → Share → Add to Home Screen. It behaves like a native app and supports the full lobby, cashier and live streams.",
        },
        {
          q: "Why download the app when the website works?",
          a: "The app is more resilient to ISP-level blocks, supports biometric login and push OTP, and uses less data on weak networks. If the JeetBuzz site is unreliable on your network, the app is the fix.",
        },
        {
          q: "Will the JeetBuzz APK consume a lot of storage?",
          a: "No. The shell is under 50 MB. Game assets stream on demand, so total footprint stays low compared to typical mobile games.",
        },
        {
          q: "Does the app support Bengali, Urdu and Hindi?",
          a: "Yes. Interface language auto-detects from your SIM and IP, and you can switch manually from Account → Language.",
        },
        {
          q: "Can I use the same JeetBuzz account on app and browser at once?",
          a: "Yes. Sessions are per-device. You can be logged in on Android, iOS web app and a desktop browser simultaneously — handy for live cricket on phone and bet placement on desktop.",
        },
        {
          q: "How do I update the JeetBuzz app?",
          a: "Android prompts inside the app when a new APK is available. iOS auto-updates because the web app loads the latest live site each launch. Never install an update sent over messaging apps.",
        },
        {
          q: "Is the JeetBuzz app different from Baji or Crickex apps?",
          a: "We only ship the JeetBuzz install path. In practice players notice JeetBuzz uses a single APK covering Sportsbook, Casino, Live and Exchange with no separate companion downloads. For competitor specifics, consult those operators directly — this hub is JeetBuzz-only.",
        },
        {
          q: "Why do users compare JeetBuzz with platforms like 1xBet or Krikya before downloading?",
          a: "Bettors in BD, PK and IN often shortlist two or three brands before installing anything. Once you have chosen JeetBuzz, the safest path is the verified outbound APK on this page; never sideload an installer received from a stranger that claims to bundle multiple brands.",
        },
      ]}
      related={[
        { to: "/login", title: "JeetBuzz Login", desc: "Sign in once the app is installed." },
        { to: "/signup", title: "JeetBuzz Signup", desc: "Open a new account from the app or web." },
        { to: "/register", title: "JeetBuzz Registration", desc: "Full registration walkthrough." },
        { to: "/apk-download-guide", title: "APK Download Guide", desc: "Detailed Android install walkthrough." },
        { to: "/ios-app-guide", title: "iOS App Guide", desc: "Step-by-step iPhone install." },
        { to: "/mobile-app-guide", title: "Mobile App Guide", desc: "Compare features across devices." },
      ]}
      extra={
        <Suspense fallback={null}>
          <PWAInstallPrompt />
        </Suspense>
      }
    />
  ),
});
