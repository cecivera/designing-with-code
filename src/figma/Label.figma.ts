// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=3-51
// source=src/components/ui/label.tsx
// component=Label
import figma from 'figma'
const instance = figma.selectedInstance
const text = instance.getString('Text')

export default {
  example: figma.code`<Label>${text}</Label>`,
  imports: ['import { Label } from "@/components/ui/label"'],
  id: 'label',
  metadata: { nestable: true },
}
