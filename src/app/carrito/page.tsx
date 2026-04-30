import { Suspense } from 'react'
import Footer from '@/components/organisms/Footer/Footer'
import CartContent from './CartContent'

export default function CarritoPage() {
  return (
    <>
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <CartContent />
      </Suspense>
      <Footer />
    </>
  )
}