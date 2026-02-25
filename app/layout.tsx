import type { Metadata, Viewport } from 'next'
import { Rajdhani, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-orbitron" });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'PRINTWORKS - Real Prints for Real People',
  description: 'Soluciones integrales de impresion y publicidad visual. Servicios de impresion, Material P.O.P, Souvenirs, Produccion Litografica en Cali, Colombia.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/logo-printworks.png',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${rajdhani.variable} ${inter.variable} antialiased`} style={{ fontFamily: "var(--font-inter, Inter, sans-serif)", backgroundColor: "#0a0f0a", color: "#e8f5e8" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
