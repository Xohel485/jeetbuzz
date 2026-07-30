import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  COUNTRIES,
  COUNTRY_META,
  LOCALES,
  LOCALE_META,
  useI18n,
  type Country,
  type Locale,
} from "@/lib/i18n";
import { findLocalizedRoute } from "@/lib/localized-routes";
import { localizedSlugCountries } from "@/lib/schema";
import { LocalizedIntroProvider } from "@/components/LocalizedIntro";

const SITE = "https://getjeetbuzz.com";

function isValidCountryLang(country: string, lang: string): boolean {
  if (!(COUNTRIES as readonly string[]).includes(country)) return false;
  if (!(LOCALES as readonly string[]).includes(lang)) return false;
  return COUNTRY_META[country as Country].locales.includes(lang as Locale);
}

function hreflangCluster(slug: string) {
  const tail = slug ? `/${slug}` : "";
  const allowed = localizedSlugCountries(slug);
  // Only reciprocate URLs that actually resolve. `/{country}/en/*` pages are
  // deliberately excluded from indexing, so they get no alternate either.
  const links = [
    { rel: "alternate", hrefLang: "x-default", href: `${SITE}${tail || "/"}` },
    { rel: "alternate", hrefLang: "en", href: `${SITE}${tail || "/"}` },
  ];
  if (allowed.includes("bd"))
    links.push({ rel: "alternate", hrefLang: "bn-BD", href: `${SITE}/bd/bn${tail}` });
  if (allowed.includes("pk"))
    links.push({ rel: "alternate", hrefLang: "ur-PK", href: `${SITE}/pk/ur${tail}` });
  if (allowed.includes("in"))
    links.push({ rel: "alternate", hrefLang: "hi-IN", href: `${SITE}/in/hi${tail}` });
  return links;
}

export const Route = createFileRoute("/$country/$lang/$")({
  beforeLoad: ({ params }) => {
    if (!isValidCountryLang(params.country, params.lang)) throw notFound();
    const slug = params._splat ?? "";
    if (!findLocalizedRoute(slug, params.country as Country)) throw notFound();
  },
  head: ({ params }) => {
    const country = params.country as Country;
    const lang = params.lang as Locale;
    const slug = params._splat ?? "";
    const reg = findLocalizedRoute(slug, country);
    if (!reg) return { meta: [], links: [] };
    const m = reg.meta[lang] ?? reg.meta.en;
    const localeMeta = LOCALE_META[lang];
    const path = `/${country}/${lang}${slug ? `/${slug}` : ""}`;
    const url = `${SITE}${path}`;
    return {
      meta: [
        { title: m.title },
        { name: "description", content: m.description },
        { property: "og:title", content: m.title },
        { property: "og:description", content: m.description },
        { property: "og:url", content: url },
        { property: "og:locale", content: localeMeta.htmlLang.replace("-", "_") },
        { property: "og:type", content: slug === "" ? "website" : "article" },
        { name: "twitter:title", content: m.title },
        { name: "twitter:description", content: m.description },
      ],
      links: [{ rel: "canonical", href: url }, ...hreflangCluster(slug)],
    };
  },
  component: LocalizedSplat,
});

function LocalizedSplat() {
  const { country, lang, _splat } = Route.useParams();
  const slug = (_splat ?? "") as string;
  const reg = findLocalizedRoute(slug, country as Country)!;
  const { setLocale } = useI18n();
  useEffect(() => {
    setLocale(lang as Locale);
  }, [lang, setLocale]);
  const Comp = reg.component;
  return (
    <LocalizedIntroProvider value={{ slug, country: country as Country, lang: lang as Locale }}>
      <Comp />
    </LocalizedIntroProvider>
  );
}