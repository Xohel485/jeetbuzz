import { createFileRoute } from "@tanstack/react-router";
import { buildCompareHead, CompareComponent } from "@/lib/compare-page-route";

export const Route = createFileRoute("/jeetbuzz-org-vs-getjeetbuzz")({
  head: buildCompareHead("jeetbuzz-org"),
  component: () => <CompareComponent slug="jeetbuzz-org" />,
});
