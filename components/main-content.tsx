"use client"

import { useState, useEffect, type ReactNode } from "react"
import { Printer, ShoppingBag, Gift, BookOpen, ShoppingCart, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface ServiceItem { name: string; image?: string; url?: string }
interface ServiceData {
  title: string; icon: ReactNode; description: string
  items: ServiceItem[]; whatsappMsg: string
  isEcommerce?: boolean
}

const SERVICES: ServiceData[] = [
  {
    title: "SERVICIOS DE IMPRESION", icon: <Printer className="h-5 w-5" />,
    description: "Productos basicos de impresion de alta calidad para tu negocio o proyecto personal.",
    items: [
      { name: "Volantes", image: "/images/services/volantes.jpg" },
      { name: "Tarjetas de presentacion", image: "/images/services/tarjetas.jpg" },
      { name: "Tarjetas imantadas", image: "/images/services/tarjetas.jpg" },
      { name: "Plegables", image: "/images/services/volantes.jpg" },
      { name: "Stickers", image: "/images/services/stickers.jpg" },
      { name: "Etiquetas", image: "/images/services/stickers.jpg" },
      { name: "Talonarios", image: "/images/services/talonarios.jpg" },
      { name: "Sellos", image: "/images/services/sellos.jpg" },
      { name: "Pendones", image: "/images/services/pendones.jpg" },
      { name: "Publicidad exterior", image: "/images/services/pendones.jpg" },
      { name: "Vinilos decorativos", image: "/images/services/vinilos.jpg" },
      { name: "Cuadros decorativos", image: "/images/services/vinilos.jpg" },
      { name: "Mugs personalizados", image: "/images/services/mugs.jpg" },
      { name: "Vasos cerveceros", image: "/images/services/mugs.jpg" },
    ],
    whatsappMsg: "Hola PRINTWORKS! Estoy interesado en sus servicios de impresion.",
  },
  {
    title: "MATERIAL P.O.P", icon: <ShoppingBag className="h-5 w-5" />,
    description: "Material para punto de venta diseñado para captar atencion inmediata y aumentar las ventas.",
    items: [
      { name: "Pendones y banners", image: "/images/services/pendones.jpg" },
      { name: "Roll ups", image: "/images/services/pendones.jpg" },
      { name: "Avisos publicitarios", image: "/images/services/material-pop.jpg" },
      { name: "Material promocional", image: "/images/services/material-pop.jpg" },
      { name: "Exhibidores", image: "/images/services/material-pop.jpg" },
      { name: "Señalizacion", image: "/images/services/material-pop.jpg" },
    ],
    whatsappMsg: "Hola PRINTWORKS! Me interesa el material P.O.P para punto de venta.",
  },
  {
    title: "SOUVENIRS PROMOCIONALES", icon: <Gift className="h-5 w-5" />,
    description: "Articulos promocionales personalizados con tu marca para generar recordacion.",
    items: [
      { name: "Boligrafos y agendas", image: "/images/services/souvenirs.jpg" },
      { name: "Carpetas corporativas", image: "/images/services/souvenirs.jpg" },
      { name: "USB y power banks", image: "/images/services/souvenirs.jpg" },
      { name: "Camisetas y gorras", image: "/images/services/souvenirs.jpg" },
      { name: "Bolsas personalizadas", image: "/images/services/souvenirs.jpg" },
      { name: "Mugs y termos", image: "/images/services/mugs.jpg" },
      { name: "Llaveros", image: "/images/services/souvenirs.jpg" },
      { name: "Articulos para eventos", image: "/images/services/souvenirs.jpg" },
    ],
    whatsappMsg: "Hola PRINTWORKS! Quiero cotizar articulos promocionales.",
  },
  {
    title: "PRODUCCION LITOGRAFICA", icon: <BookOpen className="h-5 w-5" />,
    description: "Impresion offset ideal para grandes cantidades con alta calidad y bajo costo por unidad.",
    items: [
      { name: "Libros y revistas", image: "/images/services/litografia.jpg" },
      { name: "Periodicos y catalogos", image: "/images/services/litografia.jpg" },
      { name: "Tarjetas masivas", image: "/images/services/tarjetas.jpg" },
      { name: "Hojas membretadas", image: "/images/services/litografia.jpg" },
      { name: "Sobres empresariales", image: "/images/services/litografia.jpg" },
      { name: "Flyers publicitarios", image: "/images/services/volantes.jpg" },
      { name: "Cajas plegadizas", image: "/images/services/litografia.jpg" },
      { name: "Etiquetas comerciales", image: "/images/services/stickers.jpg" },
    ],
    whatsappMsg: "Hola PRINTWORKS! Me interesa la produccion litografica.",
  },
  {
    title: "DISEÑO DE PAGINAS WEB", icon: <ShoppingCart className="h-5 w-5" />,
    description: "Sube tus productos con fotos y enlaces directos. Gestiona tu tienda en linea con PRINTWORKS.",
    isEcommerce: true,
    items: [
      { name: "Catalogo de productos", image: "/images/services/material-pop.jpg", url: "" },
      { name: "Tienda en linea", image: "/images/services/litografia.jpg", url: "" },
      { name: "Productos personalizados", image: "/images/services/mugs.jpg", url: "" },
      { name: "Merchandising empresarial", image: "/images/services/souvenirs.jpg", url: "" },
      { name: "Kits promocionales", image: "/images/services/souvenirs.jpg", url: "" },
      { name: "Pedidos por mayor", image: "/images/services/volantes.jpg", url: "" },
    ],
    whatsappMsg: "Hola PRINTWORKS! Me interesa su servicio de E-Commerce.",
  },
]

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/* ---- Lightbox ---- */
function Lightbox({ images, idx, onClose, onPrev, onNext }: { images: { name: string; image: string }[]; idx: number; onClose: () => void; onPrev: () => void; onNext: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    }
    window.addEventListener("keydown", h)
    return () => window.removeEventListener("keydown", h)
  }, [onClose, onPrev, onNext])

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/90 backdrop-blur-md" onClick={onClose}>
      <div className="relative max-h-[85vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(34,197,94,0.4)] bg-[#0d1a0d] text-white hover:bg-[rgba(34,197,94,0.2)]" aria-label="Cerrar">
          <X className="h-5 w-5" />
        </button>
        <div className="relative h-[70vh] w-[80vw] max-w-175">
          <Image src={images[idx].image} alt={images[idx].name} fill className="rounded-xl object-contain" />
        </div>
        <p className="mt-3 text-center text-sm font-semibold tracking-wider" style={{ color: "#eab308" }}>{images[idx].name}</p>
        {images.length > 1 && (
          <>
            <button onClick={(e) => { e.stopPropagation(); onPrev() }} className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(34,197,94,0.3)] bg-[rgba(10,20,10,0.8)] text-white hover:bg-[rgba(34,197,94,0.2)]" aria-label="Anterior"><ChevronLeft className="h-6 w-6" /></button>
            <button onClick={(e) => { e.stopPropagation(); onNext() }} className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(34,197,94,0.3)] bg-[rgba(10,20,10,0.8)] text-white hover:bg-[rgba(34,197,94,0.2)]" aria-label="Siguiente"><ChevronRight className="h-6 w-6" /></button>
          </>
        )}
      </div>
    </div>
  )
}

