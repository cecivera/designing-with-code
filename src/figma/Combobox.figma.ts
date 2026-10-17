// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=13-77
// source=src/components/ui/combobox.tsx
// component=Combobox
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Combobox items={frameworks}>
  <ComboboxInput placeholder="Selecciona framework…" />
  <ComboboxContent>
    <ComboboxEmpty>No hay resultados.</ComboboxEmpty>
    <ComboboxList>
      {(item) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`,
  imports: ['import { Combobox, ComboboxInput, ComboboxContent, ComboboxEmpty, ComboboxList, ComboboxItem } from "@/components/ui/combobox"'],
  id: 'combobox',
  metadata: { nestable: false },
}
