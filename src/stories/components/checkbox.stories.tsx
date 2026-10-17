import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Formularios/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** casilla de verificación para marcar o desmarcar una opción.

**Cuándo usarlo:** para opciones independientes (varias pueden estar marcadas) o para aceptar condiciones. Si solo puede haber una opción, usa **RadioGroup**; si el cambio se aplica al instante (un ajuste), **Switch**.

**Archivo:** \`src/components/ui/checkbox.tsx\` → \`Checkbox\` (props \`checked\`, \`defaultChecked\`, \`indeterminate\`, \`disabled\`).
`,
      },
    },
  },
  argTypes: {
    defaultChecked: { control: "boolean", description: "Estado inicial." },
    indeterminate: { control: "boolean", description: "Estado mixto (p. ej. \"seleccionar todo\" parcial)." },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
  args: { defaultChecked: false, disabled: false },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { "aria-label": "Seleccionar" } }

export const ConLabel: Story = {
  name: "Con label",
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} id="newsletter" />
      <Label htmlFor="newsletter">Recibir novedades por email</Label>
    </div>
  ),
}

export const Marcado: Story = { args: { defaultChecked: true, "aria-label": "Marcado" } }

export const Indeterminado: Story = { args: { indeterminate: true, "aria-label": "Indeterminado" } }

export const ConError: Story = { name: "Con error", args: { "aria-invalid": true, "aria-label": "Error" } }

export const Deshabilitado: Story = {
  args: { disabled: true, defaultChecked: true },
  render: ConLabel.render,
}

export const Lista: Story = {
  name: "Lista de opciones",
  render: () => (
    <div className="grid gap-3">
      {["Calzado", "Textil", "Accesorios"].map((c, i) => (
        <div key={c} className="flex items-center gap-2">
          <Checkbox id={`cat-${c}`} defaultChecked={i === 0} />
          <Label htmlFor={`cat-${c}`}>{c}</Label>
        </div>
      ))}
    </div>
  ),
}
