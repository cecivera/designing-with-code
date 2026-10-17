import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { BarChart3Icon, PackageIcon, SettingsIcon } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const meta = {
  title: "Navigation/Tabs",
  component: TabsList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** tabs to switch between related views within the same page, without navigating.

**When to use it:** to separate content at the same level (Overview / Orders / Settings). If each option is a separate page, use navigation (links); if only a filter changes, use **ToggleGroup**.

**File:** \`src/components/ui/tabs.tsx\` → \`Tabs\` (prop \`orientation\`), \`TabsList\` (prop \`variant\`: \`default\` | \`line\`), \`TabsTrigger\`, \`TabsContent\`.
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "line"],
      description: "`default` = pill with background; `line` = underline.",
      table: { defaultValue: { summary: "default" } },
    },
  },
  args: { variant: "default" },
} satisfies Meta<typeof TabsList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="overview" className="w-96">
      <TabsList {...args}>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="ajustes">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Season sales and key KPIs.</TabsContent>
      <TabsContent value="orders">Wholesale order list.</TabsContent>
      <TabsContent value="ajustes">Account preferences.</TabsContent>
    </Tabs>
  ),
}

export const Line: Story = { name: "Line", args: { variant: "line" }, render: Default.render }

export const WithIcons: Story = {
  name: "With icons",
  render: (args) => (
    <Tabs defaultValue="overview">
      <TabsList {...args}>
        <TabsTrigger value="overview"><BarChart3Icon />Overview</TabsTrigger>
        <TabsTrigger value="orders"><PackageIcon />Orders</TabsTrigger>
        <TabsTrigger value="ajustes"><SettingsIcon />Settings</TabsTrigger>
      </TabsList>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: (args) => (
    <Tabs defaultValue="overview" orientation="vertical" className="w-96">
      <TabsList {...args}>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="ajustes">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
      <TabsContent value="orders">Orders content</TabsContent>
      <TabsContent value="ajustes">Settings content</TabsContent>
    </Tabs>
  ),
}

export const WithDisabledTab: Story = {
  name: "With disabled tab",
  render: (args) => (
    <Tabs defaultValue="overview">
      <TabsList {...args}>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="orders" disabled>Orders</TabsTrigger>
        <TabsTrigger value="ajustes">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
  ),
}
