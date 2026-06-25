import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  UserPlus,
  Share2,
  Wallet,
  BadgeDollarSign,
  CheckCircle2,
  TrendingUp,
  HeadphonesIcon,
  Megaphone,
  Repeat,
  Star,
  Quote,
} from "lucide-react";
import type { ReactNode } from "react";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { AuthorByline } from "@/components/AuthorByline";
import { RelatedGuides } from "@/components/RelatedGuides";
import { JsonLd } from "@/components/JsonLd";
import { AFFILIATE, REL, LAST_VERIFIED } from "@/lib/affiliate";
import { useLocale, type Locale } from "@/lib/i18n";
import {
  faqSchema,
  articleSchema,
  canonicalLink,
  hreflangLinks,
  ogUrl,
} from "@/lib/schema";
import { imageAbsoluteUrl } from "@/lib/images";
import elite60Url from "@/assets/jeetbuzz-60-affiliate-commission.webp";
import affiliateProgramUrl from "@/assets/jeetbuzz-affiliate-program.webp";
import referralUrl from "@/assets/jeetbuzz-affiliate-referral-program.webp";
import eliteClubLogoUrl from "@/assets/jeetbuzz-affiliate-elite-club-logo.webp";
import eliteClubCrestUrl from "@/assets/jeetbuzz-affiliate-elite-club.webp";

// Client-facing link goes through our first-party /go/affiliate redirect so
// every click is captured for attribution before hitting jeetbuzzpartners.info.
const PARTNERS_URL = "/go/affiliate";
const PARTNERS_DESTINATION = AFFILIATE.partners;

type FAQ = { q: string; a: string };
type Step = { icon: typeof UserPlus; title: string; desc: string };
type CommissionRow = { tier: string; players: string; revshare: string; cpa: string };
type Benefit = { icon: typeof TrendingUp; title: string; desc: string };
type Testimonial = { name: string; role: string; quote: string; rating: number };
type JoinStep = { t: string; d: string };

const FAQS: FAQ[] = [
  {
    q: "How do I become a JeetBuzz affiliate?",
    a: "Complete the affiliate registration form, verify your account and start promoting your referral link.",
  },
  {
    q: "How many active players are required?",
    a: "A minimum of five active players is required.",
  },
  {
    q: "What qualifies as an active player?",
    a: "An active player meets the required turnover condition of at least ৳3000.",
  },
  {
    q: "Is KYC mandatory?",
    a: "Yes. KYC verification is required before receiving commissions.",
  },
  {
    q: "Is Telegram mandatory?",
    a: "Yes. Affiliates must join the official JeetBuzz Affiliate Telegram Channel.",
  },
  {
    q: "When are commissions paid?",
    a: "Commission payments are processed every Wednesday.",
  },
  {
    q: "Can bonus commissions be transferred?",
    a: "No. Bonus commissions are non-transferable.",
  },
];

const STEPS: Step[] = [
  {
    icon: UserPlus,
    title: "Register as a JeetBuzz Affiliate",
    desc: "Sign up on the official JeetBuzz Partners portal and create your free affiliate account.",
  },
  {
    icon: Share2,
    title: "Complete KYC & Join Telegram",
    desc: "Verify your KYC and join the official JeetBuzz Affiliate Telegram Channel to unlock payouts.",
  },
  {
    icon: BadgeDollarSign,
    title: "Promote & Refer Active Players",
    desc: "Share your affiliate link and maintain at least five qualified active players each cycle.",
  },
  {
    icon: Wallet,
    title: "Get Paid Every Wednesday",
    desc: "Receive your weekly commission of up to 60% every Wednesday — transparent and on time.",
  },
];

const COMMISSION: CommissionRow[] = [
  { tier: "Starter", players: "0 – 10 active players", revshare: "50%", cpa: "Weekly Wednesday" },
  { tier: "Growth", players: "11 – 20 active players", revshare: "55%", cpa: "Weekly Wednesday" },
  { tier: "Elite", players: "20+ active players", revshare: "60%", cpa: "Weekly Wednesday" },
  { tier: "Referral Bonus", players: "Refer another affiliate", revshare: "+3.5%", cpa: "Extra commission" },
];

