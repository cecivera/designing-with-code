import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

const meta = {
  title: "Forms/Field",
  component: Field,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** the structure of a form field: label + control + description + error. It also groups fields (\`FieldGroup\`, \`FieldSet\` with \`FieldLegend\`).

**When to use it:** to build any form with consistent spacing and error states. It is the piece that ties together **Label**, **Input**, **Checkbox**, **Switch**, etc.

**File:** \`src/components/ui/field.tsx\` → \`Field\` (prop \`orientation\`), \`FieldLabel\`, \`FieldDescription\`, \`FieldError\`, \`FieldGroup\`, \`FieldSet\`, \`FieldLegend\`, \`FieldSeparator\`, \`FieldContent\`, \`FieldTitle\`.
`,
      },
    },
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["vertical", "horizontal", "responsive"],
      description: "Label above (vertical), beside (horizontal) or based on width (responsive).",
      table: { defaultValue: { summary: "vertical" } },
    },
  },
  args: { orientation: "vertical" },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel htmlFor="name">Store name</FieldLabel>
      <Input id="name" placeholder="Downtown Store" />
      <FieldDescription>It will appear on invoices.</FieldDescription>
    </Field>
  ),
}

export const WithError: Story = {
  name: "With error",
  render: (args) => (
    <Field {...args} data-invalid>
      <FieldLabel htmlFor="email-error">Email</FieldLabel>
      <Input id="email-error" aria-invalid defaultValue="orders@" />
      <FieldError>Enter a valid email.</FieldError>
    </Field>
  ),
}

export const Horizontal: Story = {
  args: { orientation: "horizontal" },
  render: (args) => (
    <Field {...args}>
      <Checkbox id="factura" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="factura">Send invoice by email</FieldLabel>
        <FieldDescription>You'll receive a PDF with each order.</FieldDescription>
      </FieldContent>
    </Field>
  ),
}

export const FullForm: Story = {
  name: "Full form",
  render: () => (
    <form onSubmit={(e) => e.preventDefault()}>
      <FieldSet>
        <FieldLegend>Customer details</FieldLegend>
        <FieldDescription>Information for the wholesale order.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="company">Company</FieldLabel>
            <Input id="company" placeholder="Main Street Sports LLC" />
          </Field>
          <Field>
            <FieldLabel htmlFor="notas">Notes</FieldLabel>
            <Textarea id="notas" placeholder="Delivery hours, loading dock…" />
          </Field>
          <FieldSeparator />
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="avisos">Stock alerts</FieldLabel>
              <FieldDescription>We'll notify you when it's restocked.</FieldDescription>
            </FieldContent>
            <Switch id="avisos" />
          </Field>
          <Field orientation="horizontal">
            <Button type="submit">Save</Button>
            <Button variant="outline" type="button">Cancel</Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  ),
}
