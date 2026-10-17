import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { ArrowUpIcon, CopyIcon, EuroIcon, SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

const meta = {
  title: "Forms/InputGroup",
  component: InputGroupAddon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** an Input (or Textarea) with extra elements inside the same border: icons, text (prefixes/suffixes), keyboard shortcuts or buttons.

**When to use it:** search fields with an icon, prices with "€", URLs with "https://", fields with a copy button or a message composer with a send button.

**File:** \`src/components/ui/input-group.tsx\` → \`InputGroup\`, \`InputGroupAddon\` (prop \`align\`), \`InputGroupInput\`, \`InputGroupTextarea\`, \`InputGroupText\`, \`InputGroupButton\`.
`,
      },
    },
  },
  argTypes: {
    align: {
      control: "select",
      options: ["inline-start", "inline-end", "block-start", "block-end"],
      description: "Where the addon is placed: before, after, above or below.",
    },
  },
  args: { align: "inline-start" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof InputGroupAddon>

export default meta
type Story = StoryObj<typeof meta>

export const WithIcon: Story = {
  name: "With icon",
  render: (args) => (
    <InputGroup>
      <InputGroupInput placeholder="Search products…" />
      <InputGroupAddon {...args}>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const PrefixAndSuffix: Story = {
  name: "Prefix and suffix",
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <EuroIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="0.00" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>EUR</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithButton: Story = {
  name: "With button",
  render: () => (
    <InputGroup>
      <InputGroupInput readOnly defaultValue="https://evergreen.app/p/123" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" aria-label="Copy">
          <CopyIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithShortcut: Story = {
  name: "With keyboard shortcut",
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search…" />
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithTextarea: Story = {
  name: "With textarea (composer)",
  render: () => (
    <InputGroup>
      <InputGroupTextarea placeholder="Write a message…" />
      <InputGroupAddon align="block-end">
        <InputGroupText>0/280</InputGroupText>
        <InputGroupButton variant="default" size="icon-xs" className="ml-auto" aria-label="Send">
          <ArrowUpIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}
