import { defineConfig } from '@rsbuild/core';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  server: {
    port: 9999,
  },
  plugins: [pluginReact(), pluginLess()],
});
