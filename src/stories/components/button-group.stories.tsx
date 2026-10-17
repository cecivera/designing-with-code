import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  ChevronDownIcon,
  ClockIcon,
  SearchIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"

const meta = {
  title: "Actions/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** groups several related buttons into a single visual block (joined borders).

**When to use it:** for sibling actions (Archive / Snooze / More), split buttons or an input with an attached button. If the options are mutually exclusive and have state (on/off), use **ToggleGroup**.

**File:** \`src/components/ui/button-group.tsx\` → \`ButtonGroup\`, \`ButtonGroupSeparator\`, \`ButtonGroupText\` (prop \`orientation\`).
`,
      },
    },
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
      description: "Direction of the group.",
      table: { defaultValue: { summary: "horizontal" } },
    },
  },
  args: { orientation: "horizontal" },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Archive</Button>
      <Button variant="outline">Snooze</Button>
      <Button variant="outline">More</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: Default.render,
}

export const WithIcons: Story = {
  name: "With icons",
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" size="icon" aria-label="Back">
        <ArrowLeftIcon />
      </Button>
      <Button variant="outline">
        <ArchiveIcon data-icon="inline-start" />
        Archive
      </Button>
      <Button variant="outline">
        <ClockIcon data-icon="inline-start" />
        Snooze
      </Button>
    </ButtonGroup>
  ),
}

export const SplitButton: Story = {
  name: "Split button",
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Publish</Button>
      <ButtonGroupSeparator />
      <Button size="icon" aria-label="More options">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  ),
}

export const WithInputAndText: Story = {
  name: "With input and text",
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupText>https://</ButtonGroupText>
      <Input placeholder="my-store.com" className="w-48" />
      <Button variant="outline" size="icon" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  ),
}
