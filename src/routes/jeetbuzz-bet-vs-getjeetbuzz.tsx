import { createFileRoute } from "@tanstack/react-router";
import { buildCompareHead, CompareComponent } from "@/lib/compare-page-route";

export const Route = createFileRoute("/jeetbuzz-bet-vs-getjeetbuzz")({
  head: buildCompareHead("jeetbuzz-bet"),
  component: () => <CompareComponent slug="jeetbuzz-bet" />,
});
