import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Kbd, KbdGroup } from "@/components/ui/kbd"

const meta = {
  title: "Datos/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** muestra una tecla o atajo de teclado.

**Cuándo usarlo:** en menús, tooltips o ayudas para indicar atajos (⌘K, Ctrl + C). Usa \`KbdGroup\` para combinaciones.

**Archivo:** \`src/components/ui/kbd.tsx\` → \`Kbd\`, \`KbdGroup\`.
`,
      },
    },
  },
  argTypes: { children: { control: "text" } },
  args: { children: "⌘" },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Combinacion: Story = {
  name: "Combinación",
  render: () => (
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
}

export const EnTexto: Story = {
  name: "Dentro de un texto",
  render: () => (
    <p className="text-sm text-muted-foreground">
      Pulsa <Kbd>⌘</Kbd> <Kbd>K</Kbd> para abrir el buscador.
    </p>
  ),
}
