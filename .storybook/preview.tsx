import type { Preview } from "@storybook/nextjs-vite"

import "../src/app/globals.css"
import "./preview.css"
import theme from "./theme"

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme,
      toc: { headingSelector: "h2, h3" },
    },
    backgrounds: {
      options: {
        white: { name: "White", value: "#ffffff" },
      },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundations",
          "Actions",
          "Forms",
          "Navigation",
          "Data",
          "Feedback",
          "Overlays",
          "Layout",
          "Utilities",
        ],
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: "white" },
  },
  decorators: [
    (Story) => (
      <div className="font-sans text-foreground antialiased">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
}

export default preview
