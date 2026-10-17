// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=4-41
// source=src/components/ui/progress.tsx
// component=Progress
import figma from 'figma'
const instance = figma.selectedInstance
const value = instance.getEnum('Value', { '25': '25', '50': '50', '75': '75' })

export default {
  example: figma.code`<Progress value={${value}} />`,
  imports: ['import { Progress } from "@/components/ui/progress"'],
  id: 'progress',
  metadata: { nestable: true },
}
