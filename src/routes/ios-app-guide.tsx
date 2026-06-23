import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/ios-app-guide";
const TITLE =
  "JeetBuzz iOS App Guide 2026 - Safari Web App Install for iPhone & iPad";
const DESC =
  "Use JeetBuzz on iPhone and iPad in 2026 — Safari Add to Home Screen web-app install, push notifications, login persistence and what to do when the App Store route isn't available.";

export const Route = createFileRoute("/ios-app-guide")({
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
      eyebrow="iOS"
      title={<>JeetBuzz <span className="gold-text">iOS</span> App Guide</>}
      subtitle="There is no public JeetBuzz app in the regional App Store. The official, safe way to use JeetBuzz on iPhone and iPad is the Safari web-app install — this guide walks through it and warns about the fake IPA / sideload offers floating around."
      breadcrumbs={[{ name: "Mobile", path: "/mobile-app-guide" }, { name: "iOS", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Why there's no App Store listing",
        "Apple's App Store policy restricts real-money gambling apps to a narrow list of licensed jurisdictions. JeetBuzz isn't listed for Bangladesh, Pakistan or India retail App Stores, so any IPA file or TestFlight link claiming to be the JeetBuzz iOS app is unofficial and unsafe — treat it the same way you'd treat an unsigned APK.",
        "## The safe path: Safari web app",
        "1. Open Safari (not Chrome, not Firefox — only Safari supports Add to Home Screen as a real installable web app on iOS).",
        "2. Visit the official JeetBuzz site.",
        "3. Log in once so your session is stored.",
        "4. Tap the Share button at the bottom of Safari.",
        "5. Tap Add to Home Screen, name it JeetBuzz, tap Add.",
        "6. Launch from the new home-screen icon — it opens in full-screen web-app mode with no Safari address bar, behaves like a native app.",
        "## What works and what doesn't",
        "- Works: full sports book, exchange, casino, cashier, live cricket video where available, deposits/withdrawals.",
        "- Limited: Apple silently logs you out after extended periods of background time more aggressively than on Android — keep the login guide handy.",
        "- Push notifications: iOS 16.4+ supports web push for installed web apps; enable when prompted on first login.",
        "## Troubleshooting",
        "- Add to Home Screen missing: you're not in Safari, or you're in Private Browsing mode. Switch to a normal Safari tab.",
        "- Web app keeps logging out: clear Safari website data for the JeetBuzz domain, re-install the web app, log in fresh.",
        "- Video stutter on live cricket: switch to a 5GHz Wi-Fi network or temporarily disable Low Power Mode.",
        "## What to avoid",
        "- IPA files from Telegram or third-party sites.",
        "- TestFlight invites that aren't from a verified JeetBuzz email.",
        "- AltStore / Sideloadly downloads — they require trusting an unknown enterprise certificate which is a meaningful security risk.",
        "## Country notes",
        "- Bangladesh: pair the web app with bKash for fastest in-app top-up; the cashier handles the deep link to the bKash app cleanly on iOS.",
        "- Pakistan: EasyPaisa app deep-links back to JeetBuzz Safari, not to the home-screen web app. After paying, manually re-open the home-screen icon to see the deposit posted.",
        "- India: UPI intents on iOS sometimes require selecting the UPI app manually; copy the VPA from the cashier if the picker doesn't appear.",
      ]}
      faqs={[
        { q: "Is there a JeetBuzz iOS app on the App Store?", a: "Not in BD/PK/IN App Stores as of 2026. The official iOS experience is the Safari web app via Add to Home Screen — anything else is unofficial." },
        { q: "Is the Safari web app safe?", a: "Yes — it loads the same HTTPS site as a desktop browser would, runs in Apple's WebKit sandbox, and doesn't require trusting any third-party certificate." },
        { q: "Does the web app support push notifications?", a: "Yes on iOS 16.4 and later, once you've installed it to the home screen and granted permission on first login." },
        { q: "Why was I logged out overnight?", a: "iOS aggressively suspends background web-app sessions to save battery. Tap the home-screen icon again and log in — enabling 'Remember me' helps." },
      ]}
      related={[
        { to: "/mobile-app-guide", title: "Mobile App Guide" },
        { to: "/android-web-app-guide", title: "Android Web App Guide" },
        { to: "/apk-download-guide", title: "Android APK Guide" },
        { to: "/login-security", title: "Login Security" },
      ]}
    />
  ),
});