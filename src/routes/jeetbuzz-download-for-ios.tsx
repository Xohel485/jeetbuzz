import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { APP_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-download-for-ios";
const TITLE = "JeetBuzz Download for iOS 2026, iPhone & iPad Web App Install";
const DESC = "Install JeetBuzz on iPhone or iPad in 2026, no App Store needed. Safari web app install steps, notifications setup and iOS-specific troubleshooting.";

export const Route = createFileRoute("/jeetbuzz-download-for-ios")({
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
      title={<>JeetBuzz Download <span className="gold-text">for iOS</span></>}
      subtitle="No App Store needed, install JeetBuzz on iPhone and iPad as a Safari web app in under a minute. Full features, home-screen icon, push notifications."
      ctaIntent="signup" ctaLabel="Open on iPhone Safari"
      breadcrumbs={[{ name: "App", path: "/download" }, { name: "Download for iOS", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Why there is no App Store version",
        "Apple's App Store policy blocks real-money betting apps in Bangladesh, Pakistan and India. The workaround is a **Progressive Web App (PWA)**, the JeetBuzz site installs to your home screen through Safari, opens full-screen without any browser bar, and behaves like a native app.",
        "## Install in four taps",
        "1. Open the [official JeetBuzz site](/download) in **Safari**. Chrome on iOS cannot install PWAs.",
        "2. Tap the **Share** icon (square with arrow) at the bottom of the screen.",
        "3. Scroll and tap **Add to Home Screen**.",
        "4. Tap **Add** in the top right. The JeetBuzz icon appears next to your other apps.",
        "## Features that work on iOS",
        "- Full sportsbook, live cricket, football, tennis, kabaddi.",
        "- Live casino with Evolution / Pragmatic dealer streams.",
        "- Slots and Aviator crash game.",
        "- Face ID / Touch ID login (Safari passkeys, iOS 16+).",
        "- Push notifications for deposit confirmation, promo drops and cash-out.",
        "## iOS-specific tips",
        "- **Enable notifications** on first launch when Safari prompts, otherwise you will miss cash-out alerts.",
        "- **Keep Safari as default browser**, deep links from Telegram / WhatsApp open the PWA cleanly.",
        "- **Do not use Private Browsing** for install, private tabs cannot save to home screen.",
        "- **Low storage**, clear Safari cache from Settings → Safari → Advanced → Website Data if the app slows down.",
        "## Troubleshooting",
        "- **Home-screen icon disappeared**, reinstall via Share → Add to Home Screen. Your login session is preserved.",
        "- **Blank white screen on launch**, force-quit and reopen; still blank means clear Safari website data for JeetBuzz.",
        "- **Notifications not arriving**. Settings → Notifications → JeetBuzz → Allow Notifications.",
        "- **App keeps logging me out**, iOS aggressively clears Safari cookies after 7 idle days; enable 'Prevent Cross-Site Tracking' off *only* if you understand the trade-off.",
      ]}
      related={siblings(APP_CLUSTER, PATH)}
      faqs={[
        { q: "Is there a JeetBuzz app on the App Store?", a: "No. Apple blocks real-money betting apps in BD, PK and IN. The PWA install through Safari delivers the same features without the App Store." },
        { q: "Does the iOS PWA use less storage than a native app?", a: "Yes. The install is only the icon plus a small manifest, the actual pages stream from the network and cache what you use." },
        { q: "Can I get push notifications on iPhone?", a: "Yes, iOS 16.4+ supports web push. Allow notifications on first launch or later from Settings → Notifications → JeetBuzz." },
        { q: "Does Face ID / Touch ID work?", a: "Yes on iOS 16 or newer through Safari passkeys, provided you enable it on your account." },
        { q: "Why does the app log me out after a week?", a: "Safari clears cookies for sites you do not visit for 7 days. Open the JeetBuzz PWA at least once a week or use passkey login to bypass this." },
      ]}
    />
  ),
});