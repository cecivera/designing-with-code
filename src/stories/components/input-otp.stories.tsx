import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

const meta = {
  title: "Forms/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a field for one-time passcodes (OTP), with one box per character.

**When to use it:** two-step verification, codes sent by SMS or email, PINs.

**File:** \`src/components/ui/input-otp.tsx\` → \`InputOTP\` (props \`maxLength\`, \`pattern\`, \`disabled\`), \`InputOTPGroup\`, \`InputOTPSlot\`, \`InputOTPSeparator\`.
`,
      },
    },
  },
  argTypes: {
    maxLength: { control: { type: "number", min: 4, max: 8 } },
    disabled: { control: "boolean" },
  },
  args: { maxLength: 6, disabled: false, children: null },
} satisfies Meta<typeof InputOTP>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: ({ disabled, defaultValue }) => (
    <InputOTP maxLength={6} disabled={disabled} defaultValue={defaultValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const FourDigits: Story = {
  name: "4 digits",
  render: ({ disabled }) => (
    <InputOTP maxLength={4} disabled={disabled}>
      <InputOTPGroup>
        {[0, 1, 2, 3].map((i) => (
          <InputOTPSlot key={i} index={i} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const Alphanumeric: Story = {
  name: "Alphanumeric",
  render: ({ disabled }) => (
    <InputOTP maxLength={6} disabled={disabled} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <InputOTPSlot key={i} index={i} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const Disabled: Story = {
  name: "Disabled",
  args: { disabled: true, defaultValue: "123456" },
  render: Default.render,
}
