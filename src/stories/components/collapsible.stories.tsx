import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { ChevronsUpDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const meta = {
  title: "Layout/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** un bloque que se muestra u oculta al pulsar un disparador. Sin estilos propios: tú decides el aspecto.

**Cuándo usarlo:** "Ver más", opciones avanzadas o submenús de un **Sidebar**. Para varias secciones tipo FAQ, **Accordion**.

**Archivo:** \`src/components/ui/collapsible.tsx\` → \`Collapsible\` (props \`open\` / \`defaultOpen\`, \`disabled\`), \`CollapsibleTrigger\`, \`CollapsibleContent\`.
`,
      },
    },
  },
  argTypes: {
    defaultOpen: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: { defaultOpen: false },
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Collapsible {...args} className="flex w-80 flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-sm font-semibold">3 pedidos pendientes</h4>
        <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Mostrar/ocultar" />}>
          <ChevronsUpDownIcon />
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm">PED-001</div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm">PED-002</div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">PED-003</div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const Abierto: Story = { args: { defaultOpen: true }, render: Default.render }
