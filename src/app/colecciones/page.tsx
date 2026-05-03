import { Suspense } from 'react'

import ColeccionesContent from './ColeccionesContent'

export default function ColeccionesPage() {
  return (
    <>
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <ColeccionesContent />
      </Suspense>
    </>
  )
}
