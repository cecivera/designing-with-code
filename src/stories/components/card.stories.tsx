import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Layout/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a container with a background and border that groups related information (header, content and footer).

**When to use it:** for dashboard KPIs, product cards, short forms or settings blocks. Don't nest cards inside cards.

**File:** \`src/components/ui/card.tsx\` → \`Card\` (prop \`size\`), \`CardHeader\`, \`CardTitle\`, \`CardDescription\`, \`CardAction\`, \`CardContent\`, \`CardFooter\`.
`,
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["default", "sm"], table: { defaultValue: { summary: "default" } } },
  },
  args: { size: "default" },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>October sales</CardTitle>
        <CardDescription>Wholesale channel · US</CardDescription>
        <CardAction>
          <Badge variant="secondary">+12%</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold tabular-nums">$48,250</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">View report</Button>
      </CardFooter>
    </Card>
  ),
}

export const Small: Story = { name: "Small (sm)", args: { size: "sm" }, render: Default.render }

export const WithForm: Story = {
  name: "With form",
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Access the customer portal.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="c-email">Email</Label>
          <Input id="c-email" type="email" placeholder="name@company.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="c-pass">Password</Label>
          <Input id="c-pass" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Sign in</Button>
        <Button variant="link" className="w-full">Forgot your password?</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithImage: Story = {
  name: "With image",
  render: (args) => (
    <Card {...args} className="w-72">
      {/* eslint-disable-next-line @next/next/no-img-element -- inline sample image */}
      <img
        src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='180'><rect width='100%25' height='100%25' fill='%23e5e5e5'/></svg>"
        alt="Product image"
        className="aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle>Classic Sneaker</CardTitle>
        <CardDescription>Footwear · Lifestyle</CardDescription>
      </CardHeader>
    </Card>
  ),
}
