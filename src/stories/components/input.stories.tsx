import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Formularios/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** campo de texto de una sola línea.

**Cuándo usarlo:** para datos cortos (nombre, email, búsqueda, cantidades). Para textos largos usa **Textarea**; para añadir iconos, prefijos o botones dentro del campo, **InputGroup**. Acompáñalo siempre de un **Label** (o de **Field** para label + ayuda + error).

**Archivo:** \`src/components/ui/input.tsx\` → \`Input\` (acepta todas las props nativas de \`<input>\`).
`,
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url", "file"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean", description: "Marca el campo como erróneo (borde rojo)." },
  },
  args: { type: "text", placeholder: "Escribe aquí…", disabled: false },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ConLabel: Story = {
  name: "Con label",
  render: (args) => (
    <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input {...args} id="email" type="email" placeholder="nombre@empresa.com" />
    </div>
  ),
}

export const Password: Story = { args: { type: "password", placeholder: "Contraseña" } }

export const Archivo: Story = { args: { type: "file" } }

export const ConError: Story = {
  name: "Con error",
  args: { "aria-invalid": true, defaultValue: "email-invalido" },
}

export const Deshabilitado: Story = { args: { disabled: true, placeholder: "No editable" } }
