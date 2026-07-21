/**
 * Topic-cluster maps for internal linking.
 *
 * Each cluster has a pillar page and a set of supporting articles. Pages in a
 * cluster cross-link to siblings + the pillar, which both helps users navigate
 * a topic and concentrates topical authority on the pillar URL for SEO.
 */
import type { RelatedItem } from "@/components/RelatedGuides";

export const LOGIN_CLUSTER: RelatedItem[] = [
  { to: "/login-guide", title: "Login Guide", desc: "Safe access to your JeetBuzz account." },
  { to: "/login-problems", title: "Login Problems", desc: "Fix 'site not opening', blocked access and OTP errors." },
  { to: "/password-reset", title: "Password Reset", desc: "Recover your JeetBuzz password step by step." },
  { to: "/login-security", title: "Login Security", desc: "2FA, device hygiene and spotting fake mirrors." },
  { to: "/faq", title: "Login FAQ", desc: "Quick answers to common login questions." },
];

export const SIGNUP_CLUSTER: RelatedItem[] = [
  { to: "/registration-guide", title: "Registration Guide", desc: "Open a JeetBuzz account in under 3 minutes." },
  { to: "/verification", title: "Account Verification", desc: "Phone, email and KYC verification walkthrough." },
  { to: "/welcome-bonus", title: "Welcome Bonus", desc: "Claim the new-player bonus the right way." },
  { to: "/deposit-guide", title: "Deposit Guide", desc: "Fund your account via local wallets and banks." },
  { to: "/faq", title: "Signup FAQ", desc: "Common signup and verification questions answered." },
];

export const AFFILIATE_CLUSTER: RelatedItem[] = [
  { to: "/affiliate-program", title: "Affiliate Program Overview", desc: "Commission tiers, terms and how the program works." },
  { to: "/jeetbuzz-affiliate-commission-rate", title: "Commission Rate", desc: "Up to 60% weekly revenue share explained tier by tier." },
  { to: "/jeetbuzz-affiliate-signup", title: "Affiliate Signup", desc: "Apply for the partner program step by step." },
  { to: "/jeetbuzz-affiliate-withdrawal", title: "Affiliate Withdrawal", desc: "Weekly payout schedule, methods and minimums." },
  { to: "/jeetbuzz-affiliate-app", title: "Affiliate App / Dashboard", desc: "Track clicks, players and commission on mobile." },
  { to: "/jeetbuzz-referral-code", title: "Referral Code", desc: "How referral codes and refer-a-friend work." },
  { to: "/jeetbuzz-affiliate-dashboard", title: "Affiliate Dashboard", desc: "Every metric the partner dashboard exposes — and what to watch." },
  { to: "/jeetbuzz-affiliate-payment-methods", title: "Affiliate Payment Methods", desc: "bKash, Nagad, Rocket, bank, USDT — minimums, fees, timing." },
  { to: "/jeetbuzz-affiliate-commission", title: "Affiliate Commission", desc: "Weekly 25%–60% revenue share, NGR math and carryover." },
  { to: "/jeetbuzz-partner-login", title: "Partner Login", desc: "Sign in to the affiliate dashboard safely with 2FA." },
];

export const APP_CLUSTER: RelatedItem[] = [
  { to: "/apk-download-guide", title: "APK Download Guide", desc: "Safe Android APK install with permission checks." },
  { to: "/jeetbuzz-download-for-android", title: "Download for Android", desc: "Latest Android build with install walk-through." },
  { to: "/jeetbuzz-download-for-ios", title: "Download for iOS", desc: "iPhone / iPad web app install without App Store." },
  { to: "/jeetbuzz-app-update", title: "App Update", desc: "Update the JeetBuzz app safely — old version fixes." },
  { to: "/mobile-app-guide", title: "Mobile App Guide", desc: "Feature parity and performance tips across devices." },
];

export const BONUS_CLUSTER: RelatedItem[] = [
  { to: "/bonus-and-promotions", title: "Bonuses & Promotions", desc: "Active JeetBuzz bonuses with clear T&C." },
  { to: "/welcome-bonus", title: "Welcome Bonus", desc: "New-player bonus with wagering explained." },
  { to: "/jeetbuzz-promo-code", title: "Promo Code", desc: "Today's valid promo codes and how to redeem." },
  { to: "/jeetbuzz-first-deposit-bonus", title: "First Deposit Bonus", desc: "Match percentage, minimum deposit and rollover." },
  { to: "/jeetbuzz-refer-bonus", title: "Refer Bonus", desc: "Refer-a-friend rewards and where to find your code." },
];

export const PROBLEMS_CLUSTER: RelatedItem[] = [
  { to: "/jeetbuzz-account-locked", title: "Account Locked", desc: "Why accounts get locked and how to recover access." },
  { to: "/jeetbuzz-withdrawal-time", title: "Withdrawal Time", desc: "Expected processing times per payment rail." },
  { to: "/jeetbuzz-deposit-problem", title: "Deposit Problem", desc: "Debit pending, wrong amount, name mismatch — fixes." },
  { to: "/password-reset", title: "Password Reset", desc: "Reset via phone OTP or email link step by step." },
  { to: "/login-problems", title: "Login Problems", desc: "Site not opening, OTP not arriving, greyed-out button." },
  { to: "/how-to-delete-jeetbuzz-account", title: "Delete Account", desc: "Formal account deletion / self-exclusion request." },
  { to: "/jeetbuzz-withdrawal-pending", title: "Withdrawal Pending", desc: "Cash-out stuck on Pending — the seven real causes and fixes." },
  { to: "/jeetbuzz-otp-not-received", title: "OTP Not Received", desc: "Missing SMS OTP — carrier, DND and voice-OTP fallback." },
  { to: "/jeetbuzz-account-verification", title: "Account Verification", desc: "KYC checklist and the six rejection reasons that trip everyone." },
  { to: "/jeetbuzz-app-not-opening", title: "App Not Opening", desc: "Splash freeze, blank screen, crash — ranked recovery checklist." },
  { to: "/jeetbuzz-deposit-failed", title: "Deposit Failed", desc: "Debited but not credited — the four evidence items support needs." },
  { to: "/jeetbuzz-password-reset", title: "Password Reset (Branded)", desc: "Phone OTP and email link reset, plus escalation if both fail." },
];

