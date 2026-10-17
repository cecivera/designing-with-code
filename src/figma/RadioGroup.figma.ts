// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=3-45
// source=src/components/ui/radio-group.tsx
// component=RadioGroup
import figma from 'figma'
const instance = figma.selectedInstance
const checked = instance.getEnum('Checked', { true: true, false: false })

export default {
  example: figma.code`<RadioGroup${checked ? ' defaultValue="opcion"' : ''}>
  <RadioGroupItem value="opcion" />
</RadioGroup>`,
  imports: ['import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"'],
  id: 'radio-group',
  metadata: { nestable: true },
}
