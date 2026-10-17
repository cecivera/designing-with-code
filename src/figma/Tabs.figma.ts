// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=5-7
// source=src/components/ui/tabs.tsx
// component=Tabs
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Tabs defaultValue="resumen">
  <TabsList>
    <TabsTrigger value="resumen">Resumen</TabsTrigger>
    <TabsTrigger value="proyectos">Proyectos</TabsTrigger>
    <TabsTrigger value="contacto">Contacto</TabsTrigger>
  </TabsList>
  <TabsContent value="resumen">…</TabsContent>
</Tabs>`,
  imports: ['import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"'],
  id: 'tabs',
  metadata: { nestable: false },
}
