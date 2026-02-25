"use client"

export function AnnouncementBar() {
  const messages = [
    "Descuentos por volumen de impresion",
    "Entregas rapidas y personalizadas",
    "Cotizaciones inmediatas por WhatsApp",
    "Servicio de diseno publicitario incluido",
    "Envios a toda Colombia",
    "Paginas web profesionales para tu negocio",
  ]

  const repeatedMessages = [...messages, ...messages]

  return (
    <div className="fixed top-0 z-[60] w-full overflow-hidden border-b border-[rgba(34,197,94,0.2)]" style={{ backgroundColor: "rgba(5,8,5,0.97)" }}>
      <div className="flex h-8 items-center">
        <div className="animate-marquee flex whitespace-nowrap">
          {repeatedMessages.map((msg, i) => (
            <span key={i} className="mx-6 text-xs font-medium tracking-wider text-[#22c55e]">
              {msg}
              <span className="ml-6 text-[#eab308]">{"///"}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
