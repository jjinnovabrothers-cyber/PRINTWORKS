import Image from "next/image"

const SERVICES_LINKS = [
  "Servicios de Impresion",
  "Material P.O.P",
  "Souvenirs Promocionales",
  "Produccion Litografica",
  "E-Commerce",
  "Paginas Web Profesionales",
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
          Nuestro equipo esta listo para apoyarte en tus proyectos. Creamos la mejor oferta para tu requerimiento.
        </p>
        <a
          href="https://wa.me/573187092130?text=Hola%20PRINTWORKS!%20Quiero%20cotizar%20un%20servicio."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0a0f0a] transition-all hover:bg-[#16a34a] hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
              Real Prints for Real People. Soluciones integrales de impresion y publicidad visual para tu negocio en Cali, Colombia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Servicios</h4>
            <ul className="flex flex-col gap-2">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <span className="text-xs text-[#9ca3af] transition-colors hover:text-[#22c55e]">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Contacto</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-xs text-[#9ca3af]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#22c55e]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Cali, Colombia
              </li>
              <li className="flex items-start gap-2 text-xs text-[#9ca3af]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#22c55e]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +57 318 709 2130
              </li>
              <li className="flex items-start gap-2 text-xs text-[#9ca3af]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#22c55e]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +57 317 379 9589
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Horario</h4>
            <ul className="flex flex-col gap-2 text-xs text-[#9ca3af]">
              <li>Lunes a Viernes: 8am - 6pm</li>
              <li>Sabado: 9am - 2pm</li>
              <li>Domingo: Cerrado</li>
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
