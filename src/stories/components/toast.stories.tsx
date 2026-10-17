import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import { Toaster, toast } from "@/components/ui/toast"

const meta = {
  title: "Feedback/Toast",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** notificaciones emergentes construidas con el Toast de Base UI (misma librería que el resto de componentes).

**Cuándo usarlo:** igual que **Sonner**: confirmaciones y avisos breves que no bloquean. Elige uno de los dos en tu proyecto, no ambos. Coloca un \`<Toaster />\` en el layout y usa \`toast.add({ title, description, type })\`.

**Archivo:** \`src/components/ui/toast.tsx\` → \`Toaster\`, \`toast\` (manager), \`Toast\`, \`ToastTitle\`, \`ToastDescription\`, \`ToastAction\`, \`ToastClose\`…
`,
      },
    },
  },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Toaster {...args}>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => toast.add({ title: "Pedido guardado", description: "PED-002 · 830,00 €" })}
        >
          Normal
        </Button>
        <Button variant="outline" onClick={() => toast.add({ title: "Catálogo publicado", type: "success" })}>
          Éxito
        </Button>
        <Button variant="outline" onClick={() => toast.add({ title: "Stock bajo", type: "warning" })}>
          Aviso
        </Button>
        <Button variant="outline" onClick={() => toast.add({ title: "No se pudo conectar", type: "error" })}>
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const id = toast.add({
              title: "Pedido eliminado",
              actionProps: {
                children: "Deshacer",
                onClick() {
                  toast.close(id)
                  toast.add({ description: "Pedido restaurado." })
                },
              },
            })
          }}
        >
          Con acción
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.promise(new Promise<void>((r) => window.setTimeout(r, 2000)), {
              loading: "Enviando…",
              success: "Enviado",
              error: "Error",
            })
          }
        >
          Promesa
        </Button>
      </div>
    </Toaster>
  ),
}
