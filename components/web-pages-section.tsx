"use client";

import { useState } from "react";

export function WebPagesSection() {
  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <section id="paginas-web" className="relative px-4 py-20 sm:py-28">
      {/* Fondo decorativo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 30% 40%, rgba(34,197,94,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* EJEMPLOS DE PÁGINAS WEB */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#22c55e] sm:text-sm">
            EJEMPLOS DE PÁGINAS WEB
          </p>
          <h2
            className="mb-8 text-2xl font-bold uppercase leading-tight tracking-wider text-white sm:text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            SOLUCIONES A LA MEDIDA{" "}
            <span className="text-[#22c55e]">PARA HACER CRECER TU NEGOCIO</span>
          </h2>
        </div>

        {/* 3 Plan cards */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Plan 1 - Presencia */}
          <div className="group rounded-xl border border-[rgba(34,197,94,0.2)] bg-[rgba(10,20,10,0.5)] p-6 transition-all hover:border-[#22c55e] hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22c55e]/10 text-xl">
                📍
              </span>
              <h3 className="text-base font-bold text-white">
                Nivel 1 -{" "}
                <span className="text-[#22c55e] group-hover:underline">
                  Plan Presencia
                </span>
              </h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-[#9ca3af]">
              Ideal para negocios locales que necesitan aparecer en Google y
              mostrar su información profesional a clientes.
            </p>
            <div className="border-t border-[rgba(34,197,94,0.2)] pt-4">
              <p className="text-center text-sm font-bold text-[#eab308]">
                ⚡ Si no estás en Google, ¡no existes!
              </p>
            </div>
          </div>

          {/* Plan 2 - Crecimiento */}
          <div className="group rounded-xl border border-[rgba(234,179,8,0.25)] bg-[rgba(10,20,10,0.5)] p-6 transition-all hover:border-[#eab308] hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eab308]/10 text-xl">
                📈
              </span>
              <h3 className="text-base font-bold text-white">
                Nivel 2 -{" "}
                <span className="text-[#eab308] group-hover:underline">
                  Plan Crecimiento
                </span>
              </h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-[#9ca3af]">
              Páginas web diseñadas para generar clientes automáticamente, con
              formularios, contacto directo y automatización básica.
            </p>
            <div className="border-t border-[rgba(234,179,8,0.2)] pt-4">
              <p className="text-center text-sm font-bold text-[#22c55e]">
                📱 Diseño Responsive + Optimización SEO
              </p>
            </div>
          </div>

          {/* Plan 3 - Escala */}
          <div className="group rounded-xl border border-[rgba(239,68,68,0.2)] bg-[rgba(10,20,10,0.5)] p-6 transition-all hover:border-[#ef4444] hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ef4444]/10 text-xl">
                🚀
              </span>
              <h3 className="text-base font-bold text-white">
                Nivel 3 -{" "}
                <span className="text-[#ef4444] group-hover:underline">
                  Plan Escala
                </span>
              </h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-[#9ca3af]">
              Infraestructura robusta para empresas que necesitan E-Commerce o
              plataformas más avanzadas.
            </p>
            <div className="border-t border-[rgba(239,68,68,0.2)] pt-4">
              <p className="text-center text-sm font-bold text-[#eab308]">
                🔒 Seguridad, velocidad y estabilidad profesional.
              </p>
            </div>
          </div>
        </div>

        {/* Botón de información flotante */}
        <div className="mb-8 flex justify-center">
          <button
            onClick={() => setShowInfoModal(!showInfoModal)}
            className="group relative inline-flex items-center gap-3 rounded-full border border-[#eab308]/30 bg-[rgba(10,20,10,0.8)] px-8 py-4 transition-all hover:border-[#eab308] hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#eab308]/0 via-[#eab308]/10 to-[#eab308]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#eab308]/20 text-xl">
              💡
            </span>
            <span className="relative text-sm font-bold uppercase tracking-wider text-white">
              ¿Por qué necesitas una página web?
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`relative h-5 w-5 text-[#eab308] transition-transform duration-300 ${
                showInfoModal ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Modal/Ventana de información - CORREGIDO PARA VER TÍTULO COMPLETO */}
        {showInfoModal && (
          <>
            {/* Overlay oscuro */}
            <div 
              className="fixed inset-0 bg-black/85 backdrop-blur-sm z-40"
              onClick={() => setShowInfoModal(false)}
            />
            
            {/* Modal centrado - CON ESPACIO SUPERIOR PARA VER TÍTULO */}
            <div className="fixed inset-0 flex items-start justify-center p-4 z-50 overflow-y-auto pt-16 sm:pt-20">
              <div 
                className="relative w-full max-w-2xl rounded-2xl border border-[#eab308]/20 bg-gradient-to-b from-[rgba(20,30,20,0.98)] to-[rgba(10,15,10,0.98)] p-6 sm:p-8 backdrop-blur-sm shadow-2xl mt-8 sm:mt-12"
                style={{ 
                  maxHeight: "80vh",
                  overflowY: "auto",
                  marginTop: "2rem"
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Decoración superior */}
                <div className="absolute left-0 top-0 h-1 w-20 rounded-tl-2xl bg-gradient-to-r from-[#eab308] to-transparent" />
                <div className="absolute right-0 top-0 h-1 w-20 rounded-tr-2xl bg-gradient-to-l from-[#22c55e] to-transparent" />

                {/* Contenido del modal */}
                <div className="space-y-6 pt-2">
                  {/* Título principal - AHORA VISIBLE */}
                  <h3
                    className="text-center text-2xl font-bold uppercase tracking-wider text-[#eab308] sm:text-3xl"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    ¿Tu marca está lista para el siguiente nivel?
                  </h3>

                  {/* Texto destacado */}
                  <p className="text-center text-base leading-relaxed text-[#d1d5db] sm:text-lg">
                    En <strong className="text-white">Printworks</strong> unimos lo
                    mejor de dos mundos. Creamos{" "}
                    <strong className="text-[#eab308]">
                      impresiones que impactan
                    </strong>{" "}
                    y{" "}
                    <strong className="text-[#22c55e]">
                      páginas web que convierten
                    </strong>
                    .
                  </p>

                  <p className="text-center text-sm leading-relaxed text-[#9ca3af] sm:text-base">
                    No importa si estás en <strong className="text-white">Cali</strong>
                    , en cualquier lugar de{" "}
                    <strong className="text-white">Colombia</strong> o incluso en otro
                    país. Personalizamos tu éxito con estilo, tecnología y seguridad.
                  </p>

                  {/* Separador decorativo */}
                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-[rgba(234,179,8,0.2)]"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-[rgba(10,20,10,0.98)] px-4 text-xs text-[#eab308]">
                        ⚠️ ATENCIÓN
                      </span>
                    </div>
                  </div>

                  {/* Mensaje de advertencia */}
                  <div className="rounded-xl border border-[#eab308]/20 bg-[rgba(234,179,8,0.05)] p-6 text-center">
                    <p className="mb-4 text-base leading-relaxed text-[#d1d5db]">
                      Muchos emprendedores construyen su marca solo en redes sociales.
                      Pero las redes son{" "}
                      <strong className="text-[#eab308]">"terreno prestado"</strong>.
                      Si mañana cambia el algoritmo o cierran tu cuenta...
                    </p>
                    <p className="mb-4 text-2xl font-black text-[#ef4444]">
                      ¡Tu negocio desaparece!
                    </p>

                    {/* Property box */}
                    <div className="mt-6 rounded-lg border border-[#22c55e]/30 bg-[rgba(34,197,94,0.05)] p-5">
                      <h4 className="mb-2 text-lg font-bold text-white">
                        Una página web es tu propiedad privada
                      </h4>
                      <p className="text-sm text-[#d1d5db]">
                        Es el único lugar donde tú pones las reglas y donde tus
                        clientes pueden encontrarte en Google cuando buscan tus
                        servicios.
                      </p>
                    </div>
                  </div>

                  {/* Texto adicional "Tú nombró descansar..." */}
                  <p className="text-center text-lg font-bold text-white italic">
                    Tú negocio descansa...
                  </p>

                  {/* Botón X en la parte inferior */}
                  <div className="flex justify-center pt-4">
                    <button
                      onClick={() => setShowInfoModal(false)}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eab308] text-black font-bold text-3xl shadow-lg hover:bg-[#22c55e] hover:scale-110 transition-all border-2 border-white/20 mx-auto"
                      style={{
                        minHeight: "56px",
                        minWidth: "56px",
                        cursor: "pointer",
                        boxShadow: "0 0 25px rgba(234,179,8,0.6)"
                      }}
                      aria-label="Cerrar"
                    >
                      ✕
                    </button>
                  </div>

                  {/* CTA dentro del modal */}
                  <div className="flex justify-center pt-4 pb-2">
                    <a
                      href="#contacto"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#eab308] to-[#22c55e] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0a0f0a] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] active:scale-95"
                      style={{ 
                        minWidth: "220px",
                        minHeight: "54px"
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowInfoModal(false);
                      }}
                    >
                      <span className="text-lg">🚀</span>
                      OBTENER PÁGINA WEB
                      <span className="text-lg">✨</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* El resto del contenido */}
        <div className="mt-12">
          {/* Título modificado */}
          <div className="mb-10">
            <h3
              className="mb-6 text-center text-xl font-bold uppercase tracking-wider sm:text-2xl"
              style={{ color: "#eab308", fontFamily: "var(--font-orbitron)" }}
            >
              POR QUÉ TRABAJAR CON NOSOTROS TU PAGINA WEB?
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-lg border border-[rgba(34,197,94,0.1)] bg-[rgba(10,20,10,0.3)] p-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-sm text-[#22c55e]">
                  ✓
                </span>
                <p className="text-sm text-[#d1d5db]">
                  Diseño <strong className="text-white">Responsive</strong> que se ve
                  perfecto en celular, tablet y computador.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-[rgba(34,197,94,0.1)] bg-[rgba(10,20,10,0.3)] p-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-sm text-[#22c55e]">
                  ✓
                </span>
                <p className="text-sm text-[#d1d5db]">
                  Optimización <strong className="text-[#22c55e]">SEO</strong> para
                  aparecer en Google.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-[rgba(34,197,94,0.1)] bg-[rgba(10,20,10,0.3)] p-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-sm text-[#22c55e]">
                  ✓
                </span>
                <p className="text-sm text-[#d1d5db]">
                  Sitios ultra rápidos que cargan en{" "}
                  <strong className="text-white">menos de 2 segundos</strong>.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-[rgba(34,197,94,0.1)] bg-[rgba(10,20,10,0.3)] p-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-sm text-[#22c55e]">
                  ✓
                </span>
                <p className="text-sm text-[#d1d5db]">
                  Enfoque <strong className="text-white">100% en conversión</strong>{" "}
                  para generar clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-block rounded-2xl border border-[rgba(34,197,94,0.2)] bg-gradient-to-b from-[rgba(34,197,94,0.05)] to-transparent p-6">
              <p className="mb-2 text-base font-bold text-white sm:text-lg">
                Es hora de que tu negocio trabaje mientras tú descansas
              </p>
              <p className="text-sm text-[#9ca3af]">
                Una página web profesional es tu mejor vendedor{" "}
                <strong className="text-[#22c55e]">disponible 24/7</strong>
              </p>
              <div className="mt-4 flex justify-center gap-2 text-2xl">
                <span>⚡</span>
                <span>🚀</span>
                <span>💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos para animación */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}