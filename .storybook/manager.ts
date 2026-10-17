import { addons } from "storybook/manager-api"

import theme from "./theme"

// Storybook UI always in light mode.
addons.setConfig({
  theme,
})