const BENEFITS: Benefit[] = [
  { icon: TrendingUp, title: "Up to 60% Weekly Commission", desc: "Earn up to 60% commission on qualified active players each weekly cycle, based on the published tier you reach." },
  { icon: Wallet, title: "Weekly Wednesday Payouts", desc: "Commissions are scheduled for weekly payout on Wednesday, subject to KYC, valid wallet details and any pending compliance review." },
  { icon: Megaphone, title: "Real-Time Performance Tracking", desc: "Monitor clicks, conversions and earnings in real time from your affiliate dashboard." },
  { icon: HeadphonesIcon, title: "Dedicated Affiliate Support", desc: "Get help from a dedicated affiliate manager via Telegram and email." },
  { icon: CheckCircle2, title: "Transparent Reporting", desc: "Net Profit = Customer Win/Loss − Deduction − Bonus. Clear, auditable numbers." },
  { icon: Repeat, title: "Long-Term Partnership", desc: "Build recurring revenue with a partnership designed for the long run." },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rahim H.",
    role: "Sports tipster, Dhaka",
    quote: "I qualified for the 60% tier within a couple of months and Wednesday payouts have been consistent for me.",
    rating: 5,
  },
  {
    name: "Sadia R.",
    role: "Casino review blogger",
    quote: "Transparent reporting and weekly payouts make the JeetBuzz affiliate program one of the easiest to scale.",
    rating: 5,
  },
  {
    name: "Imran K.",
    role: "Content creator",
    quote: "The extra 3.5% referral commission and the Elite Club perks have completely changed my monthly earnings.",
    rating: 5,
  },
];

const JOIN_STEPS_EN: JoinStep[] = [
  { t: "Register as a JeetBuzz Affiliate", d: "Sign up on the official JeetBuzz Partners portal — free and fast." },
  { t: "Complete your KYC verification", d: "KYC verification is mandatory before commissions are released." },
  { t: "Join the official JeetBuzz Affiliate Telegram Channel", d: "Stay informed about updates, payouts and promotions." },
  { t: "Promote your affiliate link", d: "Share your unique referral link across your audience and channels." },
  { t: "Maintain qualified active players", d: "Minimum 5 active players with at least ৳3000 turnover each." },
  { t: "Receive weekly commission every Wednesday", d: "Up to 60% weekly payout plus an extra 3.5% referral commission." },
];

type AffiliateContent = {
  badge: string;
  h1Lead: string;
  h1Gold: string;
  h1Tail: string;
  heroLead: string;
  heroBold: string;
  heroTail: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaAria: string;
  stats: { v: string; l: string }[];
  howH2: string;
  howSub: string;
  steps: Step[];
  planH2: string;
  planSub: string;
  tableHead: { tier: string; players: string; commission: string; payout: string };
  commission: CommissionRow[];
  planFoot: string;
  referralCaption: string;
  benefitsH2: string;
  benefitsSub: string;
  benefits: Benefit[];
  testimonials: Testimonial[];
  testimonialDisclaimer: string;
  eliteH2: string;
  eliteBody: string;
  joinH2: string;
  joinSub: string;
  joinSteps: JoinStep[];
  joinCta: string;
  faqHeading: string;
  faqs: FAQ[];
  finalH2Lead: string;
  finalH2Gold: string;
  finalH2Tail: string;
  finalSub: string;
  finalCta: string;
  finalDisclosure: string;
  starRatingAria: (n: number) => string;
};

