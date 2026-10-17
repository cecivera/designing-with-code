import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a checkbox to check or uncheck an option.

**When to use it:** for independent options (several can be checked) or to accept terms. If only one option is allowed, use **RadioGroup**; if the change applies instantly (a setting), **Switch**.

**File:** \`src/components/ui/checkbox.tsx\` → \`Checkbox\` (props \`checked\`, \`defaultChecked\`, \`indeterminate\`, \`disabled\`).
`,
      },
    },
  },
  argTypes: {
    defaultChecked: { control: "boolean", description: "Initial state." },
    indeterminate: { control: "boolean", description: "Mixed state (e.g. a partial \"select all\")." },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
  args: { defaultChecked: false, disabled: false },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { "aria-label": "Select" } }

export const WithLabel: Story = {
  name: "With label",
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} id="newsletter" />
      <Label htmlFor="newsletter">Get updates by email</Label>
    </div>
  ),
}

export const Checked: Story = { name: "Checked", args: { defaultChecked: true, "aria-label": "Checked" } }

export const Indeterminate: Story = { name: "Indeterminate", args: { indeterminate: true, "aria-label": "Indeterminate" } }

export const WithError: Story = { name: "With error", args: { "aria-invalid": true, "aria-label": "Error" } }

export const Disabled: Story = {
  name: "Disabled",
  args: { disabled: true, defaultChecked: true },
  render: WithLabel.render,
}

export const List: Story = {
  name: "Option list",
  render: () => (
    <div className="grid gap-3">
      {["Footwear", "Apparel", "Accessories"].map((c, i) => (
        <div key={c} className="flex items-center gap-2">
          <Checkbox id={`cat-${c}`} defaultChecked={i === 0} />
          <Label htmlFor={`cat-${c}`}>{c}</Label>
        </div>
      ))}
    </div>
  ),
}
