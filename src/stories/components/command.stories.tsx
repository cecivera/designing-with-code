import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { CalculatorIcon, CalendarIcon, PackageIcon, SettingsIcon, UserIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

const meta = {
  title: "Navegación/Command",
  component: Command,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** buscador de comandos con filtrado instantáneo y navegación por teclado (basado en cmdk). Se puede usar incrustado o como paleta en un diálogo (⌘K).

**Cuándo usarlo:** para "ir a…" o ejecutar acciones rápidamente en apps con muchas pantallas. Para elegir un valor en un formulario usa **Combobox**.

**Archivo:** \`src/components/ui/command.tsx\` → \`Command\`, \`CommandInput\`, \`CommandList\`, \`CommandEmpty\`, \`CommandGroup\`, \`CommandItem\`, \`CommandShortcut\`, \`CommandSeparator\`, \`CommandDialog\`.
`,
      },
    },
  },
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

const Contenido = () => (
  <>
    <CommandInput placeholder="Escribe un comando o busca…" />
    <CommandList>
      <CommandEmpty>No hay resultados.</CommandEmpty>
      <CommandGroup heading="Sugerencias">
        <CommandItem>
          <CalendarIcon /> Calendario de entregas
        </CommandItem>
        <CommandItem>
          <PackageIcon /> Nuevo pedido
        </CommandItem>
        <CommandItem disabled>
          <CalculatorIcon /> Calculadora
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Ajustes">
        <CommandItem>
          <UserIcon /> Perfil <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <SettingsIcon /> Ajustes <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </>
)

export const Default: Story = {
  name: "Incrustado",
  render: (args) => (
    <Command {...args} className="w-96 rounded-lg border">
      <Contenido />
    </Command>
  ),
}

function DialogDemo() {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Abrir paleta de comandos
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} title="Paleta de comandos" description="Busca un comando">
        <Command>
          <Contenido />
        </Command>
      </CommandDialog>
    </>
  )
}

export const EnDialogo: Story = { name: "En diálogo (⌘K)", render: () => <DialogDemo /> }
