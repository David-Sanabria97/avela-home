import type { Metadata } from 'next'
import { Cormorant_Garamond, Lora } from 'next/font/google'
import './globals.scss'
import Navbar from '@/components/organisms/Navbar/Navbar'
import Footer from '@/components/organisms/Footer/Footer'
import WhatsAppButton from '@/components/atoms/WhatsAppButton/WhatsAppButton'
import { Analytics } from '@vercel/analytics/next'
import JsonLd from '@/components/atoms/JsonLd/JsonLd'
import { SITE } from '@/constants/site'
import { EMPAQUES } from '@/constants/products'

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
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Avela Home — Velas aromáticas artesanales en Bogotá y Flandes',
    template: '%s · Avela Home',
  },
  description: SITE.description,
  keywords: SITE.keywords,
  applicationName: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Avela Home — Velas aromáticas artesanales',
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avela Home — Velas aromáticas artesanales',
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

const prices = EMPAQUES.map((e) => e.price)

const STORE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'OnlineStore',
  '@id': `${SITE.url}/#tienda`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/icon.png`,
  image: `${SITE.url}/opengraph-image.png`,
  description: SITE.description,
  telephone: SITE.phone,
  email: SITE.email,
  sameAs: [SITE.instagram],
  areaServed: SITE.areaServed.map((name) =>
    name === 'Colombia'
      ? { '@type': 'Country', name }
      : { '@type': 'City', name }
  ),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bogotá',
    addressRegion: 'Bogotá D.C.',
    addressCountry: 'CO',
  },
  priceRange: `$${Math.min(...prices).toLocaleString('es-CO')} – $${Math.max(...prices).toLocaleString('es-CO')} COP`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE.phone,
    contactType: 'sales',
    availableLanguage: 'Spanish',
    areaServed: 'CO',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO" className={`${cormorant.variable} ${lora.variable}`}>
      <body>
        <JsonLd data={STORE_SCHEMA} />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
