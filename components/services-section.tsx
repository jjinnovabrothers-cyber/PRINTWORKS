"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"

interface ServiceItem { name: string; image: string }
interface Service { id: number; title: string; icon: React.ReactNode; description: string; coverImage: string; items: ServiceItem[]; whatsappMsg: string }

const PrinterIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>)
const TagIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>)
const GiftIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>)
const BookIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>)
const CartIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>)

const FrameIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 16l5-5 4 4 5-6 4 5"/>
  </svg>
)

const SERVICES: Service[] = [

{
id: 1,
title: "Impresión Offset (Litográfica)",
icon: <BookIcon />,
description: "Producción litográfica offset de alto volumen con acabados premium.",
coverImage: "/images/products/litografia.jpg",
whatsappMsg: "Hola PRINTWORKS! Quiero cotizar impresión offset.",
items: [
{ name: "Volantes", image: "/images/products/volantes.jpg" },
{ name: "Tarjetas de presentación", image: "/images/products/tarjetas.jpg" },
{ name: "Stickers Adhesivos", image: "/images/products/stickers.jpg" },
{ name: "Etiquetas", image: "/images/products/stickers.jpg" },
{ name: "Plegables", image: "/images/products/volantes.jpg" },
{ name: "Afiches", image: "/images/products/volantes.jpg" },
{ name: "Catálogos", image: "/images/products/litografia.jpg" },
{ name: "Papelería comercial", image: "/images/products/tarjetas.jpg" },
{ name: "Cajas plegadizas", image: "/images/products/material-pop.jpg" },
],
},

{
id: 2,
title: "Impresión Digital (Gran Formato)",
icon: <PrinterIcon />,
description: "Impresión digital en gran formato para publicidad exterior y visibilidad de marca.",
coverImage: "/images/products/pendones.jpg",
whatsappMsg: "Hola PRINTWORKS! Quiero cotizar impresión digital.",
items: [
{ name: "Pendones Roll Up", image: "/images/products/pendones.jpg" },
{ name: "Vinilos Adhesivos", image: "/images/products/stickers.jpg" },
{ name: "Vinilo Microperforado", image: "/images/products/stickers.jpg" },
{ name: "Señalización", image: "/images/products/material-pop.jpg" },
{ name: "Vallas publicitarias", image: "/images/products/material-pop.jpg" },
{ name: "Avisos acrílicos", image: "/images/products/material-pop.jpg" },
{ name: "Brandeo de carros", image: "/images/products/stickers.jpg" },
],
},

{
id: 3,
title: "Souvenirs Promocionales",
icon: <GiftIcon />,
description: "Artículos personalizados que dejan huella para promocionar tu marca.",
coverImage: "/images/products/mugs-real.jpg",
whatsappMsg: "Hola PRINTWORKS! Quiero cotizar souvenirs promocionales.",
items: [
{ name: "Mugs personalizados", image: "/images/products/mugs-real.jpg" },
{ name: "Lapiceros corporativos", image: "/images/products/souvenirs.jpg" },
{ name: "Carnets corporativos", image: "/images/products/tarjetas.jpg" },
{ name: "Agendas", image: "/images/products/souvenirs.jpg" },
{ name: "Camisetas", image: "/images/products/souvenirs.jpg" },
{ name: "Gorras", image: "/images/products/souvenirs.jpg" },
{ name: "Llaveros", image: "/images/products/souvenirs.jpg" },
{ name: "Termos", image: "/images/products/souvenirs.jpg" },
],
},

{
id: 4,
title: "Material P.O.P",
icon: <TagIcon />,
description: "Material publicitario en punto de venta que impulsa tus ventas.",
coverImage: "/images/products/material-pop.jpg",
whatsappMsg: "Hola PRINTWORKS! Quiero cotizar material POP.",
items: [
{ name: "Exhibidores de piso", image: "/images/products/material-pop.jpg" },
{ name: "Glorificadores", image: "/images/products/material-pop.jpg" },
{ name: "Puntas de góndola", image: "/images/products/material-pop.jpg" },
{ name: "Shop in Shop", image: "/images/products/material-pop.jpg" },
{ name: "Dummies", image: "/images/products/material-pop.jpg" },
{ name: "Cenefas", image: "/images/products/material-pop.jpg" },
],
},

{
id: 5,
title: "DISEÑO DE PAGINAS WEB",
icon: <CartIcon />,
description: "Soluciones tecnológicas avanzadas para empresas que buscan escalar su negocio con infraestructura digital segura, automatización e inteligencia artificial.",
coverImage: "/images/products/ecommerce.jpg",
whatsappMsg: "Hola PRINTWORKS! Quiero cotizar servicios de ingeniería y desarrollo.",
items: [
{ name: "Desarrollo de Aplicaciones Web y Móviles", image: "/images/products/ecommerce.jpg" },
{ name: "Seguridad y Ciberseguridad 24/7", image: "/images/products/stickers.jpg" },
{ name: "Infraestructura y Arquitectura Cloud", image: "/images/products/material-pop.jpg" },
{ name: "Integración de Inteligencia Artificial", image: "/images/products/ecommerce.jpg" },
{ name: "Optimización y Automatización (n8n)", image: "/images/products/stickers.jpg" },
{ name: "Sistemas de Gestión Especializados", image: "/images/products/material-pop.jpg" },
{ name: "Mantenimiento y Soporte Técnico", image: "/images/products/tarjetas.jpg" },
{ name: "Consultoría en Transformación Digital", image: "/images/products/ecommerce.jpg" },
],
},

{
id: 6,
title: "Cuadros Decorativos",
icon: <FrameIcon />,
description: "Decoración personalizada para hogares y oficinas con impresión artística.",
coverImage: "/images/products/cuadro-anime.jpg",
whatsappMsg: "Hola PRINTWORKS! Quiero cotizar cuadros decorativos.",
items: [
{ name: "Cuadros MDF", image: "/images/products/cuadro-anime.jpg" },
{ name: "Retratos personalizados", image: "/images/products/cuadro-retrato.jpg" },
{ name: "Cuadros infantiles", image: "/images/products/cuadro-kids.jpg" },
{ name: "Decoración de pared", image: "/images/products/cuadro-anime.jpg" },
],
},
]

