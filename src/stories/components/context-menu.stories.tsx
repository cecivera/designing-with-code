import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

const meta = {
  title: "Navigation/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a menu that appears on right-click (or long press) over an area.

**When to use it:** as a shortcut for power users (canvases, tables, files). Never as the only way to perform an action: also provide a visible button or a **DropdownMenu**.

**File:** \`src/components/ui/context-menu.tsx\` → \`ContextMenu\`, \`ContextMenuTrigger\`, \`ContextMenuContent\`, \`ContextMenuItem\` (props \`variant\`, \`inset\`), \`ContextMenuCheckboxItem\`, \`ContextMenuRadioItem\`, \`ContextMenuSub\`…
`,
      },
    },
  },
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger className="flex h-40 w-72 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuItem>
            Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>More tools</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Save as…</ContextMenuItem>
              <ContextMenuItem>Create shortcut</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem defaultChecked>Show bookmarks</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel inset>Person</ContextMenuLabel>
          <ContextMenuRadioGroup defaultValue="cecilia">
            <ContextMenuRadioItem value="cecilia">Cecilia</ContextMenuRadioItem>
            <ContextMenuRadioItem value="team">Team</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
