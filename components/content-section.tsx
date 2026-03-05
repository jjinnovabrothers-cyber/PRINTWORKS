export function ContentSection() {
  return (
    <section className="relative px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">

        {/* TITULO PRINCIPAL */}
        <div className="mb-8 text-center">
          <h2
            className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl"
            style={{ color: "#eab308", textShadow: "0 0 15px rgba(234,179,8,0.3)" }}
          >
            {'¿Tu marca está lista para el siguiente nivel?'}
          </h2>
        </div>

        {/* INTRODUCCION */}
        <div className="mb-8 space-y-4 text-center">

          <p style={{ color: "#ffffff" }} className="text-base leading-relaxed md:text-lg">
            {'En '}
            <span className="font-bold" style={{ color: "#22c55e" }}>Printworks</span>
            {' unimos lo mejor de dos mundos: creamos '}
            <span className="font-bold" style={{ color: "#eab308" }}>
              impresiones que impactan
            </span>
            {' y '}
            <span className="font-bold" style={{ color: "#22c55e" }}>
              páginas web que convierten
            </span>
            {'.'}
          </p>

          <p style={{ color: "#c4e0c4" }} className="text-base leading-relaxed md:text-lg">
            {'No importa si estás en '}
            <span className="font-bold" style={{ color: "#eab308" }}>Cali</span>
            {' o en cualquier rincón de '}
            <span className="font-bold" style={{ color: "#eab308" }}>
              Colombia o el mundo
            </span>
            {'. Personalizamos tu éxito combinando creatividad, tecnología y seguridad.'}
          </p>

        </div>

        {/* PROPUESTA DE VALOR */}
        <div className="mb-10 rounded-xl border border-[rgba(34,197,94,0.3)] bg-[rgba(10,20,10,0.85)] p-6 md:p-8 text-center">

          <h3
            className="mb-4 text-xl font-bold md:text-2xl"
            style={{ color: "#ffffff" }}
          >
            Publicidad que se ve. Presencia digital que vende.
          </h3>

          <p style={{ color: "#c4e0c4" }} className="text-base leading-relaxed">
            {'En Printworks combinamos impresión profesional, diseño publicitario y desarrollo web para que tu negocio tenga impacto en el mundo real y presencia digital al mismo tiempo.'}
          </p>

        </div>

        {/* SERVICIOS */}
        <div className="mb-10">

          <h3
            className="mb-6 text-center text-lg font-bold tracking-wider md:text-xl"
            style={{ color: "#ffffff" }}
          >
            Nuestros servicios principales
          </h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

            {/* IMPRESION */}
            <div className="rounded-xl border border-[rgba(34,197,94,0.3)] bg-[rgba(10,20,10,0.85)] p-5">

              <h4 className="mb-3 text-base font-bold" style={{ color: "#22c55e" }}>
                Impresión Profesional
              </h4>

              <p style={{ color: "#c4e0c4" }} className="mb-3 text-sm leading-relaxed">
                Publicidad física de alto impacto para que tu negocio destaque en el mundo real.
              </p>

              <p className="text-sm font-bold" style={{ color: "#eab308" }}>
                Publicidad que tus clientes pueden ver y tocar.
              </p>

            </div>

            {/* DISEÑO */}
            <div className="rounded-xl border border-[rgba(234,179,8,0.3)] bg-[rgba(10,20,10,0.85)] p-5">

              <h4 className="mb-3 text-base font-bold" style={{ color: "#eab308" }}>
                Diseño Publicitario
              </h4>

              <p style={{ color: "#c4e0c4" }} className="mb-3 text-sm leading-relaxed">
                Diseños modernos y personalizados que transmiten profesionalismo y fortalecen tu marca.
              </p>

              <p className="text-sm font-bold" style={{ color: "#eab308" }}>
                Tu identidad visual lista para destacar.
              </p>

            </div>

            {/* PAGINAS WEB */}
            <div className="rounded-xl border border-[rgba(239,68,68,0.3)] bg-[rgba(10,20,10,0.85)] p-5">

              <h4 className="mb-3 text-base font-bold" style={{ color: "#ef4444" }}>
                Desarrollo de Páginas Web
              </h4>

              <p style={{ color: "#c4e0c4" }} className="mb-3 text-sm leading-relaxed">
                Creamos páginas web profesionales con diseño moderno, optimizadas para generar clientes y mostrar tu negocio al mundo.
              </p>

              <p className="text-sm font-bold" style={{ color: "#22c55e" }}>
                Diseño Responsive + Optimización SEO para Google
              </p>

            </div>

          </div>

        </div>

        {/* BENEFICIOS */}
        <div className="mb-10">

          <h3
            className="mb-6 text-center text-xl font-bold md:text-2xl lg:text-3xl"
            style={{ color: "#eab308", textShadow: "0 0 15px rgba(234,179,8,0.3)" }}
          >
            ¿Por qué trabajar con Printworks?
          </h3>

          <div className="space-y-3">

            {[
              { text: "Soluciones completas de ", bold: "impresión y presencia digital." },
              { text: "Diseños modernos que hacen que tu marca ", bold: "se vea profesional." },
              { text: "Páginas web rápidas con diseño ", bold: "Responsive para celular." },
              { text: "Optimización ", bold: "SEO para aparecer en Google." },
              { text: "Envíos seguros a todo el país con ", bold: "seguimiento garantizado." },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg bg-[rgba(34,197,94,0.05)] px-4 py-3"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#22c55e]" />

                <p style={{ color: "#ffffff" }} className="text-base leading-relaxed">
                  {item.text}
                  <span className="font-bold" style={{ color: "#22c55e" }}>
                    {item.bold}
                  </span>
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="text-center">

          <p
            className="mb-2 text-lg font-bold md:text-xl"
            style={{ color: "#ffffff" }}
          >
            Lleva tu marca al siguiente nivel.
          </p>

          <p style={{ color: "#c4e0c4" }} className="mb-6 text-base">
            {'Combinamos impresión, diseño y tecnología para ayudarte a crecer en el mundo real y digital.'}
          </p>

        </div>

      </div>
    </section>
  )
}