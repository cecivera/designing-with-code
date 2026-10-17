import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a multi-line text field that grows with its content.

**When to use it:** for comments, descriptions or notes. For a single line, use **Input**.

**File:** \`src/components/ui/textarea.tsx\` → \`Textarea\` (native \`<textarea>\` props).
`,
      },
    },
  },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
  args: { placeholder: "Type your message…" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  name: "With label",
  render: (args) => (
    <div className="grid gap-2">
      <Label htmlFor="message">Order comments</Label>
      <Textarea {...args} id="message" />
      <p className="text-sm text-muted-foreground">Maximum 500 characters.</p>
    </div>
  ),
}

export const WithError: Story = { name: "With error", args: { "aria-invalid": true } }

export const Disabled: Story = { name: "Disabled", args: { disabled: true } }
