// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=16-7
// source=src/components/ui/sidebar.tsx
// component=SidebarProvider
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<SidebarProvider>
  <Sidebar>
    <SidebarHeader>Evergreen</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navegación</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem><SidebarMenuButton isActive>Inicio</SidebarMenuButton></SidebarMenuItem>
          <SidebarMenuItem><SidebarMenuButton>Buscar</SidebarMenuButton></SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>Cecilia Vera</SidebarFooter>
  </Sidebar>
</SidebarProvider>`,
  imports: ['import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar"'],
  id: 'sidebar',
  metadata: { nestable: false },
}
