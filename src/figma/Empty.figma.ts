// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=14-7
// source=src/components/ui/empty.tsx
// component=Empty
import figma from 'figma'
const instance = figma.selectedInstance
const title = instance.getString('Title')
const description = instance.getString('Description')

export default {
  example: figma.code`<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon"><SearchIcon /></EmptyMedia>
    <EmptyTitle>${title}</EmptyTitle>
    <EmptyDescription>${description}</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Crear proyecto</Button>
  </EmptyContent>
</Empty>`,
  imports: ['import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty"', 'import { Button } from "@/components/ui/button"', 'import { SearchIcon } from "lucide-react"'],
  id: 'empty',
  metadata: { nestable: false },
}
