import { createFileRoute } from "@tanstack/react-router";
import { buildCompareHead, CompareComponent } from "@/lib/compare-page-route";

export const Route = createFileRoute("/jeetbuzz-io-vs-getjeetbuzz")({
  head: buildCompareHead("jeetbuzz-io"),
  component: () => <CompareComponent slug="jeetbuzz-io" />,
});
