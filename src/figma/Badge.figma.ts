// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=4-10
// source=src/components/ui/badge.tsx
// component=Badge
import figma from 'figma'
const instance = figma.selectedInstance
const label = instance.getString('Label')
const variant = instance.getEnum('Variant', {
  default: 'default',
  secondary: 'secondary',
  destructive: 'destructive',
  outline: 'outline',
})

export default {
  example: figma.code`<Badge variant="${variant}">${label}</Badge>`,
  imports: ['import { Badge } from "@/components/ui/badge"'],
  id: 'badge',
  metadata: { nestable: true },
}
