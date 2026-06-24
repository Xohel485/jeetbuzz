import { createFileRoute } from "@tanstack/react-router";
import { buildCompareHead, CompareComponent } from "@/lib/compare-page-route";

export const Route = createFileRoute("/jeetbuzz-pk-vs-getjeetbuzz")({
  head: buildCompareHead("jeetbuzz-pk"),
  component: () => <CompareComponent slug="jeetbuzz-pk" />,
});
