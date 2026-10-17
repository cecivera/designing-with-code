import { create } from "storybook/theming"

// Tema claro de la interfaz de Storybook (barra lateral, toolbar y docs).
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
