import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Slider } from "@/components/ui/slider"

const meta = {
  title: "Forms/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a sliding control to pick a value or a range within set limits.

**When to use it:** when the exact value matters less than the relative position (volume, price range). If the user needs an exact number, also add a numeric **Input**.

**File:** \`src/components/ui/slider.tsx\` → \`Slider\` (props \`defaultValue\` (number or array), \`min\`, \`max\`, \`step\`, \`orientation\`, \`disabled\`).
`,
      },
    },
  },
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] },
    disabled: { control: "boolean" },
  },
  args: { defaultValue: 50, min: 0, max: 100, step: 1 },
  decorators: [(Story) => <div className="flex h-48 w-72 items-center justify-center"><Story /></div>],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Range: Story = { name: "Range", args: { defaultValue: [25, 75], step: 5 } }

export const MultipleValues: Story = { name: "Multiple values", args: { defaultValue: [10, 40, 80], step: 10 } }

export const Vertical: Story = { args: { orientation: "vertical", defaultValue: 40 } }

export const Disabled: Story = { name: "Disabled", args: { disabled: true } }
