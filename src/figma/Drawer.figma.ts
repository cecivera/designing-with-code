// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=13-154
// source=src/components/ui/drawer.tsx
// component=Drawer
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Drawer>
  <DrawerTrigger render={<Button variant="outline" />}>Abrir</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Objetivo diario</DrawerTitle>
      <DrawerDescription>Ajusta tu objetivo de actividad.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Guardar</Button>
      <Button variant="outline">Cancelar</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
  imports: ['import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer"', 'import { Button } from "@/components/ui/button"'],
  id: 'drawer',
  metadata: { nestable: false },
}
