// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=16-67
// source=src/components/ui/slider.tsx
// component=Slider
import figma from 'figma'
const instance = figma.selectedInstance
const value = instance.getEnum('Value', { '25': '25', '50': '50', '75': '75' })

export default {
  example: figma.code`<Slider defaultValue={[${value}]} max={100} step={1} />`,
  imports: ['import { Slider } from "@/components/ui/slider"'],
  id: 'slider',
  metadata: { nestable: true },
}
