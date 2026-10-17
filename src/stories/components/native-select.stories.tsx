import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"

const meta = {
  title: "Forms/NativeSelect",
  component: NativeSelect,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** the browser's native \`<select>\` with the system's styling.

**When to use it:** in simple forms and especially on mobile, where the operating system's native picker is more comfortable. For custom-styled lists use **Select**; with search, **Combobox**.

**File:** \`src/components/ui/native-select.tsx\` → \`NativeSelect\` (prop \`size\`), \`NativeSelectOption\`, \`NativeSelectOptGroup\`.
`,
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "default"] },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
  args: { size: "default" },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <NativeSelect {...args} defaultValue="">
      <NativeSelectOption value="" disabled>
        Choose a country
      </NativeSelectOption>
      <NativeSelectOption value="es">Spain</NativeSelectOption>
      <NativeSelectOption value="de">Germany</NativeSelectOption>
      <NativeSelectOption value="fr">France</NativeSelectOption>
    </NativeSelect>
  ),
}

export const WithGroups: Story = {
  name: "With groups",
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOptGroup label="Europe">
        <NativeSelectOption value="es">Spain</NativeSelectOption>
        <NativeSelectOption value="de">Germany</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Americas">
        <NativeSelectOption value="mx">Mexico</NativeSelectOption>
        <NativeSelectOption value="us">United States</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}

export const Small: Story = { name: "Small (sm)", args: { size: "sm" }, render: Default.render }

export const WithError: Story = { name: "With error", args: { "aria-invalid": true }, render: Default.render }

export const Disabled: Story = { name: "Disabled", args: { disabled: true }, render: Default.render }
