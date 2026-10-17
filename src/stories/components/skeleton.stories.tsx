import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Skeleton } from "@/components/ui/skeleton"

const meta = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** bloque gris animado que ocupa el lugar del contenido mientras carga.

**Cuándo usarlo:** al cargar listas, tarjetas o perfiles, imitando la forma final para evitar saltos de layout. Para acciones cortas (un botón guardando) usa **Spinner**.

**Archivo:** \`src/components/ui/skeleton.tsx\` → \`Skeleton\` (la forma se define con clases: \`h-4 w-40\`, \`rounded-full\`…).
`,
      },
    },
  },
  args: { className: "h-4 w-60" },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Perfil: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="grid gap-2">
        <Skeleton className="h-4 w-56" />
        <Skeleton className="h-4 w-40" />
      </div>
    </div>
  ),
}

export const Tarjeta: Story = {
  render: () => (
    <div className="grid w-72 gap-3">
      <Skeleton className="h-40 w-full rounded-xl" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  ),
}
