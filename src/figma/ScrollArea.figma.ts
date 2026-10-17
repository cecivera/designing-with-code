// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=15-82
// source=src/components/ui/scroll-area.tsx
// component=ScrollArea
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<ScrollArea className="h-60 w-48 rounded-lg border">…</ScrollArea>`,
  imports: ['import { ScrollArea } from "@/components/ui/scroll-area"'],
  id: 'scroll-area',
  metadata: { nestable: false },
}
