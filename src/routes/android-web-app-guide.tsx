import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/android-web-app-guide";
const TITLE =
  "JeetBuzz Android Web App Guide 2026 - Chrome Install Without APK";
const DESC =
  "Run JeetBuzz on Android without installing the APK in 2026 — Chrome Add to Home Screen, PWA install, push notifications and when the web app is actually better than the APK.";

export const Route = createFileRoute("/android-web-app-guide")({
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
      eyebrow="Android Web App"
      title={<>JeetBuzz <span className="gold-text">Android</span> Web App Guide</>}
      subtitle="You don't have to install the APK. Chrome on Android can install the JeetBuzz site as a Progressive Web App — a home-screen icon that opens full-screen with no address bar, no Play Store needed, no unknown-sources permission to enable."
      breadcrumbs={[{ name: "Mobile", path: "/mobile-app-guide" }, { name: "Android Web App", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Web app vs APK — which one's right for you",
        "- Web app (PWA): smaller footprint (~megabytes), updates automatically every time you open it, no manual APK reinstalls, no 'Install from unknown sources' permission. Best for casual / lower-end devices and for users who don't want to manage updates.",
        "- APK: full native install, push notifications even when Chrome is fully closed, slightly faster cold start. Best for daily users.",
        "Both load the exact same site and the exact same account.",
        "## Install on Chrome (recommended)",
        "1. Open Chrome on Android.",
        "2. Visit the official JeetBuzz site.",
        "3. Tap the three-dot menu (top right).",
        "4. Tap Install app (or Add to Home Screen if Install isn't shown).",
        "5. Confirm. A JeetBuzz icon appears on your home screen and in the app drawer.",
        "6. Launch from the icon — it opens full-screen, no Chrome chrome.",
        "## Install on Samsung Internet",
        "Samsung Internet supports the same Add to Home Screen flow via Menu > Add page to > Home screen. The installed icon behaves identically to the Chrome PWA.",
        "## What works",
        "- Full site: sports, exchange, live cricket video, casino, Aviator, cashier.",
        "- Web push notifications (cashier confirmations, settled bets, promo alerts) once you accept the permission prompt on first login.",
        "- Deep links into bKash / Nagad / EasyPaisa / JazzCash / UPI apps from the cashier — same behaviour as the APK.",
        "## What doesn't (vs APK)",
        "- Background notifications when the device hasn't opened Chrome in many days — Android may throttle. Open the web app every few days to keep push delivery reliable.",
        "- Biometric login via Android Credential Manager is hit-or-miss on older Android versions; the APK is more consistent.",
        "## Updates",
        "There's nothing to do. Every time you launch the web app, Chrome silently fetches the latest version. There is no manual update button and no obsolete-version warning.",
        "## Country notes",
        "- Bangladesh: PWA install plus bKash app deep-link is the lightest stack and works well on entry-level Androids common across the country.",
        "- Pakistan: EasyPaisa / JazzCash app intents fire correctly from the PWA.",
        "- India: UPI intents work from the PWA exactly as they do from the APK; PhonePe / GPay / Paytm app pickers appear at cashier confirm.",
        "## Troubleshooting",
        "- 'Install app' option missing: you're on an outdated Chrome or in Incognito mode. Update Chrome and use a normal tab.",
        "- Icon launches Chrome with the address bar: you used Add Shortcut instead of Install. Long-press the icon, remove it, then use Install app from the menu.",
        "- Logged out repeatedly: clear site data for the JeetBuzz domain, reinstall the PWA, log in once. Enable 'Remember me' on the login form.",
      ]}
      faqs={[
        { q: "Is the Android web app safer than the APK?", a: "Both are safe when downloaded from official sources. The web app requires no install-from-unknown-sources permission and updates automatically, which removes the most common attack vector (a stale, tampered APK)." },
        { q: "Does the web app drain more battery?", a: "Slightly less, in practice — the PWA only runs when you open it, while a native APK can keep background services alive. Push notifications work for both with similar battery impact." },
        { q: "Can I have both the APK and the web app installed?", a: "Yes — they're separate icons and don't conflict. They share no local data so each will have its own login state." },
        { q: "What if 'Install app' isn't shown in Chrome?", a: "Update Chrome to the latest version, exit Incognito mode, and reload the JeetBuzz site. If still missing, use the three-dot menu's 'Add to Home Screen' option, which behaves the same on modern Android." },
      ]}
      related={[
        { to: "/apk-download-guide", title: "APK Download Guide" },
        { to: "/mobile-app-guide", title: "Mobile App Guide" },
        { to: "/ios-app-guide", title: "iOS App Guide" },
        { to: "/login-security", title: "Login Security" },
      ]}
    />
  ),
});