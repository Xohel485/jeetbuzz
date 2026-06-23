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

/** Return cluster siblings, excluding the current page. */
export function siblings(cluster: RelatedItem[], currentPath: string): RelatedItem[] {
  return cluster.filter((item) => item.to !== currentPath);
}