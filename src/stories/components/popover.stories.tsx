import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

const meta = {
  title: "Overlays/Popover",
  component: PopoverContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** pequeño panel flotante anclado a un elemento, que se abre al hacer clic.

**Cuándo usarlo:** para contenido interactivo breve junto a su disparador (un mini formulario, un selector de fecha con **Calendar**, filtros rápidos). Si solo es texto informativo al pasar el ratón, usa **Tooltip** o **HoverCard**.

**Archivo:** \`src/components/ui/popover.tsx\` → \`Popover\`, \`PopoverTrigger\`, \`PopoverContent\` (props \`side\`, \`align\`, \`sideOffset\`), \`PopoverHeader\`, \`PopoverTitle\`, \`PopoverDescription\`.
`,
      },
    },
  },
  argTypes: {
    side: { control: "select", options: ["top", "right", "bottom", "left"] },
    align: { control: "inline-radio", options: ["start", "center", "end"] },
  },
  args: { side: "bottom", align: "center" },
  decorators: [(Story) => <div className="flex min-h-72 items-center justify-center"><Story /></div>],
} satisfies Meta<typeof PopoverContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Dimensiones</PopoverTrigger>
      <PopoverContent {...args} className="w-72">
        <PopoverHeader>
          <PopoverTitle>Dimensiones</PopoverTitle>
          <PopoverDescription>Tamaño de la caja de envío.</PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="ancho">Ancho</Label>
            <Input id="ancho" defaultValue="40 cm" className="col-span-2" />
          </div>
          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="alto">Alto</Label>
            <Input id="alto" defaultValue="25 cm" className="col-span-2" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Lados: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Popover key={side}>
          <PopoverTrigger render={<Button variant="outline" />}>{side}</PopoverTrigger>
          <PopoverContent side={side} className="w-40">
            Popover en {side}
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
}
