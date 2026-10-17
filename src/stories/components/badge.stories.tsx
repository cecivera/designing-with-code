import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { BadgeCheckIcon, ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const meta = {
  title: "Data/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a small label that shows a status, category or count.

**When to use it:** statuses ("Shipped", "Pending"), product tags ("New") or counters. It is not a button: if it must be clickable, render it as a link with \`render={<a href="…" />}\`.

**File:** \`src/components/ui/badge.tsx\` → \`Badge\` (prop \`variant\`).
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      table: { defaultValue: { summary: "default" } },
    },
    children: { control: "text" },
  },
  args: { variant: "default", children: "New" },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Secondary: Story = { args: { variant: "secondary", children: "Pending" } }
export const Destructive: Story = { args: { variant: "destructive", children: "Cancelled" } }
export const Outline: Story = { args: { variant: "outline", children: "Draft" } }
export const Ghost: Story = { args: { variant: "ghost", children: "Archived" } }

export const AllVariants: Story = {
  name: "All variants",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  ),
}

export const WithIcon: Story = {
  name: "With icon",
  render: (args) => (
    <Badge {...args}>
      <BadgeCheckIcon data-icon="inline-start" />
      Verified
    </Badge>
  ),
}

export const AsLink: Story = {
  name: "As link",
  render: (args) => (
    <Badge {...args} variant="outline" render={<a href="#" />}>
      View order
      <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  ),
}

export const Counter: Story = {
  name: "Counter",
  args: { children: "8", className: "h-5 min-w-5 rounded-full px-1 tabular-nums" },
}
