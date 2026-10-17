import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const meta = {
  title: "Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** an on/off switch.

**When to use it:** for settings that apply immediately (turning on notifications, airplane mode). If the value is submitted with a form, **Checkbox** is usually better.

**File:** \`src/components/ui/switch.tsx\` → \`Switch\` (props \`size\`, \`checked\` / \`defaultChecked\`, \`disabled\`).
`,
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "default"], table: { defaultValue: { summary: "default" } } },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: { size: "default", defaultChecked: false, "aria-label": "Switch" },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const On: Story = { name: "Checked", args: { defaultChecked: true } }

export const Small: Story = { name: "Small (sm)", args: { size: "sm" } }

export const WithLabel: Story = {
  name: "With label",
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch {...args} id="notifications" />
      <Label htmlFor="notifications">Order notifications</Label>
    </div>
  ),
}

export const Disabled: Story = { name: "Disabled", args: { disabled: true, defaultChecked: true } }
