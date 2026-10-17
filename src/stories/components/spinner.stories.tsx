import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

const meta = {
  title: "Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a spinning loading indicator.

**When to use it:** for short waits with no known progress (submitting a form, loading a value). Inside buttons, disable the button while it spins. For loading larger content, use **Skeleton**.

**File:** \`src/components/ui/spinner.tsx\` → \`Spinner\` (size and color via classes: \`size-6\`, \`text-muted-foreground\`).
`,
      },
    },
  },
  args: { className: "size-6" },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  ),
}

export const OnButton: Story = {
  name: "In button and badge",
  render: () => (
    <div className="flex items-center gap-4">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Saving…
      </Button>
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        Syncing
      </Badge>
    </div>
  ),
}
