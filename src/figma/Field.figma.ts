// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=14-36
// source=src/components/ui/field.tsx
// component=Field
import figma from 'figma'
const instance = figma.selectedInstance
const label = instance.getString('Label')
const error = instance.getEnum('State', { Default: false, Error: true })

export default {
  example: figma.code`<Field${error ? ' data-invalid' : ''}>
  <FieldLabel htmlFor="email">${label}</FieldLabel>
  <Input id="email" placeholder="tu@email.com"${error ? ' aria-invalid' : ''} />
  ${error ? figma.code`<FieldError>Introduce un email válido.</FieldError>` : figma.code`<FieldDescription>Nunca compartiremos tu email.</FieldDescription>`}
</Field>`,
  imports: ['import { Field, FieldLabel, FieldDescription, FieldError } from "@/components/ui/field"', 'import { Input } from "@/components/ui/input"'],
  id: 'field',
  metadata: { nestable: true },
}
