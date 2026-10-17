import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"

const modelos = ["Samba", "Gazelle", "Superstar", "Stan Smith", "Campus", "Ultraboost"]

const meta = {
  title: "Formularios/Combobox",
  component: ComboboxInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** un campo de texto con lista desplegable que filtra mientras escribes. Admite selección única o múltiple (chips).

**Cuándo usarlo:** con listas largas donde buscar es más rápido que desplazarse (países, productos, clientes). Con pocas opciones usa **Select**.

**Archivo:** \`src/components/ui/combobox.tsx\` → \`Combobox\`, \`ComboboxInput\` (props \`showTrigger\`, \`showClear\`), \`ComboboxContent\`, \`ComboboxList\`, \`ComboboxItem\`, \`ComboboxEmpty\`, \`ComboboxChips\`…
`,
      },
    },
  },
  argTypes: {
    placeholder: { control: "text" },
    showTrigger: { control: "boolean", description: "Muestra la flecha para abrir la lista." },
    showClear: { control: "boolean", description: "Muestra el botón para borrar." },
    disabled: { control: "boolean" },
  },
  args: { placeholder: "Busca un modelo", showTrigger: true, showClear: false },
} satisfies Meta<typeof ComboboxInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Combobox items={modelos}>
      <ComboboxInput {...args} />
      <ComboboxContent>
        <ComboboxEmpty>No hay resultados.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

export const ConBotonBorrar: Story = {
  name: "Con botón borrar",
  args: { showClear: true },
  render: Default.render,
}

export const Deshabilitado: Story = { args: { disabled: true }, render: Default.render }

function MultipleDemo() {
  const anchor = useComboboxAnchor()
  return (
    <Combobox multiple autoHighlight items={modelos} defaultValue={[modelos[0], modelos[2]]}>
      <ComboboxChips ref={anchor} className="w-80">
        <ComboboxValue>
          {(values: string[]) => (
            <React.Fragment>
              {values.map((value) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder="Añadir modelo" />
            </React.Fragment>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No hay resultados.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export const Multiple: Story = {
  name: "Selección múltiple (chips)",
  render: () => <MultipleDemo />,
}
