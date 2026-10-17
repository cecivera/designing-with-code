// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=14-131
// source=src/components/ui/item.tsx
// component=Item
import figma from 'figma'
const instance = figma.selectedInstance
const title = instance.getString('Title')
const description = instance.getString('Description')
const variant = instance.getEnum('Variant', { default: 'default', outline: 'outline', muted: 'muted' })

export default {
  example: figma.code`<Item variant="${variant}">
  <ItemContent>
    <ItemTitle>${title}</ItemTitle>
    <ItemDescription>${description}</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="outline" size="sm">Ver</Button>
  </ItemActions>
</Item>`,
  imports: ['import { Item, ItemContent, ItemTitle, ItemDescription, ItemActions } from "@/components/ui/item"', 'import { Button } from "@/components/ui/button"'],
  id: 'item',
  metadata: { nestable: true },
}
