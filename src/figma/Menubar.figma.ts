// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=15-7
// source=src/components/ui/menubar.tsx
// component=Menubar
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Archivo</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Nuevo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu><MenubarTrigger>Editar</MenubarTrigger></MenubarMenu>
  <MenubarMenu><MenubarTrigger>Ver</MenubarTrigger></MenubarMenu>
  <MenubarMenu><MenubarTrigger>Ayuda</MenubarTrigger></MenubarMenu>
</Menubar>`,
  imports: ['import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar"'],
  id: 'menubar',
  metadata: { nestable: false },
}
