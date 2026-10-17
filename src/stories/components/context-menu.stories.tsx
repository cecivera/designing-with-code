import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

const meta = {
  title: "Navegación/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** menú que aparece con clic derecho (o pulsación larga) sobre un área.

**Cuándo usarlo:** como atajo para usuarios avanzados (lienzos, tablas, archivos). Nunca como única vía para una acción: ofrece también un botón visible o un **DropdownMenu**.

**Archivo:** \`src/components/ui/context-menu.tsx\` → \`ContextMenu\`, \`ContextMenuTrigger\`, \`ContextMenuContent\`, \`ContextMenuItem\` (props \`variant\`, \`inset\`), \`ContextMenuCheckboxItem\`, \`ContextMenuRadioItem\`, \`ContextMenuSub\`…
`,
      },
    },
  },
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger className="flex h-40 w-72 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
        Haz clic derecho aquí
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuItem>
            Atrás <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Adelante <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Recargar <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Más herramientas</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Guardar como…</ContextMenuItem>
              <ContextMenuItem>Crear acceso directo</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem defaultChecked>Mostrar marcadores</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel inset>Persona</ContextMenuLabel>
          <ContextMenuRadioGroup defaultValue="cecilia">
            <ContextMenuRadioItem value="cecilia">Cecilia</ContextMenuRadioItem>
            <ContextMenuRadioItem value="equipo">Equipo</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Eliminar</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
