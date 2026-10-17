// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=15-30
// source=src/components/ui/navigation-menu.tsx
// component=NavigationMenu
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Proyectos</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/evergreen">Evergreen DS</NavigationMenuLink>
        <NavigationMenuLink href="/portfolio">Portfolio web</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem><NavigationMenuTrigger>Sobre mí</NavigationMenuTrigger></NavigationMenuItem>
    <NavigationMenuItem><NavigationMenuLink href="/contacto">Contacto</NavigationMenuLink></NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
  imports: ['import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"'],
  id: 'navigation-menu',
  metadata: { nestable: false },
}
