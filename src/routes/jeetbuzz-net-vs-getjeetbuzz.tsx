import { createFileRoute } from "@tanstack/react-router";
import { buildCompareHead, CompareComponent } from "@/lib/compare-page-route";

export const Route = createFileRoute("/jeetbuzz-net-vs-getjeetbuzz")({
  head: buildCompareHead("jeetbuzz-net"),
  component: () => <CompareComponent slug="jeetbuzz-net" />,
});
