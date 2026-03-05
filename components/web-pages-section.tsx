"use client"

export function WebPagesSection() {
  return (
    <section id="paginas-web" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">

        {/* Main heading */}
        <div className="mb-10 text-center">
          <h2
            className="mb-4 text-2xl font-bold uppercase leading-tight tracking-wider sm:text-3xl md:text-4xl"
            style={{ color: "#eab308", fontFamily: "var(--font-orbitron)" }}
          >
            ¿Tu marca está lista para el siguiente nivel?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#d1d5db] sm:text-base">
            En <strong className="text-white">Printworks</strong> unimos lo mejor de dos mundos.
            Creamos <strong className="text-[#eab308]">impresiones que impactan</strong> y
            <strong className="text-[#22c55e]"> páginas web que convierten</strong>.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#9ca3af] sm:text-base">
            No importa si estás en <strong className="text-white">Cali</strong>,
            en cualquier lugar de <strong className="text-white">Colombia</strong> o incluso en otro país.
            Personalizamos tu éxito con estilo, tecnología y seguridad.
          </p>
        </div>

        {/* Body text */}
        <div className="mb-8 text-center text-sm leading-relaxed text-[#d1d5db] sm:text-base">
          <p className="mb-4">
            Muchos emprendedores construyen su marca solo en redes sociales.
            Pero las redes son <strong className="text-[#eab308]">"terreno prestado"</strong>.
            Si mañana cambia el algoritmo o cierran tu cuenta...
          </p>
          <p className="text-lg font-bold text-[#ef4444]">
            Tu negocio desaparece!
          </p>
        </div>

        {/* Property box */}
        <div className="mx-auto mb-12 max-w-2xl rounded-xl border border-[rgba(34,197,94,0.25)] bg-[rgba(10,20,10,0.6)] p-6 text-center sm:p-8">
          <h3 className="mb-3 text-lg font-bold text-white sm:text-xl">
            Una página web es tu propiedad privada
          </h3>
          <p className="text-sm leading-relaxed text-[#d1d5db]">
            Es el único lugar donde tú pones las reglas y donde tus clientes pueden
            encontrarte en Google cuando buscan tus servicios.
          </p>
        </div>

        {/* Plans heading */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#22c55e]">
            Ejemplos de páginas web
          </p>
          <h3
            className="text-xl font-bold uppercase tracking-wider text-white sm:text-2xl"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Soluciones a la medida <span className="text-[#22c55e]">para hacer crecer tu negocio</span>
          </h3>
        </div>

        {/* 3 Plan cards */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Plan 1 */}
          <div className="rounded-xl border border-[rgba(34,197,94,0.2)] bg-[rgba(10,20,10,0.5)] p-5 transition-all hover:border-[#22c55e] hover:shadow-[0_0_20px_rgba(34,197,94,0.08)]">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-lg">📍</span>
              <h4 className="text-sm font-bold text-white">
                Nivel 1 - <span className="text-[#22c55e]">Plan Presencia</span>
              </h4>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-[#9ca3af]">
              Ideal para negocios locales que necesitan aparecer en Google y mostrar
              su información profesional a clientes.
            </p>
            <p className="text-xs font-semibold text-[#eab308]">
              Si no estás en Google, no existes!
            </p>
          </div>

          {/* Plan 2 */}
          <div className="rounded-xl border border-[rgba(234,179,8,0.25)] bg-[rgba(10,20,10,0.5)] p-5 transition-all hover:border-[#eab308] hover:shadow-[0_0_20px_rgba(234,179,8,0.08)]">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-lg">📈</span>
              <h4 className="text-sm font-bold text-white">
                Nivel 2 - <span className="text-[#eab308]">Plan Crecimiento</span>
              </h4>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-[#9ca3af]">
              Páginas web diseñadas para generar clientes automáticamente,
              con formularios, contacto directo y automatización básica.
            </p>
            <p className="text-xs font-semibold text-[#22c55e]">
              Diseño Responsive + Optimización SEO
            </p>
          </div>

          {/* Plan 3 */}
          <div className="rounded-xl border border-[rgba(239,68,68,0.2)] bg-[rgba(10,20,10,0.5)] p-5 transition-all hover:border-[#ef4444] hover:shadow-[0_0_20px_rgba(239,68,68,0.08)]">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-lg">🚀</span>
              <h4 className="text-sm font-bold text-white">
                Nivel 3 - <span className="text-[#ef4444]">Plan Escala</span>
              </h4>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-[#9ca3af]">
              Infraestructura robusta para empresas que necesitan
              E-Commerce o plataformas más avanzadas.
            </p>
            <p className="text-xs font-semibold text-[#eab308]">
              Seguridad, velocidad y estabilidad profesional.
            </p>
          </div>

        </div>

        {/* Por que trabajar con nosotros */}
        <div className="mb-10">
          <h3
            className="mb-6 text-center text-xl font-bold uppercase tracking-wider sm:text-2xl"
            style={{ color: "#eab308", fontFamily: "var(--font-orbitron)" }}
          >
            Por qué trabajar con nosotros
          </h3>

          <ul className="mx-auto flex max-w-xl flex-col gap-3">
            <li className="flex items-start gap-3 text-sm text-[#d1d5db]">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-xs text-[#22c55e]">✓</span>
              Diseño <strong className="text-white">Responsive</strong> que se ve perfecto en celular, tablet y computador.
            </li>

            <li className="flex items-start gap-3 text-sm text-[#d1d5db]">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-xs text-[#22c55e]">✓</span>
              Optimización <strong className="text-[#22c55e]">SEO</strong> para aparecer en Google.
            </li>

            <li className="flex items-start gap-3 text-sm text-[#d1d5db]">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-xs text-[#22c55e]">✓</span>
              Sitios ultra rápidos que cargan en <strong className="text-white">menos de 2 segundos</strong>.
            </li>

            <li className="flex items-start gap-3 text-sm text-[#d1d5db]">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-xs text-[#22c55e]">✓</span>
              Enfoque <strong className="text-white">100% en conversión</strong> para generar clientes.
            </li>
          </ul>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="mb-2 text-sm font-bold text-white sm:text-base">
            Es hora de que tu negocio trabaje mientras tú descansas
          </p>
          <p className="mb-6 text-xs text-[#9ca3af]">
            Una página web profesional es tu mejor vendedor
            <strong className="text-[#22c55e]"> disponible 24/7</strong>
          </p>
        </div>

      </div>
    </section>
  )
}