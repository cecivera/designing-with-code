import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Overlays/Dialog",
  component: DialogContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** ventana modal que se abre encima de la página y bloquea el resto hasta cerrarla.

**Cuándo usarlo:** para tareas cortas y enfocadas (editar un dato, ver un detalle) sin perder el contexto. Para confirmar acciones destructivas usa **AlertDialog**; para formularios largos o paneles laterales, **Sheet** o **Drawer**.

**Archivo:** \`src/components/ui/dialog.tsx\` → \`Dialog\`, \`DialogTrigger\`, \`DialogContent\` (prop \`showCloseButton\`), \`DialogHeader\`, \`DialogTitle\`, \`DialogDescription\`, \`DialogFooter\` (prop \`showCloseButton\`), \`DialogClose\`.
`,
      },
    },
  },
  argTypes: {
    showCloseButton: { control: "boolean", description: "Muestra la X de cerrar." },
  },
  args: { showCloseButton: true },
} satisfies Meta<typeof DialogContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Editar perfil</DialogTrigger>
      <DialogContent {...args}>
        <DialogHeader>
          <DialogTitle>Editar perfil</DialogTitle>
          <DialogDescription>Haz los cambios y pulsa guardar.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="d-nombre">Nombre</Label>
            <Input id="d-nombre" defaultValue="Cecilia Vera" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="d-rol">Rol</Label>
            <Input id="d-rol" defaultValue="Product Designer" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancelar</DialogClose>
          <Button>Guardar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const SinBotonCerrar: Story = {
  name: "Sin botón X",
  args: { showCloseButton: false },
  render: (args) => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Abrir</DialogTrigger>
      <DialogContent {...args}>
        <DialogHeader>
          <DialogTitle>Novedades</DialogTitle>
          <DialogDescription>Ya puedes exportar pedidos a Excel.</DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  ),
}

export const ContenidoLargo: Story = {
  name: "Contenido largo (scroll)",
  render: (args) => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Términos</DialogTrigger>
      <DialogContent {...args}>
        <DialogHeader>
          <DialogTitle>Términos y condiciones</DialogTitle>
        </DialogHeader>
        <div className="-mx-4 max-h-64 overflow-y-auto px-4 text-sm">
          {Array.from({ length: 12 }).map((_, i) => (
            <p key={i} className="mb-3">
              Cláusula {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            </p>
          ))}
        </div>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  ),
}
