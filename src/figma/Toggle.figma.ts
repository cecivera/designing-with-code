// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=16-118
// source=src/components/ui/toggle.tsx
// component=Toggle
import figma from 'figma'
const instance = figma.selectedInstance
const label = instance.getString('Label')
const variant = instance.getEnum('Variant', { default: 'default', outline: 'outline' })
const pressed = instance.getEnum('Pressed', { true: true, false: false })

export default {
  example: figma.code`<Toggle variant="${variant}"${pressed ? ' defaultPressed' : ''}>${label}</Toggle>`,
  imports: ['import { Toggle } from "@/components/ui/toggle"'],
  id: 'toggle',
  metadata: { nestable: true },
}
