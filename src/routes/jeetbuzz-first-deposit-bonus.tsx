import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { BONUS_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-first-deposit-bonus";
const TITLE = "JeetBuzz First Deposit Bonus 2026 — Match %, Minimum & Rollover";
const DESC = "JeetBuzz first deposit bonus explained for 2026 — match percentage, minimum qualifying deposit, wagering requirement and mistakes that void the bonus.";

export const Route = createFileRoute("/jeetbuzz-first-deposit-bonus")({
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
      eyebrow="Bonuses"
      title={<>JeetBuzz <span className="gold-text">First Deposit Bonus</span></>}
      titleByLocale={{ bn: <>জিতবাজ <span className="gold-text">ফার্স্ট ডিপোজিট বোনাস</span></> }}
      subtitle="Match percentage, minimum qualifying deposit, wagering, max-bet cap and the small mistakes that most often void the first deposit bonus."
      subtitleByLocale={{ bn: "ম্যাচ পার্সেন্টেজ, ন্যূনতম কোয়ালিফাইং ডিপোজিট, ওয়েজারিং, ম্যাক্স-বেট ক্যাপ এবং যেসব ছোট ভুলে ফার্স্ট ডিপোজিট বোনাস বাতিল হয়।" }}
      ctaIntent="signup" ctaLabel="Claim First Deposit Bonus"
      breadcrumbs={[{ name: "Bonuses", path: "/bonuses" }, { name: "First Deposit Bonus", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## What the first deposit bonus is",
        "The JeetBuzz first deposit bonus is a **percentage match** on your very first real-money transfer into a brand-new account. Typical offers land in the 100%–200% range up to a cap, credited within minutes of the deposit clearing.",
        "## How to claim it — the correct sequence",
        "1. **Register** a new JeetBuzz account (guide: [Registration](/registration-guide)).",
        "2. Go to **Promotions** and **opt in to the first deposit bonus** *before* transferring money. Bonuses are never applied retroactively.",
        "3. Open the **Cashier**, pick your rail (bKash / Nagad / JazzCash / EasyPaisa / UPI) and enter an amount **above the qualifying minimum** (usually 500 BDT / 500 PKR / ₹500).",
        "4. Complete the deposit. Both cash and bonus balance appear once the deposit lands.",
        "## The math (worked example)",
        "- Match: 100% up to 10,000 BDT.",
        "- Deposit: 2,000 BDT.",
        "- Bonus credited: 2,000 BDT.",
        "- Rollover: 15x on the bonus → 2,000 × 15 = **30,000 BDT of bets** required before withdrawal.",
        "- Max-bet while bonus is active: 500 BDT per stake.",
        "The rollover applies to the bonus balance, not the cash + bonus combined — check your specific promo terms.",
        "## Mistakes that void the bonus",
        "- Deposited *before* opting in.",
        "- Placed a bet above the max-bet cap (even one bet voids everything).",
        "- Cancelled the deposit mid-rollover.",
        "- Requested a withdrawal before wagering was complete (some operators fully void).",
        "- Multi-accounting from the same device / IP.",
        "## Game contribution to wagering",
        "- Slots — typically 100%.",
        "- Live casino table games — 10–20%.",
        "- Cricket sportsbook (single, odds ≥ 1.60) — 100%.",
        "- Cricket exchange — 0%.",
        "Playing slots or standard sportsbook clears the requirement fastest.",
        "## Withdrawal after clearing",
        "Once turnover is met, the bonus balance converts to withdrawable cash. Then follow the standard [Withdrawal Guide](/withdrawal-guide). Expected timing per rail is in [Withdrawal Time](/jeetbuzz-withdrawal-time).",
      ]}
      bodyByLocale={{
        bn: [
          "## ফার্স্ট ডিপোজিট বোনাস কী",
          "জিতবাজ ফার্স্ট ডিপোজিট বোনাস একটি নতুন অ্যাকাউন্টে আপনার প্রথম রিয়েল-মানি ট্রান্সফারের উপর **শতাংশ ম্যাচ**। সাধারণ অফার ক্যাপ পর্যন্ত ১০০%–২০০% রেঞ্জে, ডিপোজিট ক্লিয়ার হওয়ার কয়েক মিনিটের মধ্যে ক্রেডিট।",
          "## সঠিক ক্রমে দাবি করুন",
          "১. একটি নতুন JeetBuzz অ্যাকাউন্ট **রেজিস্টার** করুন ([Registration](/registration-guide) গাইড)।",
          "২. **Promotions**-এ যান এবং টাকা ট্রান্সফার করার *আগে* **ফার্স্ট ডিপোজিট বোনাস-এ অপ্ট ইন করুন**। বোনাস কখনো পূর্ববর্তীভাবে প্রয়োগ হয় না।",
          "৩. **Cashier** খুলুন, রেল বাছুন (bKash / Nagad) এবং **কোয়ালিফাইং ন্যূনতমের উপরে** (সাধারণত ৫০০ BDT) পরিমাণ দিন।",
          "৪. ডিপোজিট সম্পন্ন করুন। ডিপোজিট আসামাত্র ক্যাশ এবং বোনাস ব্যালেন্স দুটোই দেখাবে।",
          "## গণিত (উদাহরণ)",
          "- ম্যাচ: ১০,০০০ BDT পর্যন্ত ১০০%।",
          "- ডিপোজিট: ২,০০০ BDT।",
          "- ক্রেডিটেড বোনাস: ২,০০০ BDT।",
          "- রোলওভার: বোনাসের উপর ১৫x → ২,০০০ × ১৫ = উইথড্রয়ালের আগে **৩০,০০০ BDT বাজি** প্রয়োজন।",
          "- বোনাস সক্রিয় থাকাকালীন ম্যাক্স-বেট: প্রতি স্টেকে ৫০০ BDT।",
          "রোলওভার বোনাস ব্যালেন্সে প্রযোজ্য, ক্যাশ + বোনাস একসাথে নয় — আপনার নির্দিষ্ট প্রোমো শর্তাবলী চেক করুন।",
          "## যেসব ভুলে বোনাস বাতিল হয়",
          "- অপ্ট-ইন করার *আগে* ডিপোজিট।",
          "- ম্যাক্স-বেট ক্যাপের উপর বাজি (একটি বাজিও সব বাতিল করে)।",
          "- রোলওভার চলাকালীন ডিপোজিট বাতিল।",
          "- রোলওভার সম্পূর্ণ হওয়ার আগে উইথড্রয়াল রিকোয়েস্ট (কিছু অপারেটর পুরোপুরি বাতিল করে)।",
          "- একই ডিভাইস/IP থেকে মাল্টি-অ্যাকাউন্টিং।",
          "## গেম কন্ট্রিবিউশন",
          "- স্লট — সাধারণত ১০০%।",
          "- লাইভ ক্যাসিনো টেবিল গেম — ১০–২০%।",
          "- ক্রিকেট স্পোর্টসবুক (সিঙ্গল, অডস ≥ ১.৬০) — ১০০%।",
          "- ক্রিকেট এক্সচেঞ্জ — ০%।",
          "স্লট বা স্ট্যান্ডার্ড স্পোর্টসবুক খেলে রোলওভার দ্রুত ক্লিয়ার হয়।",
          "## ক্লিয়ার হওয়ার পর উইথড্রয়াল",
          "টার্নওভার পূরণ হলে বোনাস ব্যালেন্স উইথড্রয়েবল ক্যাশে রূপান্তরিত হয়। এরপর স্ট্যান্ডার্ড [Withdrawal Guide](/withdrawal-guide) অনুসরণ করুন। প্রতি রেলের সময় [Withdrawal Time](/jeetbuzz-withdrawal-time)-এ।",
        ],
      }}
      related={siblings(BONUS_CLUSTER, PATH)}
      faqs={[
        { q: "How big is the JeetBuzz first deposit bonus?", a: "The match percentage rotates between offers, typically 100%–200% up to a cap. Check the Promotions tab inside your account for the current active offer." },
        { q: "Can I claim the first deposit bonus after depositing?", a: "No. You must opt in from the Promotions page before completing the first deposit. Bonuses cannot be applied retroactively." },
        { q: "Does the bonus apply on the second deposit too?", a: "The first deposit bonus is one-time on the first transfer only. Reload bonuses and promo codes cover later deposits — see [Promo Code](/jeetbuzz-promo-code)." },
        { q: "What is the max-bet while the bonus is active?", a: "Typically 500 BDT / 500 PKR / ₹500 per stake. One bet above the cap voids the entire bonus and any winnings derived from it." },
        { q: "Can I withdraw the deposit and keep playing the bonus?", a: "No. Withdrawing before wagering is complete usually forfeits the bonus balance in full." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "জিতবাজ ফার্স্ট ডিপোজিট বোনাস কত বড়?", a: "ম্যাচ শতাংশ অফারের সাথে বদলায়, সাধারণত ক্যাপ পর্যন্ত ১০০%–২০০%। বর্তমান সক্রিয় অফারের জন্য অ্যাকাউন্টের Promotions ট্যাব দেখুন।" },
          { q: "ডিপোজিটের পর ফার্স্ট ডিপোজিট বোনাস দাবি করা যায়?", a: "না। প্রথম ডিপোজিট সম্পন্ন করার আগে Promotions পেজ থেকে অপ্ট-ইন করতে হবে। বোনাস পূর্ববর্তীভাবে প্রয়োগ হয় না।" },
          { q: "দ্বিতীয় ডিপোজিটেও কি বোনাস প্রযোজ্য?", a: "ফার্স্ট ডিপোজিট বোনাস শুধু প্রথম ট্রান্সফারে এক-বার। পরবর্তী ডিপোজিটের জন্য রিলোড বোনাস ও প্রোমো কোড — দেখুন [Promo Code](/jeetbuzz-promo-code)।" },
          { q: "বোনাস সক্রিয় থাকাকালীন ম্যাক্স-বেট কত?", a: "সাধারণত প্রতি স্টেকে ৫০০ BDT। ক্যাপের উপরে একটি বাজিও পুরো বোনাস ও এর থেকে আসা বিজয় বাতিল করে।" },
          { q: "ডিপোজিট উইথড্র করে বোনাস চালিয়ে যেতে পারি?", a: "না। রোলওভার সম্পূর্ণ হওয়ার আগে উইথড্র করলে সাধারণত বোনাস ব্যালেন্স সম্পূর্ণ বাজেয়াপ্ত হয়।" },
        ],
      }}
    />
  ),
});