import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Trash2Icon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Overlays/AlertDialog",
  component: AlertDialogContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a modal dialog that interrupts the user to confirm an important action. It does not close when clicking outside.

**When to use it:** before destructive or irreversible actions ("Delete order?"). To show information or forms use **Dialog**.

**File:** \`src/components/ui/alert-dialog.tsx\` → \`AlertDialog\`, \`AlertDialogTrigger\`, \`AlertDialogContent\` (prop \`size\`), \`AlertDialogHeader\`, \`AlertDialogMedia\`, \`AlertDialogTitle\`, \`AlertDialogDescription\`, \`AlertDialogFooter\`, \`AlertDialogAction\`, \`AlertDialogCancel\`.
`,
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["default", "sm"], table: { defaultValue: { summary: "default" } } },
  },
  args: { size: "default" },
} satisfies Meta<typeof AlertDialogContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>Delete order</AlertDialogTrigger>
      <AlertDialogContent {...args}>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete order ORD-002?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. The customer will no longer see the order.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const Small: Story = {
  name: "Small with icon",
  args: { size: "sm" },
  render: (args) => (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>Delete</AlertDialogTrigger>
      <AlertDialogContent {...args}>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete file?</AlertDialogTitle>
          <AlertDialogDescription>It will be moved to the trash.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}
