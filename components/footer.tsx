import Image from "next/image"

const SERVICES_LINKS = [
  "Impresión Offset (Litográfica)",
  "Impresión Digital (gran formato)",
  "Souvenirs Promocionales",
  "Material P.O.P",
  "Servicio de Ingenieria y Desarrollo",
  "Cuadros Decorativos",
]

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-[rgba(34,197,94,0.15)] bg-[rgba(5,8,5,0.95)]">
      {/* CTA Banner */}
      <div className="border-b border-[rgba(34,197,94,0.1)] px-4 py-12 text-center">
        <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl" style={{ fontFamily: "var(--font-orbitron)" }}>
          Hablemos de tu <span className="text-[#22c55e]">proyecto</span>
        </h3>

        <p className="mx-auto mb-6 max-w-lg text-sm text-[#9ca3af]">
          Nuestro equipo está listo para apoyarte en tus proyectos. Creamos la mejor oferta para tu requerimiento.
        </p>

        <a
          href="https://wa.me/573152572025?text=Hola%20PRINTWORKS!%20Quiero%20cotizar%20un%20servicio."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0a0f0a] transition-all hover:bg-[#16a34a] hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
        >
          Hablar por WhatsApp
        </a>
      </div>

      {/* Footer content */}
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="relative mb-4 h-10 w-[180px]">
              <Image src="/images/logo-horizontal.png" alt="PRINTWORKS" fill className="object-contain object-left" />
            </div>

            <p className="text-xs leading-relaxed text-[#9ca3af]">
              Real Prints for Real People. Soluciones integrales de impresión y publicidad visual para tu negocio en Cali, Colombia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Servicios
            </h4>

            <ul className="flex flex-col gap-2">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <span className="text-xs text-[#9ca3af] transition-colors hover:text-[#22c55e]">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Contacto
            </h4>

            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-xs text-[#9ca3af]">
                📍 Cali, Colombia
              </li>

              <li className="flex items-start gap-2 text-xs text-[#9ca3af]">
                📞 +57 315 2572025
              </li>

              <li className="flex items-start gap-2 text-xs text-[#9ca3af]">
                📞 +57 315 2572025
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Horario
            </h4>

            <ul className="flex flex-col gap-2 text-xs text-[#9ca3af]">
              <li>Lunes a Domingo: 7am - 6pm</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(34,197,94,0.1)] px-4 py-4">
        <p className="text-center text-xs text-[#6b7280]">
          {'PRINTWORKS ' + new Date().getFullYear() + ' - Todos los derechos reservados. Cali, Colombia.'}
        </p>
      </div>

    </footer>
  )
}