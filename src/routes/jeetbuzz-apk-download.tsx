import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/jeetbuzz-apk-download")({
  beforeLoad: () => {
    throw redirect({ to: "/download", statusCode: 301 });
  },
  head: () => ({ meta: [{ name: "robots", content: "noindex, nofollow" }] }),
});
