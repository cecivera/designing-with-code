import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const meta = {
  title: "Forms/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a group of options where only one can be selected.

**When to use it:** with 2–5 mutually exclusive options that are best seen all at once (shipping method, plan). With more options, use **Select**.

**File:** \`src/components/ui/radio-group.tsx\` → \`RadioGroup\`, \`RadioGroupItem\`.
`,
      },
    },
  },
  argTypes: {
    defaultValue: { control: "inline-radio", options: ["standard", "express", "pickup"] },
    disabled: { control: "boolean" },
  },
  args: { defaultValue: "standard" },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: "standard", label: "Standard shipping (3–5 days)" },
  { value: "express", label: "Express shipping (24 h)" },
  { value: "pickup", label: "In-store pickup" },
]

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      {options.map((o) => (
        <div key={o.value} className="flex items-center gap-2">
          <RadioGroupItem value={o.value} id={o.value} />
          <Label htmlFor={o.value}>{o.label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}

export const Disabled: Story = { name: "Disabled", args: { disabled: true }, render: Default.render }

export const DisabledOption: Story = {
  name: "One option disabled",
  render: (args) => (
    <RadioGroup {...args}>
      {options.map((o) => (
        <div key={o.value} className="flex items-center gap-2">
          <RadioGroupItem value={o.value} id={`d-${o.value}`} disabled={o.value === "express"} />
          <Label htmlFor={`d-${o.value}`}>{o.label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}
