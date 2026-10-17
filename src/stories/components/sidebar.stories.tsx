import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  BarChart3Icon,
  ChevronRightIcon,
  HomeIcon,
  InboxIcon,
  PackageIcon,
  PlusIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const meta = {
  title: "Navegación/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    // El sidebar usa posición fija: en Docs cada historia se muestra en su propio iframe.
    docs: {
      story: { inline: false, iframeHeight: 520 },
      description: {
        component: `
**Qué es:** barra lateral de navegación para aplicaciones (dashboards, back-offices). Se puede plegar a iconos, ocultar o mostrar como panel en móvil.

**Cuándo usarlo:** como navegación principal de apps con muchas secciones. Necesita envolver la página en \`SidebarProvider\` y poner el contenido en \`SidebarInset\`.

**Archivo:** \`src/components/ui/sidebar.tsx\` → \`SidebarProvider\`, \`Sidebar\` (props \`side\`, \`variant\`, \`collapsible\`), \`SidebarHeader\`, \`SidebarContent\`, \`SidebarGroup\`, \`SidebarMenu\`, \`SidebarMenuButton\`, \`SidebarTrigger\`, \`SidebarInset\`… (usa también \`src/hooks/use-mobile.ts\`).
`,
      },
    },
  },
  argTypes: {
    side: { control: "inline-radio", options: ["left", "right"] },
    variant: {
      control: "inline-radio",
      options: ["sidebar", "floating", "inset"],
      description: "`sidebar` pegado al borde, `floating` flotante, `inset` con el contenido como tarjeta.",
    },
    collapsible: {
      control: "inline-radio",
      options: ["offcanvas", "icon", "none"],
      description: "Cómo se pliega: se oculta, se queda en iconos o no se pliega.",
    },
  },
  args: { side: "left", variant: "sidebar", collapsible: "icon" },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { title: "Inicio", icon: HomeIcon, active: true },
  { title: "Bandeja", icon: InboxIcon, badge: "12" },
  { title: "Pedidos", icon: PackageIcon },
  { title: "Clientes", icon: UsersIcon },
  { title: "Informes", icon: BarChart3Icon },
]

export const Default: Story = {
  render: (args) => (
    <SidebarProvider className="min-h-[520px]">
      <Sidebar {...args}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  E
                </div>
                <div className="grid text-left text-sm leading-tight">
                  <span className="font-medium">Evergreen</span>
                  <span className="text-xs text-muted-foreground">Wholesale</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Plataforma</SidebarGroupLabel>
            <SidebarGroupAction aria-label="Añadir">
              <PlusIcon />
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.active} tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}
                <Collapsible defaultOpen className="group/collapsible" render={<SidebarMenuItem />}>
                  <CollapsibleTrigger render={<SidebarMenuButton tooltip="Catálogo" />}>
                    <PackageIcon />
                    <span>Catálogo</span>
                    <ChevronRightIcon className="ml-auto transition-transform group-data-open/collapsible:rotate-90" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {["Calzado", "Textil", "Accesorios"].map((s) => (
                        <SidebarMenuSubItem key={s}>
                          <SidebarMenuSubButton href="#">{s}</SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Ajustes">
                <SettingsIcon />
                <span>Ajustes</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">Inicio</span>
        </header>
        <div className="grid flex-1 gap-4 p-4 md:grid-cols-3">
          <div className="h-32 rounded-lg bg-muted" />
          <div className="h-32 rounded-lg bg-muted" />
          <div className="h-32 rounded-lg bg-muted" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
}

export const Flotante: Story = { args: { variant: "floating" }, render: Default.render }

export const Inset: Story = { args: { variant: "inset" }, render: Default.render }

export const Derecha: Story = { name: "A la derecha", args: { side: "right" }, render: Default.render }

export const Offcanvas: Story = {
  name: "Plegable fuera de pantalla (offcanvas)",
  args: { collapsible: "offcanvas" },
  render: Default.render,
}
