import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const meta = {
  title: "Overlays/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a panel that slides in from an edge and can be dismissed by dragging (a typical mobile gesture, "bottom sheet").

**When to use it:** mainly on mobile, for quick actions or details. On desktop, **Dialog** or **Sheet** is usually a better fit.

**File:** \`src/components/ui/drawer.tsx\` → \`Drawer\` (props \`swipeDirection\`, \`showSwipeHandle\`, \`snapPoints\`), \`DrawerTrigger\`, \`DrawerContent\`, \`DrawerHeader\`, \`DrawerTitle\`, \`DrawerDescription\`, \`DrawerFooter\`, \`DrawerClose\`.
`,
      },
    },
  },
  argTypes: {
    swipeDirection: {
      control: "inline-radio",
      options: ["down", "up", "left", "right"],
      description: "Swipe direction to close (and the side it appears from).",
      table: { defaultValue: { summary: "down" } },
    },
    showSwipeHandle: { control: "boolean", description: "Shows the drag handle." },
  },
  args: { swipeDirection: "down", showSwipeHandle: true },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger render={<Button variant="outline" />}>Open drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Target quantity</DrawerTitle>
          <DrawerDescription>Set the units for the season.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <div className="flex h-40 items-center justify-center rounded-lg bg-muted text-4xl font-semibold">
            350
          </div>
        </div>
        <DrawerFooter>
          <Button>Save</Button>
          <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const FromRight: Story = {
  name: "From the right",
  args: { swipeDirection: "right" },
  render: Default.render,
}
