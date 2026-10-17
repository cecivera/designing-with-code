import { addons } from "storybook/manager-api"

import theme from "./theme"

// Interfaz de Storybook siempre en modo claro.
addons.setConfig({
  theme,
})
