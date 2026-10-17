import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const meta = {
  title: "Formularios/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** campo de texto de varias líneas que crece con el contenido.

**Cuándo usarlo:** para comentarios, descripciones o notas. Para una sola línea usa **Input**.

**Archivo:** \`src/components/ui/textarea.tsx\` → \`Textarea\` (props nativas de \`<textarea>\`).
`,
      },
    },
  },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
  args: { placeholder: "Escribe tu mensaje…" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ConLabel: Story = {
  name: "Con label",
  render: (args) => (
    <div className="grid gap-2">
      <Label htmlFor="mensaje">Comentarios del pedido</Label>
      <Textarea {...args} id="mensaje" />
      <p className="text-sm text-muted-foreground">Máximo 500 caracteres.</p>
    </div>
  ),
}

export const ConError: Story = { name: "Con error", args: { "aria-invalid": true } }

export const Deshabilitado: Story = { args: { disabled: true } }
