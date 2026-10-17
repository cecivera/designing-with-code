// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=15-70
// source=src/components/ui/resizable.tsx
// component=ResizablePanelGroup
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={40}>Barra lateral</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel>Contenido</ResizablePanel>
</ResizablePanelGroup>`,
  imports: ['import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"'],
  id: 'resizable',
  metadata: { nestable: false },
}
