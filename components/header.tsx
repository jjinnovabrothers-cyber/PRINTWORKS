"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const servicios = [
  {
    title: "SERVICIOS DE IMPRESION",
    href: "#servicios-impresión",
    description: "Impresion de alta calidad para todos tus proyectos.",
  },
  {
    title: "MATERIAL P.O.P",
    href: "#material-pop",
    description: "Material publicitario para punto de venta.",
  },
  {
    title: "SOUVENIRS PROMOCIONALES",
    href: "#souvenirs",
    description: "Artículo promocionales personalizados.",
  },
  {
    title: "PRODUCCION LITOGRAFICA",
    href: "#litografia",
    description: "Impresion Litografíca profesional.",
  },
  {
    title: "DISEÑO DE PAGINAS WEB",
    href: "#diseño-web",
    description: "Desarrollo y diseño de sitios web.",
  },
]

export function Header() {
  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">Tu Empresa</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Inicio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-secondary text-foreground hover:bg-secondary/80">
                Servicios
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[320px] gap-1 p-2">
                  {servicios.map((servicio) => (
                    <li key={servicio.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={servicio.href}
                          onClick={(e) => handleServiceClick(e, servicio.href)}
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
                            "hover:bg-accent hover:text-accent-foreground",
                            "focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none text-foreground">
                            {servicio.title}
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/paginas-web" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Paginas Web
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/nosotros" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Nosotros
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
