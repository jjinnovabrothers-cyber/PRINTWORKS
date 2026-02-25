export function ContentSection() {
  return (
    <section className="relative px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        {/* Main question - yellow headline */}
        <div className="mb-8 text-center">
          <h2
            className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl"
            style={{ color: "#eab308", textShadow: "0 0 15px rgba(234,179,8,0.3)" }}
          >
            {'TU NEGOCIO DEPENDE DE UN ALGORITMO O ES DUENO DE SU PROPIO TERRENO?'}
          </h2>
        </div>

        {/* Explanation text */}
        <div className="mb-8 space-y-4 text-center">
          <p style={{ color: "#ffffff" }} className="text-base leading-relaxed md:text-lg">
            {'Muchos emprendedores en '}
            <span className="font-bold" style={{ color: "#eab308" }}>Cali</span>
            {' cometen el error de construir su marca solo en redes sociales. Pero piensalo, las redes son '}
            <span className="font-bold" style={{ color: "#eab308" }}>{"\"terreno prestado\""}</span>
            {'. Si manana Instagram cambia las reglas o cierra tu cuenta...'}
          </p>
          <p
            className="text-xl font-bold md:text-2xl"
            style={{ color: "#ef4444" }}
          >
            {'Tu negocio desaparece!'}
          </p>
        </div>

        {/* Private property section */}
        <div className="mb-10 rounded-xl border border-[rgba(34,197,94,0.3)] bg-[rgba(10,20,10,0.85)] p-6 md:p-8 text-center">
          <h3
            className="mb-4 text-xl font-bold md:text-2xl"
            style={{ color: "#ffffff" }}
          >
            Una pagina web es tu propiedad privada.
          </h3>
          <p style={{ color: "#c4e0c4" }} className="text-base leading-relaxed">
            {'Es el unico lugar donde tu pones las reglas y, cuando alguien te busque en Google, te encuentre a ti y no a tu competencia.'}
          </p>
        </div>

        {/* Plans section */}
        <div className="mb-10">
          <h3
            className="mb-6 text-center text-lg font-bold tracking-wider md:text-xl"
            style={{ color: "#ffffff" }}
          >
            Ejemplos de paginas web:
          </h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Plan 1 - Presencia */}
            <div className="rounded-xl border border-[rgba(34,197,94,0.3)] bg-[rgba(10,20,10,0.85)] p-5">
              <h4 className="mb-3 text-base font-bold" style={{ color: "#22c55e" }}>
                {'Nivel 1 - Plan Presencia'}
              </h4>
              <p style={{ color: "#c4e0c4" }} className="mb-3 text-sm leading-relaxed">
                Ideal para restaurantes, ferreterias o servicios profesionales.
              </p>
              <p className="text-sm font-bold" style={{ color: "#eab308" }}>
                {'Si no estas en Google, no existes!'}
              </p>
            </div>

            {/* Plan 2 - Crecimiento */}
            <div className="rounded-xl border border-[rgba(234,179,8,0.3)] bg-[rgba(10,20,10,0.85)] p-5">
              <h4 className="mb-3 text-base font-bold" style={{ color: "#eab308" }}>
                {'Nivel 2 - Plan Crecimiento'}
              </h4>
              <p style={{ color: "#c4e0c4" }} className="mb-3 text-sm leading-relaxed">
                Para empreses que necesitan organizar su demanda y captar datos de clientes automaticamente.
              </p>
              <p className="text-sm font-bold" style={{ color: "#eab308" }}>
                Menos trabajo manual, mas resultados.
              </p>
            </div>

            {/* Plan 3 - Escala */}
            <div className="rounded-xl border border-[rgba(239,68,68,0.3)] bg-[rgba(10,20,10,0.85)] p-5">
              <h4 className="mb-3 text-base font-bold" style={{ color: "#ef4444" }}>
                {'Nivel 3 - Plan Escala'}
              </h4>
              <p style={{ color: "#c4e0c4" }} className="mb-3 text-sm leading-relaxed">
                Infraestructura robusta, con tecnologia en la nube para grandes empresas y E-Commerce.
              </p>
              <p className="text-sm font-bold" style={{ color: "#eab308" }}>
                Estabilidad absoluta y seguridad de nivel bancario.
              </p>
            </div>
          </div>
        </div>

        {/* Why work with us */}
        <div className="mb-10">
          <h3
            className="mb-6 text-center text-xl font-bold md:text-2xl lg:text-3xl"
            style={{ color: "#eab308", textShadow: "0 0 15px rgba(234,179,8,0.3)" }}
          >
            {'POR QUE TRABAJAR CON NOSOTROS?'}
          </h3>

          <div className="space-y-3">
            {[
              { text: "Aparece en el mapa local con ", bold: "Google My Business." },
              { text: "Sitios ultra rapidos que cargan en ", bold: "menos de 2 segundos." },
              { text: "Videos tutoriales para que seas ", bold: "dueno de tu contenido." },
              { text: "Enfoque 100% en conversion ", bold: "para que cada boton genere una venta." },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg bg-[rgba(34,197,94,0.05)] px-4 py-3"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#22c55e]" />
                <p style={{ color: "#ffffff" }} className="text-base leading-relaxed">
                  {item.text}
                  <span className="font-bold" style={{ color: "#22c55e" }}>{item.bold}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center">
          <p
            className="mb-2 text-lg font-bold md:text-xl"
            style={{ color: "#ffffff" }}
          >
            {'Es hora de que tu negocio trabaje mientras tu descansas!'}
          </p>
          <p style={{ color: "#c4e0c4" }} className="mb-6 text-base">
            {'Una plataforma digital no es un gasto, es tu mejor vendedor '}
            <span className="font-bold" style={{ color: "#22c55e" }}>disponible 24/7</span>
          </p>
        </div>
      </div>
    </section>
  )
}
