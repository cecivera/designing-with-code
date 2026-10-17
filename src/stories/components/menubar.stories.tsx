import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

const meta = {
  title: "Navigation/Menubar",
  component: Menubar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a horizontal desktop-app-style menu bar (File, Edit, View…).

**When to use it:** in complex tools (editors, back offices) with many actions grouped by category. On regular websites a **DropdownMenu** is usually enough.

**File:** \`src/components/ui/menubar.tsx\` → \`Menubar\`, \`MenubarMenu\`, \`MenubarTrigger\`, \`MenubarContent\`, \`MenubarItem\`, \`MenubarCheckboxItem\`, \`MenubarRadioGroup\`/\`MenubarRadioItem\`, \`MenubarSub\`…
`,
      },
    },
  },
  decorators: [(Story) => <div className="min-h-64"><Story /></div>],
} satisfies Meta<typeof Menubar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              New order <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Duplicate</MenubarItem>
            <MenubarSub>
              <MenubarSubTrigger>Export</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>CSV</MenubarItem>
                <MenubarItem>Excel</MenubarItem>
                <MenubarItem>PDF</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarItem variant="destructive">Delete</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem defaultChecked>Show prices</MenubarCheckboxItem>
          <MenubarCheckboxItem>Show stock</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarRadioGroup defaultValue="table">
            <MenubarRadioItem value="table">Table</MenubarRadioItem>
            <MenubarRadioItem value="cards">Cards</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Documentation</MenubarItem>
          <MenubarItem disabled>Contact support</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}
