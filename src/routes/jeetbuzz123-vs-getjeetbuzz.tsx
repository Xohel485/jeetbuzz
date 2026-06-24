import { createFileRoute } from "@tanstack/react-router";
import { buildCompareHead, CompareComponent } from "@/lib/compare-page-route";

export const Route = createFileRoute("/jeetbuzz123-vs-getjeetbuzz")({
  head: buildCompareHead("jeetbuzz123"),
  component: () => <CompareComponent slug="jeetbuzz123" />,
});