export const HUBS: RelatedItem[] = [
  { to: "/help", title: "Help Center", desc: "Support pillar — login, KYC, deposits, withdrawals, appeals." },
  { to: "/payments", title: "Payments Hub", desc: "Every deposit and withdrawal method across BD, PK, IN." },
  { to: "/bonuses", title: "Bonuses Hub", desc: "All active promos, promo codes, refer bonus and rollover." },
  { to: "/games", title: "Games Hub", desc: "Live cricket, casino, crash and slots — one map." },
];

export const BRAND_CLUSTER: RelatedItem[] = [
  { to: "/jitbuzz", title: "Jitbuzz Spelling", desc: "Why 'jitbuzz' shows up in search — and the correct brand name." },
  { to: "/jetbuzz", title: "Jetbuzz Spelling", desc: "One 'e' missing — how the misspelling happens and the real URL." },
  { to: "/jeetbuzz-com-login", title: "JeetBuzz.com Login", desc: "Reach the real login page and dodge fake mirrors." },
  { to: "/jeetbuzz-sign-up", title: "JeetBuzz Sign Up", desc: "Three-minute signup with the welcome bonus opt-in." },
  { to: "/jeetbuzz-apk-download", title: "JeetBuzz APK Download", desc: "Latest Android APK with safe install and permission checks." },
];

/**
 * Hub coverage clusters — sourced from the internal-link gap audit
 * (`.lovable/internal-link-gaps.md`). Each array bridges pages that had
 * zero inbound hub links so hubs can pass authority downward.
 */
export const HELP_CLUSTER: RelatedItem[] = [
  { to: "/login", title: "Login", desc: "Reach the real JeetBuzz login and avoid fake mirrors." },
  { to: "/register", title: "Register", desc: "Open a new JeetBuzz account in under three minutes." },
  { to: "/signup", title: "Signup", desc: "Signup walkthrough with welcome-bonus opt-in." },
  { to: "/affiliate-login", title: "Affiliate Login", desc: "Partner dashboard sign-in with 2FA." },
  { to: "/download", title: "Download", desc: "Install the JeetBuzz app on Android or iPhone." },
  { to: "/android-web-app-guide", title: "Android Web App Guide", desc: "Android PWA install and permission checklist." },
  { to: "/ios-app-guide", title: "iOS App Guide", desc: "iPhone / iPad install without the App Store." },
  { to: "/is-jeetbuzz-safe", title: "Is JeetBuzz Safe", desc: "Licensing, security and trust signals." },
  { to: "/jeetbuzz-review", title: "JeetBuzz Review", desc: "Full editorial review, pros and cons." },
  { to: "/jeetbuzz-alternatives", title: "JeetBuzz Alternatives", desc: "How JeetBuzz compares to other BD/PK/IN books." },
  { to: "/security-guide", title: "Security Guide", desc: "2FA, device hygiene and phishing checks." },
  { to: "/responsible-gaming", title: "Responsible Gaming", desc: "Deposit limits, time-outs and self-exclusion." },
  { to: "/vip-program", title: "VIP Program", desc: "Loyalty tiers, cashback and dedicated host." },
  { to: "/agent-earning-guide", title: "Agent Earning Guide", desc: "How sub-agents earn on JeetBuzz." },
  { to: "/blog", title: "Blog", desc: "Latest guides, updates and cricket coverage." },
  { to: "/terms", title: "Terms", desc: "User agreement and account terms." },
  { to: "/privacy-policy", title: "Privacy Policy", desc: "How JeetBuzz handles player data." },
  { to: "/review-policy", title: "Review Policy", desc: "How our editorial reviews are produced." },
  { to: "/update-policy", title: "Update Policy", desc: "How and when guides are refreshed." },
];

export const PAYMENTS_CLUSTER: RelatedItem[] = [
  { to: "/deposit-withdrawal-guide", title: "Deposit & Withdrawal Guide", desc: "End-to-end cashier walkthrough for both directions." },
  { to: "/withdrawal-guide", title: "Withdrawal Guide", desc: "Cash-out steps, KYC checkpoints and payout timing." },
  { to: "/jeetbuzz-bkash-deposit", title: "bKash Deposit", desc: "bKash-specific cashier flow and name-match rules." },
  { to: "/jeetbuzz-nagad-withdrawal", title: "Nagad Withdrawal", desc: "Nagad payout walk-through with realistic timing." },
  { to: "/jeetbuzz-minimum-deposit", title: "Minimum Deposit", desc: "Smallest amount you can fund per rail." },
];

export const GAMES_CLUSTER: RelatedItem[] = [
  { to: "/jeetbuzz-live-cricket", title: "JeetBuzz Live Cricket", desc: "Brand-focused live cricket streaming and in-play markets." },
];

/** Return cluster siblings, excluding the current page. */
export function siblings(cluster: RelatedItem[], currentPath: string): RelatedItem[] {
  return cluster.filter((item) => item.to !== currentPath);
}