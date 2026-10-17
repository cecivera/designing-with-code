// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=11-19
// source=src/components/ui/accordion.tsx
// component=Accordion
import figma from 'figma'
const instance = figma.selectedInstance
const title = instance.getString('Title')
const body = instance.getString('Body')
const open = instance.getEnum('Open', { true: true, false: false })

export default {
  example: figma.code`<Accordion${open ? ' defaultValue={["item"]}' : ''}>
  <AccordionItem value="item">
    <AccordionTrigger>${title}</AccordionTrigger>
    <AccordionContent>${body}</AccordionContent>
  </AccordionItem>
</Accordion>`,
  imports: ['import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"'],
  id: 'accordion',
  metadata: { nestable: true },
}
