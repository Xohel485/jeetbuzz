import { LazyOnVisible } from "./LazyOnVisible";

export type FAQItem = { q: string; a: string };

type Props = { faqs: FAQItem[]; heading?: string };

export function FAQAccordion(props: Props) {
  if (!props.faqs?.length) return null;
  return (
    <LazyOnVisible<Props>
      load={() => import("./FAQAccordion.impl")}
      props={props}
      minHeight={280}
    />
  );
}