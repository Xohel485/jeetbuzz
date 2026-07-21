import { Link } from "@tanstack/react-router";
import { LAST_VERIFIED } from "@/lib/affiliate";
import { CalendarCheck2, ShieldCheck, UserCheck } from "lucide-react";

/**
 * Homepage E-E-A-T trust strip (Batch 8).
 * Surfaces Last Updated, Editorially Reviewed and Fact Checked signals
 * with links to the corresponding policy pages so both users and
 * crawlers can see the site's editorial provenance in one hop.
 */
export function EEATStrip() {
  const items = [
    {
      icon: CalendarCheck2,
      label: "Last updated",
      value: LAST_VERIFIED,
      to: "/update-policy" as const,
    },
    {
      icon: UserCheck,
      label: "Editorially reviewed",
      value: "GetJeetBuzz Editorial Team",
      to: "/editorial-policy" as const,
    },
    {
      icon: ShieldCheck,
      label: "Fact checked",
      value: "Compliance Desk",
      to: "/fact-checking" as const,
    },
  ];
  return (
    <section aria-label="Editorial provenance" className="container-pro mt-4">
      <ul className="grid grid-cols-1 gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs sm:grid-cols-3">
        {items.map(({ icon: Icon, label, value, to }) => (
          <li key={label} className="flex items-center gap-3">
            <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-muted-foreground">
              {label}:{" "}
              <Link
                to={to}
                className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                {value}
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}