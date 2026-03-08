import Image from "next/image";

const SERVICES_LINKS = [
  "Impresión Offset (Litográfica)",
  "Impresión Digital (gran formato)",
  "Souvenirs Promocionales",
  "Material P.O.P",
  "diseño de paginas web",
  "Cuadros Decorativos",
];

export function Footer() {
  return (
    <footer
      id="contacto"
      className="border-t border-[rgba(34,197,94,0.15)] bg-[rgba(5,8,5,0.95)]"
    >
      {/* CTA Banner */}
      <div className="border-b border-[rgba(34,197,94,0.1)] px-4 py-12 text-center">
        <h3
          className="mb-3 text-2xl font-bold text-white sm:text-3xl"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Hablemos de tu <span className="text-[#22c55e]">proyecto</span>
        </h3>

        <p className="mx-auto mb-6 max-w-lg text-sm text-[#9ca3af]">
          Nuestro equipo está listo para apoyarte en tus proyectos. Creamos la
          mejor oferta para tu requerimiento.
        </p>

        <a
          href="https://wa.me/573173799589?text=Hola%20PRINTWORKS!%20Quiero%20cotizar%20un%20servicio."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0a0f0a] transition-all hover:bg-[#16a34a] hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
        >
          <span className="text-base">📱</span>
          Hablar por WhatsApp
        </a>
      </div>

      {/* Footer content */}
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="relative mb-4 h-10 w-[180px]">
              <Image
                src="/images/logo-horizontal.png"
                alt="PRINTWORKS"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-xs leading-relaxed text-[#9ca3af]">
              Real Prints for Real People. Soluciones integrales de impresión y
              publicidad visual para tu negocio en Cali, Colombia.
            </p>

            {/* Redes sociales (opcional, puedes agregar) */}
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(34,197,94,0.2)] text-[#9ca3af] transition-colors hover:border-[#22c55e] hover:text-[#22c55e]"
              >
                <span className="text-sm">📘</span>
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(34,197,94,0.2)] text-[#9ca3af] transition-colors hover:border-[#22c55e] hover:text-[#22c55e]"
              >
                <span className="text-sm">📷</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Servicios
            </h4>

            <ul className="flex flex-col gap-2">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <span className="cursor-pointer text-xs text-[#9ca3af] transition-colors hover:text-[#22c55e]">
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
                <span className="mt-0.5">📍</span>
                <span>Cali, Colombia</span>
              </li>

              <li className="flex items-start gap-2 text-xs text-[#9ca3af]">
                <span className="mt-0.5">📞</span>
                <div className="flex flex-col">
                  <span>+57 317 3799589</span>
                  <span className="text-[#6b7280]">(WhatsApp)</span>
                </div>
              </li>

              <li className="flex items-start gap-2 text-xs text-[#9ca3af]">
                <span className="mt-0.5">📧</span>
                <span>info@printworks.co</span>
              </li>
            </ul>
          </div>

          {/* Schedule - HORARIOS DETALLADOS como en la imagen */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Horario comercial
            </h4>

            <div className="rounded-lg border border-[rgba(34,197,94,0.15)] bg-[rgba(34,197,94,0.03)] p-4">
              <p className="mb-3 text-xs font-medium text-[#eab308]">
                ⏰ Abierto en horario específico
              </p>

              <ul className="space-y-2 text-xs">
                <li className="flex justify-between text-[#9ca3af]">
                  <span className="font-medium text-white">Lunes</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between text-[#9ca3af]">
                  <span className="font-medium text-white">Martes</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between text-[#9ca3af]">
                  <span className="font-medium text-white">Miércoles</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between text-[#9ca3af]">
                  <span className="font-medium text-white">Jueves</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between text-[#9ca3af]">
                  <span className="font-medium text-white">Viernes</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between text-[#9ca3af]">
                  <span className="font-medium text-white">Sábado</span>
                  <span>10:00 - 14:00</span>
                </li>
                <li className="flex justify-between border-t border-[rgba(34,197,94,0.15)] pt-2 text-[#9ca3af]">
                  <span className="font-medium text-white">Domingo</span>
                  <span className="text-[#ef4444]">Cerrado</span>
                </li>
              </ul>

              {/* Indicador de estado actual (opcional) */}
              <div className="mt-3 flex items-center gap-2 rounded-full bg-[rgba(34,197,94,0.1)] px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]"></span>
                </span>
                <span className="text-[10px] font-medium text-[#22c55e]">
                  Abierto ahora - Cerramos a las 18:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(34,197,94,0.1)] px-4 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center sm:flex-row">
          <p className="text-xs text-[#6b7280]">
            {"PRINTWORKS " + new Date().getFullYear() +
              " - Todos los derechos reservados. Cali, Colombia."}
          </p>
          <p className="text-[10px] text-[#4b5563]">
            Real Prints for Real People 🖨️🌐
          </p>
        </div>
      </div>
    </footer>
  );
}