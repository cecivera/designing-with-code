// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=14-137
// source=src/components/ui/kbd.tsx
// component=Kbd
import figma from 'figma'
const instance = figma.selectedInstance
const key = instance.getString('Key')

export default {
  example: figma.code`<Kbd>${key}</Kbd>`,
  imports: ['import { Kbd } from "@/components/ui/kbd"'],
  id: 'kbd',
  metadata: { nestable: true },
}