/* ---- Contact Form (inside modal) ---- */
function ContactForm({ serviceName }: { serviceName: string }) {
  const [form, setForm] = useState({ nombre: "", telefono: "", correo: "", descripcion: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    const msg = `Hola PRINTWORKS! Soy ${form.nombre}. Telefono: ${form.telefono}. Correo: ${form.correo}. Servicio: ${serviceName}. Detalle: ${form.descripcion}`
    window.open(`https://wa.me/573173799589?text=${encodeURIComponent(msg)}`, "_blank")
    setSent(true)
  }

  if (sent) {
    return (
      <div className="mt-4 rounded-xl border border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.05)] p-5 text-center">
        <p className="text-sm font-semibold" style={{ color: "#22c55e" }}>Solicitud enviada a WhatsApp</p>
        <button onClick={() => setSent(false)} className="mt-2 text-xs underline" style={{ color: "#8aaa8a" }}>Enviar otra</button>
      </div>
    )
  }

  return (
    <div className="mt-4 rounded-xl border border-[rgba(34,197,94,0.2)] bg-[rgba(10,20,10,0.6)] p-5">
      <p className="mb-4 text-xs font-bold tracking-wider uppercase" style={{ color: "#eab308" }}>Solicitar cotizacion</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="text" placeholder="Nombre" value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          className="rounded-lg border border-[rgba(34,197,94,0.2)] bg-[rgba(10,20,10,0.8)] px-4 py-2.5 text-sm text-white placeholder-[#5a7a5a] outline-none transition-all focus:border-[#22c55e] focus:shadow-[0_0_10px_rgba(34,197,94,0.15)]"
        />
        <input
          type="tel" placeholder="Telefono" value={form.telefono}
          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          className="rounded-lg border border-[rgba(34,197,94,0.2)] bg-[rgba(10,20,10,0.8)] px-4 py-2.5 text-sm text-white placeholder-[#5a7a5a] outline-none transition-all focus:border-[#22c55e] focus:shadow-[0_0_10px_rgba(34,197,94,0.15)]"
        />
        <input
          type="email" placeholder="Correo electronico" value={form.correo}
          onChange={(e) => setForm({ ...form, correo: e.target.value })}
          className="rounded-lg border border-[rgba(34,197,94,0.2)] bg-[rgba(10,20,10,0.8)] px-4 py-2.5 text-sm text-white placeholder-[#5a7a5a] outline-none transition-all focus:border-[#22c55e] focus:shadow-[0_0_10px_rgba(34,197,94,0.15)] sm:col-span-2"
        />
        <textarea
          placeholder="Describe lo que necesitas..." value={form.descripcion}
          onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
          rows={3}
          className="rounded-lg border border-[rgba(34,197,94,0.2)] bg-[rgba(10,20,10,0.8)] px-4 py-2.5 text-sm text-white placeholder-[#5a7a5a] outline-none transition-all focus:border-[#22c55e] focus:shadow-[0_0_10px_rgba(34,197,94,0.15)] sm:col-span-2"
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={!form.nombre || !form.telefono}
        className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold tracking-wider text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] disabled:opacity-40 disabled:hover:scale-100"
      >
        <WaIcon />Enviar cotizacion por WhatsApp
      </button>
    </div>
  )
}

