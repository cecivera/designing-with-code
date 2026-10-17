import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const meta = {
  title: "Layout/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** an area with its own scrolling and system-styled scrollbars (consistent across browsers).

**When to use it:** long lists inside a fixed-height panel, menu or card. For the whole page use native scrolling.

**File:** \`src/components/ui/scroll-area.tsx\` → \`ScrollArea\`, \`ScrollBar\` (prop \`orientation\`).
`,
      },
    },
  },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const tags = Array.from({ length: 40 }).map((_, i) => `SKU-${String(i + 1).padStart(4, "0")}`)

export const Vertical: Story = {
  render: (args) => (
    <ScrollArea {...args} className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">SKUs</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: (args) => (
    <ScrollArea {...args} className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max gap-4 p-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex h-32 w-40 shrink-0 items-center justify-center rounded-md bg-muted text-sm">
            Product {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}
