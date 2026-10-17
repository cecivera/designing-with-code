import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { BadgeCheckIcon, ChevronRightIcon, PackageIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"

const meta = {
  title: "Data/Item",
  component: Item,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a flexible row with media (icon/avatar/image), title, description and actions. It's the building block for lists.

**When to use it:** settings lists, notifications, team members, results. For comparable tabular data use **Table**.

**File:** \`src/components/ui/item.tsx\` → \`Item\` (props \`variant\`, \`size\`, \`render\`), \`ItemMedia\` (prop \`variant\`), \`ItemContent\`, \`ItemTitle\`, \`ItemDescription\`, \`ItemActions\`, \`ItemGroup\`, \`ItemSeparator\`, \`ItemHeader\`, \`ItemFooter\`.
`,
      },
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "outline", "muted"] },
    size: { control: "inline-radio", options: ["default", "sm", "xs"] },
  },
  args: { variant: "outline", size: "default" },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Item {...args}>
      <ItemContent>
        <ItemTitle>Order ORD-002</ItemTitle>
        <ItemDescription>Downtown Runners · €830.00</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">View</Button>
      </ItemActions>
    </Item>
  ),
}

export const WithIcon: Story = {
  name: "With icon",
  render: (args) => (
    <Item {...args}>
      <ItemMedia variant="icon">
        <PackageIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>New shipment</ItemTitle>
        <ItemDescription>Your order leaves the warehouse today.</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const AsLink: Story = {
  name: "As link",
  args: { size: "sm" },
  render: (args) => (
    <Item {...args} render={<a href="#" />}>
      <ItemMedia>
        <BadgeCheckIcon className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Your profile is verified</ItemTitle>
      </ItemContent>
      <ItemActions>
        <ChevronRightIcon className="size-4" />
      </ItemActions>
    </Item>
  ),
}

export const Variants: Story = {
  name: "Variants",
  render: () => (
    <div className="flex flex-col gap-3">
      {(["default", "outline", "muted"] as const).map((v) => (
        <Item key={v} variant={v}>
          <ItemContent>
            <ItemTitle>Variant {v}</ItemTitle>
            <ItemDescription>Item description.</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </div>
  ),
}

export const List: Story = {
  name: "List (ItemGroup)",
  render: () => (
    <ItemGroup>
      {["Anna Lee", "Ben Davis", "Carla Reed"].map((n, i) => (
        <div key={n}>
          {i > 0 && <ItemSeparator />}
          <Item>
            <ItemMedia>
              <Avatar>
                <AvatarFallback>{n.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{n}</ItemTitle>
              <ItemDescription>Account manager</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="sm">Contact</Button>
            </ItemActions>
          </Item>
        </div>
      ))}
    </ItemGroup>
  ),
}
