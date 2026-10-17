import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Overlays/Dialog",
  component: DialogContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a modal window that opens on top of the page and blocks everything else until it is closed.

**When to use it:** for short, focused tasks (editing a field, viewing a detail) without losing context. To confirm destructive actions, use **AlertDialog**; for long forms or side panels, **Sheet** or **Drawer**.

**File:** \`src/components/ui/dialog.tsx\` → \`Dialog\`, \`DialogTrigger\`, \`DialogContent\` (prop \`showCloseButton\`), \`DialogHeader\`, \`DialogTitle\`, \`DialogDescription\`, \`DialogFooter\` (prop \`showCloseButton\`), \`DialogClose\`.
`,
      },
    },
  },
  argTypes: {
    showCloseButton: { control: "boolean", description: "Shows the close X." },
  },
  args: { showCloseButton: true },
} satisfies Meta<typeof DialogContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Edit profile</DialogTrigger>
      <DialogContent {...args}>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make your changes and click save.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="d-name">Name</Label>
            <Input id="d-name" defaultValue="Cecilia Vera" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="d-rol">Role</Label>
            <Input id="d-rol" defaultValue="Product Designer" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithoutCloseButton: Story = {
  name: "Without X button",
  args: { showCloseButton: false },
  render: (args) => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Open</DialogTrigger>
      <DialogContent {...args}>
        <DialogHeader>
          <DialogTitle>What's new</DialogTitle>
          <DialogDescription>You can now export orders to Excel.</DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  ),
}

export const LongContent: Story = {
  name: "Long content (scroll)",
  render: (args) => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Terms</DialogTrigger>
      <DialogContent {...args}>
        <DialogHeader>
          <DialogTitle>Terms and conditions</DialogTitle>
        </DialogHeader>
        <div className="-mx-4 max-h-64 overflow-y-auto px-4 text-sm">
          {Array.from({ length: 12 }).map((_, i) => (
            <p key={i} className="mb-3">
              Clause {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            </p>
          ))}
        </div>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  ),
}
