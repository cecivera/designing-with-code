import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const meta = {
  title: "Overlays/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** panel que sale desde un borde y se puede cerrar arrastrando (gesto típico de móvil, "bottom sheet").

**Cuándo usarlo:** sobre todo en móvil, para acciones o detalles rápidos. En escritorio suele encajar mejor **Dialog** o **Sheet**.

**Archivo:** \`src/components/ui/drawer.tsx\` → \`Drawer\` (props \`swipeDirection\`, \`showSwipeHandle\`, \`snapPoints\`), \`DrawerTrigger\`, \`DrawerContent\`, \`DrawerHeader\`, \`DrawerTitle\`, \`DrawerDescription\`, \`DrawerFooter\`, \`DrawerClose\`.
`,
      },
    },
  },
  argTypes: {
    swipeDirection: {
      control: "inline-radio",
      options: ["down", "up", "left", "right"],
      description: "Dirección del gesto para cerrar (y lado desde el que aparece).",
      table: { defaultValue: { summary: "down" } },
    },
    showSwipeHandle: { control: "boolean", description: "Muestra la barrita para arrastrar." },
  },
  args: { swipeDirection: "down", showSwipeHandle: true },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger render={<Button variant="outline" />}>Abrir drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Cantidad objetivo</DrawerTitle>
          <DrawerDescription>Define las unidades para la temporada.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <div className="flex h-40 items-center justify-center rounded-lg bg-muted text-4xl font-semibold">
            350
          </div>
        </div>
        <DrawerFooter>
          <Button>Guardar</Button>
          <DrawerClose render={<Button variant="outline" />}>Cancelar</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const DesdeLaDerecha: Story = {
  name: "Desde la derecha",
  args: { swipeDirection: "right" },
  render: Default.render,
}
