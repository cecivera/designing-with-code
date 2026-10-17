import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { BadgeCheckIcon, ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const meta = {
  title: "Datos/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** etiqueta pequeña para mostrar un estado, categoría o contador.

**Cuándo usarlo:** estados ("Enviado", "Pendiente"), etiquetas de producto ("Nuevo") o contadores. No es un botón: si debe ser clicable, renderízalo como enlace con \`render={<a href="…" />}\`.

**Archivo:** \`src/components/ui/badge.tsx\` → \`Badge\` (prop \`variant\`).
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      table: { defaultValue: { summary: "default" } },
    },
    children: { control: "text" },
  },
  args: { variant: "default", children: "Nuevo" },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Secondary: Story = { args: { variant: "secondary", children: "Pendiente" } }
export const Destructive: Story = { args: { variant: "destructive", children: "Cancelado" } }
export const Outline: Story = { args: { variant: "outline", children: "Borrador" } }
export const Ghost: Story = { args: { variant: "ghost", children: "Archivado" } }

export const TodasLasVariantes: Story = {
  name: "Todas las variantes",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  ),
}

export const ConIcono: Story = {
  name: "Con icono",
  render: (args) => (
    <Badge {...args}>
      <BadgeCheckIcon data-icon="inline-start" />
      Verificado
    </Badge>
  ),
}

export const ComoEnlace: Story = {
  name: "Como enlace",
  render: (args) => (
    <Badge {...args} variant="outline" render={<a href="#" />}>
      Ver pedido
      <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  ),
}

export const Contador: Story = {
  args: { children: "8", className: "h-5 min-w-5 rounded-full px-1 tabular-nums" },
}
