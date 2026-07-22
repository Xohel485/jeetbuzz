import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { Button } from "@/components/ui/button";
import { IMAGES, imageUrl } from "@/lib/images";
import { MARKETS } from "@/lib/affiliate";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/5">
        <picture className="absolute inset-0 -z-20 h-full w-full">
          <source
            type="image/avif"
            srcSet={IMAGES.hero.widths.map((w) => `${imageUrl("hero", w, "avif")} ${w}w`).join(", ")}
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <source
            type="image/webp"
            srcSet={IMAGES.hero.widths.map((w) => `${imageUrl("hero", w, "webp")} ${w}w`).join(", ")}
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <img
            src={imageUrl("hero", 1125, "webp")}
            alt={IMAGES.hero.alt}
            title={IMAGES.hero.title}
            width={IMAGES.hero.w}
            height={IMAGES.hero.h}
            fetchPriority="high"
            loading="eager"
            sizes="(max-width: 768px) 100vw, 1200px"
            decoding="async"
            className="h-full w-full object-cover opacity-40"
          />
        </picture>
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.16 0.03 165 / 0.55) 0%, oklch(0.12 0.02 160 / 0.92) 70%, var(--background) 100%)",
          }}
        />
        <div className="container-pro pt-16 pb-16 text-center md:pt-28 md:pb-28">
          <div className="mx-auto flex max-w-full flex-wrap items-center justify-center gap-2 whitespace-normal rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="size-1.5 shrink-0 rounded-full bg-primary" />
            <span className="whitespace-normal break-words text-center">{t("hero.eyebrow")}</span>
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            {t("hero.title.lead")}{" "}
            <span className="gold-text">{t("hero.title.highlight")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">
            {t("hero.subtitle")}
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <AffiliateCTA
              size="xl"
              variant="emerald"
              label={t("hero.cta.join")}
              position="hero"
              className="min-h-[60px] px-10 text-base md:min-h-[68px] md:px-12 md:text-lg"
            />
            <Button
              asChild
              size="xl"
              variant="hero"
              className="min-h-[60px] px-10 text-base md:min-h-[68px] md:px-12 md:text-lg"
            >
              <Link to="/login-guide">
                {t("hero.cta.login")} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>{t("hero.markets.label")}</span>
            {MARKETS.map((m) => (
              <span
                key={m}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pro -mt-10 md:-mt-16">
        <div className="grid grid-cols-1 gap-3 min-[340px]:grid-cols-2 sm:gap-4 md:gap-5">
          {JEETBUZZ_STATS.map((s, i) => {
            const Icon = [ShieldIcon, Languages, Headphones, Trophy][i] ?? ShieldIcon;
            return (
              <div
                key={s.label}
                className="glass group relative flex h-full flex-col items-start justify-center gap-3 rounded-2xl border border-white/8 bg-background/70 p-5 transition-colors hover:border-primary/30 md:gap-4 md:p-6"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <Icon className="size-5 text-primary" strokeWidth={1.75} />
                </span>
                <div className="space-y-1.5">
                  <p className="gold-text text-[28px] font-bold leading-[1.05] tracking-tight md:text-[34px]">
                    {s.value}
                  </p>
                  <p className="text-[15px] leading-[1.4] text-muted-foreground md:text-base">
                    {s.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-pro mt-12 md:mt-16">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          <TrustPill label="Verified JeetBuzz links" />
          <TrustPill label="Transparent affiliate disclosure" />
          <TrustPill label="Bengali · English · Hindi · Urdu" />
        </div>
      </section>
    </>
  );
}