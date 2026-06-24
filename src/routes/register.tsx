import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { imageAbsoluteUrl } from "@/lib/images";
import {
  articleSchema,
  organizationSchema,
  jsonLdScript,
  canonicalLink,
  hreflangLinks,
  ogUrl,
} from "@/lib/schema";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Register 2026 | Safe Account Registration Guide | GetJeetBuzz" },
      {
        name: "description",
        content:
          "Register a JeetBuzz account safely using our complete 2026 guide. Find registration requirements, account verification, security recommendations and helpful FAQs for new users.",
      },
      { property: "og:title", content: "JeetBuzz Registration — Full Account Setup" },
      {
        property: "og:description",
        content:
          "Detailed JeetBuzz registration flow with KYC, currency, first deposit and verification tips for South Asia.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("registration") },
      ogUrl("/register"),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("registration") },
    ],
    links: [canonicalLink("/register"), ...hreflangLinks("/register")],
    scripts: [
      jsonLdScript(organizationSchema()),
      jsonLdScript(
        articleSchema({
          headline: "JeetBuzz Registration — Full Account Setup",
          description:
            "Detailed JeetBuzz registration flow with KYC, currency, first deposit and verification tips for South Asia.",
          path: "/register",
          image: imageAbsoluteUrl("registration"),
        }),
      ),
    ],
  }),
  component: () => (
    <GuidePage
      title={
        <>
          JeetBuzz <span className="gold-text">Registration</span> — Full Account Setup
        </>
      }
      subtitle="The complete JeetBuzz registration path for BD, PK and IN players — paperwork, KYC, currency selection, password hygiene and verified first deposit explained."
      ctaIntent="signup"
      ctaLabel="Register on JeetBuzz"
      heroImage="registration"
      inlineImage="security"
      breadcrumbs={[{ name: "Register", path: "/register" }]}
      articleHeadline="JeetBuzz Registration — Full Account Setup"
      articleDescription="Detailed JeetBuzz registration flow with KYC, currency, first deposit and verification tips for South Asia."
      articlePath="/register"
      body={[
        "## Registration vs. signup vs. login",
        "These three words get mixed up. Signup is the form you fill in once. Registration is the wider process — form, verification, KYC, first deposit, account hardening. Login is what you do every day afterwards. This page covers the full registration arc end-to-end so when a friend asks how to register on JeetBuzz you can hand them a single link instead of explaining over WhatsApp.",
        "## What you are registering for",
        "A JeetBuzz player account is a single wallet across the JeetBuzz Sportsbook (cricket including IPL, BPL, PSL, T20I, ODI and Test markets; football, kabaddi, tennis), JeetBuzz Casino (slots from Pragmatic Play, JILI, PG Soft, Spadegaming), JeetBuzz Live (Evolution and Ezugi live dealer tables, Crazy Time, Andar Bahar, Teen Patti), the JeetBuzz Exchange (peer-to-peer cricket odds) and Aviator-style crash games. One registration, full catalogue.",
        "## The paperwork checklist before you start",
        "- A SIM you actually use long-term. Avoid burner numbers — Forgot Password sends a code there.",
        "- A working email inbox you can check in the next two minutes.",
        "- The national ID you will use at KYC: NID for Bangladesh, CNIC for Pakistan, Aadhaar or PAN for India. Have a clean photo or be able to take one in daylight.",
        "- A local payment wallet in your own legal name. Third-party deposits are blocked at withdrawal.",
        "- A password manager or somewhere safe to write a 12+ character password.",
        "## Step 1 — Reach the official registration page",
        "Tap Register on JeetBuzz above. The button is a server redirect to the current live JeetBuzz registration URL — it stays current even when JeetBuzz rotates domains around an ISP block. Avoid forwarded links on Telegram, WhatsApp comment sections or YouTube descriptions. Brand variants you may have searched (JetBuzz, JitBuzz, www jeetbuzz com, জিতবাজ, জিটবাজ) all point at this same operator.",
        "## Step 2 — Choose phone or email registration",
        "Phone registration is the standard route in BD, PK and IN. Enter your number with country code, request OTP, key the code within 60 seconds. Email registration is available for players who prefer it but adds an inbox round-trip and is more fragile on Gmail spam filters. Phone wins in 95% of cases.",
        "## Step 3 — Build your account profile",
        "Username should be unique and forgettable to outsiders — it appears on certain leaderboards. Password should be 12+ characters with at least one number and one symbol. Avoid your phone number, date of birth or anything in your Facebook. JeetBuzz salts and hashes server-side but a weak password is still the easiest attack vector.",
        "## Step 4 — Currency selection (permanent)",
        "Your wallet currency is locked at registration. Bangladesh registrations pick BDT, Pakistan picks PKR, India picks INR. The choice ties your account to one regional cashier set: BDT can deposit and withdraw via bKash, Nagad, Rocket and Upay; PKR via EasyPaisa, JazzCash and SadaPay; INR via UPI, PhonePe, Paytm and Google Pay. Pick wrong and you will have to ask Live Chat to reset the account before any deposit lands.",
        "## Step 5 — Optional promo code",
        "If you arrived via a JeetBuzz Partner link, your promo code is usually pre-filled. If not, paste it before tapping Register — adding it after registration is sometimes possible but not always. The promo code only matters if you also opt into the first-deposit welcome bonus.",
        "## Step 6 — Accept the 18+ terms and submit",
        "Read the terms. The two clauses that catch players out: maximum bet while a bonus is active (often 100–200 BDT / PKR / INR), and the no-third-party-payments rule. Tick the box and tap Register.",
        "## Step 7 — First login and account hardening",
        "Use the [Login](/login) hub to sign in for the first time. Immediately open Account → Security and: enable 2FA (SMS or TOTP), verify your email if you registered with phone, set deposit limits in Responsible Gaming, and review the active sessions list. Two minutes here saves hours of recovery later.",
        "## Step 8 — KYC verification",
        "KYC at JeetBuzz is event-driven, not signup-time. Most players sail through the first deposit and small withdrawals with no documents. The first time you hit the higher withdrawal tier, JeetBuzz opens a verification window: upload a clear photo of your NID / CNIC / Aadhaar (both sides), then a selfie holding the same document with today's date written on a piece of paper. Decisions usually arrive within 24 hours. Common reasons for rejection: blurry photo, glare, document expired, name on bank wallet does not match the document.",
        "## Step 9 — First deposit",
        "Open the Cashier, pick your wallet, enter the amount. Bangladesh players: minimum is usually 200 BDT via bKash. Pakistan players: 200 PKR via EasyPaisa. India players: 100 INR via UPI. Funds arrive in under 90 seconds in the vast majority of cases. See our [Deposit Withdrawal Guide](/deposit-withdrawal-guide) for processor-specific tips.",
        "## Step 10 — First withdrawal sanity check",
        "Before depositing a large amount, deposit a small amount and request a small withdrawal back. This tests the whole loop: KYC trigger, name match, wallet linking, processing time. Players who skip this step are the ones who post angry reviews three weeks later — the system works, but you want to discover any name-mismatch issue with 500 BDT on the line, not 50,000.",
        "## After registration — what to actually do",
        "Bookmark the [Login](/login) page. Add the [Download](/download) page to your phone home screen if your ISP throttles JeetBuzz. Skim the [Bonus & Promotions](/bonus-and-promotions) page so you know which offers are worth your time. Read the [Login Security](/login-security) checklist. That is enough — the rest is playing.",
        "## Mistakes to avoid",
        "- Registering with a SIM borrowed from a friend (account is unrecoverable when they swap SIMs).",
        "- Using your real name in the username field.",
        "- Picking the wrong currency to chase a bonus advertised in another currency.",
        "- Skipping 2FA \"for now\" and forgetting forever.",
        "- Depositing a large sum before testing a small withdrawal.",
        "## Responsible gaming reminder",
        "Registration includes acceptance of the 18+ terms. Set deposit limits before, not after, your first big session. Use the cool-off and self-exclude tools — they are there because the operator knows some players need them, not as a marketing fig leaf. Help lines and external resources are listed on our [Responsible Gaming](/responsible-gaming) page.",
        "## Registration timelines you can expect",
        "Form submission to first lobby load: under three minutes for phone registration, four to five for email. First deposit clearing: under 90 seconds for bKash, Nagad, EasyPaisa, JazzCash, UPI and PhonePe. KYC turnaround at first large withdrawal: usually under 24 hours when documents are clean, occasionally up to 72 hours during cricket peak weekends (IPL final, BPL final, T20 World Cup). Withdrawal clearing after KYC: 15 minutes to a few hours depending on processor and amount.",
        "## Registering on the JeetBuzz Android app",
        "If your ISP throttles the public JeetBuzz domain, install the Android APK from our [Download](/download) page first, then register inside the app. The form is identical, push OTP delivery is faster than SMS, and biometric login is offered immediately after first sign-in. iOS users follow the same flow via the iOS web app — Safari, Add to Home Screen, then Register inside the installed shortcut.",
        "## Why three names must align — and how to align them",
        "JeetBuzz cross-checks three names: the name on your registration profile, the name on the KYC document (NID, CNIC or Aadhaar), and the name on the payment wallet (bKash, EasyPaisa, UPI). If any of the three disagree, withdrawals stall even though deposits worked. Fix this at registration by typing your legal name exactly as it appears on your NID, then making sure your wallet is registered under the same name. Two minutes of friction here saves a multi-day support ticket later.",
        "## What separates a registered JeetBuzz player from a casual visitor",
        "A casual visitor can browse markets and read the welcome bonus terms but cannot place a bet, deposit, withdraw, claim a promo, enter a tournament, post on the Exchange, request KYC unlocking of higher limits, contact 24/7 Live Chat from an authenticated session, or run a JeetBuzz Partner affiliate link. Registration is the gate. Once through it, everything from the Aviator round starting in 30 seconds to the IPL final outright market is one tap away.",
        "## How JeetBuzz registration sits among other South Asian operators",
        "Players often shortlist JeetBuzz against neighbours like Baji or Crickex before deciding where to register. We deliberately keep this page operator-specific: the registration arc described above — form, currency lock, KYC at first big withdrawal, three-name alignment — applies only to JeetBuzz. Following another platform's playbook here will cause withdrawal delays. Use the verified outbound button to register, then return to the [Login](/login) hub for daily access.",
      ]}
      faqs={[
        {
          q: "Is JeetBuzz registration the same as signup?",
          a: "Signup is the form. Registration is the wider arc — form, verification, KYC, first deposit and account hardening. This page covers all of it.",
        },
        {
          q: "Does JeetBuzz registration require KYC up front?",
          a: "No. You can register, deposit and play instantly. KYC is triggered at your first larger withdrawal or on certain high-volume accounts.",
        },
        {
          q: "Can I change my wallet currency after registration?",
          a: "Generally no. Currency is locked when you register. If you picked the wrong one, contact Live Chat before depositing — they can usually reset a fresh account.",
        },
        {
          q: "How many JeetBuzz accounts can I register?",
          a: "Exactly one per person, verified at KYC against your NID, CNIC or Aadhaar. Duplicate accounts are closed with balances frozen.",
        },
        {
          q: "What documents does JeetBuzz accept at KYC?",
          a: "NID for Bangladesh, CNIC for Pakistan, Aadhaar or PAN for India. Plus a selfie holding the same document. Passports are accepted as a fallback.",
        },
        {
          q: "Can I register on the JeetBuzz Android app instead of the website?",
          a: "Yes. The registration form inside the app is identical to the website form. See our [Download](/download) page for the official APK.",
        },
        {
          q: "Why do I see JeetBuzz spelled JetBuzz or JitBuzz?",
          a: "Common misspellings, not separate operators. The real brand is JeetBuzz. Register from this verified hub rather than from a misspelled domain.",
        },
        {
          q: "Is JeetBuzz Partner registration different?",
          a: "Yes. Affiliates and master agents register at the JeetBuzz Partner portal. See our [Affiliate Program](/affiliate-program) page for that flow.",
        },
        {
          q: "How is JeetBuzz registration different from Baji or Crickex registration?",
          a: "This page documents JeetBuzz only. The JeetBuzz flow locks wallet currency at signup, defers KYC until your first larger withdrawal, and enforces strict alignment between your registration name, KYC document and payment wallet. For competitor flows, consult those operators' own help centres.",
        },
        {
          q: "Why do users compare JeetBuzz with platforms like Krikya before registering?",
          a: "First-time bettors in BD, PK and IN naturally evaluate two or three brands before committing. Once you have decided on JeetBuzz, the comparison is over — follow the ten-step registration above and the rest of this guide treats JeetBuzz as your single platform.",
        },
      ]}
      related={[
        { to: "/signup", title: "JeetBuzz Signup", desc: "Quick three-minute account creation." },
        { to: "/login", title: "JeetBuzz Login", desc: "Sign in once registration is complete." },
        { to: "/registration-guide", title: "Registration Guide", desc: "Localised step-by-step for BD, PK and IN." },
        { to: "/verification", title: "Verification", desc: "KYC document standards and timelines." },
        { to: "/payment-methods", title: "Payment Methods", desc: "All cashier rails in one place." },
        { to: "/affiliate-program", title: "Affiliate Program", desc: "Register as a JeetBuzz Partner." },
      ]}
    />
  ),
});
