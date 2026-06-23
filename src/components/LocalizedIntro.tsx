import type { Country, Locale } from "@/lib/i18n";
import { LOCALIZED_INTROS } from "@/lib/localized-intros";

/**
 * Country + locale + slug specific intro block.
 * Rendered above the shared English page body inside the localized splat
 * route so each /{country}/{lang}/{slug} URL ships unique native copy with
 * local payment names, local cricket leagues, and local city references.
 */
export function LocalizedIntro({
  slug,
  country,
  lang,
}: {
  slug: string;
  country: Country;
  lang: Locale;
}) {
  const block = LOCALIZED_INTROS[slug]?.[country]?.[lang];
  if (!block) return null;

  return (
    <section className="container-pro mt-10 md:mt-14">
      <div className="glass mx-auto max-w-4xl p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {block.eyebrow}
        </p>
        <h2 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-tight md:text-3xl">
          {block.heading}
        </h2>
        <div className="mt-5 space-y-4">
          {block.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty text-sm leading-relaxed text-foreground/85 md:text-base">
              {p}
            </p>
          ))}
        </div>
        {block.bullets && block.bullets.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {block.bullets.map((b, i) => (
              <li
                key={i}
                className="border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground"
              >
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}