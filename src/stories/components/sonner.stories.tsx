import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"

const meta = {
  title: "Feedback/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** notificaciones emergentes ("toasts") basadas en la librería *sonner*. Es la opción más usada en shadcn/ui.

**Cuándo usarlo:** para confirmar acciones o avisar de algo sin bloquear ("Pedido guardado", "Error de conexión"). Coloca un único \`<Toaster />\` en el layout y llama a \`toast()\` desde cualquier sitio. Para mensajes que deben quedarse en pantalla usa **Alert**.

**Archivo:** \`src/components/ui/sonner.tsx\` → \`Toaster\` (la función \`toast\` se importa de \`sonner\`). Alternativa con Base UI: **Toast**.
`,
      },
    },
  },
  argTypes: {
    position: {
      control: "select",
      options: ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"],
    },
    richColors: { control: "boolean" },
  },
  // Storybook es solo modo claro.
  args: { theme: "light", position: "bottom-right" },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <>
      <Toaster {...args} />
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => toast("Pedido guardado", { description: "PED-002 · 830,00 €" })}>
          Normal
        </Button>
        <Button variant="outline" onClick={() => toast.success("Catálogo publicado")}>
          Éxito
        </Button>
        <Button variant="outline" onClick={() => toast.info("Hay una nueva versión disponible")}>
          Info
        </Button>
        <Button variant="outline" onClick={() => toast.warning("Stock bajo en 3 productos")}>
          Aviso
        </Button>
        <Button variant="outline" onClick={() => toast.error("No se pudo conectar")}>
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("Pedido eliminado", { action: { label: "Deshacer", onClick: () => toast("Restaurado") } })
          }
        >
          Con acción
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.promise(new Promise((r) => setTimeout(r, 2000)), {
              loading: "Enviando…",
              success: "Enviado",
              error: "Error",
            })
          }
        >
          Promesa
        </Button>
      </div>
    </>
  ),
}
