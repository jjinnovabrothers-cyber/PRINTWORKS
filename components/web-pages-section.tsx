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
            Tu negocio depende de un algoritmo
            <br />
            <span className="text-white">o es dueno de su propio terreno?</span>
          </h2>
        </div>

        {/* Body text */}
        <div className="mb-8 text-center text-sm leading-relaxed text-[#d1d5db] sm:text-base">
          <p className="mb-4">
            Muchos emprendedores en <strong className="text-white">Cali</strong> cometen el error de construir su
            marca solo en redes sociales. Pero piensalo, las redes son{" "}
            <strong className="text-[#eab308]">{'"terreno prestado"'}</strong>. Si manana Instagram cambia las
            reglas o cierra tu cuenta...
          </p>
          <p className="text-lg font-bold text-[#ef4444]">
            Tu negocio desaparece!
          </p>
        </div>

        {/* Property box */}
        <div className="mx-auto mb-12 max-w-2xl rounded-xl border border-[rgba(34,197,94,0.25)] bg-[rgba(10,20,10,0.6)] p-6 text-center sm:p-8">
          <h3 className="mb-3 text-lg font-bold text-white sm:text-xl">
            Una pagina web es tu propiedad privada.
          </h3>
          <p className="text-sm leading-relaxed text-[#d1d5db]">
            Es el unico lugar donde tu pones las reglas y, cuando alguien te busque
            en Google, te encuentre a ti y no a tu competencia.
          </p>
        </div>

        {/* Plans heading */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#22c55e]">
            Ejemplos de paginas web
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
          {/* Plan 1 - Presencia */}
          <div className="rounded-xl border border-[rgba(34,197,94,0.2)] bg-[rgba(10,20,10,0.5)] p-5 transition-all hover:border-[#22c55e] hover:shadow-[0_0_20px_rgba(34,197,94,0.08)]">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-lg">📍</span>
              <h4 className="text-sm font-bold text-white">
                Nivel 1 - <span className="text-[#22c55e]">Plan Presencia</span>
              </h4>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-[#9ca3af]">
              Ideal para restaurantes, ferreterias o servicios profesionales.
            </p>
            <p className="text-xs font-semibold text-[#eab308]">
              Si no estas en Google, no existes!
            </p>
          </div>

          {/* Plan 2 - Crecimiento */}
          <div className="rounded-xl border border-[rgba(234,179,8,0.25)] bg-[rgba(10,20,10,0.5)] p-5 transition-all hover:border-[#eab308] hover:shadow-[0_0_20px_rgba(234,179,8,0.08)]">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-lg">📈</span>
              <h4 className="text-sm font-bold text-white">
                Nivel 2 - <span className="text-[#eab308]">Plan Crecimiento</span>
              </h4>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-[#9ca3af]">
              Para empresas que necesitan organizar su demanda y captar datos de clientes automaticamente.
            </p>
            <p className="text-xs font-semibold text-[#eab308]">
              Menos trabajo manual, mas resultados.
            </p>
          </div>

          {/* Plan 3 - Escala */}
          <div className="rounded-xl border border-[rgba(239,68,68,0.2)] bg-[rgba(10,20,10,0.5)] p-5 transition-all hover:border-[#ef4444] hover:shadow-[0_0_20px_rgba(239,68,68,0.08)]">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-lg">🚀</span>
              <h4 className="text-sm font-bold text-white">
                Nivel 3 - <span className="text-[#ef4444]">Plan Escala</span>
              </h4>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-[#9ca3af]">
              Infraestructura robusta, con tecnologia en la nube para grandes empresas y E-Commerce.
            </p>
            <p className="text-xs font-semibold text-[#eab308]">
              Estabilidad absoluta y seguridad de nivel bancario.
            </p>
          </div>
        </div>

        {/* CTA button */}
        <div className="mb-14 text-center">
          <a
            href="https://wa.me/573173799589?text=Hola%20PRINTWORKS!%20Quiero%20cotizar%20una%20pagina%20web%20para%20mi%20negocio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(34,197,94,0.4)] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-[#22c55e] hover:bg-[rgba(34,197,94,0.08)] hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]"
          >
            Descubrir Planes a la Medida
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>

        {/* Por que trabajar con nosotros */}
        <div className="mb-10">
          <h3
            className="mb-6 text-center text-xl font-bold uppercase tracking-wider sm:text-2xl"
            style={{ color: "#eab308", fontFamily: "var(--font-orbitron)" }}
          >
            Por que trabajar con nosotros?
          </h3>
          <ul className="mx-auto flex max-w-xl flex-col gap-3">
            <li className="flex items-start gap-3 text-sm text-[#d1d5db]">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-xs text-[#22c55e]">✓</span>
              Aparece en el mapa local con <strong className="text-white">Google My Business</strong>.
            </li>
            <li className="flex items-start gap-3 text-sm text-[#d1d5db]">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-xs text-[#22c55e]">✓</span>
              Sitios ultra rapidos que cargan en <strong className="text-[#22c55e]">menos de 2 segundos</strong>.
            </li>
            <li className="flex items-start gap-3 text-sm text-[#d1d5db]">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-xs text-[#22c55e]">✓</span>
              Videos tutoriales para que seas <strong className="text-white">dueno de tu contenido</strong>.
            </li>
            <li className="flex items-start gap-3 text-sm text-[#d1d5db]">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-xs text-[#22c55e]">✓</span>
              Enfoque <strong className="text-white">100% en conversion</strong> para que cada boton genere una venta.
            </li>
          </ul>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="mb-2 text-sm font-bold text-white sm:text-base">
            Es hora de que tu negocio trabaje mientras tu descansas!
          </p>
          <p className="mb-6 text-xs text-[#9ca3af]">
            Una plataforma digital no es un gasto, es tu mejor vendedor{" "}
            <strong className="text-[#22c55e]">disponible 24/7</strong>
          </p>
          <a
            href="https://wa.me/573173799589?text=Hola%20PRINTWORKS!%20Quiero%20una%20pagina%20web%20profesional."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border-2 border-[#22c55e] bg-[rgba(34,197,94,0.05)] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[rgba(34,197,94,0.12)] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] sm:text-lg"
          >
            <svg viewBox="0 0 24 24" fill="#25D366" className="h-6 w-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp: 317 379 9589
          </a>
          <p className="mt-3 flex items-center justify-center gap-1 text-xs text-[#9ca3af]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 text-[#22c55e]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            Cali, Colombia
          </p>
        </div>
      </div>
    </section>
  )
}
