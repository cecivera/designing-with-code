import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import { Toaster, toast } from "@/components/ui/toast"

const meta = {
  title: "Feedback/Toast",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** pop-up notifications built with the Base UI Toast (the same library as the rest of the components).

**When to use it:** same as **Sonner**: brief, non-blocking confirmations and notices. Pick one of the two for your project, not both. Place a \`<Toaster />\` in the layout and use \`toast.add({ title, description, type })\`.

**File:** \`src/components/ui/toast.tsx\` → \`Toaster\`, \`toast\` (manager), \`Toast\`, \`ToastTitle\`, \`ToastDescription\`, \`ToastAction\`, \`ToastClose\`…
`,
      },
    },
  },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Toaster {...args}>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => toast.add({ title: "Order saved", description: "ORD-002 · €830.00" })}
        >
          Normal
        </Button>
        <Button variant="outline" onClick={() => toast.add({ title: "Catalog published", type: "success" })}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.add({ title: "Low stock", type: "warning" })}>
          Warning
        </Button>
        <Button variant="outline" onClick={() => toast.add({ title: "Could not connect", type: "error" })}>
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const id = toast.add({
              title: "Order deleted",
              actionProps: {
                children: "Undo",
                onClick() {
                  toast.close(id)
                  toast.add({ description: "Order restored." })
                },
              },
            })
          }}
        >
          With action
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.promise(new Promise<void>((r) => window.setTimeout(r, 2000)), {
              loading: "Sending…",
              success: "Sent",
              error: "Error",
            })
          }
        >
          Promise
        </Button>
      </div>
    </Toaster>
  ),
}
