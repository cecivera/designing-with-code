// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=16-104
// source=src/components/ui/spinner.tsx
// component=Spinner
import figma from 'figma'
const instance = figma.selectedInstance
const size = instance.getEnum('Size', { sm: 'size-4', default: 'size-6', lg: 'size-8' })

export default {
  example: figma.code`<Spinner className="${size}" />`,
  imports: ['import { Spinner } from "@/components/ui/spinner"'],
  id: 'spinner',
  metadata: { nestable: true },
}
