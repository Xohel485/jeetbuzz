import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { AFFILIATE_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-partner-login";
const TITLE = "JeetBuzz Affiliate Login & Password 2026 — Partner Dashboard";
const DESC = "JeetBuzz affiliate / partner login for 2026 — official URL, password recovery, 2FA setup, blocked-region workaround and phishing guardrails for the dashboard.";

export const Route = createFileRoute("/jeetbuzz-partner-login")({
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
      eyebrow="Affiliate"
      title={<>JeetBuzz <span className="gold-text">Partner Login</span></>}
      subtitle="Sign in to the affiliate dashboard the safe way — bookmark the official URL, enable 2FA, recover a forgotten password, and spot the phishing pages that copy partner-login screens."
      ctaIntent="partners" ctaLabel="Open Partner Login"
      breadcrumbs={[{ name: "Affiliate", path: "/affiliate-program" }, { name: "Partner Login", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## What the partner login opens",
        "The partner (affiliate) login is a separate portal from the player account. It reveals the [Affiliate Dashboard](/jeetbuzz-affiliate-dashboard) — clicks, registrations, FTDs, weekly NGR, tier progress, payout history and creative assets. A partner login never shows or controls a real-money gambling wallet; the two account systems are isolated.",
        "Every partner login lands on the correct dashboard through the same official domain a player would use to reach [JeetBuzz.com Login](/jeetbuzz-com-login). Bookmark it from a link inside the [affiliate signup confirmation email](/jeetbuzz-affiliate-signup) — that email arrives from a JeetBuzz sender address and is the only trustworthy source for the URL.",
        "## Signing in — the 4-step flow",
        "1. Open the bookmarked partner-login URL.",
        "2. Enter the email you used at affiliate signup.",
        "3. Enter your password. Use the password manager entry created at signup — do not retype from memory unless you have to.",
        "4. If 2FA is enabled, enter the 6-digit code from your authenticator app. Session lasts 24 hours before it expires.",
        "## Enable 2FA on day one",
        "Two-factor authentication is opt-in but strongly recommended. Enable it via **Dashboard → Security → Two-Factor Authentication**:",
        "1. Install Google Authenticator, Microsoft Authenticator, or 1Password on your phone.",
        "2. Scan the QR code on the dashboard.",
        "3. Enter the current 6-digit code to confirm.",
        "4. **Copy the 8 recovery codes** the dashboard shows — store them offline (a physical notebook, or a password manager's secure notes). Losing both phone and recovery codes locks the account.",
        "See [Login Security](/login-security) for the broader account-hygiene checklist that applies equally to partner accounts.",
        "## Forgotten password",
        "1. From the partner login, tap **Forgot Password**.",
        "2. Enter the affiliate email.",
        "3. Check the inbox and Spam folder for a reset link (valid 30 minutes).",
        "4. Click the link and set a new password — 14+ characters, unique, stored in a password manager.",
        "5. Log in again. All existing sessions on other devices are terminated automatically.",
        "If the email doesn't arrive, verify the address you used at signup and check whether your inbox is quota-full. The general [password reset](/jeetbuzz-password-reset) walkthrough applies identically to partner accounts.",
        "## What to do if 2FA is blocking you",
        "- **Phone lost, recovery codes safe** — enter a recovery code in place of the 6-digit code, then immediately regenerate 2FA on a new device from the dashboard.",
        "- **Phone lost and no recovery codes** — contact affiliate support with your NID, a live selfie and your last payout reference. Identity re-verification takes 24–72 hours.",
        "- **6-digit code always rejected** — usually the phone clock is out of sync. Set the phone's time to Automatic and try again.",
        "## Blocked-region access",
        "If the official URL doesn't load, it is almost always a local network filter — ISP or corporate — not a JeetBuzz outage. Options:",
        "- Switch from Wi-Fi to mobile data (or vice-versa) to confirm the block is network-specific.",
        "- Try the [mobile app](/download) which uses a different network path.",
        "- Contact affiliate support for an alternative access URL. Never use an unofficial mirror shared over Telegram, Facebook or WhatsApp — they are consistently phishing traps.",
        "## Spotting a fake partner-login page",
        "Fake partner-login pages are common because a captured affiliate account can reroute commission. Signals of a fake:",
        "- Any domain that isn't the exact official one — added letters, dashes or numbers.",
        "- No 2FA prompt when your account has 2FA enabled.",
        "- Design elements slightly off — old logo, wrong tier names, missing dashboard links.",
        "- A 'signup bonus' offered on the login screen (partners have no signup bonus).",
        "When in doubt, close the tab, open the bookmarked URL fresh, and never paste your partner password anywhere reached via a chat or social message.",
        "## After you sign in",
        "- Confirm the current-week tier and NGR — see [Affiliate Commission](/jeetbuzz-affiliate-commission).",
        "- Check the **Payout** block for balance and request status — see [Payment Methods](/jeetbuzz-affiliate-payment-methods).",
        "- Review any **Alerts** — dashboard flags sudden drops in clicks, FTDs or NGR week over week.",
        "- Grab fresh creatives if you're launching a new campaign.",
        "## Related pages",
        "- [Affiliate Dashboard](/jeetbuzz-affiliate-dashboard) — what you see after signing in.",
        "- [Affiliate Commission](/jeetbuzz-affiliate-commission) — the tier structure.",
        "- [Payment Methods](/jeetbuzz-affiliate-payment-methods) — where commission lands.",
        "- [Affiliate Signup](/jeetbuzz-affiliate-signup) — for anyone who hasn't opened a partner account yet.",
        "- [Login Security](/login-security) — hygiene rules that apply to partner accounts too.",
        "## Neutral disclosure",
        "GetJeetBuzz is an editorial affiliate. This page describes standard partner-portal access; screen labels and specific security options may evolve. Treat the dashboard itself as the source of truth for available settings on your account.",
      ]}
      bodyByLocale={{
        bn: [
          "## Partner login কী দেখায়",
          "Partner (affiliate) login player account থেকে আলাদা পোর্টাল। এটা [Affiliate Dashboard](/jeetbuzz-affiliate-dashboard) খোলে — click, registration, FTD, সাপ্তাহিক NGR, tier, payout history, creative। Partner login কখনো real-money gambling wallet দেখায় না; দুটি সিস্টেম isolated।",
          "সঠিক dashboard-এ পৌঁছাতে player-এর [JeetBuzz.com Login](/jeetbuzz-com-login)-এর মতোই একই অফিসিয়াল ডোমেইন ব্যবহার হয়। [affiliate signup confirmation email](/jeetbuzz-affiliate-signup) থেকে bookmark করুন — এটাই একমাত্র নির্ভরযোগ্য উৎস।",
          "## Sign-in — ৪ ধাপ",
          "১. Bookmark করা partner-login URL খুলুন।",
          "২. Affiliate signup email দিন।",
          "৩. পাসওয়ার্ড দিন। Password manager entry ব্যবহার করুন।",
          "৪. 2FA থাকলে authenticator-এর ৬-অঙ্কের কোড। Session ২৪ ঘণ্টা।",
          "## প্রথম দিনেই 2FA চালু",
          "**Dashboard → Security → Two-Factor Authentication**:",
          "১. Google/Microsoft Authenticator বা 1Password ইনস্টল।",
          "২. Dashboard-এর QR স্ক্যান।",
          "৩. ৬-অঙ্কের কোড confirm।",
          "৪. **৮টি recovery code offline সংরক্ষণ** — খাতা বা password manager secure notes। ফোন ও recovery code দুটোই হারালে অ্যাকাউন্ট lock।",
          "বৃহত্তর checklist [Login Security](/login-security)।",
          "## ভুলে যাওয়া পাসওয়ার্ড",
          "১. Partner login-এ **Forgot Password**।",
          "২. Affiliate email দিন।",
          "৩. Inbox ও Spam দেখুন (৩০ মিনিট valid link)।",
          "৪. নতুন পাসওয়ার্ড — ১৪+ ক্যারেক্টার, unique, password manager-এ।",
          "৫. আবার লগইন। অন্য session terminate হয়।",
          "Email না এলে signup email এবং inbox quota যাচাই করুন। বিস্তারিত [password reset](/jeetbuzz-password-reset)।",
          "## 2FA ব্লক করলে",
          "- **ফোন হারানো, recovery code আছে** — recovery code দিয়ে লগইন, dashboard থেকে নতুন device-এ 2FA regenerate।",
          "- **ফোন হারানো, recovery code নেই** — NID, live selfie, শেষ payout reference সহ affiliate support। ২৪–৭২ ঘণ্টা।",
          "- **কোড সবসময় reject** — সাধারণত ফোনের ঘড়ি out of sync। Time Automatic করুন।",
          "## Region ব্লক",
          "অফিসিয়াল URL না খুললে সাধারণত ISP/network filter, JeetBuzz outage নয়:",
          "- Wi-Fi থেকে mobile data (বা উল্টো) — network-specific কিনা দেখুন।",
          "- [mobile app](/download) আলাদা network path ব্যবহার করে।",
          "- Affiliate support থেকে alternative URL নিন। Telegram/Facebook/WhatsApp mirror phishing।",
          "## নকল partner-login চেনা",
          "Captured affiliate account commission redirect করতে পারে বলে ফেক পেজ অনেক। সংকেত:",
          "- অফিসিয়াল ডোমেইনের বাইরে যেকোনো — অক্ষর/dash/সংখ্যা যোগ।",
          "- 2FA on থাকলেও prompt নেই।",
          "- পুরনো logo, ভুল tier name, missing link।",
          "- Login screen-এ 'signup bonus' (partner-এর signup bonus নেই)।",
          "সন্দেহ হলে tab বন্ধ করে bookmark থেকে ফ্রেশ খুলুন।",
          "## Sign-in-এর পর",
          "- চলতি সপ্তাহের tier ও NGR — [Affiliate Commission](/jeetbuzz-affiliate-commission)।",
          "- **Payout** block-এ balance ও request status — [Payment Methods](/jeetbuzz-affiliate-payment-methods)।",
          "- **Alerts** দেখুন।",
          "- নতুন campaign-এ ফ্রেশ creative নিন।",
          "## সম্পর্কিত পেজ",
          "- [Affiliate Dashboard](/jeetbuzz-affiliate-dashboard)",
          "- [Affiliate Commission](/jeetbuzz-affiliate-commission)",
          "- [Payment Methods](/jeetbuzz-affiliate-payment-methods)",
          "- [Affiliate Signup](/jeetbuzz-affiliate-signup)",
          "- [Login Security](/login-security)",
          "## নিরপেক্ষ ঘোষণা",
          "GetJeetBuzz সম্পাদকীয় affiliate। এই পেজ standard partner-portal access বর্ণনা করে; screen label ও security option পরিবর্তন হতে পারে।",
        ],
      }}
      related={siblings(AFFILIATE_CLUSTER, PATH)}
      faqs={[
        { q: "Is the JeetBuzz partner login different from the player login?", a: "Yes. Partner and player accounts are two separate systems on different portals. A player account cannot access the affiliate dashboard and vice versa." },
        { q: "Do I need 2FA on my partner account?", a: "It's opt-in but strongly recommended — a captured partner account can reroute commission. Enable via Dashboard → Security and store the recovery codes offline." },
        { q: "How long does a partner login session last?", a: "24 hours from the last successful login. After that, sign in again — the dashboard prompts you automatically." },
        { q: "What if I lost my 2FA phone and recovery codes?", a: "Contact affiliate support with NID, a live selfie holding it and your last payout reference. Identity re-verification takes 24–72 hours." },
        { q: "Why won't the login URL load in my browser?", a: "Almost always a local ISP or corporate network filter — try mobile data or the mobile app. Never trust an unofficial 'mirror' URL from social media." },
        { q: "Can affiliate commission ever be paid out without logging in?", a: "No. Every payout is initiated from inside the dashboard, which requires a login. Anyone offering a 'payout' outside the dashboard is running a scam." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "JeetBuzz partner login কি player login থেকে আলাদা?", a: "হ্যাঁ। দুটি আলাদা পোর্টাল, আলাদা সিস্টেম। player account থেকে affiliate dashboard-এ যাওয়া যায় না।" },
          { q: "Partner account-এ 2FA লাগবে?", a: "Opt-in, তবে দৃঢ়ভাবে সুপারিশ — চুরি হলে commission redirect হতে পারে। Dashboard → Security থেকে চালু করে recovery code offline রাখুন।" },
          { q: "Partner login session কতক্ষণ?", a: "শেষ সফল লগইনের ২৪ ঘণ্টা। এরপর আবার লগইন।" },
          { q: "2FA ফোন ও recovery code দুটোই গেলে?", a: "NID, live selfie, শেষ payout reference সহ affiliate support। ২৪–৭২ ঘণ্টা।" },
          { q: "URL browser-এ কেন লোড হচ্ছে না?", a: "সাধারণত ISP/network filter — mobile data বা mobile app ট্রাই করুন। Social media mirror কখনো নয়।" },
          { q: "লগইন ছাড়া commission payout হয়?", a: "না। প্রতিটি payout dashboard থেকে initiate হয়। বাইরে থেকে 'payout' offer scam।" },
        ],
      }}
    />
  ),
});