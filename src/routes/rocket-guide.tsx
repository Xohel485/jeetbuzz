import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";

const PATH = "/rocket-guide";
const TITLE =
  "JeetBuzz Rocket Deposit & Withdrawal Guide Bangladesh 2026 - DBBL Mobile Banking";
const DESC =
  "Step-by-step JeetBuzz Rocket (DBBL Mobile Banking) deposit and withdrawal guide for Bangladesh 2026, biller ID, PIN tips, minimums, processing times and error fixes.";

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
    links: [canonicalLink(PATH)...hreflangLinks(PATH)],
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
        "## jeetbuzz Rocket deposit, full step-by-step",
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
        "- **Rocket app Send Money:** standard purple Rocket UI with a Note field, your JeetBuzz reference goes there.",
        "- **USSD prompt:** dial \\*322#, the SMS receipt is identical to the app and includes the same TrxID format.",
        "## jeetbuzz Rocket withdrawal",
        "1. Open **Cashier > Withdraw > Rocket**.",
        "2. Enter the BDT amount (minimum 500 BDT).",
        "3. Enter the Rocket account number you deposited from. Account name must match your JeetBuzz profile.",
        "4. Submit. Funds arrive 30–60 minutes during business hours, up to 2 hours on holidays.",
        "## Rocket deposits and withdrawals, at a glance",
        "Withdrawal limits may vary depending on your account status and the operator's current policies. Please check the cashier or contact customer support for the latest limits.",
        "Typical deposit minimum is around 300 BDT and processing usually completes within a few minutes. Any applicable Rocket fees are shown before you confirm the transaction.",
        "## Common mistakes",
        "- Wrong PIN entered three times locks the Rocket account (not JeetBuzz). DBBL customer care can unlock it",
        "- Sending without the JeetBuzz reference code",
        "- Sending to an agent number instead of the merchant biller",
        "- Using a relative's Rocket account, name must match your jeetbuzz profile",
        "## Related guides",
        "Continue with the [Deposit Guide](/deposit-guide), [Withdrawal Guide](/withdrawal-guide), [bKash Guide](/bkash-guide), [Nagad Guide](/nagad-guide), [APK Download](/apk-download-guide) and [Welcome Bonus](/welcome-bonus).",
      ]}
      bodyByLocale={{
        bn: [
          "> **এক নজরে:** Rocket জিতবাজ বাংলাদেশের তৃতীয় স্তম্ভ। Cashier > Deposit > Rocket → Rocket অ্যাপ বা *322# USSD থেকে Send Money → সঠিক পরিমাণে রেফারেন্স কোডসহ পাঠান → TrxID সাবমিট করুন। মিনিমাম ৩০০ টাকা; ডিপোজিট সাধারণত কয়েক মিনিটে ক্রেডিট হয় এবং উইথড্রয়ালের প্রসেসিং সময় ভিন্ন হতে পারে।",
          "## কেন জিতবাজ বাংলাদেশে Rocket",
          "Rocket হলো Dutch-Bangla Bank-এর মোবাইল ব্যাংকিং সেবা। বাংলাদেশের যেকোনো মোবাইল ওয়ালেটের মধ্যে এটির গ্রাম পর্যায়ের এজেন্ট নেটওয়ার্ক সবচেয়ে বিস্তৃত, অ্যাপের পরিবর্তে এজেন্টের মাধ্যমে ক্যাশ-আউট করলে এটি সুবিধাজনক। জিতবাজ Rocket ডিপোজিট সঠিক পছন্দ যখন bKash বা Nagad মেইনটেন্যান্সে থাকে বা দৈনিক ক্যাপ পূর্ণ হয়।",
          "## জিতবাজ Rocket ডিপোজিট, সম্পূর্ণ ধাপে ধাপে",
          "১. জিতবাজে সাইন ইন করে **Cashier > Deposit > Rocket** খুলুন।",
          "২. পরিমাণ লিখুন (মিনিমাম ৩০০ টাকা, bKash/Nagad-এর চেয়ে সামান্য বেশি)।",
          "৩. মার্চেন্ট নম্বর এবং ইউনিক রেফারেন্স (যেমন JB-R8K3) কপি করুন।",
          "৪. **App** বা **USSD** বেছে নিন:",
          "   - **App:** Rocket খুলে Send Money ট্যাপ করুন, মার্চেন্ট নম্বর পেস্ট করুন, সঠিক পরিমাণে নোট ফিল্ডে রেফারেন্সসহ পাঠান।",
          "   - **USSD:** \\*322# ডায়াল করুন, Send Money বেছে নিন, মার্চেন্ট নম্বর ও পরিমাণ দিন।",
          "৫. ৪-সংখ্যার Rocket PIN দিয়ে কনফার্ম করুন।",
          "৬. Rocket SMS রিসিট থেকে TrxID কপি করুন (যেমন 7P4K2N9X)।",
          "৭. জিতবাজ ফর্মে পেস্ট করে সাবমিট করুন। ১–৫ মিনিটে ব্যালেন্স আপডেট।",
          "## স্ক্রিনশট ওয়াকথ্রু",
          "- **ক্যাশিয়ার Rocket টাইল:** বেগুনি Rocket লোগো, বিলার নম্বর কপি-পিল, ১৫ মিনিটের কাউন্টডাউন।",
          "- **Rocket অ্যাপ Send Money:** স্ট্যান্ডার্ড বেগুনি Rocket UI Note ফিল্ডসহ. JeetBuzz রেফারেন্স সেখানেই যাবে।",
          "- **USSD প্রম্পট:** \\*322# ডায়াল করুন, SMS রিসিটে অ্যাপের মতোই একই TrxID ফরম্যাট থাকে।",
          "## জিতবাজ Rocket উইথড্রয়াল",
          "১. **Cashier > Withdraw > Rocket** খুলুন।",
          "২. পরিমাণ লিখুন (মিনিমাম ৫০০ টাকা)।",
          "৩. যেই Rocket অ্যাকাউন্ট থেকে ডিপোজিট করেছেন সেই নম্বর দিন। নাম জিতবাজ প্রোফাইলের সঙ্গে মিলতে হবে।",
          "৪. সাবমিট করুন। বিজনেস আওয়ারে ৩০–৬০ মিনিটে আসে, ছুটির দিনে ২ ঘণ্টা পর্যন্ত।",
          "## Rocket ডিপোজিট ও উইথড্রয়াল, এক নজরে",
          "উইথড্রয়াল লিমিট অ্যাকাউন্টের অবস্থা ও অপারেটরের বর্তমান নীতিমালার উপর নির্ভর করে। সর্বশেষ তথ্যের জন্য ক্যাশিয়ার দেখুন বা কাস্টমার সাপোর্টে যোগাযোগ করুন।",
          "ডিপোজিট মিনিমাম সাধারণত ৩০০ টাকার আশেপাশে এবং সাধারণত কয়েক মিনিটে প্রসেস হয়। প্রযোজ্য Rocket ফি কনফার্ম করার আগেই দেখানো হয়।",
          "## সাধারণ ভুল",
          "- টানা তিনবার ভুল PIN দিলে Rocket অ্যাকাউন্ট লক হয় (জিতবাজ নয়). DBBL কাস্টমার কেয়ার আনলক করবে",
          "- JeetBuzz রেফারেন্স কোড ছাড়া পাঠানো",
          "- মার্চেন্ট বিলারের বদলে এজেন্ট নম্বরে পাঠানো",
          "- আত্মীয়ের Rocket অ্যাকাউন্ট ব্যবহার, নাম জিতবাজ প্রোফাইলের সঙ্গে মিলতে হবে",
          "## সম্পর্কিত গাইড",
          "এর সঙ্গে দেখুন [Deposit Guide](/deposit-guide), [Withdrawal Guide](/withdrawal-guide), [bKash Guide](/bkash-guide), [Nagad Guide](/nagad-guide), [APK Download](/apk-download-guide) এবং [Welcome Bonus](/welcome-bonus)।",
        ],
      }}
      faqs={[
        { q: "Is Rocket slower than bKash?", a: "Usually a few minutes slower, still within the same hour." },
        { q: "Can I use USSD?", a: "Yes, the SMS receipt still includes the TrxID JeetBuzz needs." },
        { q: "What if my Rocket PIN is locked?", a: "Unlock through DBBL customer care; JeetBuzz cannot help with that." },
        { q: "Is there a minimum?", a: "Typically 200–500 BDT, same as bKash and Nagad." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "Rocket কি bKash-এর চেয়ে ধীর?", a: "সাধারণত কয়েক মিনিট ধীর, তবে একই ঘণ্টার মধ্যে।" },
          { q: "USSD ব্যবহার করা যাবে?", a: "হ্যাঁ. SMS রিসিটে জিতবাজের জন্য প্রয়োজনীয় TrxID থাকে।" },
          { q: "Rocket PIN লক হলে কী করব?", a: "DBBL কাস্টমার কেয়ার আনলক করবে; জিতবাজ এতে সাহায্য করতে পারে না।" },
          { q: "মিনিমাম কত?", a: "সাধারণত ৩০০–৫০০ টাকা, bKash ও Nagad-এর কাছাকাছি।" },
          { q: "কোন কোন এজেন্ট নম্বরে পাঠানো নিষেধ?", a: "যেকোনো পারসোনাল বা এজেন্ট নম্বর, শুধু ক্যাশিয়ারে দেখানো মার্চেন্ট বিলার নম্বরে পাঠাতে হবে।" },
        ],
      }}
      related={[
        { to: "/bkash-guide", title: "bKash on JeetBuzz" },
        { to: "/nagad-guide", title: "Nagad on JeetBuzz" },
        { to: "/deposit-guide", title: "Deposit Guide" },
        { to: "/withdrawal-guide", title: "Withdrawal Guide" },
      ]}
    />
  ),
});