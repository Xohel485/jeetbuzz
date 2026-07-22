import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { BONUS_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-promo-code";
const TITLE = "JeetBuzz Promo Code 2026. Valid Codes Today, How to Redeem & Rollover";
const DESC = "JeetBuzz promo code 2026, where today's valid codes live, how to redeem in the cashier, rollover math, region locks (BD/PK/IN), and every reason a code silently fails.";

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
      subtitle="How JeetBuzz promo codes really work, where today's valid codes come from, how to redeem, and why some codes never credit."
      subtitleByLocale={{ bn: "জিতবাজ প্রোমো কোড কীভাবে কাজ করে, আজকের বৈধ কোড কোথা থেকে আসে, কীভাবে রিডিম করবেন এবং কিছু কোড কেন কাজ করে না।" }}
      ctaIntent="signup" ctaLabel="Open Promotions"
      breadcrumbs={[{ name: "Bonuses", path: "/bonuses" }, { name: "Promo Code", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Read this first, why we do not paste a code",
        "Promo codes rotate weekly and around big cricket events (IPL, BPL, PSL, Asia Cup). Any page claiming a single evergreen code is either recycling an expired one or fishing your details. The valid codes at any moment live in exactly two places: **the promotions tab inside your JeetBuzz account** and **legitimate affiliate emails**.",
        "## Where today's codes actually come from",
        "1. **In-app promotions tab**, always the source of truth.",
        "2. **Official email newsletter**, opt in from Account → Preferences.",
        "3. **JeetBuzz affiliate partners**, codes with an affiliate suffix that also credit the affiliate.",
        "Anything on random Telegram groups is either the same code with a different suffix or already expired.",
        "## How JeetBuzz promo codes are structured",
        "A JeetBuzz promo code is a short alphanumeric string (usually 6–10 characters) tied to four things at the moment it was issued: a **bonus template** (match %, free bet size, cashback %, or free spin count), a **qualifying deposit range** (minimum, sometimes maximum), a **region scope** (BD / PK / IN or global), and an **expiry** (from a single match to a full month). When you paste it in the cashier the system checks all four; failing any one returns 'invalid'.",
        "Codes ending in an affiliate suffix (e.g. `…-AFF25`) work identically for you and additionally credit an affiliate. They are not 'better' codes, the % and cap are set at the campaign level, not on the suffix.",
        "## How to redeem a promo code",
        "1. Log in and open the **Cashier** (or Promotions page).",
        "2. Select **Deposit** and choose your amount.",
        "3. In the **Promo code** field, paste the code, check for trailing spaces.",
        "4. Confirm the bonus preview shown below the field.",
        "5. Complete the deposit through bKash / JazzCash / UPI / your chosen rail.",
        "The bonus credits once the deposit lands. If the field says \"invalid code\", the code has expired, is region-locked, or is one-per-account and already used.",
        "## Redeeming on the mobile app vs desktop",
        "The Android app and iOS web app show the promo code field in the same cashier flow, but the copy-paste behaviour differs. On Android, long-pressing to paste sometimes appends an invisible newline, if paste fails, tap the field, use the keyboard paste and delete any trailing space. On iOS, the Safari share-sheet paste is clean. On desktop, browser autofill occasionally overwrites the field, clear it, then paste.",
        "## Common promo code types",
        "- **Match deposit**, most common; +% on top of your deposit up to a cap.",
        "- **Free bet**, a token you can stake on cricket / football; only the winnings return, not the token.",
        "- **Cashback**, % refund on next-week net losses.",
        "- **Free spins**, slot spins on a specific game; winnings usually carry rollover.",
        "- **Deposit-free code** (rare), a token that credits without a deposit; almost always tied to a VIP tier or a re-engagement offer, never publicly circulated.",
        "- **Event-scoped code**, attached to a specific fixture (an IPL final, a Bangladesh T20I). Expires at the toss of that match. If you see it after start, it is already dead.",
        "## Wagering, the trap",
        "Every promo code carries a rollover (see the [Bonuses Hub](/bonuses)). A 100% match with 15x rollover means 15 × your bonus in bets before withdrawal. Max-bet caps apply while the bonus is active. Read the terms shown in the cashier, they are the enforceable version.",
        "### Worked example, the rollover math",
        "Deposit BDT 1,000, code gives 100% up to BDT 3,000, rollover 15×. Bonus credited: BDT 1,000 (matched to your deposit). Rollover requirement: BDT 1,000 × 15 = **BDT 15,000 in qualifying wagers**. Sportsbook markets ≥ 1.60 usually count 100%; slots count 100%; live casino counts 5–20%; exchange lay bets count 0%. Clearing on ≥ 1.60 sportsbook takes roughly 15–20 bets at BDT 1,000 stake, a full weekend, not an afternoon.",
        "## Region locks. BD, PK, IN codes are not interchangeable",
        "Codes carry a country scope tied to the payment rail they target. A `BKASH-` code refuses a JazzCash or UPI deposit; a `UPI-` code refuses bKash. VPN switching to defeat this typically triggers an account review, not a bonus credit. If the intended rail is unavailable in your country, the code simply is not for you.",
        "## Stacking rules",
        "Only one active promo per deposit. If you already have an unfinished welcome bonus, the cashier greys out the promo field until wagering completes or you forfeit the bonus. Promo codes do **not** stack with the [first deposit bonus](/jeetbuzz-first-deposit-bonus) or the [refer-a-friend bonus](/jeetbuzz-refer-bonus). See the [Welcome Bonus](/welcome-bonus) page for the exact overlap rules.",
        "## Freshness, how often codes change",
        "- **Weekly baseline**, reload, cashback and low-value free-bet codes rotate every Monday.",
        "- **Match-day**, event-scoped codes appear 24–48 hours before a marquee fixture and die at the toss.",
        "- **Monthly**, one high-cap match code around the start of each calendar month.",
        "- **Ad-hoc**. VIP and re-engagement codes issued to specific segments; not published anywhere public.",
        "If your last cashier check was more than a week ago, whatever code you saved is likely stale, reopen the promotions tab before depositing.",
        "## Verifying a code before you deposit",
        "1. Paste the code in the cashier with an amount at or above the code's minimum.",
        "2. Read the **bonus preview** line under the field, this is the enforceable summary.",
        "3. Confirm the shown match %, cap and rollover match what you expected.",
        "4. If the preview is absent, the code did not validate, do not deposit expecting the bonus.",
        "## Why the code silently failed",
        "- One-per-account limit already used.",
        "- Deposit method excluded (some codes are wallet-only or bank-only).",
        "- Below the minimum qualifying deposit.",
        "- Region mismatch (BD-only code from a PK IP).",
        "- Code expired the day it was issued (promo codes tied to a single match).",
        "- Trailing space or invisible character from a copy-paste on Android.",
        "- Active unfinished bonus already occupying the promo slot.",
        "- Account tier does not qualify (some codes are VIP-only).",
        "## Related",
        "- [Welcome Bonus](/welcome-bonus), the sign-up bonus you get without a code.",
        "- [First Deposit Bonus](/jeetbuzz-first-deposit-bonus), mechanics of the FDB match.",
        "- [Refer Bonus](/jeetbuzz-refer-bonus), code and link structure for refer-a-friend.",
        "- [Bonuses Hub](/bonuses), every active promo type in one map.",
      ]}
      bodyByLocale={{
        bn: [
          "## আগে এটি পড়ুন, কেন আমরা একটি নির্দিষ্ট কোড দিই না",
          "প্রোমো কোড সাপ্তাহিক এবং বড় ক্রিকেট ইভেন্টের (IPL, BPL, PSL, Asia Cup) সময় বদলায়। যে কোনো পেজ যদি একটি চিরস্থায়ী কোড দাবি করে সেটি হয় মেয়াদোত্তীর্ণ কোড রিসাইকেল করছে অথবা আপনার তথ্য চুরি করছে। যেকোনো মুহূর্তে বৈধ কোড ঠিক দুই জায়গায় থাকে: **আপনার JeetBuzz অ্যাকাউন্টের প্রোমোশন ট্যাব** এবং **বৈধ অ্যাফিলিয়েট ইমেইল**।",
          "## আজকের কোড আসলে কোথা থেকে আসে",
          "১. **ইন-অ্যাপ প্রোমোশন ট্যাব**, সবসময় সত্যের উৎস।",
          "২. **অফিশিয়াল ইমেইল নিউজলেটার**. Account → Preferences থেকে অপ্ট-ইন করুন।",
          "৩. **JeetBuzz অ্যাফিলিয়েট পার্টনার**, অ্যাফিলিয়েট সাফিক্স যুক্ত কোড যা অ্যাফিলিয়েটকেও ক্রেডিট দেয়।",
          "র‍্যান্ডম টেলিগ্রাম গ্রুপে যা পাওয়া যায় তা একই কোড ভিন্ন সাফিক্সে অথবা ইতিমধ্যে মেয়াদোত্তীর্ণ।",
          "## প্রোমো কোড কীভাবে রিডিম করবেন",
          "১. লগইন করে **Cashier** (বা Promotions পেজ) খুলুন।",
          "২. **Deposit** নির্বাচন করে পরিমাণ দিন।",
          "৩. **Promo code** ফিল্ডে কোড পেস্ট করুন, শেষের ফাঁকা স্পেস চেক করুন।",
          "৪. ফিল্ডের নিচে দেখানো বোনাস প্রিভিউ নিশ্চিত করুন।",
          "৫. bKash / Nagad-এর মাধ্যমে ডিপোজিট সম্পন্ন করুন।",
          "ডিপোজিট আসামাত্র বোনাস ক্রেডিট হয়। \"invalid code\" এলে বুঝবেন কোড মেয়াদোত্তীর্ণ, রিজিয়ন-লকড, অথবা প্রতি অ্যাকাউন্টে এক-বার এবং ইতিমধ্যে ব্যবহৃত।",
          "## সাধারণ কোডের ধরন",
          "- **ম্যাচ ডিপোজিট**, সবচেয়ে সাধারণ; ক্যাপ পর্যন্ত ডিপোজিটের +% বোনাস।",
          "- **ফ্রি বেট**, ক্রিকেট/ফুটবলে বাজি ধরার টোকেন; শুধু বিজয় ফেরত আসে, টোকেন নয়।",
          "- **ক্যাশব্যাক**, পরের সপ্তাহের নেট ক্ষতির % ফেরত।",
          "- **ফ্রি স্পিন**, নির্দিষ্ট স্লট গেমে স্পিন; বিজয়ে রোলওভার প্রযোজ্য।",
          "## রোলওভার, ফাঁদ",
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
        { q: "Can I stack a promo code with the welcome bonus?", a: "Usually no, only one active promo per deposit. The cashier disables stacking automatically. Read the specific promo T&C." },
        { q: "Do promo codes work on live cricket exchange bets?", a: "Exchange bets typically contribute 0% to wagering. Use sportsbook markets or slots to clear the rollover." },
        { q: "Why does my code say 'invalid'?", a: "Expired, region-locked, one-per-account already used, or you missed the qualifying minimum deposit. The cashier displays the specific reason on hover." },
        { q: "Are promo codes different for BD, PK and IN?", a: "Yes. Some codes are region-scoped based on the payment method they target (bKash for BD, JazzCash for PK, UPI for IN)." },
        { q: "How often are JeetBuzz promo codes refreshed?", a: "Weekly baseline (reload/cashback), match-day for marquee fixtures, and a monthly high-cap code around the start of each calendar month. VIP codes are ad-hoc and not public." },
        { q: "Do JeetBuzz promo codes ever require no deposit?", a: "Rarely, and only for VIP or re-engagement segments. Any publicly advertised 'no-deposit code' is almost certainly fake." },
        { q: "Why did the promo field say 'invalid' after I pasted a fresh code?", a: "Most often a trailing space from an Android long-press paste, an unfinished bonus still occupying the promo slot, or the qualifying minimum being below the code's threshold." },
        { q: "Do affiliate-suffixed codes give a better bonus?", a: "No, the % and cap are set at the campaign level. The suffix only credits the affiliate; your bonus is identical." },
        { q: "Can I redeem a promo code after depositing?", a: "No. The code must be entered before you submit the deposit. Post-deposit crediting is a scam pattern; the cashier is the only valid entry point." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "আজকের জিতবাজ প্রোমো কোড কী?", a: "বৈধ কোড সাপ্তাহিক বদলায়। একমাত্র নির্ভরযোগ্য তালিকা আপনার JeetBuzz অ্যাকাউন্ট → Promotions ট্যাবে অথবা অফিশিয়াল ইমেইল নিউজলেটারে। স্থায়ী কোড দাবিকারী পেজ হয় মেয়াদোত্তীর্ণ রিসাইকেল করছে অথবা ফিশিং।" },
          { q: "প্রোমো কোড কি ওয়েলকাম বোনাসের সাথে যুক্ত করা যায়?", a: "সাধারণত না, প্রতি ডিপোজিটে একটি সক্রিয় প্রোমো। ক্যাশিয়ার স্বয়ংক্রিয়ভাবে স্ট্যাকিং নিষ্ক্রিয় করে। নির্দিষ্ট প্রোমো T&C পড়ুন।" },
          { q: "লাইভ ক্রিকেট এক্সচেঞ্জ বাজিতে কোড কাজ করে?", a: "এক্সচেঞ্জ বাজি সাধারণত ০% রোলওভারে অবদান রাখে। রোলওভার ক্লিয়ার করতে স্পোর্টসবুক মার্কেট বা স্লট ব্যবহার করুন।" },
          { q: "আমার কোড 'invalid' দেখাচ্ছে কেন?", a: "মেয়াদোত্তীর্ণ, রিজিয়ন-লকড, প্রতি অ্যাকাউন্টে এক-বার ইতিমধ্যে ব্যবহৃত, অথবা কোয়ালিফাইং ন্যূনতম ডিপোজিট মিস। ক্যাশিয়ার হোভারে নির্দিষ্ট কারণ দেখায়।" },
          { q: "BD, PK, IN-এর প্রোমো কোড কি আলাদা?", a: "হ্যাঁ। কিছু কোড পেমেন্ট মেথডের ভিত্তিতে রিজিয়ন-স্কোপড (bKash-এর জন্য BD, JazzCash-এর জন্য PK, UPI-এর জন্য IN)।" },
        ],
      }}
    />
  ),
});