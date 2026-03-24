import Image from "next/image"

const REASONS = [
  {
    num: "01",
    title: "Calidad Garantizada",
    desc: "Cada trabajo pasa por un riguroso control de calidad. Usamos los mejores materiales e insumos del mercado.",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>),
  },
  {
    num: "02",
    title: "Entrega Rapida",
    desc: "Cumplimos con los tiempos de entrega acordados. Tu proyecto listo cuando lo necesitas, sin demoras.",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  },
  {
    num: "03",
    title: "Servicio Personalizado",
    desc: "Te asesoramos en cada paso del proceso. Desde el diseno hasta la entrega final, cuidamos cada detalle.",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>),
  },
]

export function WhyUsSection() {
  return (
    <section id="nosotros" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left - Logo symbol */}
        <div className="relative shrink-0">
          <div
            className="absolute inset-0 scale-[1.4] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 60%)" }}
            aria-hidden="true"
          />
          <div className="relative h-55 w-55 sm:h-70 sm:w-70 lg:h-85 lg:w-85">
            <Image src="/images/logo-symbol.png" alt="PRINTWORKS" fill className="object-contain drop-shadow-[0_0_40px_rgba(34,197,94,0.1)]" />
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex-1">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#22c55e]">Nuestra garantia</p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl" style={{ fontFamily: "var(--font-orbitron)" }}>
            Por que elegir{" "}
            <span className="text-[#22c55e]">PRINTWORKS</span>?
          </h2>
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-[#9ca3af] sm:text-base">
            En PRINTWORKS combinamos tecnologia de punta, materiales de alta calidad y un equipo de expertos para ofrecerte lo mejor en soluciones de impresion.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {REASONS.map((r) => (
              <div
                key={r.num}
                className="rounded-xl border border-[rgba(34,197,94,0.12)] bg-[rgba(10,20,10,0.5)] p-5 transition-all hover:border-[rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(34,197,94,0.06)]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(34,197,94,0.12)] text-[#22c55e]">
                    {r.icon}
                  </div>
                  <span className="text-xl font-bold text-[#22c55e]" style={{ fontFamily: "var(--font-orbitron)" }}>{r.num}</span>
                </div>
                <h3 className="mb-2 text-sm font-bold text-white">{r.title}</h3>
                <p className="text-xs leading-relaxed text-[#9ca3af]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
