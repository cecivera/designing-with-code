import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Trash2Icon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Overlays/AlertDialog",
  component: AlertDialogContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** diálogo modal que interrumpe al usuario para confirmar una acción importante. No se cierra al hacer clic fuera.

**Cuándo usarlo:** antes de acciones destructivas o irreversibles ("¿Eliminar pedido?"). Para mostrar información o formularios usa **Dialog**.

**Archivo:** \`src/components/ui/alert-dialog.tsx\` → \`AlertDialog\`, \`AlertDialogTrigger\`, \`AlertDialogContent\` (prop \`size\`), \`AlertDialogHeader\`, \`AlertDialogMedia\`, \`AlertDialogTitle\`, \`AlertDialogDescription\`, \`AlertDialogFooter\`, \`AlertDialogAction\`, \`AlertDialogCancel\`.
`,
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["default", "sm"], table: { defaultValue: { summary: "default" } } },
  },
  args: { size: "default" },
} satisfies Meta<typeof AlertDialogContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>Eliminar pedido</AlertDialogTrigger>
      <AlertDialogContent {...args}>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Eliminar el pedido PED-002?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. El cliente dejará de ver el pedido.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Eliminar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const Pequeno: Story = {
  name: "Pequeño con icono",
  args: { size: "sm" },
  render: (args) => (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>Borrar</AlertDialogTrigger>
      <AlertDialogContent {...args}>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>¿Borrar archivo?</AlertDialogTitle>
          <AlertDialogDescription>Se moverá a la papelera.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Borrar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}
