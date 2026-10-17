import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { BoldIcon, BookmarkIcon, ItalicIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

const meta = {
  title: "Actions/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a button with two states (on / off), like "bold" in an editor or "save to favorites".

**When to use it:** to turn on an option that is applied immediately. For configuration settings that get saved, use **Switch**; to choose between several options, **ToggleGroup**.

**File:** \`src/components/ui/toggle.tsx\` → \`Toggle\` (props \`variant\`, \`size\`, \`pressed\` / \`defaultPressed\`).
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "outline"],
      table: { defaultValue: { summary: "default" } },
    },
    size: {
      control: "inline-radio",
      options: ["sm", "default", "lg"],
      table: { defaultValue: { summary: "default" } },
    },
    defaultPressed: { control: "boolean", description: "Initial state." },
    disabled: { control: "boolean" },
  },
  args: { variant: "default", size: "default", "aria-label": "Bold" },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Toggle {...args}>
      <BoldIcon />
    </Toggle>
  ),
}

export const Outline: Story = {
  args: { variant: "outline", "aria-label": "Italic" },
  render: (args) => (
    <Toggle {...args}>
      <ItalicIcon />
    </Toggle>
  ),
}

export const WithText: Story = {
  name: "With text",
  args: { variant: "outline", "aria-label": "Save" },
  render: (args) => (
    <Toggle {...args}>
      <BookmarkIcon data-icon="inline-start" />
      Save
    </Toggle>
  ),
}

export const On: Story = {
  name: "Pressed",
  args: { defaultPressed: true },
  render: Default.render,
}

export const Sizes: Story = {
  name: "Sizes",
  args: { variant: "outline" },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Toggle {...args} size="sm"><BoldIcon /></Toggle>
      <Toggle {...args} size="default"><BoldIcon /></Toggle>
      <Toggle {...args} size="lg"><BoldIcon /></Toggle>
    </div>
  ),
}

export const Disabled: Story = {
  name: "Disabled",
  args: { disabled: true },
  render: Default.render,
}
