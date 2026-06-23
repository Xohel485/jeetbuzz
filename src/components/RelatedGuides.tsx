import { LazyOnVisible } from "./LazyOnVisible";

export type RelatedItem = { to: string; title: string; desc?: string };

type Props = { items: RelatedItem[]; heading?: string };

export function RelatedGuides(props: Props) {
  if (!props.items?.length) return null;
  return (
    <LazyOnVisible<Props>
      load={() => import("./RelatedGuides.impl")}
      props={props}
      minHeight={220}
    />
  );
}