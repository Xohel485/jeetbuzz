import { Link } from "@tanstack/react-router";
import { LAST_VERIFIED } from "@/lib/affiliate";

/**
 * Editorial byline shown at the top of every guide and blog post.
 * Surfaces Author, Reviewer, Last Updated, Editorial Policy and
 * Affiliate Disclosure links — the full EEAT signal set required
 * for a YMYL affiliate site.
 */
export function AuthorByline({
  lastVerified = LAST_VERIFIED,
  className = "",
}: {
  lastVerified?: string;
  className?: string;
}) {
  return (
    <div className={`space-y-1 text-xs text-muted-foreground ${className}`}>
      <p>
        By{" "}
        <Link
          to="/author"
          className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          GetJeetBuzz Editorial Team
        </Link>{" "}
        · Reviewed by{" "}
        <Link
          to="/fact-checking"
          className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          Compliance Desk
        </Link>{" "}
        · Last updated {lastVerified}
      </p>
      <p>
        <Link to="/editorial-policy" className="underline-offset-4 hover:text-primary hover:underline">
          Editorial policy
        </Link>
        {" · "}
        <Link to="/affiliate-disclosure" className="underline-offset-4 hover:text-primary hover:underline">
          Affiliate disclosure
        </Link>
      </p>
    </div>
  );
}