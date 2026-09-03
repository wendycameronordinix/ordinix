import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/",
  },
  tanstackStart: {
    server: { entry: "server" },
    pages: [{ path: "/" }, { path: "/adaptordie" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
  nitro: {
    preset: "vercel",
  },
});
