import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { ChevronsUpDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const meta = {
  title: "Layout/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a block that shows or hides when a trigger is pressed. It has no styles of its own: you decide how it looks.

**When to use it:** "Show more", advanced options or **Sidebar** submenus. For several FAQ-style sections, use **Accordion**.

**File:** \`src/components/ui/collapsible.tsx\` → \`Collapsible\` (props \`open\` / \`defaultOpen\`, \`disabled\`), \`CollapsibleTrigger\`, \`CollapsibleContent\`.
`,
      },
    },
  },
  argTypes: {
    defaultOpen: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: { defaultOpen: false },
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Collapsible {...args} className="flex w-80 flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-sm font-semibold">3 pending orders</h4>
        <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Toggle" />}>
          <ChevronsUpDownIcon />
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm">ORD-001</div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm">ORD-002</div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">ORD-003</div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const Open: Story = { name: "Open", args: { defaultOpen: true }, render: Default.render }
