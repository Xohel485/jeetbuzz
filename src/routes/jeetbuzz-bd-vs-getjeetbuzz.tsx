import { createFileRoute } from "@tanstack/react-router";
import { buildCompareHead, CompareComponent } from "@/lib/compare-page-route";

export const Route = createFileRoute("/jeetbuzz-bd-vs-getjeetbuzz")({
  head: buildCompareHead("jeetbuzz-bd"),
  component: () => <CompareComponent slug="jeetbuzz-bd" />,
});
