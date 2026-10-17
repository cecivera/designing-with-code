// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=3-19
// source=src/components/ui/textarea.tsx
// component=Textarea
import figma from 'figma'
const instance = figma.selectedInstance
const placeholder = instance.getString('Text')
const state = instance.getEnum('State', {
  Default: 'default',
  Focus: 'default',
  Disabled: 'disabled',
  Invalid: 'invalid',
})

export default {
  example: figma.code`<Textarea placeholder="${placeholder}"${state === 'disabled' ? ' disabled' : ''}${state === 'invalid' ? ' aria-invalid' : ''} />`,
  imports: ['import { Textarea } from "@/components/ui/textarea"'],
  id: 'textarea',
  metadata: { nestable: true },
}
