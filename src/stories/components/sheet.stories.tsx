import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const meta = {
  title: "Overlays/Sheet",
  component: SheetContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a panel that slides in from an edge of the screen (right by default).

**When to use it:** for forms or long details without leaving the page (filters, cart, order details) or as a mobile menu. For something short, use **Dialog**; on mobile with a drag gesture, **Drawer**.

**File:** \`src/components/ui/sheet.tsx\` → \`Sheet\`, \`SheetTrigger\`, \`SheetContent\` (props \`side\`, \`showCloseButton\`), \`SheetHeader\`, \`SheetTitle\`, \`SheetDescription\`, \`SheetFooter\`, \`SheetClose\`.
`,
      },
    },
  },
  argTypes: {
    side: {
      control: "inline-radio",
      options: ["top", "right", "bottom", "left"],
      table: { defaultValue: { summary: "right" } },
    },
    showCloseButton: { control: "boolean" },
  },
  args: { side: "right", showCloseButton: true },
} satisfies Meta<typeof SheetContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Open filters ({args.side})</SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>Narrow down the orders you want to see.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 px-4">
          <div className="grid gap-2">
            <Label htmlFor="s-customer">Customer</Label>
            <Input id="s-customer" placeholder="Search customer" />
          </div>
        </div>
        <SheetFooter>
          <Button>Apply</Button>
          <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Left: Story = { name: "Left", args: { side: "left" }, render: Default.render }
export const Top: Story = { name: "Top", args: { side: "top" }, render: Default.render }
export const Bottom: Story = { name: "Bottom", args: { side: "bottom" }, render: Default.render }
