// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=13-134
// source=src/components/ui/context-menu.tsx
// component=ContextMenu
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<ContextMenu>
  <ContextMenuTrigger>Clic derecho aquí</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Atrás <ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem>
    <ContextMenuItem>Adelante <ContextMenuShortcut>⌘]</ContextMenuShortcut></ContextMenuItem>
    <ContextMenuItem>Recargar <ContextMenuShortcut>⌘R</ContextMenuShortcut></ContextMenuItem>
    <ContextMenuSeparator />
  </ContextMenuContent>
</ContextMenu>`,
  imports: ['import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuShortcut } from "@/components/ui/context-menu"'],
  id: 'context-menu',
  metadata: { nestable: false },
}
