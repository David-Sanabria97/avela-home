import { Suspense } from 'react'
import Navbar from '@/components/organisms/Navbar/Navbar'
import Footer from '@/components/organisms/Footer/Footer'
import CartContent from './CartContent'

export default function CarritoPage() {
  return (
    <>
      <Navbar cartCount={0} />
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <CartContent />
      </Suspense>
      <Footer />
    </>
  )
}