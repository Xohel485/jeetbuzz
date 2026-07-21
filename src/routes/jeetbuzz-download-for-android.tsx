import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/jeetbuzz-download-for-android")({
  beforeLoad: () => {
    throw redirect({ to: "/download", statusCode: 301 });
  },
  head: () => ({ meta: [{ name: "robots", content: "noindex, nofollow" }] }),
});