/* Lightbox */
function Lightbox({ images, index, onClose, onPrev, onNext }: { images: ServiceItem[]; index: number; onClose: () => void; onPrev: () => void; onNext: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); if (e.key === "ArrowLeft") onPrev(); if (e.key === "ArrowRight") onNext() }
    window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h)
  }, [onClose, onPrev, onNext])

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-h-[85vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
        <Image src={images[index].image} alt={images[index].name} width={900} height={600} className="max-h-[80vh] w-auto rounded-lg object-contain" style={{ width: "auto", height: "auto" }} />
        <p className="mt-3 text-center text-sm font-medium text-white">{images[index].name}</p>
        <button onClick={onClose} className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#1a2e1a] text-white hover:bg-[#22c55e] hover:text-[#0a0f0a]" aria-label="Cerrar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        {images.length > 1 && (<>
          <button onClick={(e) => { e.stopPropagation(); onPrev() }} className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(34,197,94,0.2)] text-white hover:bg-[rgba(34,197,94,0.5)]" aria-label="Anterior">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); onNext() }} className="absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(34,197,94,0.2)] text-white hover:bg-[rgba(34,197,94,0.5)]" aria-label="Siguiente">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </>)}
      </div>
    </div>
  )
}

/* Service Modal */
function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const [form, setForm] = useState({ nombre: "", telefono: "", correo: "", descripcion: "" })

  useEffect(() => { document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = "" } }, [])

  const handleSubmit = () => {
    const m = `${service.whatsappMsg}%0ANombre: ${form.nombre}%0ATelefono: ${form.telefono}%0ACorreo: ${form.correo}%0ADescripcion: ${form.descripcion}`
    window.open(`https://wa.me/573173799589?text=${m}`, "_blank")
  }

  const prevImg = useCallback(() => { if (lightboxIdx !== null) setLightboxIdx(lightboxIdx <= 0 ? service.items.length - 1 : lightboxIdx - 1) }, [lightboxIdx, service.items.length])
  const nextImg = useCallback(() => { if (lightboxIdx !== null) setLightboxIdx(lightboxIdx >= service.items.length - 1 ? 0 : lightboxIdx + 1) }, [lightboxIdx, service.items.length])

  return (<>
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-sm sm:py-12" onClick={onClose}>
      <div className="relative w-full max-w-3xl rounded-2xl border border-[rgba(34,197,94,0.2)] bg-[#0d1a0d] shadow-[0_0_60px_rgba(34,197,94,0.06)]" onClick={(e) => e.stopPropagation()}>
        <button
  onClick={onClose}
  className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black text-white shadow-lg transition-all hover:bg-[#22c55e] hover:text-[#0a0f0a]"
  aria-label="Cerrar"
>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <div className="relative h-48 w-full overflow-hidden rounded-t-2xl sm:h-56">
          <Image src={service.coverImage} alt={service.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a0d] via-[rgba(13,26,13,0.4)] to-transparent" />
          <div className="absolute bottom-4 left-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(34,197,94,0.15)] text-[#22c55e] backdrop-blur-sm">{service.icon}</div>
            <h2 className="text-xl font-bold uppercase tracking-wider text-white sm:text-2xl" style={{ fontFamily: "var(--font-orbitron)" }}>{service.title}</h2>
          </div>
        </div>

        <div className="p-5 sm:p-7">
          <p className="mb-6 text-sm leading-relaxed text-[#9ca3af]">{service.description}</p>

          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {service.items.map((item, idx) => (
              <button key={idx} onClick={() => setLightboxIdx(idx)} className="group overflow-hidden rounded-xl border border-[rgba(34,197,94,0.12)] bg-[rgba(10,15,10,0.6)] transition-all hover:border-[#22c55e] hover:shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <div className="relative h-28 w-full overflow-hidden sm:h-32">
                  <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
                  </div>
                </div>
                <p className="px-2 py-2 text-center text-xs font-medium text-[#d1d5db]">{item.name}</p>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-[rgba(34,197,94,0.15)] bg-[rgba(5,10,5,0.5)] p-4 sm:p-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#22c55e]">Solicitar Cotizacion</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input type="text" placeholder="Nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className="w-full rounded-lg border border-[rgba(34,197,94,0.2)] bg-[rgba(10,15,10,0.8)] px-3 py-2.5 text-sm text-white placeholder-[#6b7280] outline-none focus:border-[#22c55e]" />
              <input type="tel" placeholder="Telefono" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} className="w-full rounded-lg border border-[rgba(34,197,94,0.2)] bg-[rgba(10,15,10,0.8)] px-3 py-2.5 text-sm text-white placeholder-[#6b7280] outline-none focus:border-[#22c55e]" />
              <input type="email" placeholder="Correo electronico" value={form.correo} onChange={(e) => setForm({ ...form, correo: e.target.value })} className="w-full rounded-lg border border-[rgba(34,197,94,0.2)] bg-[rgba(10,15,10,0.8)] px-3 py-2.5 text-sm text-white placeholder-[#6b7280] outline-none focus:border-[#22c55e]" />
              <input type="text" placeholder="Descripcion del proyecto" value={form.descripcion} onChange={(e) => setForm({ ...form, descripcion: e.target.value })} className="w-full rounded-lg border border-[rgba(34,197,94,0.2)] bg-[rgba(10,15,10,0.8)] px-3 py-2.5 text-sm text-white placeholder-[#6b7280] outline-none focus:border-[#22c55e]" />
            </div>
            <button onClick={handleSubmit} className="mt-4 w-full rounded-full bg-[#22c55e] py-3 text-sm font-bold uppercase tracking-wider text-[#0a0f0a] transition-all hover:bg-[#16a34a] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]">
              Cotizar Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
    {lightboxIdx !== null && <Lightbox images={service.items} index={lightboxIdx} onClose={() => setLightboxIdx(null)} onPrev={prevImg} onNext={nextImg} />}
  </>)
}

/* Service Card */
function ServiceCard({ service, onOpen }: { service: Service; onOpen: () => void }) {
  return (
    <button onClick={onOpen} className="group relative flex flex-col overflow-hidden rounded-2xl border border-[rgba(34,197,94,0.12)] bg-[rgba(10,20,10,0.5)] text-left transition-all duration-300 hover:border-[#22c55e] hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:-translate-y-1">
      <div className="relative h-44 w-full overflow-hidden">
        <Image src={service.coverImage} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0a] via-[rgba(10,15,10,0.3)] to-transparent" />
        <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(34,197,94,0.2)] text-[#22c55e] backdrop-blur-sm">{service.icon}</div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-white" style={{ fontFamily: "var(--font-orbitron)" }}>{service.title}</h3>
        <p className="mb-3 flex-1 text-xs leading-relaxed text-[#9ca3af]">{service.description.slice(0, 90)}...</p>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#22c55e] group-hover:text-[#4ade80]">
          Ver Mas <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6"/></svg>
        </span>
      </div>
    </button>
  )
}

/* Main Section */
export function ServicesSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section id="servicios" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#22c55e]">Lo que hacemos</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl" style={{ fontFamily: "var(--font-orbitron)" }}>
            Nuestros <span className="text-[#22c55e]">Servicios</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#9ca3af] sm:text-base">
            Soluciones graficas disenadas para destacar. Cada producto se fabrica con tecnologia de punta y materiales de la mejor calidad.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {SERVICES.map((s) => <ServiceCard key={s.id} service={s} onOpen={() => setOpenId(s.id)} />)}
        </div>
      </div>
      {openId !== null && <ServiceModal service={SERVICES.find((s) => s.id === openId)!} onClose={() => setOpenId(null)} />}
    </section>
  )
}
