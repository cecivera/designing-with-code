import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Formularios/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** la etiqueta accesible de un control de formulario.

**Cuándo usarlo:** siempre que haya un Input, Checkbox, Switch, etc. Conecta label y control con \`htmlFor\` = \`id\`. Si además necesitas descripción y error, usa **Field** (que ya incluye \`FieldLabel\`).

**Archivo:** \`src/components/ui/label.tsx\` → \`Label\`.
`,
      },
    },
  },
  argTypes: { children: { control: "text" } },
  args: { children: "Nombre de la tienda" },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ConInput: Story = {
  name: "Con input",
  render: (args) => (
    <div className="grid w-72 gap-2">
      <Label {...args} htmlFor="tienda" />
      <Input id="tienda" placeholder="Tienda Centro Madrid" />
    </div>
  ),
}

export const ConCheckbox: Story = {
  name: "Con checkbox",
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terminos" />
      <Label htmlFor="terminos">Acepto los términos y condiciones</Label>
    </div>
  ),
}
