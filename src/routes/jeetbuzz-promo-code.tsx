import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { BONUS_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-promo-code";
const TITLE = "JeetBuzz Promo Code 2026 — Where to Find Valid Codes Today";
const DESC = "How JeetBuzz promo codes work in 2026 — where to find today's valid codes, how to redeem, rollover rules and why some codes silently fail.";

export const Route = createFileRoute("/jeetbuzz-promo-code")({
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
      title={<>JeetBuzz <span className="gold-text">Promo Code</span></>}
      titleByLocale={{ bn: <>জিতবাজ <span className="gold-text">প্রোমো কোড</span></> }}
      subtitle="How JeetBuzz promo codes really work — where today's valid codes come from, how to redeem, and why some codes never credit."
      subtitleByLocale={{ bn: "জিতবাজ প্রোমো কোড কীভাবে কাজ করে — আজকের বৈধ কোড কোথা থেকে আসে, কীভাবে রিডিম করবেন এবং কিছু কোড কেন কাজ করে না।" }}
      ctaIntent="signup" ctaLabel="Open Promotions"
      breadcrumbs={[{ name: "Bonuses", path: "/bonuses" }, { name: "Promo Code", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Read this first — why we do not paste a code",
        "Promo codes rotate weekly and around big cricket events (IPL, BPL, PSL, Asia Cup). Any page claiming a single evergreen code is either recycling an expired one or fishing your details. The valid codes at any moment live in exactly two places: **the promotions tab inside your JeetBuzz account** and **legitimate affiliate emails**.",
        "## Where today's codes actually come from",
        "1. **In-app promotions tab** — always the source of truth.",
        "2. **Official email newsletter** — opt in from Account → Preferences.",
        "3. **JeetBuzz affiliate partners** — codes with an affiliate suffix that also credit the affiliate.",
        "Anything on random Telegram groups is either the same code with a different suffix or already expired.",
        "## How to redeem a promo code",
        "1. Log in and open the **Cashier** (or Promotions page).",
        "2. Select **Deposit** and choose your amount.",
        "3. In the **Promo code** field, paste the code — check for trailing spaces.",
        "4. Confirm the bonus preview shown below the field.",
        "5. Complete the deposit through bKash / JazzCash / UPI / your chosen rail.",
        "The bonus credits once the deposit lands. If the field says \"invalid code\", the code has expired, is region-locked, or is one-per-account and already used.",
        "## Common promo code types",
        "- **Match deposit** — most common; +% on top of your deposit up to a cap.",
        "- **Free bet** — a token you can stake on cricket / football; only the winnings return, not the token.",
        "- **Cashback** — % refund on next-week net losses.",
        "- **Free spins** — slot spins on a specific game; winnings usually carry rollover.",
        "## Wagering — the trap",
        "Every promo code carries a rollover (see the [Bonuses Hub](/bonuses)). A 100% match with 15x rollover means 15 × your bonus in bets before withdrawal. Max-bet caps apply while the bonus is active. Read the terms shown in the cashier — they are the enforceable version.",
        "## Why the code silently failed",
        "- One-per-account limit already used.",
        "- Deposit method excluded (some codes are wallet-only or bank-only).",
        "- Below the minimum qualifying deposit.",
        "- Region mismatch (BD-only code from a PK IP).",
        "- Code expired the day it was issued (promo codes tied to a single match).",
      ]}
      bodyByLocale={{
        bn: [
          "## আগে এটি পড়ুন — কেন আমরা একটি নির্দিষ্ট কোড দিই না",
          "প্রোমো কোড সাপ্তাহিক এবং বড় ক্রিকেট ইভেন্টের (IPL, BPL, PSL, Asia Cup) সময় বদলায়। যে কোনো পেজ যদি একটি চিরস্থায়ী কোড দাবি করে সেটি হয় মেয়াদোত্তীর্ণ কোড রিসাইকেল করছে অথবা আপনার তথ্য চুরি করছে। যেকোনো মুহূর্তে বৈধ কোড ঠিক দুই জায়গায় থাকে: **আপনার JeetBuzz অ্যাকাউন্টের প্রোমোশন ট্যাব** এবং **বৈধ অ্যাফিলিয়েট ইমেইল**।",
          "## আজকের কোড আসলে কোথা থেকে আসে",
          "১. **ইন-অ্যাপ প্রোমোশন ট্যাব** — সবসময় সত্যের উৎস।",
          "২. **অফিশিয়াল ইমেইল নিউজলেটার** — Account → Preferences থেকে অপ্ট-ইন করুন।",
          "৩. **JeetBuzz অ্যাফিলিয়েট পার্টনার** — অ্যাফিলিয়েট সাফিক্স যুক্ত কোড যা অ্যাফিলিয়েটকেও ক্রেডিট দেয়।",
          "র‍্যান্ডম টেলিগ্রাম গ্রুপে যা পাওয়া যায় তা একই কোড ভিন্ন সাফিক্সে অথবা ইতিমধ্যে মেয়াদোত্তীর্ণ।",
          "## প্রোমো কোড কীভাবে রিডিম করবেন",
          "১. লগইন করে **Cashier** (বা Promotions পেজ) খুলুন।",
          "২. **Deposit** নির্বাচন করে পরিমাণ দিন।",
          "৩. **Promo code** ফিল্ডে কোড পেস্ট করুন — শেষের ফাঁকা স্পেস চেক করুন।",
          "৪. ফিল্ডের নিচে দেখানো বোনাস প্রিভিউ নিশ্চিত করুন।",
          "৫. bKash / Nagad-এর মাধ্যমে ডিপোজিট সম্পন্ন করুন।",
          "ডিপোজিট আসামাত্র বোনাস ক্রেডিট হয়। \"invalid code\" এলে বুঝবেন কোড মেয়াদোত্তীর্ণ, রিজিয়ন-লকড, অথবা প্রতি অ্যাকাউন্টে এক-বার এবং ইতিমধ্যে ব্যবহৃত।",
          "## সাধারণ কোডের ধরন",
          "- **ম্যাচ ডিপোজিট** — সবচেয়ে সাধারণ; ক্যাপ পর্যন্ত ডিপোজিটের +% বোনাস।",
          "- **ফ্রি বেট** — ক্রিকেট/ফুটবলে বাজি ধরার টোকেন; শুধু বিজয় ফেরত আসে, টোকেন নয়।",
          "- **ক্যাশব্যাক** — পরের সপ্তাহের নেট ক্ষতির % ফেরত।",
          "- **ফ্রি স্পিন** — নির্দিষ্ট স্লট গেমে স্পিন; বিজয়ে রোলওভার প্রযোজ্য।",
          "## রোলওভার — ফাঁদ",
          "প্রতিটি প্রোমো কোডে রোলওভার থাকে ([Bonuses Hub](/bonuses) দেখুন)। ১৫x রোলওভারে ১০০% ম্যাচ মানে উইথড্রয়ালের আগে ১৫ × বোনাস পরিমাণ বাজি ধরতে হবে। বোনাস সক্রিয় থাকাকালীন ম্যাক্স-বেট ক্যাপ প্রযোজ্য। ক্যাশিয়ারে দেখানো শর্তাবলী কার্যকর সংস্করণ।",
          "## কোড নীরবে কেন ব্যর্থ হলো",
          "- প্রতি অ্যাকাউন্টে এক-বার সীমা ইতিমধ্যে ব্যবহৃত।",
          "- ডিপোজিট মেথড বাদ (কিছু কোড শুধু ওয়ালেট বা শুধু ব্যাংক)।",
          "- ন্যূনতম কোয়ালিফাইং ডিপোজিটের নিচে।",
          "- রিজিয়ন মিসম্যাচ (BD-only কোড PK IP থেকে)।",
          "- কোড ইস্যুর দিনই মেয়াদোত্তীর্ণ (একক ম্যাচের সঙ্গে বাঁধা কোড)।",
        ],
      }}
      related={siblings(BONUS_CLUSTER, PATH)}
      faqs={[
        { q: "What is today's JeetBuzz promo code?", a: "Valid codes rotate weekly. The only reliable list is inside your JeetBuzz account → Promotions tab, or in the official email newsletter. Pages promising a permanent code are either recycling expired ones or fishing." },
        { q: "Can I stack a promo code with the welcome bonus?", a: "Usually no — only one active promo per deposit. The cashier disables stacking automatically. Read the specific promo T&C." },
        { q: "Do promo codes work on live cricket exchange bets?", a: "Exchange bets typically contribute 0% to wagering. Use sportsbook markets or slots to clear the rollover." },
        { q: "Why does my code say 'invalid'?", a: "Expired, region-locked, one-per-account already used, or you missed the qualifying minimum deposit. The cashier displays the specific reason on hover." },
        { q: "Are promo codes different for BD, PK and IN?", a: "Yes. Some codes are region-scoped based on the payment method they target (bKash for BD, JazzCash for PK, UPI for IN)." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "আজকের জিতবাজ প্রোমো কোড কী?", a: "বৈধ কোড সাপ্তাহিক বদলায়। একমাত্র নির্ভরযোগ্য তালিকা আপনার JeetBuzz অ্যাকাউন্ট → Promotions ট্যাবে অথবা অফিশিয়াল ইমেইল নিউজলেটারে। স্থায়ী কোড দাবিকারী পেজ হয় মেয়াদোত্তীর্ণ রিসাইকেল করছে অথবা ফিশিং।" },
          { q: "প্রোমো কোড কি ওয়েলকাম বোনাসের সাথে যুক্ত করা যায়?", a: "সাধারণত না — প্রতি ডিপোজিটে একটি সক্রিয় প্রোমো। ক্যাশিয়ার স্বয়ংক্রিয়ভাবে স্ট্যাকিং নিষ্ক্রিয় করে। নির্দিষ্ট প্রোমো T&C পড়ুন।" },
          { q: "লাইভ ক্রিকেট এক্সচেঞ্জ বাজিতে কোড কাজ করে?", a: "এক্সচেঞ্জ বাজি সাধারণত ০% রোলওভারে অবদান রাখে। রোলওভার ক্লিয়ার করতে স্পোর্টসবুক মার্কেট বা স্লট ব্যবহার করুন।" },
          { q: "আমার কোড 'invalid' দেখাচ্ছে কেন?", a: "মেয়াদোত্তীর্ণ, রিজিয়ন-লকড, প্রতি অ্যাকাউন্টে এক-বার ইতিমধ্যে ব্যবহৃত, অথবা কোয়ালিফাইং ন্যূনতম ডিপোজিট মিস। ক্যাশিয়ার হোভারে নির্দিষ্ট কারণ দেখায়।" },
          { q: "BD, PK, IN-এর প্রোমো কোড কি আলাদা?", a: "হ্যাঁ। কিছু কোড পেমেন্ট মেথডের ভিত্তিতে রিজিয়ন-স্কোপড (bKash-এর জন্য BD, JazzCash-এর জন্য PK, UPI-এর জন্য IN)।" },
        ],
      }}
    />
  ),
});