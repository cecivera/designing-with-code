import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { FolderOpenIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

const meta = {
  title: "Feedback/Empty",
  component: EmptyMedia,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** an "empty state": what is shown when a list or section has no content yet.

**When to use it:** first-time use (no orders yet), searches with no results or loading errors. Explain why it is empty and offer the next action.

**File:** \`src/components/ui/empty.tsx\` → \`Empty\`, \`EmptyHeader\`, \`EmptyMedia\` (prop \`variant\`: \`default\` | \`icon\`), \`EmptyTitle\`, \`EmptyDescription\`, \`EmptyContent\`.
`,
      },
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "icon"], description: "Style of the icon/image container." },
  },
  args: { variant: "icon" },
} satisfies Meta<typeof EmptyMedia>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Empty className="w-[420px] border">
      <EmptyHeader>
        <EmptyMedia {...args}>
          <FolderOpenIcon />
        </EmptyMedia>
        <EmptyTitle>No orders yet</EmptyTitle>
        <EmptyDescription>When a customer places an order, it will appear here.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <PlusIcon data-icon="inline-start" />
          Create order
        </Button>
      </EmptyContent>
    </Empty>
  ),
}

export const NoResults: Story = {
  name: "No search results",
  render: () => (
    <Empty className="w-[420px]">
      <EmptyHeader>
        <EmptyTitle>No results</EmptyTitle>
        <EmptyDescription>Try a different term or remove a filter.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Clear filters</Button>
      </EmptyContent>
    </Empty>
  ),
}
