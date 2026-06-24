import { createFileRoute } from "@tanstack/react-router";
import { buildCompareHead, CompareComponent } from "@/lib/compare-page-route";

export const Route = createFileRoute("/jeetbuzz-live-vs-getjeetbuzz")({
  head: buildCompareHead("jeetbuzz-live"),
  component: () => <CompareComponent slug="jeetbuzz-live" />,
});
