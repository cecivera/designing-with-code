// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=14-77
// source=src/components/ui/input-group.tsx
// component=InputGroup
import figma from 'figma'
const instance = figma.selectedInstance
const type = instance.getEnum('Type', { Icon: 'icon', Prefix: 'prefix', Button: 'button' })

export default {
  example: figma.code`<InputGroup>
  ${type === 'icon' ? figma.code`<InputGroupAddon><SearchIcon /></InputGroupAddon>
  <InputGroupInput placeholder="Buscar…" />` : ''}${type === 'prefix' ? figma.code`<InputGroupAddon><InputGroupText>https://</InputGroupText></InputGroupAddon>
  <InputGroupInput placeholder="cecivera.dev" />` : ''}${type === 'button' ? figma.code`<InputGroupInput placeholder="tu@email.com" />
  <InputGroupAddon align="inline-end"><InputGroupButton variant="secondary">Suscribir</InputGroupButton></InputGroupAddon>` : ''}
</InputGroup>`,
  imports: ['import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, InputGroupButton } from "@/components/ui/input-group"', 'import { SearchIcon } from "lucide-react"'],
  id: 'input-group',
  metadata: { nestable: true },
}
