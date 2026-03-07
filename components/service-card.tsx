"use client"

import { useState, type ReactNode } from "react"
import { X } from "lucide-react"

interface ServiceCardProps {
  title: string
  icon: ReactNode
  description: string
  items: string[]
  whatsappMessage: string
}

export function ServiceCard({ title, icon, description, items, whatsappMessage }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({ nombre: "", email: "", whatsapp: "", mensaje: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hola PRINTWORKS! Soy ${formData.nombre}. ${formData.mensaje}. Mi correo: ${formData.email}. Mi WhatsApp: ${formData.whatsapp}. Servicio: ${title}`
    window.open(`https://wa.me/573152572025?text=${encodeURIComponent(text)}`, "_blank")
    setShowContactForm(false)
    setFormData({ nombre: "", email: "", whatsapp: "", mensaje: "" })
  }

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-[rgba(34,197,94,0.2)] bg-[rgba(10,20,10,0.85)] p-6 transition-all duration-500 hover:border-[rgba(34,197,94,0.5)] hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => { setIsExpanded(false); setShowContactForm(false) }}
    >
      {/* Glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.08),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Header */}
      <div className="relative z-10 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[rgba(34,197,94,0.15)] text-[#22c55e] transition-all duration-300 group-hover:bg-[rgba(34,197,94,0.25)] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-sans text-lg font-bold tracking-wider text-[#e8f5e8] transition-colors duration-300 group-hover:text-[#22c55e]">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-[#8aaa8a]">{description}</p>
        </div>
      </div>

      {/* Expanded content */}
      <div
        className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "mt-4 max-h-[600px] opacity-100" : "mt-0 max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-md bg-[rgba(34,197,94,0.05)] px-3 py-2 text-sm text-[#c4e0c4] transition-all duration-200 hover:bg-[rgba(34,197,94,0.12)] hover:text-[#e8f5e8]"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#22c55e]" />
              {item}
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={`https://wa.me/573173799589?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#22c55e] px-5 py-2.5 text-sm font-bold tracking-wider text-[#0a0f0a] transition-all duration-300 hover:bg-[#16a34a] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:scale-105"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <button
            onClick={(e) => { e.stopPropagation(); setShowContactForm(!showContactForm) }}
            className="inline-flex items-center gap-2 rounded-lg border border-[rgba(34,197,94,0.4)] bg-transparent px-5 py-2.5 text-sm font-bold tracking-wider text-[#22c55e] transition-all duration-300 hover:bg-[rgba(34,197,94,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:scale-105"
          >
            <MailIcon />
            Cotizar
          </button>
        </div>

        {/* Contact form */}
        {showContactForm && (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3 rounded-lg border border-[rgba(34,197,94,0.2)] bg-[rgba(10,20,10,0.9)] p-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold tracking-wider text-[#22c55e]">SOLICITAR COTIZACION</h4>
              <button type="button" onClick={() => setShowContactForm(false)} className="text-[#8aaa8a] hover:text-[#e8f5e8]">
                <X className="h-4 w-4" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Tu nombre"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="w-full rounded-md border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.05)] px-3 py-2 text-sm text-[#e8f5e8] placeholder-[#6a8a6a] outline-none transition-colors focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
            />
            <input
              type="email"
              placeholder="Tu correo electronico"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-md border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.05)] px-3 py-2 text-sm text-[#e8f5e8] placeholder-[#6a8a6a] outline-none transition-colors focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
            />
            <input
              type="tel"
              placeholder="Tu WhatsApp"
              required
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full rounded-md border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.05)] px-3 py-2 text-sm text-[#e8f5e8] placeholder-[#6a8a6a] outline-none transition-colors focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
            />
            <textarea
              placeholder="Describe lo que necesitas..."
              rows={2}
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              className="w-full rounded-md border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.05)] px-3 py-2 text-sm text-[#e8f5e8] placeholder-[#6a8a6a] outline-none transition-colors focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-[#22c55e] py-2.5 text-sm font-bold tracking-wider text-[#0a0f0a] transition-all duration-300 hover:bg-[#16a34a] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
            >
              ENVIAR POR WHATSAPP
            </button>
          </form>
        )}
      </div>

      {/* Peek indicator */}
      <div className={`relative z-10 mt-3 flex items-center gap-1 text-xs text-[#6a8a6a] transition-all duration-300 ${isExpanded ? "opacity-0" : "opacity-100"}`}>
        <span className="h-px flex-1 bg-[rgba(34,197,94,0.15)]" />
        <span className="tracking-wider">HOVER PARA VER MAS</span>
        <span className="h-px flex-1 bg-[rgba(34,197,94,0.15)]" />
      </div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
