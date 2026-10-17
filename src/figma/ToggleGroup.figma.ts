// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=16-124
// source=src/components/ui/toggle-group.tsx
// component=ToggleGroup
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<ToggleGroup variant="outline" multiple>
  <ToggleGroupItem value="negrita">B</ToggleGroupItem>
  <ToggleGroupItem value="cursiva">I</ToggleGroupItem>
  <ToggleGroupItem value="subrayado">U</ToggleGroupItem>
</ToggleGroup>`,
  imports: ['import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"'],
  id: 'toggle-group',
  metadata: { nestable: true },
}
