import FAQAccordionImpl from "./FAQAccordion.impl";

export type FAQItem = { q: string; a: string };

type Props = { faqs: FAQItem[]; heading?: string };

/**
 * Rendered eagerly (T2): FAQ copy is primary SEO content and must exist in
 * the initial server HTML, not behind an IntersectionObserver gate.
 */
export function FAQAccordion(props: Props) {
  if (!props.faqs?.length) return null;
  return <FAQAccordionImpl {...props} />;
}