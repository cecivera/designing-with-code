import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const meta = {
  title: "Layout/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a list of sections that expand and collapse to show their content.

**When to use it:** FAQs, grouped settings or long spec sheets, when the user only needs to see part of the content. For a single expandable block use **Collapsible**.

**File:** \`src/components/ui/accordion.tsx\` → \`Accordion\` (props \`multiple\`, \`defaultValue\`), \`AccordionItem\`, \`AccordionTrigger\`, \`AccordionContent\`.
`,
      },
    },
  },
  argTypes: {
    multiple: { control: "boolean", description: "Allows several sections to be open at once." },
    disabled: { control: "boolean" },
  },
  args: { multiple: false, defaultValue: ["shipping"] },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

const faqs = [
  { value: "shipping", q: "How long does shipping take?", a: "3 to 5 business days within the mainland." },
  { value: "returns", q: "Can I return an order?", a: "Yes, you have 30 days from delivery." },
  { value: "invoice", q: "Where do I download the invoice?", a: "In Orders › Details › Download invoice." },
]

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      {faqs.map((f) => (
        <AccordionItem key={f.value} value={f.value}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent>{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

export const Multiple: Story = {
  name: "Multiple open",
  args: { multiple: true, defaultValue: ["shipping", "invoice"] },
  render: Default.render,
}

export const DisabledItem: Story = {
  name: "With disabled item",
  render: (args) => (
    <Accordion {...args}>
      {faqs.map((f, i) => (
        <AccordionItem key={f.value} value={f.value} disabled={i === 1}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent>{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}
