import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const meta = {
  title: "Overlays/Tooltip",
  component: TooltipContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** etiqueta de texto breve que aparece al pasar el ratón o enfocar un elemento.

**Cuándo usarlo:** para nombrar botones de solo icono o mostrar atajos. Texto corto y no esencial (en móvil no se ve). Para contenido más rico, **HoverCard** o **Popover**.

**Archivo:** \`src/components/ui/tooltip.tsx\` → \`TooltipProvider\` (prop \`delay\`), \`Tooltip\`, \`TooltipTrigger\`, \`TooltipContent\` (props \`side\`, \`align\`).
`,
      },
    },
  },
  argTypes: {
    side: { control: "select", options: ["top", "right", "bottom", "left"] },
    align: { control: "inline-radio", options: ["start", "center", "end"] },
  },
  args: { side: "top", align: "center" },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="flex min-h-40 items-center justify-center">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof TooltipContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Añadir" />}>
        <PlusIcon />
      </TooltipTrigger>
      <TooltipContent {...args}>Añadir a la colección</TooltipContent>
    </Tooltip>
  ),
}

export const ConAtajo: Story = {
  name: "Con atajo",
  render: (args) => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>Guardar</TooltipTrigger>
      <TooltipContent {...args}>
        Guardar cambios <Kbd>⌘S</Kbd>
      </TooltipContent>
    </Tooltip>
  ),
}

export const Lados: Story = {
  render: () => (
    <div className="flex gap-2">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="outline" />}>{side}</TooltipTrigger>
          <TooltipContent side={side}>Tooltip en {side}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
}
