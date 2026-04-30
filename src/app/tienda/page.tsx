import { Suspense } from 'react'

import TiendaContent from './TiendaContent'

export default function TiendaPage() {
  return (
    <>
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <TiendaContent />
      </Suspense>

    </>
  )
}