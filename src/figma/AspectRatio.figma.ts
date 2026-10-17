// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=11-73
// source=src/components/ui/aspect-ratio.tsx
// component=AspectRatio
import figma from 'figma'
const instance = figma.selectedInstance
const ratio = instance.getEnum('Ratio', { '16:9': '16 / 9', '4:3': '4 / 3', '1:1': '1' })

export default {
  example: figma.code`<AspectRatio ratio={${ratio}}>
  <img src="/foto.jpg" alt="" className="size-full rounded-lg object-cover" />
</AspectRatio>`,
  imports: ['import { AspectRatio } from "@/components/ui/aspect-ratio"'],
  id: 'aspect-ratio',
  metadata: { nestable: true },
}