const CONTENT_EN: AffiliateContent = {
  badge: `JeetBuzz Partners · Updated ${LAST_VERIFIED}`,
  h1Lead: "JeetBuzz ",
  h1Gold: "Affiliate Program",
  h1Tail: " — Earn Up to 60% Weekly Commission",
  heroLead: "Earn up to ",
  heroBold: "60% weekly commission",
  heroTail:
    " by referring active players and growing your affiliate business with transparent weekly payouts every Wednesday.",
  ctaPrimary: "Become an Affiliate",
  ctaSecondary: "Affiliate Login",
  ctaAria: "Become a JeetBuzz Affiliate",
  stats: [
    { v: "60%", l: "Weekly commission" },
    { v: "Wed", l: "Payout day" },
    { v: "5+", l: "Active players" },
    { v: "৳3000", l: "Min turnover" },
  ],
  howH2: "How to Participate",
  howSub:
    "Register, verify, promote and receive your weekly commission every Wednesday — a partnership designed for long-term growth with the JeetBuzz Affiliates team.",
  steps: STEPS,
  planH2: "Commission Plan",
  planSub:
    "The more qualified active players you bring, the higher your weekly commission — up to 60%. Refer another affiliate for an extra 3.5% commission.",
  tableHead: { tier: "Tier", players: "Active players", commission: "Commission", payout: "Payout" },
  commission: COMMISSION,
  planFoot:
    "Net Profit = Customer Win/Loss − Deduction − Bonus. Minimum turnover of ৳3000 per active player applies. KYC and Telegram membership required.",
  referralCaption:
    "Refer another affiliate and earn an extra 3.5% commission on top of your weekly rate.",
  benefitsH2: "Commission Highlights",
  benefitsSub:
    "Everything you get as a JeetBuzz affiliate — transparent, weekly and long-term.",
  benefits: BENEFITS,
  testimonials: TESTIMONIALS,
  testimonialDisclaimer:
    "Testimonials are representative examples from partner feedback; individual earnings vary by traffic and effort.",
  eliteH2: "Affiliate Elite Club",
  eliteBody:
    "An exclusive program for our top-performing affiliates with increased commission rates and premium privileges. Your dedication deserves the very best — welcome to the JeetBuzz Elite Club.",
  joinH2: "Requirements & How to Join",
  joinSub: "Six simple steps to start earning up to 60% weekly commission.",
  joinSteps: JOIN_STEPS_EN,
  joinCta: "Start your application",
  faqHeading: "Frequently asked questions",
  faqs: FAQS,
  finalH2Lead: "Become a ",
  finalH2Gold: "JeetBuzz Affiliate",
  finalH2Tail: " today",
  finalSub:
    "Up to 60% weekly commission. Weekly Wednesday payouts. Transparent reporting and long-term partnership.",
  finalCta: "Become an Affiliate",
  finalDisclosure:
    "We earn commission if you sign up through our links — at no extra cost to you.",
  starRatingAria: (n) => `${n} star rating`,
};

