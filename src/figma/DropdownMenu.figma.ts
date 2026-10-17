// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=6-38
// source=src/components/ui/dropdown-menu.tsx
// component=DropdownMenu
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline" />}>Acciones</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Proyecto</DropdownMenuLabel>
    <DropdownMenuItem>Editar</DropdownMenuItem>
    <DropdownMenuItem>Duplicar</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">Eliminar</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  imports: ['import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"', 'import { Button } from "@/components/ui/button"'],
  id: 'dropdown-menu',
  metadata: { nestable: false },
}
