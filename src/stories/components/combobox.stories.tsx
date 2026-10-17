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

const models = ["Running Shoe", "Canvas Sneaker", "Hiking Boot", "Slip-On", "Trail Runner", "Court Classic"]

const meta = {
  title: "Forms/Combobox",
  component: ComboboxInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a text field with a dropdown list that filters as you type. Supports single or multiple selection (chips).

**When to use it:** with long lists where searching is faster than scrolling (countries, products, customers). For just a few options, use **Select**.

**File:** \`src/components/ui/combobox.tsx\` → \`Combobox\`, \`ComboboxInput\` (props \`showTrigger\`, \`showClear\`), \`ComboboxContent\`, \`ComboboxList\`, \`ComboboxItem\`, \`ComboboxEmpty\`, \`ComboboxChips\`…
`,
      },
    },
  },
  argTypes: {
    placeholder: { control: "text" },
    showTrigger: { control: "boolean", description: "Shows the arrow that opens the list." },
    showClear: { control: "boolean", description: "Shows the clear button." },
    disabled: { control: "boolean" },
  },
  args: { placeholder: "Search for a model", showTrigger: true, showClear: false },
} satisfies Meta<typeof ComboboxInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Combobox items={models}>
      <ComboboxInput {...args} />
      <ComboboxContent>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
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

export const WithClearButton: Story = {
  name: "With clear button",
  args: { showClear: true },
  render: Default.render,
}

export const Disabled: Story = { name: "Disabled", args: { disabled: true }, render: Default.render }

function MultipleDemo() {
  const anchor = useComboboxAnchor()
  return (
    <Combobox multiple autoHighlight items={models} defaultValue={[models[0], models[2]]}>
      <ComboboxChips ref={anchor} className="w-80">
        <ComboboxValue>
          {(values: string[]) => (
            <React.Fragment>
              {values.map((value) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder="Add model" />
            </React.Fragment>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
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
  name: "Multiple selection (chips)",
  render: () => <MultipleDemo />,
}
