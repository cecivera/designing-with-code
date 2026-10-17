// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=13-102
// source=src/components/ui/command.tsx
// component=Command
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Command>
  <CommandInput placeholder="Escribe un comando o busca…" />
  <CommandList>
    <CommandEmpty>Sin resultados.</CommandEmpty>
    <CommandGroup heading="Sugerencias">
      <CommandItem>Calendario</CommandItem>
      <CommandItem>Buscar proyecto</CommandItem>
      <CommandItem>Ajustes</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
  imports: ['import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command"'],
  id: 'command',
  metadata: { nestable: false },
}
