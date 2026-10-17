import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

const meta = {
  title: "Navegación/Menubar",
  component: Menubar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** barra de menús horizontal tipo aplicación de escritorio (Archivo, Editar, Ver…).

**Cuándo usarlo:** en herramientas complejas (editores, back-offices) con muchas acciones organizadas por categoría. En webs normales suele bastar con **DropdownMenu**.

**Archivo:** \`src/components/ui/menubar.tsx\` → \`Menubar\`, \`MenubarMenu\`, \`MenubarTrigger\`, \`MenubarContent\`, \`MenubarItem\`, \`MenubarCheckboxItem\`, \`MenubarRadioGroup\`/\`MenubarRadioItem\`, \`MenubarSub\`…
`,
      },
    },
  },
  decorators: [(Story) => <div className="min-h-64"><Story /></div>],
} satisfies Meta<typeof Menubar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>Archivo</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              Nuevo pedido <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Duplicar</MenubarItem>
            <MenubarSub>
              <MenubarSubTrigger>Exportar</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>CSV</MenubarItem>
                <MenubarItem>Excel</MenubarItem>
                <MenubarItem>PDF</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarItem variant="destructive">Eliminar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Ver</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem defaultChecked>Mostrar precios</MenubarCheckboxItem>
          <MenubarCheckboxItem>Mostrar stock</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarRadioGroup defaultValue="tabla">
            <MenubarRadioItem value="tabla">Tabla</MenubarRadioItem>
            <MenubarRadioItem value="tarjetas">Tarjetas</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Ayuda</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Documentación</MenubarItem>
          <MenubarItem disabled>Contactar soporte</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}
