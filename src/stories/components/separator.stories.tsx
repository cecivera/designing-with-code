import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Separator } from "@/components/ui/separator"

const meta = {
  title: "Layout/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a thin line that visually separates blocks of content.

**When to use it:** between sections of a menu, card or toolbar. If white space is enough, it's better not to add lines.

**File:** \`src/components/ui/separator.tsx\` → \`Separator\` (prop \`orientation\`).
`,
      },
    },
  },
  argTypes: {
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"], table: { defaultValue: { summary: "horizontal" } } },
  },
  args: { orientation: "horizontal" },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: (args) => (
    <div className="w-72">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Evergreen</h4>
        <p className="text-sm text-muted-foreground">Design system based on shadcn/ui.</p>
      </div>
      <Separator {...args} className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Code</span>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <div className="flex h-6 items-center gap-4 text-sm">
      <span>Orders</span>
      <Separator {...args} />
      <span>Customers</span>
      <Separator {...args} />
      <span>Reports</span>
    </div>
  ),
}
