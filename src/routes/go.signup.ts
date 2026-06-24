import { createFileRoute } from "@tanstack/react-router";
import { GO_DESTINATIONS } from "@/lib/affiliate";

export const Route = createFileRoute("/go/signup")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(null, {
          status: 302,
          headers: {
            Location: GO_DESTINATIONS.signup,
            "Cache-Control": "no-store, max-age=0",
            "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
            "Referrer-Policy": "no-referrer-when-downgrade",
          },
        });
      },
    },
  },
});