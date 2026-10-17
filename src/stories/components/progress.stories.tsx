import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"

const meta = {
  title: "Feedback/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** barra que muestra el avance de una tarea.

**Cuándo usarlo:** cuando conoces el porcentaje (subida de archivos, pasos completados). Si no sabes cuánto falta, usa **Spinner**; mientras carga contenido, **Skeleton**.

**Archivo:** \`src/components/ui/progress.tsx\` → \`Progress\` (prop \`value\` 0–100 o \`null\` para indeterminado), \`ProgressLabel\`, \`ProgressValue\`, \`ProgressTrack\`, \`ProgressIndicator\`.
`,
      },
    },
  },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  args: { value: 60 },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ConEtiqueta: Story = {
  name: "Con etiqueta y valor",
  render: (args) => (
    <Progress {...args}>
      <div className="flex w-full items-center justify-between">
        <ProgressLabel>Subiendo catálogo</ProgressLabel>
        <ProgressValue />
      </div>
    </Progress>
  ),
}

export const Vacio: Story = { name: "Vacío (0%)", args: { value: 0 } }

export const Completo: Story = { args: { value: 100 } }
