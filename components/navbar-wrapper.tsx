"use client"

import { useState } from "react"
import Image from "next/image"

const NAV_ITEMS = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "paginas-web", label: "Paginas Web" },
  { id: "nosotros", label: "Nosotros" },
  { id: "contacto", label: "Contacto" },
]

export function NavbarWrapper() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-8 z-50 w-full border-b border-[rgba(34,197,94,0.12)] bg-[rgba(5,8,5,0.92)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <button onClick={() => scrollTo("inicio")} className="relative h-10 w-[180px] shrink-0 sm:w-[220px]" aria-label="Inicio">
          <Image src="/images/logo-horizontal.png" alt="PRINTWORKS" fill className="object-contain object-left" priority />
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegacion principal">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="rounded-full px-4 py-2 text-sm font-medium tracking-wide text-[#d1d5db] transition-colors hover:bg-[rgba(34,197,94,0.08)] hover:text-white"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/573152572025?text=Hola%20PRINTWORKS!%20Quiero%20cotizar%20un%20servicio."
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-[#22c55e] px-5 py-2 text-sm font-semibold text-[#0a0f0a] transition-all hover:bg-[#16a34a] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
          >
            Cotiza Ahora
          </a>
        </nav>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="flex flex-col gap-1.5 md:hidden" aria-label="Menu">
          <span className={`h-0.5 w-6 bg-[#22c55e] transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#22c55e] transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#22c55e] transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-[rgba(34,197,94,0.08)] bg-[rgba(5,8,5,0.98)] px-4 pb-4 pt-2 md:hidden">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-[#d1d5db] hover:bg-[rgba(34,197,94,0.08)] hover:text-white"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/573187092130?text=Hola%20PRINTWORKS!%20Quiero%20cotizar%20un%20servicio."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block w-full rounded-full bg-[#22c55e] px-5 py-3 text-center text-sm font-semibold text-[#0a0f0a]"
          >
            Cotiza Ahora
          </a>
        </nav>
      )}
    </header>
  )
}
