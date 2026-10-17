import type { StorybookConfig } from "@storybook/nextjs-vite"

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.mdx", "../src/stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  core: {
    disableTelemetry: true,
  },
  // Silencia los avisos de Vite sobre la directiva "use client" de Base UI/Next
  // (no aplican fuera de Next.js y ensucian la salida del build).
  viteFinal: async (viteConfig) => {
    viteConfig.build ??= {}
    viteConfig.build.rollupOptions ??= {}
    const previous = viteConfig.build.rollupOptions.onwarn
    viteConfig.build.rollupOptions.onwarn = (warning, warn) => {
      if (warning.code === "MODULE_LEVEL_DIRECTIVE") return
      if (previous) previous(warning, warn)
      else warn(warning)
    }
    return viteConfig
  },
}

export default config
