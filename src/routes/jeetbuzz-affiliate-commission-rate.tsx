import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/jeetbuzz-affiliate-commission-rate")({
  beforeLoad: () => {
    throw redirect({ to: "/jeetbuzz-affiliate-commission", statusCode: 301 });
  },
  head: () => ({ meta: [{ name: "robots", content: "noindex, nofollow" }] }),
});
