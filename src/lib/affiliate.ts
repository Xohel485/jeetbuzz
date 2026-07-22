export const AFFILIATE = {
  signup: "https://jb09p25aff2024.com/af/2DnXxK7c/jetjeetbuzz-signup",
  login: "https://jt03773.life/af/2DnXxK7c/jetjeetbuzz",
  partners: "https://jeetbuzzpartners.info/saf/2DnXxK7c",
} as const;

export const REL = "nofollow sponsored noopener";

/**
 * First-party redirect URLs. Client CTAs MUST link to these (not the raw
 * affiliate destinations) so every click first hits a /go/* server route
 * that captures attribution and 302-redirects to the operator.
 */
export const GO = {
  signup: "/go/signup",
  login: "/go/login",
  partners: "/go/affiliate",
} as const;

export type GoIntent = "login" | "signup" | "affiliate";

/** Server-side destination map for /go/* handlers. */
export const GO_DESTINATIONS: Record<GoIntent, string> = {
  login: AFFILIATE.login,
  signup: AFFILIATE.signup,
  affiliate: AFFILIATE.partners,
};

export const LAST_VERIFIED = "22 July 2026";
export const SITE_NAME = "GetJeetBuzz";
export const SITE_URL = "https://getjeetbuzz.com";
export const SITE_TAGLINE =
  "JeetBuzz official guide for Bangladesh, Pakistan & India — login, registration, bonuses, app.";

export const MARKETS = ["Bangladesh", "Pakistan", "India"] as const;

/**
 * Qualitative trust signals shown on the homepage stat strip.
 *
 * Previous versions displayed unsourced absolute claims (e.g. "17M+ active
 * players", "1,00,000 Cr+ commission paid"). Because GetJeetBuzz is a YMYL
 * affiliate site and these numbers cannot be independently verified from
 * operator-published materials, they have been replaced with qualitative
 * signals that ARE verifiable from JeetBuzz's own platform footprint.
 */
export const JEETBUZZ_STATS = [
  { value: "Curaçao", label: "Offshore eGaming license" },
  { value: "4", label: "Languages — BN, EN, HI, UR" },
  { value: "24/7", label: "Live chat support" },
  { value: "BPL · IPL · PSL", label: "Cricket coverage" },
] as const;