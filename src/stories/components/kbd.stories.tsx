import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Kbd, KbdGroup } from "@/components/ui/kbd"

const meta = {
  title: "Data/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** displays a key or keyboard shortcut.

**When to use it:** in menus, tooltips or help text to show shortcuts (⌘K, Ctrl + C). Use \`KbdGroup\` for key combinations.

**File:** \`src/components/ui/kbd.tsx\` → \`Kbd\`, \`KbdGroup\`.
`,
      },
    },
  },
  argTypes: { children: { control: "text" } },
  args: { children: "⌘" },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Combination: Story = {
  name: "Combination",
  render: () => (
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
}

export const OnText: Story = {
  name: "Inline in text",
  render: () => (
    <p className="text-sm text-muted-foreground">
      Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open search.
    </p>
  ),
}
