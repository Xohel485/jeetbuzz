/**
 * ENTITY_MAP — single source of truth for JeetBuzz brand entities,
 * alternate spellings (JetBuzz, JitBuzz, জিতবাজ…), localized payment
 * methods and topical clusters. Consumed by schema.ts (Organization
 * alternateName), programmatic FAQ generators, blog/guide generators,
 * internal-link helpers and search-suggestion code.
 *
 * Do NOT hardcode brand variations anywhere else — import from here.
 * Tree-shakable: each cluster is its own exported const so unused
 * clusters drop out of route bundles.
 */

export const BRAND = {
  canonical: "JeetBuzz",
  alternateNames: [
    "JeetBuzz",
    "Jeetbuzz",
    "Jeet Buzz",
    "JetBuzz",
    "Jet Buzz",
    "JitBuzz",
    "Jit Buzz",
    "Jeetbaz",
    "Jitbaz",
    "জিতবাজ",
    "জিটবাজ",
    "জিত বাজ",
  ],
} as const;

export const LOGIN_ENTITIES = [
  "JeetBuzz Login",
  "JeetBuzz Login Bangladesh",
  "JeetBuzz Sign In",
  "JeetBuzz Player Login",
  "JetBuzz Login",
  "JitBuzz Login",
  "জিতবাজ লগইন",
  "জিটবাজ লগইন",
] as const;

export const SIGNUP_ENTITIES = [
  "JeetBuzz Signup",
  "JeetBuzz Registration",
  "Create JeetBuzz Account",
  "Join JeetBuzz",
  "JetBuzz Signup",
  "JitBuzz Signup",
  "জিতবাজ রেজিস্ট্রেশন",
] as const;

export const APK_ENTITIES = [
  "JeetBuzz APK",
  "JeetBuzz App",
  "Latest JeetBuzz APK",
  "JeetBuzz Android",
  "JetBuzz APK",
  "জিতবাজ অ্যাপ",
] as const;

export const PAYMENT_ENTITIES = {
  bd: ["bKash", "Nagad", "Rocket", "UPay"],
  pk: ["EasyPaisa", "JazzCash"],
  in: ["UPI", "PhonePe", "Paytm", "Google Pay"],
} as const;

export const BONUS_ENTITIES = [
  "JeetBuzz Welcome Bonus",
  "JeetBuzz Signup Bonus",
  "JeetBuzz Cashback",
  "JeetBuzz Promo Code",
  "JeetBuzz Referral Bonus",
] as const;

export const SECURITY_ENTITIES = [
  "Is JeetBuzz Safe",
  "Is JeetBuzz Legit",
  "JeetBuzz Review",
  "JeetBuzz Verification",
  "JeetBuzz License",
  "JeetBuzz Scam",
] as const;

export const SPORTS_ENTITIES = [
  "Cricket",
  "IPL",
  "BPL",
  "PSL",
  "Live Cricket",
  "Football",
  "Casino",
  "Slots",
] as const;

export const ENTITY_MAP = {
  brand: BRAND,
  login: LOGIN_ENTITIES,
  signup: SIGNUP_ENTITIES,
  apk: APK_ENTITIES,
  payment: PAYMENT_ENTITIES,
  bonus: BONUS_ENTITIES,
  security: SECURITY_ENTITIES,
  sports: SPORTS_ENTITIES,
} as const;

export const ENTITY_PRIORITY = {
  primary: ["JeetBuzz"],
  secondary: [
    "JeetBuzz Login",
    "JeetBuzz Signup",
    "JeetBuzz APK",
    "JeetBuzz Review",
    "JeetBuzz Payment",
  ],
  semantic: ["JetBuzz", "JitBuzz", "জিতবাজ", "জিটবাজ"],
} as const;

/** Locale-aware payment method list. */
export function paymentsForLocale(locale: string): readonly string[] {
  if (locale.startsWith("bn") || locale === "bd") return PAYMENT_ENTITIES.bd;
  if (locale.startsWith("ur") || locale === "pk") return PAYMENT_ENTITIES.pk;
  if (locale.startsWith("hi") || locale === "in") return PAYMENT_ENTITIES.in;
  return PAYMENT_ENTITIES.bd;
}

/**
 * Programmatic FAQ generator. Pulls from ENTITY_MAP so brand variants
 * (JetBuzz / JitBuzz / জিতবাজ) and locale-specific payment rails stay
 * in sync with schema and content.
 */
export function entityFaqs(locale: "en" | "bn" | "ur" | "hi" = "en"): Array<{ q: string; a: string }> {
  const pays = paymentsForLocale(locale).join(", ");
  const base = [
    {
      q: "Is JetBuzz Login the same as JeetBuzz Login?",
      a: "Yes. JetBuzz, JitBuzz, Jeet Buzz and জিতবাজ are common phonetic spellings of the same JeetBuzz brand. The official login URL is the same regardless of which spelling you searched.",
    },
    {
      q: "Why do users search JitBuzz instead of JeetBuzz?",
      a: "JitBuzz is a phonetic transliteration of জিটবাজ. It points to the same JeetBuzz platform — there is no separate JitBuzz site.",
    },
    {
      q: "Is the JeetBuzz APK safe to install?",
      a: "The official JeetBuzz APK is distributed only from the JeetBuzz site. Avoid third-party mirrors and verify the signing certificate matches the one listed on our APK guide.",
    },
    {
      q: locale === "bn"
        ? "জিতবাজে কীভাবে bKash দিয়ে ডিপোজিট করবেন?"
        : "How do I deposit on JeetBuzz?",
      a: `Supported rails in your region: ${pays}. Open the cashier, pick the rail, enter the amount and confirm in your wallet app.`,
    },
    {
      q: "Is JeetBuzz legit?",
      a: "JeetBuzz operates under a recognized iGaming licence and supports identity verification (KYC) before withdrawals. See our review and verification pages for the full breakdown.",
    },
  ];
  return base;
}