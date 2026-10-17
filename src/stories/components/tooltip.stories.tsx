import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const meta = {
  title: "Overlays/Tooltip",
  component: TooltipContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a short text label that appears when hovering over or focusing an element.

**When to use it:** to label icon-only buttons or show shortcuts. Keep it short and non-essential (it is not visible on mobile). For richer content, use **HoverCard** or **Popover**.

**File:** \`src/components/ui/tooltip.tsx\` → \`TooltipProvider\` (prop \`delay\`), \`Tooltip\`, \`TooltipTrigger\`, \`TooltipContent\` (props \`side\`, \`align\`).
`,
      },
    },
  },
  argTypes: {
    side: { control: "select", options: ["top", "right", "bottom", "left"] },
    align: { control: "inline-radio", options: ["start", "center", "end"] },
  },
  args: { side: "top", align: "center" },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="flex min-h-40 items-center justify-center">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof TooltipContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Add" />}>
        <PlusIcon />
      </TooltipTrigger>
      <TooltipContent {...args}>Add to collection</TooltipContent>
    </Tooltip>
  ),
}

export const WithShortcut: Story = {
  name: "With shortcut",
  render: (args) => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>Save</TooltipTrigger>
      <TooltipContent {...args}>
        Save changes <Kbd>⌘S</Kbd>
      </TooltipContent>
    </Tooltip>
  ),
}

export const Sides: Story = {
  name: "Sides",
  render: () => (
    <div className="flex gap-2">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="outline" />}>{side}</TooltipTrigger>
          <TooltipContent side={side}>Tooltip on {side}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
}
