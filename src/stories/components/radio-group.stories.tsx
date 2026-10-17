import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const meta = {
  title: "Formularios/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** grupo de opciones donde solo se puede elegir una.

**Cuándo usarlo:** con 2–5 opciones excluyentes que conviene ver todas a la vez (método de envío, plan). Con más opciones, usa **Select**.

**Archivo:** \`src/components/ui/radio-group.tsx\` → \`RadioGroup\`, \`RadioGroupItem\`.
`,
      },
    },
  },
  argTypes: {
    defaultValue: { control: "inline-radio", options: ["estandar", "express", "recogida"] },
    disabled: { control: "boolean" },
  },
  args: { defaultValue: "estandar" },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const opciones = [
  { value: "estandar", label: "Envío estándar (3–5 días)" },
  { value: "express", label: "Envío express (24 h)" },
  { value: "recogida", label: "Recogida en tienda" },
]

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      {opciones.map((o) => (
        <div key={o.value} className="flex items-center gap-2">
          <RadioGroupItem value={o.value} id={o.value} />
          <Label htmlFor={o.value}>{o.label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}

export const Deshabilitado: Story = { args: { disabled: true }, render: Default.render }

export const OpcionDeshabilitada: Story = {
  name: "Una opción deshabilitada",
  render: (args) => (
    <RadioGroup {...args}>
      {opciones.map((o) => (
        <div key={o.value} className="flex items-center gap-2">
          <RadioGroupItem value={o.value} id={`d-${o.value}`} disabled={o.value === "express"} />
          <Label htmlFor={`d-${o.value}`}>{o.label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}
