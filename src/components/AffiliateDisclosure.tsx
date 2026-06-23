export function AffiliateDisclosure({ variant = "banner" }: { variant?: "banner" | "inline" }) {
  if (variant === "inline") {
    return (
      <p className="text-xs text-muted-foreground">
        Affiliate disclosure: GetJeetBuzz is a verified affiliate
        partner of JeetBuzz — not the JeetBuzz platform itself. We may earn a
        commission when you sign up via our outbound links, at no extra cost
        to you.
      </p>
    );
  }
  return (
    <div className="glass px-4 py-3 text-xs text-muted-foreground">
      <strong className="text-foreground">Affiliate disclosure:</strong>{" "}
      GetJeetBuzz.com is a verified affiliate partner of JeetBuzz
      for Bangladesh, Pakistan and India — we hold a real commission
      agreement with the operator, but this site is not the JeetBuzz
      platform itself. Account signup, deposits and withdrawals happen on
      JeetBuzz's own site. We may earn commission when you sign up through
      our outbound links, at no extra cost to you. 18+ only.
    </div>
  );
}