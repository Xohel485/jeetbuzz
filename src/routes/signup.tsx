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

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "JeetBuzz Signup 2026 | Create Your Account & Get Started | GetJeetBuzz" },
      {
        name: "description",
        content:
          "Complete your JeetBuzz Signup in minutes with our step-by-step registration guide. Learn account creation, verification, security tips, welcome offers and responsible gaming information.",
      },
      { property: "og:title", content: "JeetBuzz Signup. Open a Verified Account" },
      {
        property: "og:description",
        content:
          "Step-by-step JeetBuzz signup for BD, PK and IN players, phone, OTP, currency and first deposit covered.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("registration") },
      ogUrl("/signup"),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("registration") },
    ],
    links: [canonicalLink("/signup"), ...hreflangLinks("/signup")],
    scripts: [
      jsonLdScript(organizationSchema()),
      jsonLdScript(
        articleSchema({
          headline: "JeetBuzz Signup. Open a Verified Account",
          description:
            "Step-by-step JeetBuzz signup for Bangladesh, Pakistan and India, phone, OTP, currency and first deposit covered.",
          path: "/signup",
          image: imageAbsoluteUrl("registration"),
        }),
      ),
    ],
  }),
  component: () => (
    <GuidePage
      title={
        <>
          JeetBuzz <span className="gold-text">Signup</span>. Three-Minute Account Opening
        </>
      }
      subtitle="A focused signup hub for players from Bangladesh, Pakistan and India. Phone or email, OTP, currency choice and first deposit, without the marketing fluff."
      ctaIntent="signup"
      ctaLabel="Start JeetBuzz Signup"
      heroImage="registration"
      inlineImage="bonus"
      breadcrumbs={[{ name: "Signup", path: "/signup" }]}
      articleHeadline="JeetBuzz Signup. Open a Verified Account"
      articleDescription="Step-by-step JeetBuzz signup for BD, PK and IN players, phone, OTP, currency and first deposit covered."
      articlePath="/signup"
      body={[
        "## What JeetBuzz signup actually is",
        "Signing up creates one JeetBuzz player account that works across the Sportsbook, Casino, Live dealer studios, Exchange and Partner widgets. There is no separate JeetBuzz Casino signup, no separate JeetBuzz Live signup, no separate JeetBuzz Bangladesh signup form, the operator runs a single account model with regional cashier rails layered on top. Whether you found us searching for JeetBuzz, JetBuzz, JitBuzz, জিতবাজ or জিটবাজ, the destination is the same official signup page.",
        "## Before you tap Start JeetBuzz Signup",
        "Have three things ready: a SIM you control (BD, PK or IN number works), an email you can open in the next two minutes for verification, and the local wallet you plan to deposit from. In Bangladesh that is bKash, Nagad or Rocket. In Pakistan it is EasyPaisa, JazzCash or SadaPay. In India it is UPI, PhonePe, Paytm or Google Pay. The wallet must be in your own legal name, third-party deposits trip JeetBuzz anti-fraud checks at the first withdrawal.",
        "## The five-step signup flow",
        "1. Tap Start JeetBuzz Signup above. You land on the official JeetBuzz signup screen at the current live domain, bookmark it.",
        "2. Pick phone signup (fastest in South Asia) or email signup. Enter your number with the correct country code +880 / +92 / +91 and request the OTP.",
        "3. Type the OTP within 60 seconds. If it doesn't arrive, wait the full minute, then Resend once before switching to mobile data.",
        "4. Set a strong password (12+ characters, one number, one symbol). Pick your currency. BDT for Bangladesh, PKR for Pakistan, INR for India. Pick your interface language (English, Bengali, Urdu or Hindi).",
        "5. Optionally enter a promo code in the field at the bottom of the form, then accept the 18+ terms and tap Register. You are now a JeetBuzz player.",
        "## Choosing your currency at signup is permanent",
        "Your wallet currency is locked at signup. BDT accounts pay in and out in Bangladeshi Taka, PKR accounts in Pakistani Rupees, INR accounts in Indian Rupees. You cannot change the currency later, if you signed up with the wrong one, contact Live Chat before depositing and they can usually reset a fresh account. Do not deposit first and ask second.",
        "## Welcome bonus, opt in only with eyes open",
        "JeetBuzz offers a welcome bonus to first depositors. The Sportsbook variant, the Casino variant and the Live Casino variant each have different wagering, different max-bet rules and different game weighting. Skim our [Welcome Bonus](/welcome-bonus) page before you tick the box, once accepted, the bonus is binding until cleared, withdrawn or forfeited. Casual players are often better off declining the bonus and playing with their pure deposit balance.",
        "## KYC: when and what",
        "JeetBuzz lets you sign up and play instantly. KYC is triggered at your first significant withdrawal (usually the first one above the small-cashout threshold) or randomly on high-volume accounts. You will be asked for a clear photo of your NID (BD), CNIC (PK) or Aadhaar / PAN (IN) plus a selfie holding the same document. Submit clean photos in good light, about 80% of withdrawal delays we see come from blurry KYC uploads, not actual problems.",
        "## Why phone signup beats email signup",
        "Phone signup gets your account live in under three minutes. Email signup needs an inbox round-trip and is slower in Bangladesh where many players use a Gmail account they only check weekly. Phone is also the recovery channel. Forgot Password sends a link to whichever you registered with, and a SIM in your hand right now is faster than an email under spam filter.",
        "## What happens after Register",
        "You land in the JeetBuzz lobby with a zero balance. Open the Cashier (top right), pick your local wallet, type a deposit amount, and follow the on-screen instructions. Funds arrive in under a minute for bKash, Nagad, EasyPaisa, JazzCash and UPI. Your first deposit triggers welcome bonus credit if you opted in. From there everything is one click away: live cricket markets, IPL outrights, casino slots, live dealer Baccarat, Crazy Time, Aviator.",
        "## Brand variants you might have searched",
        "Search engines list JeetBuzz under several spellings. JeetBuzz, JetBuzz, JitBuzz, www jeetbuzz com, জিতবাজ, জিটবাজ. There is only one operator. Any \"alternative JeetBuzz signup\" link on Telegram, WhatsApp or a comment section is a phishing risk. Start your signup from the verified outbound button above instead of a forwarded URL.",
        "## One person, one account",
        "JeetBuzz enforces one account per NID, CNIC or Aadhaar. Duplicate accounts are detected at KYC and the duplicates are closed with balances frozen. If you already have an account but forgot the email or phone you used, do not sign up again, open Live Chat and recover the original.",
        "## If signup fails",
        "\"Phone number already registered\" means the SIM is on an existing account; try Forgot Password on the [Login](/login) page. \"Invalid OTP\" usually means the code expired; request a fresh one. \"Country not supported\" can show on a VPN, disable the VPN and retry on your real BD, PK or IN IP. \"Operation failed\" with no specific error is almost always an ISP block, switch to mobile data or use the [JeetBuzz APK Download](/download) to bypass DNS-level filtering.",
        "## Responsible play from day one",
        "Before depositing, set a deposit limit in Account → Responsible Gaming. JeetBuzz lets you cap daily, weekly and monthly deposits, and you can self-exclude for 24 hours, 30 days or six months. Strict 18+. If gambling stops being entertainment, take a break or call your local helpline, see our [Responsible Gaming](/responsible-gaming) page.",
        "## Final pre-signup checklist",
        "- Correct SIM in the phone? (the one you'll use long term)",
        "- Email inbox open in a second tab?",
        "- Wallet (bKash / EasyPaisa / UPI) is in your own name?",
        "- You are 18 or older?",
        "If yes to all, tap Start JeetBuzz Signup above and you'll be playing within five minutes.",
        "## How long until you can actually bet",
        "From tapping Start JeetBuzz Signup to your first live cricket bet, the realistic median is six to eight minutes. Two to three minutes for the form, one minute for OTP delivery, one to two minutes to deposit via bKash, EasyPaisa or UPI, and a minute to find the market you want. Players who already have their wallet PIN memorised and pick a quick deposit amount routinely beat five minutes end-to-end.",
        "## Signup on Android app vs. browser",
        "The signup form inside the JeetBuzz Android app is identical to the website form, with two small advantages: push OTP delivery is faster than SMS, and biometric unlock is offered as soon as the account is live. If your ISP throttles the public JeetBuzz domain, install the app first via our [Download](/download) page, then sign up inside it.",
        "## Account name vs display name vs payment-wallet name",
        "Three names that must align cleanly. Account name is your legal full name as it appears on NID, CNIC or Aadhaar, this is the name JeetBuzz uses for KYC and the only name that ever matters for withdrawals. Display name is the public handle visible on leaderboards; pick something innocuous. Payment-wallet name is whatever your bKash, EasyPaisa or UPI is registered under, it must match the legal name on your KYC document, or withdrawals will be rejected even though deposits worked. Sort this out at signup, not at first withdrawal.",
        "## What happens if you forget your password the day after signup",
        "Open the [Login](/login) page, tap Forgot Password, type the phone or email you registered with. A reset link arrives within 60 seconds. The new password takes effect immediately and force-logs out any other sessions. If neither the phone nor email is reachable, only 24/7 Live Chat can help, and they will ask identity questions tied to the registration data you entered, registered phone or email, chosen wallet currency, approximate signup date, and the first deposit method you used.",
        "## Where JeetBuzz signup fits in the wider market",
        "Players in Bangladesh, Pakistan and India typically evaluate a handful of platforms, for example JeetBuzz, Baji and Crickex, before opening their first account. This page is not a comparison. It documents the verified JeetBuzz signup flow only: one form, one currency choice, one wallet, one account that unlocks the entire JeetBuzz Sportsbook, Casino, Live and Exchange catalogue.",
      ]}
      faqs={[
        {
          q: "How long does JeetBuzz signup take?",
          a: "Under three minutes for phone signup if your OTP arrives quickly. Add another minute if you choose email signup, and a separate KYC step at first large withdrawal.",
        },
        {
          q: "Is JeetBuzz signup free?",
          a: "Yes. Opening a JeetBuzz player account costs nothing. You only fund the wallet with your first deposit, which becomes your starting balance.",
        },
        {
          q: "Can I sign up to JeetBuzz with email instead of phone?",
          a: "Yes, but phone signup is faster in Bangladesh, Pakistan and India because SMS OTP is more reliable than email delivery on mobile networks.",
        },
        {
          q: "Can I sign up to JeetBuzz from India?",
          a: "Yes. JeetBuzz accepts India players with INR currency and UPI / PhonePe / Paytm cashier rails. Hindi interface is auto-loaded.",
        },
        {
          q: "Is there a JeetBuzz Bangladesh signup that is different from the global one?",
          a: "No. There is one JeetBuzz signup form. The cashier and language adapt to your region automatically. BDT currency, Bengali UI, bKash / Nagad / Rocket deposits.",
        },
        {
          q: "Do I have to take the welcome bonus at signup?",
          a: "No. Opting in is optional. Many casual players skip it because bonuses come with wagering, max-bet caps and game-weighting rules. Read our welcome bonus page first.",
        },
        {
          q: "Can I open more than one JeetBuzz account?",
          a: "No. One person, one account, verified at KYC against your NID / CNIC / Aadhaar. Duplicate accounts are closed and balances frozen.",
        },
        {
          q: "Why does the signup form say my phone is already registered?",
          a: "The SIM is already attached to an existing JeetBuzz account. Use Forgot Password on the login page instead of signing up again.",
        },
        {
          q: "How does JeetBuzz signup differ from Baji or Crickex signup?",
          a: "This guide only covers JeetBuzz. The JeetBuzz signup form locks your wallet currency at registration and unlocks Sportsbook, Casino and Live with one set of credentials. For other operators, refer to their own help pages, we keep this page focused on the JeetBuzz flow.",
        },
        {
          q: "I am switching to JeetBuzz from a competitor, do I need a fresh account?",
          a: "Yes. Each operator runs its own KYC and wallet. A JeetBuzz signup is independent of any account you hold on another platform such as Krikya or 1xBet. Use a fresh password and the verified outbound button above.",
        },
      ]}
      related={[
        { to: "/login", title: "JeetBuzz Login", desc: "Already have an account? Sign in here." },
        { to: "/register", title: "JeetBuzz Registration", desc: "Detailed registration walkthrough." },
        { to: "/registration-guide", title: "Registration Guide", desc: "Localised BD / PK / IN signup steps." },
        { to: "/download", title: "JeetBuzz Download", desc: "Get the Android APK or iOS web app." },
        { to: "/welcome-bonus", title: "Welcome Bonus", desc: "Wagering, max-bet and opt-in rules." },
        { to: "/payment-methods", title: "Payment Methods", desc: "bKash, EasyPaisa, UPI and more." },
      ]}
    />
  ),
});
