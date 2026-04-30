import { Suspense } from 'react'
import Navbar from '@/components/organisms/Navbar/Navbar'
import Footer from '@/components/organisms/Footer/Footer'
import WhatsAppButton from '@/components/atoms/WhatsAppButton/WhatsAppButton'
import TiendaContent from './TiendaContent'

export default function TiendaPage() {
  return (
    <>
      <Navbar cartCount={0} />
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <TiendaContent />
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </>
  )
}