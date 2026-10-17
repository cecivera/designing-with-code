import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a single-line text field.

**When to use it:** for short data (name, email, search, quantities). For long text, use **Textarea**; to add icons, prefixes or buttons inside the field, **InputGroup**. Always pair it with a **Label** (or **Field** for label + help text + error).

**File:** \`src/components/ui/input.tsx\` → \`Input\` (accepts all native \`<input>\` props).
`,
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url", "file"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean", description: "Marks the field as invalid (red border)." },
  },
  args: { type: "text", placeholder: "Type here…", disabled: false },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  name: "With label",
  render: (args) => (
    <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input {...args} id="email" type="email" placeholder="name@company.com" />
    </div>
  ),
}

export const Password: Story = { args: { type: "password", placeholder: "Password" } }

export const File: Story = { name: "File", args: { type: "file" } }

export const WithError: Story = {
  name: "With error",
  args: { "aria-invalid": true, defaultValue: "invalid-email" },
}

export const Disabled: Story = { name: "Disabled", args: { disabled: true, placeholder: "Read-only" } }
