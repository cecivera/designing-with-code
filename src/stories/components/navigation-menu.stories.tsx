import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const meta = {
  title: "Navegación/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
**Qué es:** menú de navegación principal de un sitio, con paneles desplegables ("mega menú").

**Cuándo usarlo:** en la cabecera de webs con varias secciones y subsecciones. Para acciones (no navegación) usa **DropdownMenu** o **Menubar**.

**Archivo:** \`src/components/ui/navigation-menu.tsx\` → \`NavigationMenu\`, \`NavigationMenuList\`, \`NavigationMenuItem\`, \`NavigationMenuTrigger\`, \`NavigationMenuContent\`, \`NavigationMenuLink\`, \`navigationMenuTriggerStyle\`.
`,
      },
    },
  },
  decorators: [(Story) => <div className="min-h-72"><Story /></div>],
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

const secciones = [
  { title: "Running", description: "Zapatillas y ropa técnica para correr." },
  { title: "Fútbol", description: "Botas, balones y equipaciones." },
  { title: "Originals", description: "Clásicos lifestyle de la marca." },
  { title: "Outdoor", description: "Material para montaña y trail." },
]

function ListItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li>
      <NavigationMenuLink href="#">
        <div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div>
      </NavigationMenuLink>
    </li>
  )
}

export const Default: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categorías</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[480px] grid-cols-2 gap-2">
              {secciones.map((s) => (
                <ListItem key={s.title} title={s.title}>
                  {s.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Ayuda</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-64">
              <ListItem title="Envíos">Plazos y costes de entrega.</ListItem>
              <ListItem title="Devoluciones">Cómo devolver un pedido.</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Contacto
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
