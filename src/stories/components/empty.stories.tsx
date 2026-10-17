import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { FolderOpenIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

const meta = {
  title: "Feedback/Empty",
  component: EmptyMedia,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** "estado vacío": lo que se muestra cuando una lista o sección no tiene contenido todavía.

**Cuándo usarlo:** primeras veces (sin pedidos aún), búsquedas sin resultados o errores de carga. Explica por qué está vacío y ofrece la siguiente acción.

**Archivo:** \`src/components/ui/empty.tsx\` → \`Empty\`, \`EmptyHeader\`, \`EmptyMedia\` (prop \`variant\`: \`default\` | \`icon\`), \`EmptyTitle\`, \`EmptyDescription\`, \`EmptyContent\`.
`,
      },
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "icon"], description: "Estilo del contenedor del icono/imagen." },
  },
  args: { variant: "icon" },
} satisfies Meta<typeof EmptyMedia>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Empty className="w-[420px] border">
      <EmptyHeader>
        <EmptyMedia {...args}>
          <FolderOpenIcon />
        </EmptyMedia>
        <EmptyTitle>Aún no hay pedidos</EmptyTitle>
        <EmptyDescription>Cuando un cliente haga un pedido aparecerá aquí.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <PlusIcon data-icon="inline-start" />
          Crear pedido
        </Button>
      </EmptyContent>
    </Empty>
  ),
}

export const SinResultados: Story = {
  name: "Sin resultados de búsqueda",
  render: () => (
    <Empty className="w-[420px]">
      <EmptyHeader>
        <EmptyTitle>Sin resultados</EmptyTitle>
        <EmptyDescription>Prueba con otro término o quita algún filtro.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Limpiar filtros</Button>
      </EmptyContent>
    </Empty>
  ),
}
