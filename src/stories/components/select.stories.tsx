import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const sizes = [
  { label: "Choose a size", value: null },
  { label: "XS", value: "xs" },
  { label: "S", value: "s" },
  { label: "M", value: "m" },
  { label: "L", value: "l" },
  { label: "XL", value: "xl" },
]

const meta = {
  title: "Forms/Select",
  component: SelectTrigger,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a dropdown for choosing one option from a list, with the system's own styling.

**When to use it:** with more than 5 mutually exclusive options or when space is tight. If users need to search/type, use **Combobox**; if you want the browser's native picker (better on mobile), **NativeSelect**.

**File:** \`src/components/ui/select.tsx\` → \`Select\`, \`SelectTrigger\` (prop \`size\`), \`SelectValue\`, \`SelectContent\`, \`SelectItem\`, \`SelectGroup\`, \`SelectLabel\`, \`SelectSeparator\`.
`,
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "default"], description: "Trigger size." },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
  args: { size: "default" },
} satisfies Meta<typeof SelectTrigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Select items={sizes}>
      <SelectTrigger {...args} className="w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sizes.map((t) => (
            <SelectItem key={t.label} value={t.value}>
              {t.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Small: Story = { name: "Small (sm)", args: { size: "sm" }, render: Default.render }

export const WithGroups: Story = {
  name: "With groups",
  render: (args) => (
    <Select>
      <SelectTrigger {...args} className="w-56">
        <SelectValue placeholder="Choose a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Footwear</SelectLabel>
          <SelectItem value="running">Running</SelectItem>
          <SelectItem value="football">Football</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Apparel</SelectLabel>
          <SelectItem value="tshirts">T-shirts</SelectItem>
          <SelectItem value="hoodies">Sweatshirts</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const WithError: Story = { name: "With error", args: { "aria-invalid": true }, render: Default.render }

export const Disabled: Story = { name: "Disabled", args: { disabled: true }, render: Default.render }
