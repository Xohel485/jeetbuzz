import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Mail, MessageSquare, AlertTriangle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const T = {
  en: {
    eyebrow: "Contact",
    title1: "Talk to ",
    title2: "GetJeetBuzz",
    subtitle: "We handle editorial questions and partnership enquiries. We are not JeetBuzz support, for account issues, contact JeetBuzz directly.",
    editorial: "Editorial",
    editorialText: "Spotted something wrong or out of date? Email ",
    editorialTail: ". Include the URL and a screenshot if possible.",
    partnerships: "Partnerships",
    partnershipsText: "Brand / publisher partnerships: ",
    notSupport: "We are not JeetBuzz support",
    notSupportText: "For account, deposit, withdrawal or bonus issues, contact JeetBuzz live chat from inside your account. We cannot access or modify your JeetBuzz account.",
  },
  bn: {
    eyebrow: "যোগাযোগ",
    title1: "কথা বলুন ",
    title2: "GetJeetBuzz-এর সাথে",
    subtitle: "আমরা সম্পাদকীয় প্রশ্ন ও পার্টনারশিপ অনুসন্ধান পরিচালনা করি। আমরা JeetBuzz সাপোর্ট নই, অ্যাকাউন্ট সমস্যার জন্য সরাসরি JeetBuzz-এ যোগাযোগ করুন।",
    editorial: "সম্পাদকীয়",
    editorialText: "ভুল বা পুরোনো কিছু দেখেছেন? ইমেইল করুন ",
    editorialTail: "। সম্ভব হলে URL ও স্ক্রিনশট দিন।",
    partnerships: "পার্টনারশিপ",
    partnershipsText: "ব্র্যান্ড / পাবলিশার পার্টনারশিপ: ",
    notSupport: "আমরা JeetBuzz সাপোর্ট নই",
    notSupportText: "অ্যাকাউন্ট, ডিপোজিট, উইথড্র বা বোনাস সমস্যার জন্য আপনার অ্যাকাউন্টের ভেতর থেকে JeetBuzz লাইভ চ্যাটে যোগাযোগ করুন। আমরা আপনার JeetBuzz অ্যাকাউন্ট অ্যাক্সেস বা পরিবর্তন করতে পারি না।",
  },
  ur: {
    eyebrow: "رابطہ",
    title1: "بات کریں ",
    title2: "GetJeetBuzz سے",
    subtitle: "ہم ادارتی سوالات اور پارٹنرشپ کی پوچھ گچھ سنبھالتے ہیں۔ ہم JeetBuzz سپورٹ نہیں, اکاؤنٹ مسائل کے لیے براہ راست JeetBuzz سے رابطہ کریں۔",
    editorial: "ادارتی",
    editorialText: "کوئی غلطی یا پرانی معلومات دیکھی؟ ای میل کریں ",
    editorialTail: "۔ ممکن ہو تو URL اور اسکرین شاٹ شامل کریں۔",
    partnerships: "پارٹنرشپس",
    partnershipsText: "برانڈ / پبلشر پارٹنرشپ: ",
    notSupport: "ہم JeetBuzz سپورٹ نہیں",
    notSupportText: "اکاؤنٹ، ڈپازٹ، وڈرا یا بونس کے مسائل کے لیے اپنے اکاؤنٹ کے اندر سے JeetBuzz لائیو چیٹ سے رابطہ کریں۔",
  },
  hi: {
    eyebrow: "संपर्क",
    title1: "बात करें ",
    title2: "GetJeetBuzz से",
    subtitle: "हम संपादकीय प्रश्न और पार्टनरशिप पूछताछ संभालते हैं। हम JeetBuzz सपोर्ट नहीं हैं, अकाउंट समस्याओं के लिए सीधे JeetBuzz से संपर्क करें।",
    editorial: "संपादकीय",
    editorialText: "कुछ गलत या पुराना दिखा? ईमेल करें ",
    editorialTail: "। यदि संभव हो तो URL और स्क्रीनशॉट शामिल करें।",
    partnerships: "पार्टनरशिप",
    partnershipsText: "ब्रांड / पब्लिशर पार्टनरशिप: ",
    notSupport: "हम JeetBuzz सपोर्ट नहीं हैं",
    notSupportText: "अकाउंट, डिपॉज़िट, विदड्रॉल या बोनस समस्याओं के लिए अपने अकाउंट के अंदर से JeetBuzz लाइव चैट से संपर्क करें।",
  },
} as const;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GetJeetBuzz. Editorial & Partnerships" },
      { name: "description", content: "Editorial corrections, partnerships and feedback for GetJeetBuzz. We do NOT handle JeetBuzz account support." },
      { property: "og:title", content: "Contact GetJeetBuzz" },
      { property: "og:description", content: "Editorial corrections, partnerships and feedback." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { locale } = useI18n();
  const t = T[locale] ?? T.en;
  return (
    <PageShell>
      <PageHero
        eyebrow={t.eyebrow}
        title={<>{t.title1}<span className="gold-text">{t.title2}</span></>}
        subtitle={t.subtitle}
      />
      <section className="container-pro">
        <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
          <div className="glass p-5">
            <Mail className="size-5 text-primary" />
            <h3 className="mt-3 text-base font-semibold">{t.editorial}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t.editorialText}
              <a className="text-primary underline" href="mailto:editorial@getjeetbuzz.com">
                editorial@getjeetbuzz.com
              </a>
              {t.editorialTail}
            </p>
          </div>
          <div className="glass p-5">
            <MessageSquare className="size-5 text-primary" />
            <h3 className="mt-3 text-base font-semibold">{t.partnerships}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t.partnershipsText}
              <a className="text-primary underline" href="mailto:partners@getjeetbuzz.com">
                partners@getjeetbuzz.com
              </a>
              .
            </p>
          </div>
          <div className="glass p-5 md:col-span-2">
            <AlertTriangle className="size-5 text-accent" />
            <h3 className="mt-3 text-base font-semibold">{t.notSupport}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.notSupportText}</p>
          </div>
          <div className="md:col-span-2">
            <AffiliateDisclosure />
          </div>
        </div>
      </section>
    </PageShell>
  );
}