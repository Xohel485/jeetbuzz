import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import { LOGIN_CLUSTER, siblings } from "@/lib/clusters";

export const Route = createFileRoute("/login-security")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Login Security — 2FA & Anti-Phishing (2026) | GetJeetBuzz" },
      { name: "description", content: "Protect your JeetBuzz login — enable 2FA, recognise fake mirror pages, and lock down your account against phishing in BD, PK and IN." },
      { property: "og:title", content: "JeetBuzz Login Security — 2FA & Anti-Phishing" },
      { property: "og:description", content: "Account security best practices for JeetBuzz login." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("security") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("security") },
    ],
  }),
  component: () => (
    <GuidePage
      title={<>JeetBuzz <span className="gold-text">Login Security</span></>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">লগইন সিকিউরিটি</span></>,
        ur: <>JeetBuzz <span className="gold-text">لاگ ان سیکیورٹی</span></>,
        hi: <>JeetBuzz <span className="gold-text">लॉगिन सिक्योरिटी</span></>,
      }}
      subtitle="A short, practical checklist that takes 5 minutes and protects your JeetBuzz balance from the three threats players actually face — phishing, SIM swap and credential reuse."
      subtitleByLocale={{
        bn: "৫ মিনিটের চেকলিস্ট যা ৩টি বাস্তব হুমকি থেকে আপনার ব্যালান্স রক্ষা করে — ফিশিং, সিম-সোয়াপ ও পাসওয়ার্ড রিইউজ।",
        ur: "5 منٹ کی چیک لسٹ جو 3 حقیقی خطرات سے بچاتی ہے — فشنگ، SIM سویپ اور پاس ورڈ کا دوبارہ استعمال۔",
        hi: "5 मिनट की चेकलिस्ट जो 3 असली ख़तरों से बचाती है — फ़िशिंग, SIM स्वैप और पासवर्ड का दोबारा उपयोग।",
      }}
      ctaIntent="login"
      ctaLabel="Secure your JeetBuzz login"
      heroImage="security"
      body={[
        "## Step 1 — Enable 2FA today",
        "Open account settings on the official JeetBuzz site and turn on Two-Factor Authentication. Prefer an authenticator app (Google Authenticator, Authy) over SMS where possible — SMS is vulnerable to SIM-swap attacks.",
        "## Step 2 — Use a unique password",
        "Don't reuse your bKash, JazzCash, UPI or email password for JeetBuzz. If any other site you use leaks, attackers will try the same combo on JeetBuzz.",
        "## Step 3 — Bookmark the real login URL",
        "Open JeetBuzz via the verified outbound link on this page once, then bookmark the page you land on. Always launch from that bookmark — never from search ads.",
        "## Step 4 — Recognise fake mirrors",
        "Red flags: asks for your bKash / Nagad / UPI PIN at login, missing HTTPS lock icon, mis-spelled brand (jeetbuz, jetbuzz), or asks you to install a new APK before login. Real JeetBuzz never asks for wallet PINs.",
        "## Step 5 — Lock your phone & email",
        "Your JeetBuzz account is only as safe as the inboxes attached to it. Add 2FA on your email too, and a SIM PIN on your phone.",
        "> If you suspect compromise, change your password immediately, then contact JeetBuzz support to freeze pending withdrawals.",
      ]}
      faqs={[
        { q: "Is SMS 2FA safer than no 2FA?", a: "Yes, much. But an authenticator app is significantly stronger against SIM-swap. Use the app if your phone supports it." },
        { q: "What does a fake mirror look like?", a: "Usually a near-identical clone with a slightly different domain (extra letter, wrong TLD). The dead giveaway: it asks for a wallet PIN at login. JeetBuzz never does." },
        { q: "Can I see active sessions?", a: "Yes — JeetBuzz shows a 'Recent activity' or 'Active devices' panel in account settings. Sign out anything you don't recognise and change your password." },
      ]}
      related={siblings(LOGIN_CLUSTER, "/login-security")}
      articleHeadline="JeetBuzz Login Security — 2FA & Anti-Phishing"
      articleDescription="A short, practical security checklist for your JeetBuzz login."
      articlePath="/login-security"
    />
  ),
});