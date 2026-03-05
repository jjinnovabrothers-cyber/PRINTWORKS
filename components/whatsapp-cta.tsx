export function WhatsAppCTA() {
  return (
    <section className="relative px-4 py-10">
      <div className="mx-auto max-w-md">
        {/* WhatsApp button */}
        <a
          href="https://wa.me/573173799589?text=Hola%20PRINTWORKS%2C%20quiero%20mas%20informacion%20sobre%20paginas%20web"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 rounded-xl border-2 border-[#22c55e] bg-[rgba(10,20,10,0.9)] px-8 py-5 transition-all duration-300 hover:bg-[rgba(34,197,94,0.15)] hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:scale-105"
        >
          <svg viewBox="0 0 24 24" fill="#25D366" className="h-10 w-10 shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <div>
            <span className="text-sm tracking-wider" style={{ color: "#ffffff" }}>WhatsApp:</span>
            <span className="ml-2 text-2xl font-bold tracking-wider md:text-3xl" style={{ color: "#ffffff" }}>
              317 379 9589
            </span>
          </div>
        </a>

        {/* Location */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-base font-bold" style={{ color: "#22c55e" }}>
            Cali, Colombia
          </span>
        </div>
      </div>
    </section>
  )
}
