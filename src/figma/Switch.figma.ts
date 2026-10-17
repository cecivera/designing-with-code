// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=3-50
// source=src/components/ui/switch.tsx
// component=Switch
import figma from 'figma'
const instance = figma.selectedInstance
const checked = instance.getEnum('Checked', { true: true, false: false })

export default {
  example: figma.code`<Switch${checked ? ' defaultChecked' : ''} />`,
  imports: ['import { Switch } from "@/components/ui/switch"'],
  id: 'switch',
  metadata: { nestable: true },
}