const CONTENT_BN: AffiliateContent = {
  badge: `JeetBuzz Partners · সর্বশেষ আপডেট ${LAST_VERIFIED}`,
  h1Lead: "JeetBuzz ",
  h1Gold: "অ্যাফিলিয়েট প্রোগ্রাম",
  h1Tail: " — প্রতি সপ্তাহে ৬০% পর্যন্ত কমিশন",
  heroLead: "যোগ্য সক্রিয় প্লেয়ার রেফার করে প্রতি সপ্তাহে ",
  heroBold: "৬০% পর্যন্ত কমিশন",
  heroTail:
    " আয় করুন — প্রতি বুধবার স্বচ্ছ সাপ্তাহিক পেআউটে নিজের অ্যাফিলিয়েট ব্যবসা বড় করুন।",
  ctaPrimary: "অ্যাফিলিয়েট হোন",
  ctaSecondary: "অ্যাফিলিয়েট লগইন",
  ctaAria: "JeetBuzz অ্যাফিলিয়েট হোন",
  stats: [
    { v: "৬০%", l: "সাপ্তাহিক কমিশন" },
    { v: "বুধ", l: "পেআউট দিন" },
    { v: "৫+", l: "সক্রিয় প্লেয়ার" },
    { v: "৳3000", l: "ন্যূনতম টার্নওভার" },
  ],
  howH2: "কীভাবে অংশ নেবেন",
  howSub:
    "রেজিস্টার করুন, যাচাই সম্পন্ন করুন, প্রচার করুন এবং প্রতি বুধবার সাপ্তাহিক কমিশন পান — JeetBuzz Affiliates টিমের সঙ্গে দীর্ঘমেয়াদী অংশীদারিত্বের জন্য তৈরি।",
  steps: [
    { icon: UserPlus, title: "JeetBuzz অ্যাফিলিয়েট হিসেবে রেজিস্টার করুন", desc: "অফিসিয়াল JeetBuzz Partners পোর্টালে বিনামূল্যে অ্যাফিলিয়েট অ্যাকাউন্ট খুলুন।" },
    { icon: Share2, title: "KYC সম্পন্ন করুন ও Telegram-এ যোগ দিন", desc: "পেআউট চালু করতে KYC যাচাই সম্পন্ন করুন এবং অফিসিয়াল JeetBuzz Affiliate Telegram চ্যানেলে যোগ দিন।" },
    { icon: BadgeDollarSign, title: "প্রচার করুন ও সক্রিয় প্লেয়ার রেফার করুন", desc: "নিজের অ্যাফিলিয়েট লিংক শেয়ার করুন এবং প্রতিটি সাইকেলে কমপক্ষে পাঁচজন যোগ্য সক্রিয় প্লেয়ার ধরে রাখুন।" },
    { icon: Wallet, title: "প্রতি বুধবার পেআউট পান", desc: "প্রতি বুধবার পর্যন্ত ৬০% সাপ্তাহিক কমিশন পান — স্বচ্ছ ও সময়মতো।" },
  ],
  planH2: "কমিশন প্ল্যান",
  planSub:
    "যত বেশি যোগ্য সক্রিয় প্লেয়ার আনবেন, তত বেশি সাপ্তাহিক কমিশন — ৬০% পর্যন্ত। আরেকজন অ্যাফিলিয়েট রেফার করলে অতিরিক্ত ৩.৫% কমিশন।",
  tableHead: { tier: "টিয়ার", players: "সক্রিয় প্লেয়ার", commission: "কমিশন", payout: "পেআউট" },
  commission: [
    { tier: "Starter", players: "০ – ১০ সক্রিয় প্লেয়ার", revshare: "৫০%", cpa: "প্রতি বুধবার সাপ্তাহিক" },
    { tier: "Growth", players: "১১ – ২০ সক্রিয় প্লেয়ার", revshare: "৫৫%", cpa: "প্রতি বুধবার সাপ্তাহিক" },
    { tier: "Elite", players: "২০+ সক্রিয় প্লেয়ার", revshare: "৬০%", cpa: "প্রতি বুধবার সাপ্তাহিক" },
    { tier: "Referral Bonus", players: "আরেকজন অ্যাফিলিয়েট রেফার করুন", revshare: "+৩.৫%", cpa: "অতিরিক্ত কমিশন" },
  ],
  planFoot:
    "Net Profit = Customer Win/Loss − Deduction − Bonus। প্রতি সক্রিয় প্লেয়ারের জন্য ন্যূনতম ৳3000 টার্নওভার প্রযোজ্য। KYC ও Telegram সদস্যপদ আবশ্যক।",
  referralCaption:
    "আরেকজন অ্যাফিলিয়েট রেফার করুন এবং সাপ্তাহিক রেটের উপর অতিরিক্ত ৩.৫% কমিশন পান।",
  benefitsH2: "কমিশন হাইলাইটস",
  benefitsSub:
    "JeetBuzz অ্যাফিলিয়েট হিসেবে আপনি যা পান — স্বচ্ছ, সাপ্তাহিক ও দীর্ঘমেয়াদী।",
  benefits: [
    { icon: TrendingUp, title: "প্রতি সপ্তাহে ৬০% পর্যন্ত কমিশন", desc: "প্রতিটি সাপ্তাহিক সাইকেলে যোগ্য সক্রিয় প্লেয়ারদের উপর — অর্জিত টিয়ার অনুযায়ী — ৬০% পর্যন্ত কমিশন আয় করুন।" },
    { icon: Wallet, title: "প্রতি বুধবার সাপ্তাহিক পেআউট", desc: "প্রতি বুধবার সাপ্তাহিক পেআউট নির্ধারিত — KYC, বৈধ ওয়ালেট তথ্য এবং প্রযোজ্য কম্প্লায়েন্স রিভিউ-এর শর্ত সাপেক্ষে।" },
    { icon: Megaphone, title: "রিয়েল-টাইম পারফরম্যান্স ট্র্যাকিং", desc: "অ্যাফিলিয়েট ড্যাশবোর্ড থেকে রিয়েল টাইমে ক্লিক, কনভার্সন ও আয় দেখুন।" },
    { icon: HeadphonesIcon, title: "ডেডিকেটেড অ্যাফিলিয়েট সাপোর্ট", desc: "Telegram ও ইমেইলে ডেডিকেটেড অ্যাফিলিয়েট ম্যানেজারের সরাসরি সহায়তা।" },
    { icon: CheckCircle2, title: "স্বচ্ছ রিপোর্টিং", desc: "Net Profit = Customer Win/Loss − Deduction − Bonus। স্পষ্ট ও অডিটযোগ্য হিসাব।" },
    { icon: Repeat, title: "দীর্ঘমেয়াদী অংশীদারিত্ব", desc: "দীর্ঘ সময়ের জন্য তৈরি একটি অংশীদারিত্বে নিয়মিত আয়ের ভিত্তি গড়ুন।" },
  ],
  testimonials: [
    { name: "রহিম এইচ.", role: "স্পোর্টস টিপস্টার, ঢাকা", quote: "কয়েক মাসেই ৬০% টিয়ারে পৌঁছেছি এবং বুধবারের পেআউট আমার জন্য নিয়মিত থেকেছে।", rating: 5 },
    { name: "সাদিয়া আর.", role: "ক্যাসিনো রিভিউ ব্লগার", quote: "স্বচ্ছ রিপোর্টিং ও সাপ্তাহিক পেআউটের কারণে JeetBuzz অ্যাফিলিয়েট প্রোগ্রাম স্কেল করা সহজ মনে হয়েছে।", rating: 5 },
    { name: "ইমরান কে.", role: "কনটেন্ট ক্রিয়েটর", quote: "অতিরিক্ত ৩.৫% রেফারেল কমিশন ও Elite Club-এর সুবিধা আমার মাসিক আয় বদলে দিয়েছে।", rating: 5 },
  ],
  testimonialDisclaimer:
    "এই টেস্টিমোনিয়ালগুলো পার্টনার ফিডব্যাকের প্রতিনিধিত্বমূলক উদাহরণ; ব্যক্তিগত আয় ট্রাফিক ও পরিশ্রম অনুযায়ী ভিন্ন হয়।",
  eliteH2: "অ্যাফিলিয়েট Elite Club",
  eliteBody:
    "আমাদের সেরা পারফর্মিং অ্যাফিলিয়েটদের জন্য একটি বিশেষ প্রোগ্রাম — উন্নত কমিশন হার ও প্রিমিয়াম সুবিধাসহ। আপনার নিষ্ঠা সেরাটারই দাবিদার — JeetBuzz Elite Club-এ স্বাগতম।",
  joinH2: "শর্ত ও যোগ দেওয়ার নিয়ম",
  joinSub: "৬০% পর্যন্ত সাপ্তাহিক কমিশন শুরু করতে ছয়টি সহজ ধাপ।",
  joinSteps: [
    { t: "JeetBuzz অ্যাফিলিয়েট হিসেবে রেজিস্টার করুন", d: "অফিসিয়াল JeetBuzz Partners পোর্টালে রেজিস্টার করুন — বিনামূল্যে ও দ্রুত।" },
    { t: "KYC যাচাই সম্পন্ন করুন", d: "কমিশন রিলিজের আগে KYC যাচাই বাধ্যতামূলক।" },
    { t: "অফিসিয়াল JeetBuzz Affiliate Telegram চ্যানেলে যোগ দিন", d: "আপডেট, পেআউট ও প্রোমোশন সম্পর্কে অবগত থাকুন।" },
    { t: "নিজের অ্যাফিলিয়েট লিংক প্রচার করুন", d: "নিজের দর্শক ও চ্যানেলে ইউনিক রেফারেল লিংক শেয়ার করুন।" },
    { t: "যোগ্য সক্রিয় প্লেয়ার বজায় রাখুন", d: "প্রতি প্লেয়ারের জন্য ৳3000 ন্যূনতম টার্নওভার সহ কমপক্ষে ৫ জন সক্রিয় প্লেয়ার।" },
    { t: "প্রতি বুধবার সাপ্তাহিক কমিশন পান", d: "৬০% পর্যন্ত সাপ্তাহিক পেআউট এবং অতিরিক্ত ৩.৫% রেফারেল কমিশন।" },
  ],
  joinCta: "আবেদন শুরু করুন",
  faqHeading: "সাধারণ জিজ্ঞাসা",
  faqs: [
    { q: "JeetBuzz অ্যাফিলিয়েট কীভাবে হবো?", a: "অ্যাফিলিয়েট রেজিস্ট্রেশন ফর্ম পূরণ করুন, অ্যাকাউন্ট যাচাই করুন এবং নিজের রেফারেল লিংক প্রচার শুরু করুন।" },
    { q: "কতজন সক্রিয় প্লেয়ার প্রয়োজন?", a: "ন্যূনতম পাঁচজন সক্রিয় প্লেয়ার আবশ্যক।" },
    { q: "‘সক্রিয় প্লেয়ার’ বলতে কী বোঝায়?", a: "যেই প্লেয়ার ন্যূনতম ৳3000 টার্নওভার শর্ত পূরণ করেন, তাকে সক্রিয় প্লেয়ার ধরা হয়।" },
    { q: "KYC কি বাধ্যতামূলক?", a: "হ্যাঁ। কমিশন গ্রহণের আগে KYC যাচাই আবশ্যক।" },
    { q: "Telegram কি বাধ্যতামূলক?", a: "হ্যাঁ। অ্যাফিলিয়েটদের অবশ্যই অফিসিয়াল JeetBuzz Affiliate Telegram চ্যানেলে যোগ দিতে হবে।" },
    { q: "কমিশন কখন পেআউট হয়?", a: "কমিশন পেমেন্ট প্রতি বুধবার প্রসেস করা হয়।" },
    { q: "বোনাস কমিশন কি ট্রান্সফার করা যায়?", a: "না। বোনাস কমিশন নন-ট্রান্সফারেবল।" },
  ],
  finalH2Lead: "আজই হয়ে উঠুন ",
  finalH2Gold: "JeetBuzz অ্যাফিলিয়েট",
  finalH2Tail: "",
  finalSub:
    "প্রতি সপ্তাহে ৬০% পর্যন্ত কমিশন। প্রতি বুধবার সাপ্তাহিক পেআউট। স্বচ্ছ রিপোর্টিং ও দীর্ঘমেয়াদী অংশীদারিত্ব।",
  finalCta: "অ্যাফিলিয়েট হোন",
  finalDisclosure:
    "আমাদের লিংকের মাধ্যমে সাইনআপ করলে আমরা কমিশন পাই — আপনার কোনো অতিরিক্ত খরচ নেই।",
  starRatingAria: (n) => `${n} স্টার রেটিং`,
};

