import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  BarChart3Icon,
  ChevronRightIcon,
  HomeIcon,
  InboxIcon,
  PackageIcon,
  PlusIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const meta = {
  title: "Navigation/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    // The sidebar uses fixed positioning: in Docs each story renders in its own iframe.
    docs: {
      story: { inline: false, iframeHeight: 520 },
      description: {
        component: `
**What it is:** side navigation bar for applications (dashboards, back offices). It can collapse to icons, hide, or show as a panel on mobile.

**When to use it:** as the main navigation for apps with many sections. The page must be wrapped in \`SidebarProvider\` and the content placed in \`SidebarInset\`.

**File:** \`src/components/ui/sidebar.tsx\` → \`SidebarProvider\`, \`Sidebar\` (props \`side\`, \`variant\`, \`collapsible\`), \`SidebarHeader\`, \`SidebarContent\`, \`SidebarGroup\`, \`SidebarMenu\`, \`SidebarMenuButton\`, \`SidebarTrigger\`, \`SidebarInset\`… (also uses \`src/hooks/use-mobile.ts\`).
`,
      },
    },
  },
  argTypes: {
    side: { control: "inline-radio", options: ["left", "right"] },
    variant: {
      control: "inline-radio",
      options: ["sidebar", "floating", "inset"],
      description: "`sidebar` attached to the edge, `floating` floating, `inset` with the content as a card.",
    },
    collapsible: {
      control: "inline-radio",
      options: ["offcanvas", "icon", "none"],
      description: "How it collapses: hides, shrinks to icons, or does not collapse.",
    },
  },
  args: { side: "left", variant: "sidebar", collapsible: "icon" },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { title: "Home", icon: HomeIcon, active: true },
  { title: "Inbox", icon: InboxIcon, badge: "12" },
  { title: "Orders", icon: PackageIcon },
  { title: "Customers", icon: UsersIcon },
  { title: "Reports", icon: BarChart3Icon },
]

export const Default: Story = {
  render: (args) => (
    <SidebarProvider className="min-h-[520px]">
      <Sidebar {...args}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  E
                </div>
                <div className="grid text-left text-sm leading-tight">
                  <span className="font-medium">Evergreen</span>
                  <span className="text-xs text-muted-foreground">Wholesale</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupAction aria-label="Add">
              <PlusIcon />
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.active} tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}
                <Collapsible defaultOpen className="group/collapsible" render={<SidebarMenuItem />}>
                  <CollapsibleTrigger render={<SidebarMenuButton tooltip="Catalog" />}>
                    <PackageIcon />
                    <span>Catalog</span>
                    <ChevronRightIcon className="ml-auto transition-transform group-data-open/collapsible:rotate-90" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {["Footwear", "Apparel", "Accessories"].map((s) => (
                        <SidebarMenuSubItem key={s}>
                          <SidebarMenuSubButton href="#">{s}</SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Settings">
                <SettingsIcon />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">Home</span>
        </header>
        <div className="grid flex-1 gap-4 p-4 md:grid-cols-3">
          <div className="h-32 rounded-lg bg-muted" />
          <div className="h-32 rounded-lg bg-muted" />
          <div className="h-32 rounded-lg bg-muted" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
}

export const Floating: Story = { name: "Floating", args: { variant: "floating" }, render: Default.render }

export const Inset: Story = { args: { variant: "inset" }, render: Default.render }

export const Right: Story = { name: "Right side", args: { side: "right" }, render: Default.render }

export const Offcanvas: Story = {
  name: "Collapsible off-screen (offcanvas)",
  args: { collapsible: "offcanvas" },
  render: Default.render,
}
