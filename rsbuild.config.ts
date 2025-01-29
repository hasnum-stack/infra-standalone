import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import tailwindcssPostcssPlugin from '@tailwindcss/postcss';
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';

export default defineConfig({
  server: {
    port: 9999,
  },
  plugins: [pluginReact()],
  tools: {
    postcss: (_options, { addPlugins }) => {
      addPlugins(tailwindcssPostcssPlugin);
    },
    rspack: {
      plugins: [TanStackRouterRspack()],
    },
  },
});
