// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=6-37
// source=src/components/ui/dropdown-menu.tsx
// component=DropdownMenuItem
import figma from 'figma'
const instance = figma.selectedInstance
const label = instance.getString('Label')
const destructive = instance.getEnum('State', { Default: false, Hover: false, Destructive: true })
const icon = instance.getInstanceSwap('Icon')
let iconCode
if (icon && icon.type === 'INSTANCE') {
  iconCode = icon.executeTemplate().example
}

export default {
  example: figma.code`<DropdownMenuItem${destructive ? ' variant="destructive"' : ''}>${iconCode}${label}</DropdownMenuItem>`,
  imports: ['import { DropdownMenuItem } from "@/components/ui/dropdown-menu"'],
  id: 'dropdown-menu-item',
  metadata: { nestable: true },
}
