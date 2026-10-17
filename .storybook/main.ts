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
  // Silence Vite warnings about the "use client" directive in Base UI/Next
  // (they don't apply outside Next.js and clutter the build output).
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
