"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-28"
    >

      {/* fondo radial */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(34,197,94,0.07) 0%, transparent 70%)",
        }}
      />

      {/* partículas */}
      <div className="pointer-events-none absolute inset-0 particles" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">

        {/* TEXTO */}
        <div className="max-w-xl text-center lg:text-left">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#22c55e] sm:text-sm">
            Real Prints for Real People 🖨️🌐
          </p>

          <h1
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-orbitron, Rajdhani, sans-serif)" }}
          >
            SOLUCIONES
            <br />
            DE IMPRESIÓN
            <br />
            DE{" "}
            <span className="text-[#22c55e] drop-shadow-[0_0_20px_rgba(34,197,94,0.7)]">
              ALTO IMPACTO
            </span>
          </h1>

          <p className="mb-5 text-lg leading-relaxed text-[#cbd5cb]">
            Potenciamos tu marca en el mundo{" "}
            <span className="text-white font-semibold">real</span> y{" "}
            <span className="text-[#eab308] font-semibold">digital</span>.
          </p>

          <p className="mb-6 text-base leading-relaxed text-[#9ca3af]">
            Somos expertos en soluciones de alto impacto: desde{" "}
            <span className="text-white font-medium">impresión profesional</span>{" "}
            y publicidad que se toca, hasta el diseño y creación de{" "}
            <span className="text-[#22c55e] font-medium">
              páginas web
            </span>{" "}
            para que te encuentren en todo el mundo.
          </p>

          <div className="mb-8 space-y-2 text-sm text-[#9ca3af]">

            <p>
              🚀{" "}
              <span className="text-white font-medium">
                Impulsa tu negocio:
              </span>{" "}
              Publicidad, accesorios decorativos y presencia online profesional.
            </p>

            <p>
              🎨{" "}
              <span className="text-white font-medium">
                Personaliza tu espacio:
              </span>{" "}
              Estilo único para tu hogar u oficina.
            </p>

            <p>
              {" "}
              <span className="text-white font-medium">
                Confianza total:
              </span>{" "}
              Envíos nacionales 100% seguros con guía de seguimiento.
            </p>

          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">

            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full bg-[#22c55e] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0a0f0a] transition-all hover:bg-[#16a34a] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)]"
            >
              Nuestros Servicios
            </a>

            <a
              href="#paginas-web"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(234,179,8,0.4)] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#eab308] transition-all hover:border-[#eab308] hover:bg-[rgba(234,179,8,0.08)]"
            >
              Obtener Página Web
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>

          </div>
        </div>

        {/* LOGO */}
        <div className="relative flex items-center justify-center">

          {/* glow verde */}
          <div
            className="absolute w-[450px] h-[450px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(34,197,94,0.35) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)",
            }}
          />

          {/* fondo blanco difuminado */}
          <div className="relative rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.35)_40%,rgba(255,255,255,0.08)_70%,transparent_100%)] p-6 shadow-[0_0_90px_rgba(34,197,94,0.3)]">

            <div className="relative h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]">
              <Image
                src="/images/logo-printworks.png"
                alt="PRINTWORKS"
                fill
                className="object-contain"
                priority
              />
            </div>

          </div>

        </div>

      </div>

      <div className="absolute right-0 top-1/3 h-px w-1/3 bg-gradient-to-l from-transparent via-[rgba(34,197,94,0.25)] to-transparent" />
      <div className="absolute bottom-1/4 left-0 h-px w-1/4 bg-gradient-to-r from-transparent via-[rgba(34,197,94,0.15)] to-transparent" />

    </section>
  )
}