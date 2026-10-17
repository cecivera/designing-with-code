import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const meta = {
  title: "Navigation/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
**What it is:** a site's main navigation menu, with dropdown panels ("mega menu").

**When to use it:** in the header of websites with several sections and subsections. For actions (not navigation) use **DropdownMenu** or **Menubar**.

**File:** \`src/components/ui/navigation-menu.tsx\` → \`NavigationMenu\`, \`NavigationMenuList\`, \`NavigationMenuItem\`, \`NavigationMenuTrigger\`, \`NavigationMenuContent\`, \`NavigationMenuLink\`, \`navigationMenuTriggerStyle\`.
`,
      },
    },
  },
  decorators: [(Story) => <div className="min-h-72"><Story /></div>],
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

const sections = [
  { title: "Running", description: "Running shoes and performance apparel." },
  { title: "Football", description: "Boots, balls and team kits." },
  { title: "Lifestyle", description: "Everyday classics and casual wear." },
  { title: "Outdoor", description: "Gear for hiking and trail." },
]

function ListItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li>
      <NavigationMenuLink href="#">
        <div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div>
      </NavigationMenuLink>
    </li>
  )
}

export const Default: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[480px] grid-cols-2 gap-2">
              {sections.map((s) => (
                <ListItem key={s.title} title={s.title}>
                  {s.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Help</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-64">
              <ListItem title="Shipping">Delivery times and costs.</ListItem>
              <ListItem title="Returns">How to return an order.</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
