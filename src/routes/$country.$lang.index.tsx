import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { HomePage } from "@/components/home/HomePage";
import { CountryLocalContent } from "@/components/home/CountryLocalContent";
import {
  COUNTRIES,
  COUNTRY_META,
  LOCALES,
  LOCALE_META,
  useI18n,
  type Country,
  type Locale,
} from "@/lib/i18n";

const SITE = "https://getjeetbuzzv1.lovable.app";

function isValid(country: string, lang: string): country is Country {
  if (!(COUNTRIES as readonly string[]).includes(country)) return false;
  if (!(LOCALES as readonly string[]).includes(lang)) return false;
  return COUNTRY_META[country as Country].locales.includes(lang as Locale);
}

export const Route = createFileRoute("/$country/$lang/")({
  beforeLoad: ({ params }) => {
    if (!isValid(params.country, params.lang)) throw notFound();
  },
  head: ({ params }) => {
    const country = params.country as Country;
    const lang = params.lang as Locale;
    const meta = LOCALE_META[lang];
    const cm = COUNTRY_META[country];
    const path = `/${country}/${lang}`;
    const titles: Record<Locale, string> = {
      en: `JeetBuzz ${cm.label} — Login, Signup, Bonus & App Guide`,
      bn: `জিতবাজ ${cm.label} — লগইন, সাইনআপ, বোনাস ও অ্যাপ গাইড`,
      ur: `JeetBuzz ${cm.label} — لاگ ان، سائن اپ، بونس اور ایپ گائیڈ`,
      hi: `JeetBuzz ${cm.label} — लॉगिन, साइनअप, बोनस और ऐप गाइड`,
    };
    const descs: Record<Locale, string> = {
      en: `JeetBuzz ${cm.label} guide — registration, login, bonuses, APK download and local payments. Updated for ${cm.label} players.`,
      bn: `জিতবাজ ${cm.label} গাইড — রেজিস্ট্রেশন, লগইন, বোনাস, APK ডাউনলোড এবং লোকাল পেমেন্ট। ${cm.label} প্লেয়ারদের জন্য আপডেটেড।`,
      ur: `JeetBuzz ${cm.label} گائیڈ — رجسٹریشن، لاگ ان، بونس، APK ڈاؤن لوڈ اور مقامی ادائیگیاں۔ ${cm.label} کے کھلاڑیوں کے لیے۔`,
      hi: `JeetBuzz ${cm.label} गाइड — रजिस्ट्रेशन, लॉगिन, बोनस, APK डाउनलोड और लोकल पेमेंट। ${cm.label} खिलाड़ियों के लिए अपडेटेड।`,
    };
    return {
      meta: [
        { title: titles[lang] },
        { name: "description", content: descs[lang] },
        { property: "og:title", content: titles[lang] },
        { property: "og:description", content: descs[lang] },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${SITE}${path}` },
        { property: "og:locale", content: meta.htmlLang.replace("-", "_") },
      ],
      links: [
        { rel: "canonical", href: `${SITE}${path}` },
        { rel: "alternate", hrefLang: "en", href: `${SITE}/` },
        { rel: "alternate", hrefLang: "bn-BD", href: `${SITE}/bd/bn` },
        { rel: "alternate", hrefLang: "ur-PK", href: `${SITE}/pk/ur` },
        { rel: "alternate", hrefLang: "hi-IN", href: `${SITE}/in/hi` },
        { rel: "alternate", hrefLang: "x-default", href: `${SITE}/` },
      ],
    };
  },
  component: LocalizedHome,
});

function LocalizedHome() {
  const { country, lang } = Route.useParams();
  const { setLocale } = useI18n();
  useEffect(() => {
    setLocale(lang as Locale);
  }, [lang, setLocale]);
  // Country/locale unique content above the shared homepage to lift uniqueness
  // for /bd/bn, /pk/ur, /in/hi — local payments, leagues, FAQ in local script.
  return (
    <>
      <CountryLocalContent country={country as Country} lang={lang as Locale} />
      <HomePage />
    </>
  );
}