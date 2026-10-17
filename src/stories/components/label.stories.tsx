import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Forms/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** the accessible label for a form control.

**When to use it:** whenever there's an Input, Checkbox, Switch, etc. Connect label and control with \`htmlFor\` = \`id\`. If you also need a description and error, use **Field** (which already includes \`FieldLabel\`).

**File:** \`src/components/ui/label.tsx\` → \`Label\`.
`,
      },
    },
  },
  argTypes: { children: { control: "text" } },
  args: { children: "Store name" },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInput: Story = {
  name: "With input",
  render: (args) => (
    <div className="grid w-72 gap-2">
      <Label {...args} htmlFor="store" />
      <Input id="store" placeholder="Downtown Store" />
    </div>
  ),
}

export const WithCheckbox: Story = {
  name: "With checkbox",
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">I accept the terms and conditions</Label>
    </div>
  ),
}
