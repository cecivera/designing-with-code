import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const meta = {
  title: "Layout/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** zona con scroll propio y barras de desplazamiento con el estilo del sistema (iguales en todos los navegadores).

**Cuándo usarlo:** listas largas dentro de un panel, menú o tarjeta de altura fija. Para la página completa usa el scroll nativo.

**Archivo:** \`src/components/ui/scroll-area.tsx\` → \`ScrollArea\`, \`ScrollBar\` (prop \`orientation\`).
`,
      },
    },
  },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const tags = Array.from({ length: 40 }).map((_, i) => `SKU-${String(i + 1).padStart(4, "0")}`)

export const Vertical: Story = {
  render: (args) => (
    <ScrollArea {...args} className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Referencias</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: (args) => (
    <ScrollArea {...args} className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max gap-4 p-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex h-32 w-40 shrink-0 items-center justify-center rounded-md bg-muted text-sm">
            Producto {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}
