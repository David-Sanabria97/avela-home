import type { Metadata } from 'next'
import { Cormorant_Garamond, Lora } from 'next/font/google'
import './globals.scss'
import Navbar from '@/components/organisms/Navbar/Navbar'
import Footer from '@/components/organisms/Footer/Footer'
import WhatsAppButton from '@/components/atoms/WhatsAppButton/WhatsAppButton'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Avela Home — Velas Artesanales · Bogotá y Flandes, Colombia',
  description: 'Velas aromáticas y de masaje artesanales. Bogotá y Flandes, Colombia.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${lora.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
