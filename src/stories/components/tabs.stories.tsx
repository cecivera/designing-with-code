import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { BarChart3Icon, PackageIcon, SettingsIcon } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const meta = {
  title: "Navegación/Tabs",
  component: TabsList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** pestañas para cambiar entre vistas relacionadas dentro de la misma página, sin navegar.

**Cuándo usarlo:** para separar contenido del mismo nivel (Resumen / Pedidos / Ajustes). Si cada opción es una página distinta, usa navegación (links); si solo cambia un filtro, **ToggleGroup**.

**Archivo:** \`src/components/ui/tabs.tsx\` → \`Tabs\` (prop \`orientation\`), \`TabsList\` (prop \`variant\`: \`default\` | \`line\`), \`TabsTrigger\`, \`TabsContent\`.
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "line"],
      description: "`default` = pastilla con fondo; `line` = subrayado.",
      table: { defaultValue: { summary: "default" } },
    },
  },
  args: { variant: "default" },
} satisfies Meta<typeof TabsList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="resumen" className="w-96">
      <TabsList {...args}>
        <TabsTrigger value="resumen">Resumen</TabsTrigger>
        <TabsTrigger value="pedidos">Pedidos</TabsTrigger>
        <TabsTrigger value="ajustes">Ajustes</TabsTrigger>
      </TabsList>
      <TabsContent value="resumen">Ventas de la temporada y KPIs principales.</TabsContent>
      <TabsContent value="pedidos">Listado de pedidos mayoristas.</TabsContent>
      <TabsContent value="ajustes">Preferencias de la cuenta.</TabsContent>
    </Tabs>
  ),
}

export const Linea: Story = { name: "Línea", args: { variant: "line" }, render: Default.render }

export const ConIconos: Story = {
  name: "Con iconos",
  render: (args) => (
    <Tabs defaultValue="resumen">
      <TabsList {...args}>
        <TabsTrigger value="resumen"><BarChart3Icon />Resumen</TabsTrigger>
        <TabsTrigger value="pedidos"><PackageIcon />Pedidos</TabsTrigger>
        <TabsTrigger value="ajustes"><SettingsIcon />Ajustes</TabsTrigger>
      </TabsList>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: (args) => (
    <Tabs defaultValue="resumen" orientation="vertical" className="w-96">
      <TabsList {...args}>
        <TabsTrigger value="resumen">Resumen</TabsTrigger>
        <TabsTrigger value="pedidos">Pedidos</TabsTrigger>
        <TabsTrigger value="ajustes">Ajustes</TabsTrigger>
      </TabsList>
      <TabsContent value="resumen">Contenido de Resumen</TabsContent>
      <TabsContent value="pedidos">Contenido de Pedidos</TabsContent>
      <TabsContent value="ajustes">Contenido de Ajustes</TabsContent>
    </Tabs>
  ),
}

export const ConPestanaDeshabilitada: Story = {
  name: "Con pestaña deshabilitada",
  render: (args) => (
    <Tabs defaultValue="resumen">
      <TabsList {...args}>
        <TabsTrigger value="resumen">Resumen</TabsTrigger>
        <TabsTrigger value="pedidos" disabled>Pedidos</TabsTrigger>
        <TabsTrigger value="ajustes">Ajustes</TabsTrigger>
      </TabsList>
    </Tabs>
  ),
}
