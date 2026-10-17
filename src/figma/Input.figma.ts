// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=3-10
// source=src/components/ui/input.tsx
// component=Input
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
  example: figma.code`<Input placeholder="${placeholder}"${state === 'disabled' ? ' disabled' : ''}${state === 'invalid' ? ' aria-invalid' : ''} />`,
  imports: ['import { Input } from "@/components/ui/input"'],
  id: 'input',
  metadata: { nestable: true },
}
