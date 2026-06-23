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
        "## Why Rocket",
        "Rocket has the deepest village-level agent network of any Bangladeshi mobile wallet — handy if you cash out to an agent and rarely use the app.",
        "## How to deposit",
        "1. Open JeetBuzz Cashier > Deposit > Rocket.",
        "2. Send the displayed amount to the merchant number via the Rocket app or USSD.",
        "3. Use the reference exactly.",
        "4. Submit the TrxID back to JeetBuzz.",
        "## USSD note",
        "If you use *322# instead of the app, the SMS still carries a TrxID — that is the one to paste.",
        "## Withdrawals",
        "Withdraw to the same Rocket account that deposited. KYC must be done.",
        "## Common mistakes",
        "- Wrong PIN entered three times (locks the Rocket account, not JeetBuzz)",
        "- Sending without the JeetBuzz reference",
        "- Sending to an agent number instead of the merchant",
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