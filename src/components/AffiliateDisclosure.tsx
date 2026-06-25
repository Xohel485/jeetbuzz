import { useI18n } from "@/lib/i18n";

export function AffiliateDisclosure({ variant = "banner" }: { variant?: "banner" | "inline" }) {
  const { t } = useI18n();
  if (variant === "inline") {
    return (
      <p className="text-xs text-muted-foreground">
        {t("disclosure.inline")}
      </p>
    );
  }
  return (
    <div className="glass px-4 py-3 text-xs text-muted-foreground">
      <strong className="text-foreground">{t("disclosure.label")}</strong>{" "}
      {t("disclosure.banner")}
    </div>
  );
}