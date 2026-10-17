// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=6-21
// source=src/components/ui/tooltip.tsx
// component=Tooltip
import figma from 'figma'
const instance = figma.selectedInstance
const text = instance.getString('Text')

export default {
  example: figma.code`<Tooltip>
  <TooltipTrigger render={<Button variant="outline" />}>Pasa el ratón</TooltipTrigger>
  <TooltipContent>${text}</TooltipContent>
</Tooltip>`,
  imports: ['import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"', 'import { Button } from "@/components/ui/button"'],
  id: 'tooltip',
  metadata: { nestable: true },
}
