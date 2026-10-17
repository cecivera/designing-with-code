// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=3-41
// source=src/components/ui/checkbox.tsx
// component=Checkbox
import figma from 'figma'
const instance = figma.selectedInstance
const checked = instance.getEnum('Checked', { true: true, false: false })
const disabled = instance.getEnum('State', { Default: false, Disabled: true })

export default {
  example: figma.code`<Checkbox${checked ? ' defaultChecked' : ''}${disabled ? ' disabled' : ''} />`,
  imports: ['import { Checkbox } from "@/components/ui/checkbox"'],
  id: 'checkbox',
  metadata: { nestable: true },
}
