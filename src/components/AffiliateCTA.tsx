import { Button } from "@/components/ui/button";
import { GO, REL } from "@/lib/affiliate";
import { track } from "@/lib/analytics";
import { ArrowUpRight } from "lucide-react";

type Props = {
  intent?: "signup" | "login";
  label?: string;
  size?: "default" | "lg" | "xl";
  variant?: "hero" | "emerald" | "glass";
  className?: string;
  /** Where this CTA is rendered — used for analytics attribution. */
  position?:
    | "hero"
    | "header"
    | "sticky_cta"
    | "footer"
    | "affiliate_section"
    | "blog"
    | "faq"
    | "payment_page"
    | "guide_page";
};

export function AffiliateCTA({
  intent = "signup",
  label,
  size = "lg",
  variant = "hero",
  className,
  position = "guide_page",
}: Props) {
  const href = GO[intent];
  const text =
    label ??
    (intent === "login"
      ? "Visit Official JeetBuzz Login"
      : "Visit Official JeetBuzz Site");
  return (
    <Button asChild size={size} variant={variant} className={className}>
      <a
        href={href}
        target="_blank"
        rel={REL}
        aria-label={text}
        onClick={() => {
          const evt = intent === "login" ? "login_click" : "signup_click";
          track(evt, { destination: intent, button_position: position });
          track("affiliate_click", { intent, destination: intent, button_position: position, label: text });
          track("outbound_link_click", { href, destination: intent, button_position: position });
        }}
      >
        {text}
        <ArrowUpRight className="size-4" />
      </a>
    </Button>
  );
}