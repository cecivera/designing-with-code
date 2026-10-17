// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=11-79
// source=src/components/ui/button-group.tsx
// component=ButtonGroup
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<ButtonGroup>
  <Button variant="outline">Anterior</Button>
  <Button variant="outline">Hoy</Button>
  <Button variant="outline">Siguiente</Button>
</ButtonGroup>`,
  imports: ['import { ButtonGroup } from "@/components/ui/button-group"', 'import { Button } from "@/components/ui/button"'],
  id: 'button-group',
  metadata: { nestable: true },
}
