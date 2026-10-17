import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import { DirectionProvider } from "@/components/ui/direction"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const meta = {
  title: "Utilidades/Direction",
  component: DirectionProvider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** proveedor (sin aspecto visual) que indica a los componentes de Base UI si el texto va de izquierda a derecha (\`ltr\`) o de derecha a izquierda (\`rtl\`, árabe o hebreo).

**Cuándo usarlo:** solo si el producto se traduce a idiomas RTL. Envuelve la app (o una sección) y pon también \`dir="rtl"\` en el HTML.

**Archivo:** \`src/components/ui/direction.tsx\` → \`DirectionProvider\` (prop \`direction\`), \`useDirection\`.
`,
      },
    },
  },
  argTypes: {
    direction: { control: "inline-radio", options: ["ltr", "rtl"] },
  },
  args: { direction: "rtl" },
} satisfies Meta<typeof DirectionProvider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <DirectionProvider {...args}>
      <div dir={args.direction} className="grid w-72 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="rtl-input">الاسم</Label>
          <Input id="rtl-input" placeholder="اكتب هنا" />
        </div>
        <Slider defaultValue={30} />
        <Button>إرسال</Button>
      </div>
    </DirectionProvider>
  ),
}

export const IzquierdaADerecha: Story = {
  name: "Izquierda a derecha (ltr)",
  args: { direction: "ltr" },
  render: (args) => (
    <DirectionProvider {...args}>
      <div dir={args.direction} className="grid w-72 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="ltr-input">Nombre</Label>
          <Input id="ltr-input" placeholder="Escribe aquí" />
        </div>
        <Slider defaultValue={30} />
        <Button>Enviar</Button>
      </div>
    </DirectionProvider>
  ),
}