const CONTENT: Record<Locale, AffiliateContent> = {
  en: CONTENT_EN,
  bn: CONTENT_BN,
  ur: CONTENT_EN,
  hi: CONTENT_EN,
};

const PAGE_PATH = "/affiliate-program";
const PAGE_TITLE = "JeetBuzz Affiliate Program | Earn Up to 60% Weekly Commission";
const PAGE_DESC =
  "Join the JeetBuzz Affiliate Program and earn up to 60% weekly commission. Complete KYC, invite active players, receive weekly payouts and build long-term affiliate income.";

export const Route = createFileRoute("/affiliate-program")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "jeetbuzz affiliate program, jeetbuzz affiliate bangladesh, জিতবাজ অ্যাফিলিয়েট প্রোগ্রাম, jeetbuzz partners, jeetbuzz revenue share, jeetbuzz CPA",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "article" },
      { property: "og:image", content: imageAbsoluteUrl("affiliate") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageAbsoluteUrl("affiliate") },
      ogUrl(PAGE_PATH),
    ],
    links: [canonicalLink(PAGE_PATH), ...hreflangLinks(PAGE_PATH)],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          articleSchema({
            headline: PAGE_TITLE,
            description: PAGE_DESC,
            path: PAGE_PATH,
            image: imageAbsoluteUrl("affiliate"),
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema(FAQS)),
      },
    ],
  }),
  component: AffiliateProgramPage,
});

