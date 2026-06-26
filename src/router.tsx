import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function DefaultErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  if (typeof console !== "undefined") console.error(error);
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: "#0b0b0c", color: "#f5f5f7", minHeight: "100vh", display: "grid", placeItems: "center", padding: "24px" }}>
        <main style={{ maxWidth: 520, textAlign: "center" }}>
          <h1 style={{ fontSize: 24, margin: "0 0 12px" }}>Something went wrong</h1>
          <p style={{ opacity: 0.8, margin: "0 0 24px", lineHeight: 1.5 }}>
            We hit an unexpected issue rendering this page. Please try again, or return to the homepage.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => reset()} style={{ background: "#f5f5f7", color: "#0b0b0c", border: 0, padding: "10px 18px", borderRadius: 8, fontWeight: 600, cursor: "pointer" }}>Try again</button>
            <a href="/" style={{ background: "transparent", color: "#f5f5f7", border: "1px solid #3a3a3c", padding: "10px 18px", borderRadius: 8, fontWeight: 600, textDecoration: "none" }}>Go home</a>
          </div>
        </main>
      </body>
    </html>
  );
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent,
  });

  return router;
};
