// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=3-32
// source=src/components/ui/select.tsx
// component=Select
import figma from 'figma'
const instance = figma.selectedInstance
const value = instance.getString('Value')
const disabled = instance.getEnum('State', { Default: false, Focus: false, Disabled: true })

export default {
  example: figma.code`<Select${disabled ? ' disabled' : ''}>
  <SelectTrigger>
    <SelectValue placeholder="${value}" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="opcion-1">Opción 1</SelectItem>
  </SelectContent>
</Select>`,
  imports: ['import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"'],
  id: 'select',
  metadata: { nestable: true },
}
