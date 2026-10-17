import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const meta = {
  title: "Layout/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** paneles cuyo tamaño el usuario puede cambiar arrastrando el divisor (basado en react-resizable-panels).

**Cuándo usarlo:** herramientas tipo editor o email (lista + detalle), donde el usuario decide cuánto espacio da a cada parte.

**Archivo:** \`src/components/ui/resizable.tsx\` → \`ResizablePanelGroup\` (prop \`orientation\`), \`ResizablePanel\` (props \`defaultSize\`, \`minSize\`), \`ResizableHandle\` (prop \`withHandle\`).
`,
      },
    },
  },
  argTypes: {
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] },
  },
  args: { orientation: "horizontal" },
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ResizablePanelGroup {...args} className="min-h-52 w-[480px] rounded-lg border">
      <ResizablePanel defaultSize="30%">
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Lista</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="70%">
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Detalle</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const ConAsa: Story = {
  name: "Con asa visible",
  render: (args) => (
    <ResizablePanelGroup {...args} className="min-h-52 w-[480px] rounded-lg border">
      <ResizablePanel defaultSize="50%">
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Izquierda</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%">
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Derecha</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <ResizablePanelGroup {...args} className="min-h-72 w-80 rounded-lg border">
      <ResizablePanel defaultSize="40%">
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Arriba</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="60%">
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Abajo</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Anidados: Story = {
  render: (args) => (
    <ResizablePanelGroup {...args} className="min-h-72 w-[480px] rounded-lg border">
      <ResizablePanel defaultSize="40%">
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Navegación</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="60%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="30%">
            <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Cabecera</div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="70%">
            <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Contenido</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
