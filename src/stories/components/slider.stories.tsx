import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Slider } from "@/components/ui/slider"

const meta = {
  title: "Formularios/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** control deslizante para elegir un valor o un rango dentro de unos límites.

**Cuándo usarlo:** cuando el valor exacto importa menos que la posición relativa (volumen, rango de precios). Si el usuario necesita un número exacto, añade también un **Input** numérico.

**Archivo:** \`src/components/ui/slider.tsx\` → \`Slider\` (props \`defaultValue\` (número o array), \`min\`, \`max\`, \`step\`, \`orientation\`, \`disabled\`).
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

export const Rango: Story = { args: { defaultValue: [25, 75], step: 5 } }

export const VariosValores: Story = { name: "Varios valores", args: { defaultValue: [10, 40, 80], step: 10 } }

export const Vertical: Story = { args: { orientation: "vertical", defaultValue: 40 } }

export const Deshabilitado: Story = { args: { disabled: true } }
