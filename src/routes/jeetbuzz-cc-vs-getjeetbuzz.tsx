import { createFileRoute } from "@tanstack/react-router";
import { buildCompareHead, CompareComponent } from "@/lib/compare-page-route";

export const Route = createFileRoute("/jeetbuzz-cc-vs-getjeetbuzz")({
  head: buildCompareHead("jeetbuzz-cc"),
  component: () => <CompareComponent slug="jeetbuzz-cc" />,
});
