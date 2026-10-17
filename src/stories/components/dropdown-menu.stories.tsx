import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  CreditCardIcon,
  LogOutIcon,
  MoreHorizontalIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const meta = {
  title: "Navegación/DropdownMenu",
  component: DropdownMenuContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** menú desplegable de acciones que se abre al pulsar un botón.

**Cuándo usarlo:** para agrupar acciones secundarias ("…" en una fila de tabla, menú de usuario). Para elegir un valor de formulario usa **Select**; para el clic derecho, **ContextMenu**.

**Archivo:** \`src/components/ui/dropdown-menu.tsx\` → \`DropdownMenu\`, \`DropdownMenuTrigger\`, \`DropdownMenuContent\` (props \`side\`, \`align\`), \`DropdownMenuItem\` (prop \`variant\`), \`DropdownMenuCheckboxItem\`, \`DropdownMenuRadioItem\`, \`DropdownMenuSub\`…
`,
      },
    },
  },
  argTypes: {
    side: { control: "select", options: ["top", "right", "bottom", "left"] },
    align: { control: "inline-radio", options: ["start", "center", "end"] },
  },
  args: { side: "bottom", align: "start" },
  decorators: [(Story) => <div className="flex min-h-80 items-start justify-center"><Story /></div>],
} satisfies Meta<typeof DropdownMenuContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Mi cuenta</DropdownMenuTrigger>
      <DropdownMenuContent {...args} className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Cecilia Vera</DropdownMenuLabel>
          <DropdownMenuItem>
            <UserIcon /> Perfil <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon /> Facturación
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon /> Ajustes
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Invitar</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Por email</DropdownMenuItem>
            <DropdownMenuItem>Copiar enlace</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem disabled>API (próximamente)</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon /> Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

function CheckboxDemo(args: React.ComponentProps<typeof DropdownMenuContent>) {
  const [precios, setPrecios] = React.useState(true)
  const [stock, setStock] = React.useState(false)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Columnas</DropdownMenuTrigger>
      <DropdownMenuContent {...args}>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Mostrar</DropdownMenuLabel>
          <DropdownMenuCheckboxItem checked={precios} onCheckedChange={setPrecios}>
            Precios
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={stock} onCheckedChange={setStock}>
            Stock
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const ConCheckboxes: Story = { name: "Con checkboxes", render: (args) => <CheckboxDemo {...args} /> }

export const ConRadio: Story = {
  name: "Con opciones radio",
  render: (args) => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Ordenar</DropdownMenuTrigger>
      <DropdownMenuContent {...args}>
        <DropdownMenuRadioGroup defaultValue="recientes">
          <DropdownMenuRadioItem value="recientes">Más recientes</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="precio">Precio</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="nombre">Nombre</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const SoloIcono: Story = {
  name: "Trigger solo icono",
  args: { align: "end" },
  render: (args) => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon" aria-label="Más acciones" />}>
        <MoreHorizontalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent {...args}>
        <DropdownMenuItem>Editar</DropdownMenuItem>
        <DropdownMenuItem>Duplicar</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Eliminar</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
