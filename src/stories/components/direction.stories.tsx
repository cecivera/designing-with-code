import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import { DirectionProvider } from "@/components/ui/direction"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const meta = {
  title: "Utilities/Direction",
  component: DirectionProvider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a provider (with no visual appearance) that tells Base UI components whether text runs left to right (\`ltr\`) or right to left (\`rtl\`, Arabic or Hebrew).

**When to use it:** only if the product is translated into RTL languages. Wrap the app (or a section) and also set \`dir="rtl"\` on the HTML.

**File:** \`src/components/ui/direction.tsx\` → \`DirectionProvider\` (prop \`direction\`), \`useDirection\`.
`,
      },
    },
  },
  argTypes: {
    direction: { control: "inline-radio", options: ["ltr", "rtl"] },
  },
  args: { direction: "rtl" },
} satisfies Meta<typeof DirectionProvider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <DirectionProvider {...args}>
      <div dir={args.direction} className="grid w-72 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="rtl-input">الاسم</Label>
          <Input id="rtl-input" placeholder="اكتب هنا" />
        </div>
        <Slider defaultValue={30} />
        <Button>إرسال</Button>
      </div>
    </DirectionProvider>
  ),
}

export const LeftToRight: Story = {
  name: "Left to right (ltr)",
  args: { direction: "ltr" },
  render: (args) => (
    <DirectionProvider {...args}>
      <div dir={args.direction} className="grid w-72 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="ltr-input">Name</Label>
          <Input id="ltr-input" placeholder="Type here" />
        </div>
        <Slider defaultValue={30} />
        <Button>Submit</Button>
      </div>
    </DirectionProvider>
  ),
}
