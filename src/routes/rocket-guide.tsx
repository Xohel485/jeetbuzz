import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/rocket-guide";
const TITLE =
  "JeetBuzz Rocket Deposit & Withdrawal Guide Bangladesh 2026 - DBBL Mobile Banking";
const DESC =
  "Step-by-step JeetBuzz Rocket (DBBL Mobile Banking) deposit and withdrawal guide for Bangladesh 2026 — biller ID, PIN tips, minimums, processing times and error fixes.";

export const Route = createFileRoute("/rocket-guide")({
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
      eyebrow="Rocket"
      title={<>JeetBuzz <span className="gold-text">Rocket</span> Guide</>}
      titleByLocale={{
        bn: <>জিতবাজ <span className="gold-text">Rocket</span> গাইড</>,
      }}
      subtitle="Rocket (Dutch-Bangla Mobile Banking) is the third pillar of JeetBuzz payments in Bangladesh."
      subtitleByLocale={{
        bn: "Rocket (Dutch-Bangla Mobile Banking) জিতবাজ বাংলাদেশের তৃতীয় প্রধান পেমেন্ট মাধ্যম।",
      }}
      breadcrumbs={[{ name: "Payments", path: "/payment-methods" }, { name: "Rocket", path: PATH }]}
      articlePath={PATH}
      articleHeadline={TITLE}
      articleDescription={DESC}
      body={[
        "## Why Rocket on JeetBuzz Bangladesh",
        "Rocket is Dutch-Bangla Bank's mobile banking arm. It has the deepest village-level agent network of any Bangladeshi mobile wallet, which matters if you cash out via an agent instead of the app. Jeetbuzz rocket deposit is the right pick when bKash or Nagad have wallet maintenance windows or your daily cap is full.",
        "## jeetbuzz Rocket deposit — full step-by-step",
        "1. Sign in to JeetBuzz and open **Cashier > Deposit > Rocket**.",
        "2. Enter the amount (minimum 300 BDT, slightly higher than bKash/Nagad).",
        "3. Copy the merchant number and the unique reference (e.g. JB-R8K3).",
        "4. Choose **App** or **USSD**:",
        "   - **App:** open Rocket, tap Send Money, paste the merchant number, send the exact amount with the reference in the note.",
        "   - **USSD:** dial \\*322#, choose Send Money, enter the merchant number and amount.",
        "5. Enter your 4-digit Rocket PIN and confirm.",
        "6. Copy the TrxID from the Rocket SMS receipt (looks like 7P4K2N9X).",
        "7. Paste the TrxID into the JeetBuzz form and submit. Balance updates within 1–5 minutes.",
        "## Screenshot walkthrough",
        "- **Cashier Rocket tile:** purple Rocket logo, biller number in a copy-pill, 15-minute countdown.",
        "- **Rocket app Send Money:** standard purple Rocket UI with a Note field — your JeetBuzz reference goes there.",
        "- **USSD prompt:** dial \\*322#, the SMS receipt is identical to the app and includes the same TrxID format.",
        "## jeetbuzz Rocket withdrawal",
        "1. Open **Cashier > Withdraw > Rocket**.",
        "2. Enter the BDT amount (minimum 500 BDT).",
        "3. Enter the Rocket account number you deposited from. Account name must match your JeetBuzz profile.",
        "4. Submit. Funds arrive 30–60 minutes during business hours, up to 2 hours on holidays.",
        "## Rocket limits, fees and timing",
        "| Action | Minimum | Default Max / Day | Time | JeetBuzz Fee |",
        "|---|---|---|---|---|",
        "| Deposit | 300 BDT | 50,000 BDT | Instant – 5 min | 0% |",
        "| Withdrawal (Bronze) | 500 BDT | 25,000 BDT | 30–60 min | 0% |",
        "| Withdrawal (Silver) | 500 BDT | 100,000 BDT | 30–60 min | 0% |",
        "| Withdrawal (Gold+) | 500 BDT | 300,000 BDT | 30–60 min | 0% |",
        "Rocket's own send-money fee (about 5 BDT per 1,000 BDT) applies on your side.",
        "## Common mistakes",
        "- Wrong PIN entered three times locks the Rocket account (not JeetBuzz) — DBBL customer care can unlock it",
        "- Sending without the JeetBuzz reference code",
        "- Sending to an agent number instead of the merchant biller",
        "- Using a relative's Rocket account — name must match your jeetbuzz profile",
        "## Related guides",
        "Continue with the [Deposit Guide](/deposit-guide), [Withdrawal Guide](/withdrawal-guide), [bKash Guide](/bkash-guide), [Nagad Guide](/nagad-guide), [APK Download](/apk-download-guide) and [Welcome Bonus](/welcome-bonus).",
      ]}
      bodyByLocale={{
        bn: [
          "## কেন Rocket",
          "Rocket-এর গ্রাম পর্যায়ের এজেন্ট নেটওয়ার্ক বাংলাদেশের যেকোনো মোবাইল ওয়ালেটের চেয়ে বিস্তৃত — যদি আপনি অ্যাপের চেয়ে এজেন্টের কাছে ক্যাশ আউট করেন, এটি সুবিধাজনক।",
          "## কীভাবে ডিপোজিট করবেন",
          "১. জিতবাজ Cashier > Deposit > Rocket খুলুন।",
          "২. দেখানো পরিমাণ মার্চেন্ট নম্বরে Rocket অ্যাপ বা USSD দিয়ে পাঠান।",
          "৩. রেফারেন্স হুবহু ব্যবহার করুন।",
          "৪. TrxID জিতবাজে সাবমিট করুন।",
          "## USSD নোট",
          "অ্যাপের বদলে *322# ব্যবহার করলেও SMS-এ TrxID থাকে — সেটিই পেস্ট করতে হবে।",
          "## উইথড্রয়াল",
          "যেই Rocket অ্যাকাউন্ট থেকে ডিপোজিট করেছেন সেই অ্যাকাউন্টেই উইথড্র করুন। KYC সম্পন্ন থাকতে হবে।",
          "## সাধারণ ভুল",
          "- টানা তিনবার ভুল PIN (Rocket অ্যাকাউন্ট লক হয়, জিতবাজ নয়)",
          "- জিতবাজ রেফারেন্স ছাড়া পাঠানো",
          "- মার্চেন্টের বদলে এজেন্ট নম্বরে পাঠানো",
        ],
      }}
      faqs={[
        { q: "Is Rocket slower than bKash?", a: "Usually a few minutes slower, still within the same hour." },
        { q: "Can I use USSD?", a: "Yes — the SMS receipt still includes the TrxID JeetBuzz needs." },
        { q: "What if my Rocket PIN is locked?", a: "Unlock through DBBL customer care; JeetBuzz cannot help with that." },
        { q: "Is there a minimum?", a: "Typically 200–500 BDT, same as bKash and Nagad." },
      ]}
      related={[
        { to: "/bkash-guide", title: "bKash on JeetBuzz" },
        { to: "/nagad-guide", title: "Nagad on JeetBuzz" },
        { to: "/deposit-guide", title: "Deposit Guide" },
        { to: "/withdrawal-guide", title: "Withdrawal Guide" },
      ]}
    />
  ),
});