// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=15-21
// source=src/components/ui/native-select.tsx
// component=NativeSelect
import figma from 'figma'
const instance = figma.selectedInstance
const value = instance.getString('Value')

export default {
  example: figma.code`<NativeSelect>
  <NativeSelectOption value="${value}">${value}</NativeSelectOption>
</NativeSelect>`,
  imports: ['import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"'],
  id: 'native-select',
  metadata: { nestable: true },
}
