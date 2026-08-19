// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // @vapi-ai/web is CJS and does `require("events")`. In the production client
  // bundle that resolved to a namespace object, so `class ... extends events.default`
  // threw "Class extends value #<Object> is not a constructor" and blanked the page.
  // Point it at the real `events` implementation so the CJS default interop works.
  vite: {
    resolve: {
      alias: [{ find: /^events$/, replacement: "events/events.js" }],
    },
  },
});
