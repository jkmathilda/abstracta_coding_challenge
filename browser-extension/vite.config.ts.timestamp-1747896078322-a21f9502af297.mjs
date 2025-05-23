// vite.config.ts
import { defineConfig } from "file:///Users/junkyunglee/Documents/Co-op/Abstracta/abstracta_coding_challenge/browser-extension/node_modules/.pnpm/vite@4.5.5_sass@1.81.0/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/junkyunglee/Documents/Co-op/Abstracta/abstracta_coding_challenge/browser-extension/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@4.5.5_vue@3.5.13/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import webExtension, { readJsonFile } from "file:///Users/junkyunglee/Documents/Co-op/Abstracta/abstracta_coding_challenge/browser-extension/node_modules/.pnpm/vite-plugin-web-extension@3.2.0_vite@4.5.5/node_modules/vite-plugin-web-extension/dist/index.js";
import VueI18nPlugin from "file:///Users/junkyunglee/Documents/Co-op/Abstracta/abstracta_coding_challenge/browser-extension/node_modules/.pnpm/@intlify+unplugin-vue-i18n@1.6.0_vue-i18n@9.14.1/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
function generateManifest() {
  const manifest = readJsonFile("src/manifest.json");
  const pkg = readJsonFile("package.json");
  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest
  };
}
var _a;
var vite_config_default = defineConfig({
  esbuild: {
    supported: {
      "top-level-await": true
    }
  },
  plugins: [
    vue(),
    webExtension({
      manifest: generateManifest,
      additionalInputs: ["src/index.html"],
      watchFilePaths: ["package.json", "manifest.json"],
      webExtConfig: {
        startUrl: process.env.START_URL || "https://github.com/abstracta/browser-copilot",
        args: ((_a = process.env.BROWSER_ARGS) == null ? void 0 : _a.split(" ")) || []
      }
    }),
    VueI18nPlugin({
      jitCompilation: true
    })
  ],
  build: {
    sourcemap: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvanVua3l1bmdsZWUvRG9jdW1lbnRzL0NvLW9wL0Fic3RyYWN0YS9hYnN0cmFjdGFfY29kaW5nX2NoYWxsZW5nZS9icm93c2VyLWV4dGVuc2lvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2p1bmt5dW5nbGVlL0RvY3VtZW50cy9Dby1vcC9BYnN0cmFjdGEvYWJzdHJhY3RhX2NvZGluZ19jaGFsbGVuZ2UvYnJvd3Nlci1leHRlbnNpb24vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2p1bmt5dW5nbGVlL0RvY3VtZW50cy9Dby1vcC9BYnN0cmFjdGEvYWJzdHJhY3RhX2NvZGluZ19jaGFsbGVuZ2UvYnJvd3Nlci1leHRlbnNpb24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIlxuaW1wb3J0IHdlYkV4dGVuc2lvbiwgeyByZWFkSnNvbkZpbGUgfSBmcm9tIFwidml0ZS1wbHVnaW4td2ViLWV4dGVuc2lvblwiXG5pbXBvcnQgVnVlSTE4blBsdWdpbiBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xuXG5mdW5jdGlvbiBnZW5lcmF0ZU1hbmlmZXN0KCkge1xuICBjb25zdCBtYW5pZmVzdCA9IHJlYWRKc29uRmlsZShcInNyYy9tYW5pZmVzdC5qc29uXCIpXG4gIGNvbnN0IHBrZyA9IHJlYWRKc29uRmlsZShcInBhY2thZ2UuanNvblwiKVxuICByZXR1cm4ge1xuICAgIG5hbWU6IHBrZy5uYW1lLFxuICAgIGRlc2NyaXB0aW9uOiBwa2cuZGVzY3JpcHRpb24sXG4gICAgdmVyc2lvbjogcGtnLnZlcnNpb24sXG4gICAgLi4ubWFuaWZlc3QsXG4gIH07XG59XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBlc2J1aWxkOiB7XG4gICAgc3VwcG9ydGVkOiB7XG4gICAgICAndG9wLWxldmVsLWF3YWl0JzogdHJ1ZVxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICB3ZWJFeHRlbnNpb24oe1xuICAgICAgbWFuaWZlc3Q6IGdlbmVyYXRlTWFuaWZlc3QsXG4gICAgICBhZGRpdGlvbmFsSW5wdXRzOiBbXCJzcmMvaW5kZXguaHRtbFwiXSxcbiAgICAgIHdhdGNoRmlsZVBhdGhzOiBbXCJwYWNrYWdlLmpzb25cIiwgXCJtYW5pZmVzdC5qc29uXCJdLFxuICAgICAgd2ViRXh0Q29uZmlnOiB7XG4gICAgICAgIHN0YXJ0VXJsOiBwcm9jZXNzLmVudi5TVEFSVF9VUkwgfHwgXCJodHRwczovL2dpdGh1Yi5jb20vYWJzdHJhY3RhL2Jyb3dzZXItY29waWxvdFwiLFxuICAgICAgICBhcmdzOiBwcm9jZXNzLmVudi5CUk9XU0VSX0FSR1M/LnNwbGl0KCcgJykgfHwgW11cbiAgICAgIH1cbiAgICB9KSxcbiAgICBWdWVJMThuUGx1Z2luKHtcbiAgICAgIGppdENvbXBpbGF0aW9uOiB0cnVlXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgc291cmNlbWFwOiB0cnVlXG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2YixTQUFTLG9CQUFvQjtBQUMxZCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0Isb0JBQW9CO0FBQzNDLE9BQU8sbUJBQW1CO0FBRTFCLFNBQVMsbUJBQW1CO0FBQzFCLFFBQU0sV0FBVyxhQUFhLG1CQUFtQjtBQUNqRCxRQUFNLE1BQU0sYUFBYSxjQUFjO0FBQ3ZDLFNBQU87QUFBQSxJQUNMLE1BQU0sSUFBSTtBQUFBLElBQ1YsYUFBYSxJQUFJO0FBQUEsSUFDakIsU0FBUyxJQUFJO0FBQUEsSUFDYixHQUFHO0FBQUEsRUFDTDtBQUNGO0FBZEE7QUFpQkEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsV0FBVztBQUFBLE1BQ1QsbUJBQW1CO0FBQUEsSUFDckI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixhQUFhO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixrQkFBa0IsQ0FBQyxnQkFBZ0I7QUFBQSxNQUNuQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsZUFBZTtBQUFBLE1BQ2hELGNBQWM7QUFBQSxRQUNaLFVBQVUsUUFBUSxJQUFJLGFBQWE7QUFBQSxRQUNuQyxRQUFNLGFBQVEsSUFBSSxpQkFBWixtQkFBMEIsTUFBTSxTQUFRLENBQUM7QUFBQSxNQUNqRDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxFQUNiO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
