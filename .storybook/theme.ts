import { create } from "storybook/theming"

// Light theme for the Storybook UI (sidebar, toolbar and docs).
export default create({
  base: "light",
  brandTitle: "Evergreen · shadcn/ui",
  fontBase: '"Geist", ui-sans-serif, system-ui, sans-serif',
  fontCode: '"Geist Mono", ui-monospace, monospace',
  appBg: "#fafafa",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  textColor: "#171717",
  barBg: "#ffffff",
})
