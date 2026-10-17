import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Separator } from "@/components/ui/separator"

const meta = {
  title: "Layout/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** línea fina que separa visualmente bloques de contenido.

**Cuándo usarlo:** entre secciones de un menú, una tarjeta o una barra de herramientas. Si basta con espacio en blanco, mejor no añadir líneas.

**Archivo:** \`src/components/ui/separator.tsx\` → \`Separator\` (prop \`orientation\`).
`,
      },
    },
  },
  argTypes: {
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"], table: { defaultValue: { summary: "horizontal" } } },
  },
  args: { orientation: "horizontal" },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: (args) => (
    <div className="w-72">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Evergreen</h4>
        <p className="text-sm text-muted-foreground">Sistema de diseño basado en shadcn/ui.</p>
      </div>
      <Separator {...args} className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Código</span>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <div className="flex h-6 items-center gap-4 text-sm">
      <span>Pedidos</span>
      <Separator {...args} />
      <span>Clientes</span>
      <Separator {...args} />
      <span>Informes</span>
    </div>
  ),
}
