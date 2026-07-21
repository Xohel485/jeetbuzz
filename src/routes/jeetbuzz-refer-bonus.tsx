import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import { canonicalLink, hreflangLinks, ogUrl, jsonLdScript, articleSchema } from "@/lib/schema";
import { BONUS_CLUSTER, siblings } from "@/lib/clusters";

const PATH = "/jeetbuzz-refer-bonus";
const TITLE = "JeetBuzz Refer Bonus 2026 — Refer-a-Friend Reward Explained";
const DESC = "How the JeetBuzz refer bonus works in 2026 — refer-a-friend reward, qualifying steps, why some referrals never credit and the affiliate upgrade path.";

export const Route = createFileRoute("/jeetbuzz-refer-bonus")({
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
      title={<>JeetBuzz <span className="gold-text">Refer Bonus</span></>}
      titleByLocale={{ bn: <>জিতবাজ <span className="gold-text">রেফার বোনাস</span></> }}
      subtitle="Refer-a-friend reward on JeetBuzz — how it credits, why some referrals silently fail, and when it makes sense to upgrade to the affiliate program."
      subtitleByLocale={{ bn: "জিতবাজে রেফার-এ-ফ্রেন্ড রিওয়ার্ড — কীভাবে ক্রেডিট হয়, কেন কিছু রেফারেল নীরবে ব্যর্থ হয়, এবং কখন অ্যাফিলিয়েট প্রোগ্রামে আপগ্রেড করা যৌক্তিক।" }}
      ctaIntent="signup"
      breadcrumbs={[{ name: "Bonuses", path: "/bonuses" }, { name: "Refer Bonus", path: PATH }]}
      articlePath={PATH} articleHeadline={TITLE} articleDescription={DESC}
      body={[
        "## Where to find your refer bonus code",
        "Every JeetBuzz player has a personal refer-a-friend code inside **My account → Refer a friend**. Copy the code (or the link) and share it via WhatsApp, Telegram, SMS or in person.",
        "## What the friend must do",
        "For the refer bonus to actually credit both sides:",
        "1. Open a **new** JeetBuzz account (no existing account under the friend's phone / KYC).",
        "2. Enter your refer code **in the registration form** — the field cannot be filled in later.",
        "3. Complete KYC verification.",
        "4. Make a qualifying first deposit (usually 500 BDT / 500 PKR / ₹500 minimum).",
        "5. Play through the qualifying turnover set by the current refer-a-friend terms.",
        "Only after all five steps do both you and the friend see the reward.",
        "## Reward amount",
        "The refer-a-friend reward is a one-time fixed amount that varies with the campaign. Check the current amount on your Refer a Friend page — it is displayed alongside the code before you share it.",
        "## Why referrals silently fail",
        "- Friend forgot to enter the code at signup (most common).",
        "- Same-device or same-IP as you → anti-fraud rule.",
        "- Friend claimed a different welcome bonus at the same time.",
        "- Friend's KYC is still pending.",
        "- Qualifying turnover not yet met.",
        "- Referred friend requested withdrawal before turnover — some campaigns void the referral.",
        "## Refer bonus vs affiliate program",
        "If you plan to bring more than a couple of players, apply for the [Affiliate Program](/affiliate-program) instead — you earn weekly revenue share (up to 60%) on all of their NGR, not a small one-time reward. See the [Referral Code comparison](/jeetbuzz-referral-code) for the side-by-side.",
        "## Neutral disclosure",
        "Never pressure family members into signing up. Refer only people who were already looking to bet, and share the [Responsible Gaming page](/responsible-gaming) alongside your code. Referral rewards do not compensate anyone for gambling losses.",
        "## Scaling up — affiliate program & commission",
        "Sending more than a handful of players? The [JeetBuzz affiliate program](/affiliate-program) pays weekly revenue share instead of a fixed reward, and the [JeetBuzz affiliate commission](/jeetbuzz-affiliate-commission) page shows the exact 25%–60% NGR tiers and payout timing.",
      ]}
      bodyByLocale={{
        bn: [
          "## রেফার বোনাস কোড কোথায় পাবেন",
          "প্রতিটি JeetBuzz প্লেয়ারের **My account → Refer a friend**-এ ব্যক্তিগত রেফার-এ-ফ্রেন্ড কোড আছে। কোড (বা লিংক) কপি করে WhatsApp, Telegram, SMS বা সরাসরি শেয়ার করুন।",
          "## বন্ধুকে যা করতে হবে",
          "উভয় পক্ষে রেফার বোনাস ক্রেডিট হতে হলে:",
          "১. একটি **নতুন** JeetBuzz অ্যাকাউন্ট খুলুন (বন্ধুর ফোন/KYC-এর অধীনে কোনো বিদ্যমান অ্যাকাউন্ট থাকবে না)।",
          "২. রেজিস্ট্রেশন ফর্মে আপনার রেফার কোড লিখুন — ফিল্ডটি পরে পূরণ করা যায় না।",
          "৩. KYC ভেরিফিকেশন সম্পন্ন করুন।",
          "৪. কোয়ালিফাইং প্রথম ডিপোজিট (সাধারণত ন্যূনতম ৫০০ BDT)।",
          "৫. বর্তমান রেফার-এ-ফ্রেন্ড শর্তে নির্ধারিত কোয়ালিফাইং টার্নওভার সম্পন্ন করুন।",
          "পাঁচটি ধাপ সম্পন্ন হলেই আপনি ও বন্ধু উভয়ে রিওয়ার্ড দেখতে পাবেন।",
          "## রিওয়ার্ডের পরিমাণ",
          "রেফার-এ-ফ্রেন্ড রিওয়ার্ড ক্যাম্পেইনভেদে ভিন্ন এক-বারের নির্দিষ্ট পরিমাণ। শেয়ার করার আগে আপনার Refer a Friend পেজে কোডের পাশে বর্তমান পরিমাণ দেখানো থাকে।",
          "## রেফারেল নীরবে কেন ব্যর্থ হয়",
          "- বন্ধু সাইনআপে কোড লেখেনি (সবচেয়ে সাধারণ)।",
          "- আপনার সাথে একই ডিভাইস/IP → অ্যান্টি-ফ্রড নিয়ম।",
          "- বন্ধু একই সময়ে ভিন্ন ওয়েলকাম বোনাস দাবি করেছে।",
          "- বন্ধুর KYC এখনো পেন্ডিং।",
          "- কোয়ালিফাইং টার্নওভার পূরণ হয়নি।",
          "- রেফার্ড বন্ধু টার্নওভারের আগে উইথড্রয়াল চেয়েছে — কিছু ক্যাম্পেইন এতে রেফারেল বাতিল করে।",
          "## রেফার বোনাস বনাম অ্যাফিলিয়েট প্রোগ্রাম",
          "একাধিক প্লেয়ার আনার পরিকল্পনা থাকলে বরং [Affiliate Program](/affiliate-program)-এ আবেদন করুন — আপনি তাদের সব NGR-এর উপর সাপ্তাহিক রেভিনিউ শেয়ার (৬০% পর্যন্ত) পাবেন, ছোট এক-বারের রিওয়ার্ড নয়। পাশাপাশি তুলনা দেখুন [Referral Code](/jeetbuzz-referral-code) পেজে।",
          "## নিরপেক্ষ ঘোষণা",
          "পরিবারের সদস্যদের সাইনআপে চাপ দেবেন না। শুধু সেসব মানুষকে রেফার করুন যারা ইতিমধ্যে বাজি ধরার সিদ্ধান্তে আছে, এবং কোডের পাশে [Responsible Gaming পেজ](/responsible-gaming) শেয়ার করুন। রেফারেল রিওয়ার্ড কারো গ্যাম্বলিং ক্ষতির জন্য ক্ষতিপূরণ নয়।",
        ],
      }}
      related={siblings(BONUS_CLUSTER, PATH)}
      faqs={[
        { q: "How much is the JeetBuzz refer bonus?", a: "A one-time fixed amount shown on your Refer a Friend page. The amount varies with the current campaign — check inside your account before sharing." },
        { q: "When does the refer bonus credit?", a: "After your friend registers with your code, completes KYC, deposits and meets the qualifying turnover. Skip any step and the reward does not fire." },
        { q: "Can I refer someone in my own house?", a: "Same-device or same-IP referrals are blocked as anti-fraud. Use separate devices and separate internet connections." },
        { q: "Can I refer myself with a second account?", a: "No. Multi-accounting voids both accounts and the refer bonus." },
        { q: "Should I use refer-a-friend or the affiliate program?", a: "Refer-a-friend for one or two people, affiliate program for anything larger. The [Affiliate Signup](/jeetbuzz-affiliate-signup) guide has the application flow." },
      ]}
      faqsByLocale={{
        bn: [
          { q: "জিতবাজ রেফার বোনাস কত?", a: "আপনার Refer a Friend পেজে দেখানো এক-বারের নির্দিষ্ট পরিমাণ। বর্তমান ক্যাম্পেইনভেদে পরিমাণ বদলায় — শেয়ার করার আগে অ্যাকাউন্টে চেক করুন।" },
          { q: "রেফার বোনাস কখন ক্রেডিট হয়?", a: "বন্ধু আপনার কোড দিয়ে রেজিস্টার, KYC সম্পন্ন, ডিপোজিট এবং কোয়ালিফাইং টার্নওভার পূরণ করার পর। কোনো ধাপ বাদ পড়লে রিওয়ার্ড আসে না।" },
          { q: "একই বাড়ির কাউকে রেফার করা যায়?", a: "একই ডিভাইস/IP রেফারেল অ্যান্টি-ফ্রড হিসেবে ব্লকড। আলাদা ডিভাইস ও আলাদা ইন্টারনেট সংযোগ ব্যবহার করুন।" },
          { q: "দ্বিতীয় অ্যাকাউন্ট দিয়ে নিজেকে রেফার করা যায়?", a: "না। মাল্টি-অ্যাকাউন্টিং উভয় অ্যাকাউন্ট এবং রেফার বোনাস বাতিল করে।" },
          { q: "রেফার-এ-ফ্রেন্ড না অ্যাফিলিয়েট প্রোগ্রাম?", a: "এক-দুইজনের জন্য রেফার-এ-ফ্রেন্ড, বড় কিছুর জন্য অ্যাফিলিয়েট প্রোগ্রাম। আবেদনের প্রবাহের জন্য [Affiliate Signup](/jeetbuzz-affiliate-signup) গাইড দেখুন।" },
        ],
      }}
    />
  ),
});