import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Skeleton } from "@/components/ui/skeleton"

const meta = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** an animated gray block that takes the place of content while it loads.

**When to use it:** when loading lists, cards or profiles, mimicking the final shape to avoid layout shifts. For short actions (a button saving), use **Spinner**.

**File:** \`src/components/ui/skeleton.tsx\` → \`Skeleton\` (the shape is defined with classes: \`h-4 w-40\`, \`rounded-full\`…).
`,
      },
    },
  },
  args: { className: "h-4 w-60" },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Profile: Story = {
  name: "Profile",
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="grid gap-2">
        <Skeleton className="h-4 w-56" />
        <Skeleton className="h-4 w-40" />
      </div>
    </div>
  ),
}

export const Card: Story = {
  name: "Card",
  render: () => (
    <div className="grid w-72 gap-3">
      <Skeleton className="h-40 w-full rounded-xl" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  ),
}
