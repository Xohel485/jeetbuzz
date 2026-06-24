import { createFileRoute } from "@tanstack/react-router";
import { buildCompareHead, CompareComponent } from "@/lib/compare-page-route";

export const Route = createFileRoute("/jeetbuzz66-vs-getjeetbuzz")({
  head: buildCompareHead("jeetbuzz66"),
  component: () => <CompareComponent slug="jeetbuzz66" />,
});
