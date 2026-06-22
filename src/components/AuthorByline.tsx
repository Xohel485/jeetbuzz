import { Link } from "@tanstack/react-router";
import { LAST_VERIFIED } from "@/lib/affiliate";

/**
 * Editorial byline shown at the top of every guide and blog post.
 * Links to the /author page so readers can see who is behind the content
 * and how it is verified — a baseline EEAT signal for a YMYL site.
 */
export function AuthorByline({
  lastVerified = LAST_VERIFIED,
  className = "",
}: {
  lastVerified?: string;
  className?: string;
}) {
  return (
    <p className={`text-xs text-muted-foreground ${className}`}>
      By{" "}
      <Link
        to="/author"
        className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
      >
        GetJeetBuzz Editorial Team
      </Link>{" "}
      · Last verified {lastVerified}
    </p>
  );
}