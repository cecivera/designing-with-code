import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const meta = {
  title: "Actions/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a set of Toggles that work together. It can allow a single option (alignment) or several (bold + italic).

**When to use it:** to switch between views or formats with a few options visible at once. With many options, use **Select**; to navigate between sections, **Tabs**.

**File:** \`src/components/ui/toggle-group.tsx\` → \`ToggleGroup\`, \`ToggleGroupItem\` (props \`variant\`, \`size\`, \`spacing\`, \`orientation\`, \`multiple\`).
`,
      },
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "outline"] },
    size: { control: "inline-radio", options: ["sm", "default", "lg"] },
    spacing: {
      control: { type: "number", min: 0, max: 4 },
      description: "Spacing between items. `0` joins them into a single block.",
      table: { defaultValue: { summary: "2" } },
    },
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] },
    multiple: { control: "boolean", description: "Allows multiple options to be active." },
    disabled: { control: "boolean" },
  },
  args: { variant: "outline", size: "default", spacing: 2, orientation: "horizontal" },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const SingleSelection: Story = {
  name: "Single selection",
  args: { defaultValue: ["left"] },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="left" aria-label="Align left"><AlignLeftIcon /></ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center"><AlignCenterIcon /></ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right"><AlignRightIcon /></ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Multiple: Story = {
  name: "Multiple selection",
  args: { multiple: true, defaultValue: ["bold", "italic"] },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Bold"><BoldIcon /></ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon /></ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline"><UnderlineIcon /></ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Attached: Story = {
  name: "Joined (spacing 0)",
  args: { spacing: 0, defaultValue: ["week"] },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="day">Day</ToggleGroupItem>
      <ToggleGroupItem value="week">Week</ToggleGroupItem>
      <ToggleGroupItem value="month">Month</ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Vertical: Story = {
  args: { orientation: "vertical", defaultValue: ["center"] },
  render: SingleSelection.render,
}

export const Disabled: Story = {
  name: "Disabled",
  args: { disabled: true, defaultValue: ["left"] },
  render: SingleSelection.render,
}
