// Shared registry for the GetJeetBuzz partner network (/network cluster).
// Every entry is a site our editorial team owns and maintains, so the links
// are genuine editorial references, not paid placements.

export type NetworkSite = {
  slug: string;
  path: string;
  name: string;
  url: string;
  domain: string;
  /** Primary keyword-led anchor used across the site. */
  anchor: string;
  /** One-line Bengali summary for hub cards and cross-links. */
  note: string;
  /** Demand signals from Semrush (Bangladesh database). */
  demand: string;
};

export const NETWORK_SITES: readonly NetworkSite[] = [
  {
    slug: "mcwcasino",
    path: "/network/mcwcasino",
    name: "MCW Casino (Mega Casino World)",
    url: "https://mcwcasino.guru",
    domain: "mcwcasino.guru",
    anchor: "MCW Casino login",
    note: "Mega Casino World-এর বাংলা গাইড — লগইন, MCW লাইভ ক্যাসিনো ও ডিপোজিট।",
    demand: "mcw 6.1M/mo, mcw login 301k/mo, mcw casino 90.5k/mo (BD)",
  },
  {
    slug: "bajilive",
    path: "/network/bajilive",
    name: "Baji Live",
    url: "https://bajilive.world",
    domain: "bajilive.world",
    anchor: "Baji Live login",
    note: "Baji live ক্রিকেট বেটিং, অ্যাপ ও bKash ডিপোজিট গাইড।",
    demand: "baji live 1M/mo (KD 69), bajilive 74k/mo (BD)",
  },
  {
    slug: "tekkabuzz",
    path: "/network/tekkabuzz",
    name: "TekkaBuzz",
    url: "https://tekkabuzz.win",
    domain: "tekkabuzz.win",
    anchor: "TekkaBuzz login",
    note: "TekkaBuzz বাংলাদেশ গাইড — রেজিস্ট্রেশন, লগইন ও বোনাস শর্ত।",
    demand: "tekkabuzz 4.4k/mo, KD 0 (BD)",
  },
  {
    slug: "tekkabuzz88",
    path: "/network/tekkabuzz88",
    name: "TekkaBuzz 88",
    url: "https://tekkabuzz88.online",
    domain: "tekkabuzz88.online",
    anchor: "TekkaBuzz 88 app download",
    note: "TekkaBuzz 88 অ্যাপ ডাউনলোড, APK ইনস্টল ও প্রোমো কোড।",
    demand: "tekkabuzz 88 / tekkabuzz app — লো-কম্পিটিশন লং-টেইল",
  },
  {
    slug: "bettekka",
    path: "/network/bettekka",
    name: "BetTekka",
    url: "https://bettekka.pro",
    domain: "bettekka.pro",
    anchor: "BetTekka registration",
    note: "BetTekka সাইন আপ, ভেরিফিকেশন ও উইথড্রয়াল প্রক্রিয়া।",
    demand: "bettekka — নতুন ব্র্যান্ড, প্রায় শূন্য প্রতিযোগিতা",
  },
];

export const NETWORK_URLS: readonly string[] = NETWORK_SITES.map((s) => s.url);

export function networkSite(slug: string): NetworkSite {
  const found = NETWORK_SITES.find((s) => s.slug === slug);
  if (!found) throw new Error(`Unknown network site: ${slug}`);
  return found;
}

/** Cross-link block listing the sibling network sites (self excluded). */
export function siblingNetworkBlock(currentSlug: string): string[] {
  const others = NETWORK_SITES.filter((s) => s.slug !== currentSlug);
  return [
    "## নেটওয়ার্কের অন্যান্য গাইড সাইট",
    "একই সম্পাদকীয় দল নিচের সাইটগুলোও পরিচালনা করে। প্রতিটি সাইট আলাদা অপারেটরের উপর কেন্দ্রীভূত, কিন্তু যাচাইয়ের পদ্ধতি, পেমেন্ট টেস্টিং ও দায়িত্বশীল গেমিং নীতিমালা অভিন্ন।",
    ...others.map((s) => `- [${s.anchor}](${s.url}) — ${s.note} ([বিস্তারিত প্রোফাইল](${s.path}))`),
    "- [সম্পূর্ণ নেটওয়ার্ক ওভারভিউ](/network) — পাঁচটি সাইট এক পাতায়, সম্পাদকীয় মান ও মালিকানা তথ্যসহ।",
  ];
}

/** Links back to the canonical JeetBuzz hubs, shared by every network page. */
export const NETWORK_INTERNAL_BLOCK = [
  "## GetJeetBuzz-এর মূল গাইড",
  "আপনি যদি JeetBuzz নিয়েই কাজ করতে চান, নিচের পেজগুলো এই সাইটের প্রধান রেফারেন্স:",
  "- [JeetBuzz রিভিউ](/jeetbuzz-review) — লাইসেন্স, অডস, বোনাস শর্ত ও পেমেন্ট বিশ্লেষণ।",
  "- [JeetBuzz লগইন গাইড](/login-guide) — লগইন সমস্যা, ২FA ও ISP ব্লক সমাধান।",
  "- [পেমেন্ট হাব](/payments) — bKash, Nagad, Rocket ডিপোজিট ও উইথড্রয়ালের প্রকৃত সময়।",
  "- [বোনাস ও প্রোমোশন](/bonus-and-promotions) — টার্নওভার, ভ্যালিডিটি ও শর্তের ব্যাখ্যা।",
  "- [হেল্প সেন্টার](/help) — অ্যাকাউন্ট, ডিপোজিট ও ভেরিফিকেশন সমস্যার সমাধান।",
];

export const NETWORK_BYLINE = [
  "*লেখক: Nahid — GetJeetBuzz Editorial Team।*",
  "*সম্পাদকীয় পর্যালোচক: GetJeetBuzz Compliance Desk।*",
];

export const NETWORK_DISCLOSURE = [
  "## মালিকানা ও স্বচ্ছতা",
  "এই পেজে উল্লেখ করা সাইটগুলো GetJeetBuzz-এর একই টিমের মালিকানাধীন ও পরিচালিত। এগুলো কোনো অপারেটরের অফিসিয়াল ওয়েবসাইট নয় — প্রতিটি স্বাধীন গাইড সাইট। আমরা রেফারেল থেকে কমিশন পেতে পারি, তবে সেটি রেটিং বা তথ্যকে প্রভাবিত করে না। আমরা কখনো অ্যাকাউন্ট পাসওয়ার্ড, OTP বা কার্ড তথ্য চাই না। ১৮ বছরের কম বয়সীদের জন্য নয়।",
];