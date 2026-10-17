import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"

const meta = {
  title: "Feedback/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** pop-up notifications ("toasts") built on the *sonner* library. It is the most widely used option in shadcn/ui.

**When to use it:** to confirm actions or notify about something without blocking ("Order saved", "Connection error"). Place a single \`<Toaster />\` in the layout and call \`toast()\` from anywhere. For messages that must stay on screen, use **Alert**.

**File:** \`src/components/ui/sonner.tsx\` → \`Toaster\` (the \`toast\` function is imported from \`sonner\`). Base UI alternative: **Toast**.
`,
      },
    },
  },
  argTypes: {
    position: {
      control: "select",
      options: ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"],
    },
    richColors: { control: "boolean" },
  },
  // Storybook is light mode only.
  args: { theme: "light", position: "bottom-right" },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <>
      <Toaster {...args} />
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => toast("Order saved", { description: "ORD-002 · €830.00" })}>
          Normal
        </Button>
        <Button variant="outline" onClick={() => toast.success("Catalog published")}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.info("A new version is available")}>
          Info
        </Button>
        <Button variant="outline" onClick={() => toast.warning("Low stock on 3 products")}>
          Warning
        </Button>
        <Button variant="outline" onClick={() => toast.error("Could not connect")}>
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("Order deleted", { action: { label: "Undo", onClick: () => toast("Restored") } })
          }
        >
          With action
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.promise(new Promise((r) => setTimeout(r, 2000)), {
              loading: "Sending…",
              success: "Sent",
              error: "Error",
            })
          }
        >
          Promise
        </Button>
      </div>
    </>
  ),
}
