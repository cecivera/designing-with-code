import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { AlertCircleIcon, CheckCircle2Icon, InfoIcon } from "lucide-react"

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a highlighted in-page message that reports something important (success, warning, error).

**When to use it:** for persistent messages tied to a section ("Your catalog has 3 products without a price"). For short-lived notices use **Sonner/Toast**; to ask for confirmation, **AlertDialog**.

**File:** \`src/components/ui/alert.tsx\` → \`Alert\` (prop \`variant\`), \`AlertTitle\`, \`AlertDescription\`, \`AlertAction\`.
`,
      },
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "destructive"], table: { defaultValue: { summary: "default" } } },
  },
  args: { variant: "default" },
  decorators: [(Story) => <div className="w-[480px]"><Story /></div>],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <CheckCircle2Icon />
      <AlertTitle>Order shipped</AlertTitle>
      <AlertDescription>You will receive the tracking number by email.</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  args: { variant: "destructive" },
  render: (args) => (
    <Alert {...args}>
      <AlertCircleIcon />
      <AlertTitle>The payment could not be processed</AlertTitle>
      <AlertDescription>Check your card details and try again.</AlertDescription>
    </Alert>
  ),
}

export const TitleOnly: Story = {
  name: "Title only",
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>Changes are saved automatically.</AlertTitle>
    </Alert>
  ),
}

export const WithAction: Story = {
  name: "With action",
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>New catalog version</AlertTitle>
      <AlertDescription>There are 24 new products for the SS27 season.</AlertDescription>
      <AlertAction>
        <Button size="xs" variant="outline">View</Button>
      </AlertAction>
    </Alert>
  ),
}
