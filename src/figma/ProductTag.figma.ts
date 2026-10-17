// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=18-19
// source=src/components/product-tag.tsx
// component=ProductTag
import figma from 'figma'
const instance = figma.selectedInstance
const type = instance.getEnum('Type', {
  New: 'new',
  CO: 'co',
  Sale: 'sale',
  Bestseller: 'bestseller',
  'Low stock': 'low-stock',
  'Sold out': 'sold-out',
})

export default {
  example: figma.code`<ProductTag type="${type}" />`,
  imports: ['import { ProductTag } from "@/components/product-tag"'],
  id: 'product-tag',
  metadata: { nestable: true },
}
