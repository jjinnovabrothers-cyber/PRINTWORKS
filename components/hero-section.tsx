"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(34,197,94,0.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="max-w-xl text-center lg:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#22c55e] sm:text-sm">
            Real Prints for Real People
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-orbitron, Rajdhani, sans-serif)" }}>
            SOLUCIONES
            <br />
            DE IMPRESION
            <br />
            DE <span className="text-[#22c55e]">ALTO IMPACTO</span>
          </h1>
          <p className="mb-4 text-base leading-relaxed text-[#9ca3af] sm:text-lg">
            Potencia tu marca con impresiones de calidad profesional. Mas de 10 productos y servicios para hacer crecer tu negocio en Cali y toda Colombia.
          </p>
          <p className="mb-8 text-sm font-medium text-[#eab308]">
            No dependas de algoritmos. Haz que los clientes te encuentren siempre en Google.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full bg-[#22c55e] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0a0f0a] transition-all hover:bg-[#16a34a] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
            >
              Nuestros Servicios
            </a>
            <a
              href="#paginas-web"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(234,179,8,0.4)] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#eab308] transition-all hover:border-[#eab308] hover:bg-[rgba(234,179,8,0.08)]"
            >
              Obten una Pagina Web Propia
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 scale-[1.3] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]">
            <Image src="/images/logo-printworks.png" alt="PRINTWORKS" fill className="object-contain drop-shadow-[0_0_60px_rgba(34,197,94,0.15)]" priority />
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-1/3 h-px w-1/3 bg-gradient-to-l from-transparent via-[rgba(34,197,94,0.25)] to-transparent" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 h-px w-1/4 bg-gradient-to-r from-transparent via-[rgba(34,197,94,0.15)] to-transparent" aria-hidden="true" />
    </section>
  )
}
