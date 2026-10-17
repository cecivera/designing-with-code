// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=13-71
// source=src/components/ui/collapsible.tsx
// component=Collapsible
import figma from 'figma'
const instance = figma.selectedInstance
const open = instance.getEnum('Open', { true: true, false: false })

export default {
  example: figma.code`<Collapsible${open ? ' defaultOpen' : ''}>
  <CollapsibleTrigger>3 repositorios destacados</CollapsibleTrigger>
  <CollapsibleContent>…</CollapsibleContent>
</Collapsible>`,
  imports: ['import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"'],
  id: 'collapsible',
  metadata: { nestable: true },
}
