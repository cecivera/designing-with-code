// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=6-107
// source=src/components/ui/card.tsx
// component=Card
import figma from 'figma'
const instance = figma.selectedInstance
const title = instance.getString('Title')
const description = instance.getString('Description')
const showFooter = instance.getBoolean('Show footer')

export default {
  example: figma.code`<Card>
  <CardHeader>
    <CardTitle>${title}</CardTitle>
    <CardDescription>${description}</CardDescription>
  </CardHeader>
  <CardContent>…</CardContent>${showFooter ? figma.code`
  <CardFooter>
    <Button variant="outline">Ver código</Button>
    <Button>Abrir</Button>
  </CardFooter>` : ''}
</Card>`,
  imports: ['import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"', 'import { Button } from "@/components/ui/button"'],
  id: 'card',
  metadata: { nestable: true },
}
