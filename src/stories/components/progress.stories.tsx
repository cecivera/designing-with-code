import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"

const meta = {
  title: "Feedback/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a bar that shows a task's progress.

**When to use it:** when you know the percentage (file uploads, completed steps). If you don't know how much is left, use **Spinner**; while content loads, **Skeleton**.

**File:** \`src/components/ui/progress.tsx\` → \`Progress\` (prop \`value\` 0–100 or \`null\` for indeterminate), \`ProgressLabel\`, \`ProgressValue\`, \`ProgressTrack\`, \`ProgressIndicator\`.
`,
      },
    },
  },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  args: { value: 60 },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  name: "With label and value",
  render: (args) => (
    <Progress {...args}>
      <div className="flex w-full items-center justify-between">
        <ProgressLabel>Uploading catalog</ProgressLabel>
        <ProgressValue />
      </div>
    </Progress>
  ),
}

export const Empty: Story = { name: "Empty (0%)", args: { value: 0 } }

export const Complete: Story = { name: "Complete", args: { value: 100 } }
