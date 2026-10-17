// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=5-6
// source=src/components/ui/tabs.tsx
// component=TabsTrigger
import figma from 'figma'
const instance = figma.selectedInstance
const label = instance.getString('Label')

export default {
  example: figma.code`<TabsTrigger value="${label}">${label}</TabsTrigger>`,
  imports: ['import { TabsTrigger } from "@/components/ui/tabs"'],
  id: 'tabs-trigger',
  metadata: { nestable: true },
}
