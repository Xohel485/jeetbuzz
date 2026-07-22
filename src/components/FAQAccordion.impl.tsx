import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { track } from "@/lib/analytics";
import { useI18n } from "@/lib/i18n";

export type FAQItem = { q: string; a: string };

export default function FAQAccordionImpl({
  faqs,
  heading,
}: {
  faqs: FAQItem[];
  heading?: string;
}) {
  const { t } = useI18n();
  const resolvedHeading = heading ?? t("faq.default_heading");
  if (!faqs?.length) return null;
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold md:text-2xl">{resolvedHeading}</h2>
      <Accordion
        type="single"
        collapsible
        className="glass mt-4 px-4"
        onValueChange={(value) => {
          if (!value) return;
          const idx = Number(String(value).replace("item-", ""));
          const f = faqs[idx];
          if (f) track("faq_expand", { question: f.q, index: idx });
        }}
      >
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-white/5">
            <AccordionTrigger className="text-left text-sm font-medium md:text-base">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}