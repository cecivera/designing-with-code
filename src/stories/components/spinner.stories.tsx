import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

const meta = {
  title: "Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** indicador de carga giratorio.

**Cuándo usarlo:** para esperas cortas sin progreso conocido (enviando un formulario, cargando un dato). Dentro de botones, desactiva el botón mientras gira. Para cargas de contenido largo, **Skeleton**.

**Archivo:** \`src/components/ui/spinner.tsx\` → \`Spinner\` (tamaño y color con clases: \`size-6\`, \`text-muted-foreground\`).
`,
      },
    },
  },
  args: { className: "size-6" },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Tamanos: Story = {
  name: "Tamaños",
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  ),
}

export const EnBoton: Story = {
  name: "En botón y badge",
  render: () => (
    <div className="flex items-center gap-4">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Guardando…
      </Button>
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        Sincronizando
      </Badge>
    </div>
  ),
}
