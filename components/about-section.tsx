import { CheckCircle } from "lucide-react"

export function AboutSection() {
  const benefits = [
    "Presencia digital profesional",
    "Mayor alcance de clientes",
    "Informacion disponible 24/7",
    "Canal directo de ventas",
    "Independencia de redes sociales",
  ]

  return (
    <section className="relative px-4 py-16 md:py-24" id="nosotros">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-sans text-2xl font-bold tracking-widest text-[#e8f5e8] md:text-4xl">
            QUIENES <span className="text-[#22c55e]">SOMOS</span>
          </h2>
          <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-[#22c55e] to-transparent" />
        </div>

        {/* Content */}
        <div className="rounded-xl border border-[rgba(34,197,94,0.2)] bg-[rgba(10,20,10,0.85)] p-8 md:p-12">
          <p className="text-[#c4e0c4] leading-relaxed md:text-lg">
            <span className="font-bold text-[#22c55e]">PRINTWORKS</span> es una empresa especializada en
            soluciones integrales de impresion y publicidad visual. Nos enfocamos en ayudar a negocios y
            emprendedores a comunicar su marca de manera profesional mediante productos impresos de alta calidad.
          </p>
          <p className="mt-4 text-[#c4e0c4] leading-relaxed md:text-lg">
            Combinamos diseño, tecnologia y experiencia para ofrecer resultados que generan impacto, recordacion
            y crecimiento comercial para nuestros clientes.
          </p>

          {/* Benefits */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg bg-[rgba(34,197,94,0.05)] px-4 py-3 text-[#e8f5e8]">
                <CheckCircle className="h-5 w-5 shrink-0 text-[#22c55e]" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/573187092130?text=Hola%20PRINTWORKS%2C%20quiero%20conocer%20mas%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#22c55e] px-8 py-3 text-sm font-bold tracking-wider text-[#0a0f0a] transition-all duration-300 hover:bg-[#16a34a] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              HABLA CON NOSOTROS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
