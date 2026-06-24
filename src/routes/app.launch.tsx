import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const TARGET = "https://jb09p24aff2024.com/af/2DnXxK7c/GetJeetBuzz-Web_App";

const HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="robots" content="noindex,nofollow,noarchive,nosnippet" />
<meta http-equiv="refresh" content="0;url=${TARGET}" />
<title>Launching GetJeetBuzz…</title>
<style>html,body{margin:0;background:#0c1a13;color:#e7f5ec;font-family:system-ui,sans-serif}main{min-height:100vh;display:flex;align-items:center;justify-content:center;font-size:14px;opacity:.7}</style>
</head>
<body>
<main>Opening GetJeetBuzz…</main>
<script>
(function(){
  var url=${JSON.stringify(TARGET)};
  try{
    window.dataLayer=window.dataLayer||[];
    window.dataLayer.push({event:"webapp_launch",launch_target:"affiliate"});
  }catch(e){}
  var go=function(){try{window.location.replace(url);}catch(e){window.location.href=url;}};
  setTimeout(go,80);
})();
</script>
<noscript><a href="${TARGET}">Continue to GetJeetBuzz</a></noscript>
</body>
</html>`;

export const Route = createFileRoute("/app/launch")({
  server: {
    handlers: {
      GET: async () =>
        new Response(HTML, {
          status: 200,
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "no-store",
            "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
            Refresh: `0; url=${TARGET}`,
          },
        }),
    },
  },
});