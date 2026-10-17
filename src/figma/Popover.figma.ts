// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=15-54
// source=src/components/ui/popover.tsx
// component=Popover
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>Dimensiones</PopoverTrigger>
  <PopoverContent>…</PopoverContent>
</Popover>`,
  imports: ['import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"', 'import { Button } from "@/components/ui/button"'],
  id: 'popover',
  metadata: { nestable: false },
}
