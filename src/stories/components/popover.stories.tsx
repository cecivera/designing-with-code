import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

const meta = {
  title: "Overlays/Popover",
  component: PopoverContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a small floating panel anchored to an element that opens on click.

**When to use it:** for short interactive content next to its trigger (a mini form, a date picker with **Calendar**, quick filters). If it's just informational text on hover, use **Tooltip** or **HoverCard**.

**File:** \`src/components/ui/popover.tsx\` → \`Popover\`, \`PopoverTrigger\`, \`PopoverContent\` (props \`side\`, \`align\`, \`sideOffset\`), \`PopoverHeader\`, \`PopoverTitle\`, \`PopoverDescription\`.
`,
      },
    },
  },
  argTypes: {
    side: { control: "select", options: ["top", "right", "bottom", "left"] },
    align: { control: "inline-radio", options: ["start", "center", "end"] },
  },
  args: { side: "bottom", align: "center" },
  decorators: [(Story) => <div className="flex min-h-72 items-center justify-center"><Story /></div>],
} satisfies Meta<typeof PopoverContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Dimensions</PopoverTrigger>
      <PopoverContent {...args} className="w-72">
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Shipping box size.</PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="40 cm" className="col-span-2" />
          </div>
          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="height">Height</Label>
            <Input id="height" defaultValue="25 cm" className="col-span-2" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Sides: Story = {
  name: "Sides",
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Popover key={side}>
          <PopoverTrigger render={<Button variant="outline" />}>{side}</PopoverTrigger>
          <PopoverContent side={side} className="w-40">
            Popover on {side}
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
}
