// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=2-189
// source=src/components/ui/button.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance
const label = instance.getString('Label')
const variant = instance.getEnum('Variant', {
  default: 'default',
  outline: 'outline',
  secondary: 'secondary',
  ghost: 'ghost',
  destructive: 'destructive',
  link: 'link',
})
const size = instance.getEnum('Size', { sm: 'sm', default: 'default', lg: 'lg' })
const icon = instance.getBoolean('Show icon') ? instance.getInstanceSwap('Icon') : null
let iconCode
if (icon && icon.type === 'INSTANCE') {
  iconCode = icon.executeTemplate().example
}

export default {
  example: figma.code`<Button variant="${variant}" size="${size}">${iconCode ? figma.code`${iconCode}` : ''}${label}</Button>`,
  imports: ['import { Button } from "@/components/ui/button"'],
  id: 'button',
  metadata: { nestable: true },
}
