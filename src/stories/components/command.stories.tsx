import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { CalculatorIcon, CalendarIcon, PackageIcon, SettingsIcon, UserIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

const meta = {
  title: "Navigation/Command",
  component: Command,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a command search with instant filtering and keyboard navigation (built on cmdk). It can be used inline or as a palette inside a dialog (⌘K).

**When to use it:** for "go to…" or running actions quickly in apps with many screens. To pick a value in a form, use **Combobox**.

**File:** \`src/components/ui/command.tsx\` → \`Command\`, \`CommandInput\`, \`CommandList\`, \`CommandEmpty\`, \`CommandGroup\`, \`CommandItem\`, \`CommandShortcut\`, \`CommandSeparator\`, \`CommandDialog\`.
`,
      },
    },
  },
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

const Content = () => (
  <>
    <CommandInput placeholder="Type a command or search…" />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>
          <CalendarIcon /> Delivery calendar
        </CommandItem>
        <CommandItem>
          <PackageIcon /> New order
        </CommandItem>
        <CommandItem disabled>
          <CalculatorIcon /> Calculator
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem>
          <UserIcon /> Profile <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <SettingsIcon /> Settings <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </>
)

export const Default: Story = {
  name: "Inline",
  render: (args) => (
    <Command {...args} className="w-96 rounded-lg border">
      <Content />
    </Command>
  ),
}

function DialogDemo() {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open command palette
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} title="Command palette" description="Search for a command">
        <Command>
          <Content />
        </Command>
      </CommandDialog>
    </>
  )
}

export const InDialog: Story = { name: "In a dialog (⌘K)", render: () => <DialogDemo /> }
