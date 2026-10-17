// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=4-34
// source=src/components/ui/alert.tsx
// component=Alert
import figma from 'figma'
const instance = figma.selectedInstance
const title = instance.getString('Title')
const description = instance.getString('Description')
const variant = instance.getEnum('Variant', { default: 'default', destructive: 'destructive' })
const icon = instance.findInstance('Icon')
let iconCode
if (icon && icon.type === 'INSTANCE') {
  iconCode = icon.executeTemplate().example
}

export default {
  example: figma.code`<Alert variant="${variant}">
  ${iconCode}
  <AlertTitle>${title}</AlertTitle>
  <AlertDescription>${description}</AlertDescription>
</Alert>`,
  imports: ['import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"'],
  id: 'alert',
  metadata: { nestable: true },
}
