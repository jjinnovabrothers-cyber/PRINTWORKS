"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-28"
      style={{
        maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(34,197,94,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 particles" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        
        <div className="max-w-2xl text-center lg:text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#22c55e] sm:text-sm">
            Real Prints for Real People
          </p>

          <h1
            className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-5xl"
            style={{ fontFamily: "var(--font-orbitron, Rajdhani, sans-serif)" }}
          >
            POTENCIAMOS TU MARCA EN EL{" "}
            <span className="text-[#22c55e] block sm:inline drop-shadow-[0_0_20px_rgba(34,197,94,0.7)]">
              MUNDO REAL Y DIGITAL
            </span>
          </h1>

          <p className="mb-6 text-base leading-relaxed text-[#9ca3af]">
            Somos expertos en soluciones de alto impacto: desde <strong>impresion profesional</strong> y 
            publicidad que es palpable, hasta el diseno y creacion de <span className="text-[#22c55e]">paginas web</span> para que te 
            encuentren en todo el mundo.
          </p>

          <div className="mb-8 flex flex-col gap-3 text-left lg:items-start">
            <div className="flex items-start gap-2 text-sm text-[#9ca3af]">
              <span className="mt-1 text-[#22c55e]">*</span>
              <p><strong>Impulsa tu negocio:</strong> Publicidad, accesorios decorativos y presencia online profesional.</p>
            </div>
            <div className="flex items-start gap-2 text-sm text-[#9ca3af]">
              <span className="mt-1 text-[#22c55e]">*</span>
              <p><strong>Personaliza tu espacio:</strong> Estilo unico para tu hogar u oficina.</p>
            </div>
            <div className="flex items-start gap-2 text-sm text-[#9ca3af]">
              <span className="mt-1 text-[#22c55e]">*</span>
              <p><strong>Confianza total:</strong> Envios nacionales 100% seguros con guia de seguimiento.</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full bg-[#22c55e] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0a0f0a] transition-all hover:bg-[#16a34a] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)]"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:w-1/2">
          <div
            className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[750px] lg:h-[750px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(34,197,94,0.3) 0%, transparent 70%)",
              maskImage: "radial-gradient(black 30%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(black 30%, transparent 75%)",
            }}
          />
          <div className="relative z-10">
            <div className="relative h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] lg:h-[550px] lg:w-[550px]">
              <Image
                src="/images/logo-printworks.png"
                alt="PRINTWORKS"
                fill
                className="object-contain drop-shadow-[0_0_40px_rgba(34,197,94,0.5)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