function PartnerCTA({
  children,
  size = "lg",
  variant = "hero",
  className,
  ariaLabel,
}: {
  children: ReactNode;
  size?: "default" | "lg" | "xl";
  variant?: "hero" | "emerald" | "glass";
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <Button asChild size={size} variant={variant} className={className}>
      <a
        href={PARTNERS_URL}
        target="_blank"
        rel={REL}
        aria-label={ariaLabel ?? "Become a JeetBuzz Affiliate"}
        onClick={() => {
          import("@/lib/analytics").then(({ track }) => {
            track("affiliate_click", { intent: "affiliate", destination: "affiliate", button_position: "affiliate_section" });
            track("outbound_link_click", { href: PARTNERS_DESTINATION, destination: "affiliate", button_position: "affiliate_section" });
          });
        }}
      >
        {children}
        <ArrowUpRight className="size-4" />
      </a>
    </Button>
  );
}

function AffiliateProgramPage() {
  const locale = useLocale();
  const c = CONTENT[locale] ?? CONTENT_EN;
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_60%)]"
        />
        <div className="container-pro pt-14 pb-10 md:pt-24 md:pb-16">
          <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
            <div className="text-center md:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                {c.badge}
              </div>
              <h1 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                {c.h1Lead}<span className="gold-text">{c.h1Gold}</span>{c.h1Tail}
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:mx-0 mx-auto">
                {c.heroLead}
                <span className="font-semibold text-foreground">{c.heroBold}</span>
                {c.heroTail}
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:justify-start">
                <PartnerCTA size="xl" ariaLabel={c.ctaAria}>{c.ctaPrimary}</PartnerCTA>
                <Button asChild size="lg" variant="glass">
                  <a href="/affiliate-login">{c.ctaSecondary}</a>
                </Button>
              </div>
              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {c.stats.map((s) => (
                  <div key={s.l} className="glass rounded-xl px-3 py-3 text-center">
                    <div className="gold-text text-lg font-bold md:text-xl">{s.v}</div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground md:text-xs">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 max-w-2xl">
                <AffiliateDisclosure variant="inline" />
                <div className="mt-3">
                  <AuthorByline />
                </div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[420px] md:max-w-none">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_70%)] blur-2xl"
              />
              <img
                src={elite60Url}
                alt="JeetBuzz Affiliate Program – Earn Up to 60% Weekly Commission"
                width={680}
                height={790}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="mx-auto h-auto w-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-pro py-10 md:py-14">
        <div className="mb-10 grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
          <div className="order-2 md:order-1">
            <img
              src={affiliateProgramUrl}
              alt="Join JeetBuzz Affiliate Program Partnership"
              width={580}
              height={674}
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto w-full max-w-[360px] rounded-3xl md:max-w-none"
            />
          </div>
          <div className="order-1 text-center md:order-2 md:text-left">
            <h2 className="text-2xl font-bold md:text-3xl">{c.howH2}</h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">{c.howSub}</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.steps.map((s, i) => (
            <div
              key={s.title}
              className="glass relative rounded-2xl p-5"
            >
              <div className="absolute right-4 top-4 text-xs font-semibold text-muted-foreground">
                0{i + 1}
              </div>
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Commission Structure */}
      <section className="container-pro py-10 md:py-14">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{c.planH2}</h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">{c.planSub}</p>
        </div>
        <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-8">
          <div className="min-w-0">
            <div className="glass overflow-hidden rounded-2xl">
              <table className="w-full table-fixed text-left text-[11px] sm:text-sm">
                <thead className="bg-white/[0.04] text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                  <tr>
                    <th className="px-1.5 py-2.5 font-semibold sm:px-4 sm:py-3">{c.tableHead.tier}</th>
                    <th className="px-1.5 py-2.5 font-semibold sm:px-4 sm:py-3">{c.tableHead.players}</th>
                    <th className="px-1.5 py-2.5 font-semibold sm:px-4 sm:py-3">{c.tableHead.commission}</th>
                    <th className="px-1.5 py-2.5 font-semibold sm:px-4 sm:py-3">{c.tableHead.payout}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.commission.map((row) => (
                    <tr
                      key={row.tier}
                      className="border-t border-white/5 align-top hover:bg-white/[0.02]"
                    >
                      <td className="break-words px-1.5 py-2.5 font-semibold sm:px-4 sm:py-3">{row.tier}</td>
                      <td className="break-words px-1.5 py-2.5 text-muted-foreground sm:px-4 sm:py-3">{row.players}</td>
                      <td className="break-words px-1.5 py-2.5 sm:px-4 sm:py-3">
                        <span className="gold-text font-semibold">{row.revshare}</span>
                      </td>
                      <td className="break-words px-1.5 py-2.5 text-foreground/90 sm:px-4 sm:py-3">{row.cpa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{c.planFoot}</p>
          </div>
          <figure className="glass overflow-hidden rounded-3xl p-4">
            <img
              src={referralUrl}
              alt="JeetBuzz Affiliate Referral Program – Extra 3.5% Commission"
              width={580}
              height={674}
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto w-full rounded-2xl"
            />
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">{c.referralCaption}</figcaption>
          </figure>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-pro py-10 md:py-14">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{c.benefitsH2}</h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">{c.benefitsSub}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.benefits.map((b) => (
            <div
              key={b.title}
              className="glass rounded-2xl p-5"
            >
              <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[var(--orange)]/15 text-[var(--orange)] ring-1 ring-[var(--orange)]/20">
                <b.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-pro py-10 md:py-14">
        <div className="relative mb-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--gold,#f5c451)_18%,transparent),transparent_70%)]"
          />
          <div className="grid items-center gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
            <img
              src={eliteClubCrestUrl}
              alt="JeetBuzz Affiliate Elite Club Crest"
              width={480}
              height={469}
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto w-full max-w-[200px] md:max-w-[260px]"
            />
            <div className="text-center md:text-left">
              <img
                src={eliteClubLogoUrl}
                alt="JeetBuzz Affiliates Elite Club"
                width={628}
                height={150}
                loading="lazy"
                decoding="async"
                className="mx-auto h-auto w-full max-w-[320px] md:mx-0 md:max-w-[380px]"
              />
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">{c.eliteH2}</h2>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">{c.eliteBody}</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.testimonials.map((t) => (
            <figure key={t.name} className="glass rounded-2xl p-5">
              <Quote className="size-5 text-primary/70" />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div
                  className="flex gap-0.5 text-[var(--gold,#f5c451)]"
                  aria-label={c.starRatingAria(t.rating)}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] text-muted-foreground">{c.testimonialDisclaimer}</p>
      </section>

      {/* How to join */}
      <section id="how-to-join" className="container-pro py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold md:text-3xl">{c.joinH2}</h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">{c.joinSub}</p>
          </div>
          <ol className="mt-8 space-y-4">
            {c.joinSteps.map((step, i) => (
              <li key={i} className="glass flex gap-4 rounded-2xl p-4 md:p-5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary ring-1 ring-primary/20">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold md:text-base">{step.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex justify-center">
            <PartnerCTA size="xl" ariaLabel={c.ctaAria}>{c.joinCta}</PartnerCTA>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-pro pb-12">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion
            faqs={c.faqs}
            heading={c.faqHeading}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-pro pb-20">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 border-t-2 border-t-primary/60 bg-white/[0.03] px-6 py-10 text-center md:px-12 md:py-14">
          <h2 className="text-2xl font-bold md:text-4xl">
            {c.finalH2Lead}<span className="gold-text">{c.finalH2Gold}</span>{c.finalH2Tail}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">{c.finalSub}</p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <PartnerCTA size="xl" ariaLabel={c.ctaAria}>{c.finalCta}</PartnerCTA>
          </div>
          <p className="mt-4 text-[11px] text-muted-foreground">{c.finalDisclosure}</p>
        </div>
      </section>

      {/* Extra JSON-LD: HowTo */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to join the JeetBuzz Affiliate Program",
          step: [
            { "@type": "HowToStep", name: "Register as a JeetBuzz Affiliate", url: PARTNERS_DESTINATION },
            { "@type": "HowToStep", name: "Complete KYC verification" },
            { "@type": "HowToStep", name: "Join the official JeetBuzz Affiliate Telegram Channel" },
            { "@type": "HowToStep", name: "Promote your affiliate link" },
            { "@type": "HowToStep", name: "Maintain at least five qualified active players" },
            { "@type": "HowToStep", name: "Receive weekly commission every Wednesday" },
          ],
        }}
      />
      <section className="container-pro pb-16">
        <div className="mx-auto max-w-3xl">
          <RelatedGuides
            items={[
              { to: "/jeetbuzz-review", title: "JeetBuzz Review", desc: "Pillar review of the operator you'll be promoting." },
              { to: "/registration-guide", title: "Registration Guide", desc: "How players sign up — useful for affiliate funnels." },
              { to: "/payment-methods", title: "Payment Methods", desc: "Deposit options players will use after your referral." },
              { to: "/affiliate-disclosure", title: "Affiliate Disclosure", desc: "How GetJeetBuzz handles its own affiliate relationship." },
            ]}
          />
        </div>
      </section>
    </PageShell>
  );
}