/* ---- Service Modal ---- */
function ServiceModal({ service, onClose }: { service: ServiceData; onClose: () => void }) {
  const [lbIdx, setLbIdx] = useState<number | null>(null)
  useEffect(() => { document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = "" } }, [])
  const imgs = service.items.map((it, i) => ({ ...it, oi: i })).filter((x): x is typeof x & { image: string } => !!x.image)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[rgba(34,197,94,0.25)] bg-[#0a0f0a] shadow-[0_0_80px_rgba(34,197,94,0.1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[rgba(34,197,94,0.15)] bg-[#0a0f0a]/95 px-6 py-4 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(34,197,94,0.1)] text-[#22c55e]">
              {service.icon}
            </div>
            <h3 className="text-base font-bold tracking-wider sm:text-lg" style={{ color: "#ffffff", fontFamily: "var(--font-orbitron, Rajdhani, sans-serif)" }}>
              {service.title}
            </h3>
          </div>
          <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-full text-[#8aaa8a] hover:bg-[rgba(34,197,94,0.1)] hover:text-white" aria-label="Cerrar">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <p className="mb-6 text-sm leading-relaxed" style={{ color: "#b0d0b0", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
            {service.description}
          </p>

          {/* Items grid with clickable images */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.items.map((item, i) => {
              const ii = imgs.findIndex((x) => x.oi === i)
              return (
                <div
                  key={i}
                  className={`group flex items-center gap-3 rounded-xl border border-[rgba(34,197,94,0.12)] bg-[rgba(14,28,14,0.6)] p-3 transition-all hover:border-[rgba(34,197,94,0.35)] hover:bg-[rgba(14,28,14,0.9)] ${item.image ? "cursor-pointer" : ""}`}
                  onClick={() => item.image && ii >= 0 && setLbIdx(ii)}
                  role={item.image ? "button" : undefined}
                  tabIndex={item.image ? 0 : undefined}
                >
                  {item.image ? (
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                      <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/30">
                        <svg className="h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[rgba(34,197,94,0.08)]">
                      <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium" style={{ color: "#d4e8d4", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
                      {item.name}
                    </span>
                    {item.url !== undefined && (
                      <span className="text-[10px] tracking-wider" style={{ color: "#5a8a5a" }}>URL disponible</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Form - shows input fields for the client */}
          <ContactForm serviceName={service.title} />
        </div>
      </div>

      {/* Lightbox */}
      {lbIdx !== null && (
        <Lightbox
          images={imgs}
          idx={lbIdx}
          onClose={() => setLbIdx(null)}
          onPrev={() => setLbIdx((lbIdx - 1 + imgs.length) % imgs.length)}
          onNext={() => setLbIdx((lbIdx + 1) % imgs.length)}
        />
      )}
    </div>
  )
}

/* ---- Main Content ---- */
export function MainContent() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="relative px-4 py-8 md:py-12" id="servicios">
      {/* 5 HORIZONTAL NAV BUTTONS */}
      <nav className="mx-auto mb-10 max-w-5xl">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {SERVICES.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="group flex items-center gap-2.5 rounded-xl border border-[rgba(34,197,94,0.2)] bg-[rgba(10,20,10,0.7)] px-4 py-3 transition-all duration-300 hover:border-[rgba(234,179,8,0.6)] hover:bg-[rgba(234,179,8,0.06)] hover:shadow-[0_0_25px_rgba(234,179,8,0.12)] sm:px-5 sm:py-3.5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(34,197,94,0.1)] text-[#22c55e] transition-all duration-300 group-hover:bg-[rgba(234,179,8,0.12)] group-hover:text-[#eab308]">
                {s.icon}
              </div>
              <span className="text-xs font-bold tracking-wider sm:text-sm" style={{ color: "#eab308" }}>
                {s.title}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Content: Terreno prestado section */}
      <div className="mx-auto max-w-5xl rounded-2xl border border-[rgba(34,197,94,0.15)] bg-[rgba(8,16,8,0.7)] p-6 md:p-10">
        <h3
          className="mb-5 text-base font-bold leading-tight sm:text-lg md:text-xl"
          style={{ color: "#eab308", textShadow: "0 0 12px rgba(234,179,8,0.15)", fontFamily: "var(--font-orbitron, Rajdhani, sans-serif)" }}
        >
          {"TU NEGOCIO DEPENDE DE UN ALGORITMO O ES DUENO DE SU PROPIO TERRENO?"}
        </h3>
        <p className="mb-4 text-sm leading-relaxed sm:text-base" style={{ color: "#ffffff", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
          {"Muchos emprendedores en "}
          <span className="font-bold" style={{ color: "#eab308" }}>Cali</span>
          {" cometen el error de construir su marca solo en redes sociales. Pero piensalo, las redes son "}
          <span className="font-bold" style={{ color: "#eab308" }}>{'"terreno prestado"'}</span>
          {". Si manana Instagram cambia las reglas o cierra tu cuenta..."}
        </p>
        <p className="mb-6 text-sm font-bold sm:text-base" style={{ color: "#ef4444" }}>
          {"Tu negocio desaparece!"}
        </p>

        <div className="mb-8 rounded-xl border border-[rgba(34,197,94,0.25)] bg-[rgba(10,20,10,0.9)] p-5 sm:p-6">
          <h4 className="mb-2 text-sm font-bold sm:text-base" style={{ color: "#ffffff" }}>
            Una pagina web es tu propiedad privada.
          </h4>
          <p className="text-sm leading-relaxed" style={{ color: "#b0d0b0", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
            {"Es el unico lugar donde tu pones las reglas y, cuando alguien te busque en Google, te encuentre a ti y no a tu competencia."}
          </p>
        </div>

        <h4 className="mb-4 text-sm font-bold sm:text-base" style={{ color: "#eab308", fontFamily: "var(--font-orbitron, Rajdhani, sans-serif)" }}>
          {"POR QUE TRABAJAR CON NOSOTROS?"}
        </h4>
        <div className="space-y-2.5">
          {[
            { t: "Aparece en el mapa local con ", b: "Google My Business." },
            { t: "Sitios ultra rapidos que cargan en ", b: "menos de 2 segundos." },
            { t: "Videos tutoriales para que seas ", b: "dueno de tu contenido." },
            { t: "Enfoque 100% en conversion ", b: "para que cada boton genere una venta." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2.5 text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22c55e]" />
              <p style={{ color: "#ffffff", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
                {item.t}
                <span className="font-bold" style={{ color: "#22c55e" }}>{item.b}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="mb-1 text-sm font-bold sm:text-base" style={{ color: "#ffffff" }}>
            {"Es hora de que tu negocio trabaje mientras tu descansas!"}
          </p>
          <p className="text-xs sm:text-sm" style={{ color: "#b0d0b0", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
            {"Una plataforma digital no es un gasto, es tu mejor vendedor "}
            <span className="font-bold" style={{ color: "#22c55e" }}>disponible 24/7</span>
          </p>
        </div>

        <div className="mt-6">
          <a
            href="https://wa.me/573173799589?text=Hola%20PRINTWORKS!%20Estoy%20interesado%20en%20una%20pagina%20web."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold tracking-wider text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
          >
            <WaIcon />Cotizar Pagina Web
          </a>
        </div>
      </div>

      {/* Modal */}
      {active !== null && <ServiceModal service={SERVICES[active]} onClose={() => setActive(null)} />}
    </section>
  )
}
