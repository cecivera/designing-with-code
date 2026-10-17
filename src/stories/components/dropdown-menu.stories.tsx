import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  CreditCardIcon,
  LogOutIcon,
  MoreHorizontalIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const meta = {
  title: "Navigation/DropdownMenu",
  component: DropdownMenuContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a dropdown menu of actions that opens when a button is pressed.

**When to use it:** to group secondary actions ("…" on a table row, user menu). To pick a form value, use **Select**; for right-click, **ContextMenu**.

**File:** \`src/components/ui/dropdown-menu.tsx\` → \`DropdownMenu\`, \`DropdownMenuTrigger\`, \`DropdownMenuContent\` (props \`side\`, \`align\`), \`DropdownMenuItem\` (prop \`variant\`), \`DropdownMenuCheckboxItem\`, \`DropdownMenuRadioItem\`, \`DropdownMenuSub\`…
`,
      },
    },
  },
  argTypes: {
    side: { control: "select", options: ["top", "right", "bottom", "left"] },
    align: { control: "inline-radio", options: ["start", "center", "end"] },
  },
  args: { side: "bottom", align: "start" },
  decorators: [(Story) => <div className="flex min-h-80 items-start justify-center"><Story /></div>],
} satisfies Meta<typeof DropdownMenuContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>My account</DropdownMenuTrigger>
      <DropdownMenuContent {...args} className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Cecilia Vera</DropdownMenuLabel>
          <DropdownMenuItem>
            <UserIcon /> Profile <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon /> Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon /> Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Invite</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>By email</DropdownMenuItem>
            <DropdownMenuItem>Copy link</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem disabled>API (coming soon)</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

function CheckboxDemo(args: React.ComponentProps<typeof DropdownMenuContent>) {
  const [prices, setPrecios] = React.useState(true)
  const [stock, setStock] = React.useState(false)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Columns</DropdownMenuTrigger>
      <DropdownMenuContent {...args}>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Show</DropdownMenuLabel>
          <DropdownMenuCheckboxItem checked={prices} onCheckedChange={setPrecios}>
            Prices
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={stock} onCheckedChange={setStock}>
            Stock
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const WithCheckboxes: Story = { name: "With checkboxes", render: (args) => <CheckboxDemo {...args} /> }

export const WithRadio: Story = {
  name: "With radio options",
  render: (args) => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Sort</DropdownMenuTrigger>
      <DropdownMenuContent {...args}>
        <DropdownMenuRadioGroup defaultValue="recent">
          <DropdownMenuRadioItem value="recent">Newest</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="precio">Price</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const IconOnly: Story = {
  name: "Icon-only trigger",
  args: { align: "end" },
  render: (args) => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon" aria-label="More actions" />}>
        <MoreHorizontalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent {...args}>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
