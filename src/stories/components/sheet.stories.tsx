import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const meta = {
  title: "Overlays/Sheet",
  component: SheetContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** panel que se desliza desde un borde de la pantalla (derecha por defecto).

**Cuándo usarlo:** para formularios o detalles largos sin salir de la página (filtros, carrito, detalle de un pedido) o como menú en móvil. Para algo corto, **Dialog**; en móvil con gesto de arrastre, **Drawer**.

**Archivo:** \`src/components/ui/sheet.tsx\` → \`Sheet\`, \`SheetTrigger\`, \`SheetContent\` (props \`side\`, \`showCloseButton\`), \`SheetHeader\`, \`SheetTitle\`, \`SheetDescription\`, \`SheetFooter\`, \`SheetClose\`.
`,
      },
    },
  },
  argTypes: {
    side: {
      control: "inline-radio",
      options: ["top", "right", "bottom", "left"],
      table: { defaultValue: { summary: "right" } },
    },
    showCloseButton: { control: "boolean" },
  },
  args: { side: "right", showCloseButton: true },
} satisfies Meta<typeof SheetContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Abrir filtros ({args.side})</SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
          <SheetDescription>Acota los pedidos que quieres ver.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 px-4">
          <div className="grid gap-2">
            <Label htmlFor="s-cliente">Cliente</Label>
            <Input id="s-cliente" placeholder="Buscar cliente" />
          </div>
        </div>
        <SheetFooter>
          <Button>Aplicar</Button>
          <SheetClose render={<Button variant="outline" />}>Cancelar</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Izquierda: Story = { args: { side: "left" }, render: Default.render }
export const Arriba: Story = { args: { side: "top" }, render: Default.render }
export const Abajo: Story = { args: { side: "bottom" }, render: Default.render }
