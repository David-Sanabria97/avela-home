'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './ProductDetail.module.scss'
import type { Product } from '@/app/producto/[slug]/page'
import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'

const AROMAS = ['Talco', 'Frutos Rojos', 'Bambú', 'Cuero']

const FEATURES = [
  '70% cera de soya · 30% parafina premium',
  'Bolsa de regalo incluida',
  'Handpoured en Ibagué, Colombia',
  'Quema limpia y pareja',
]

function formatPrice(amount: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(amount)
}

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {

    const { addItem } = useCartStore()
    const router = useRouter()

  const [selectedAroma, setSelectedAroma] = useState<string>('')

  function handleAddToCart() {
  if (!selectedAroma) {
    alert('Por favor selecciona un aroma')
    return
  }
  addItem({
    id: product.id ?? 1,
    slug: product.slug,
    name: product.name,
    price: product.price,
    aroma: selectedAroma,
    image: '',
  })
  router.push('/carrito')
}

  return (
    <section className={styles.section}>

      <div className={styles.imageWrap}>
       <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
        <div className={styles.bagNote}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8935A" strokeWidth="1.5">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className={styles.bagText}>Bolsa de regalo incluida</span>
        </div>
      </div>

      <div className={styles.info}>
        <span className={styles.eyebrow}>Vela artesanal · Avela Home</span>
        <h1 className={styles.name}>{product.name}</h1>
        <div className={styles.price}>{formatPrice(product.price)}</div>
        <p className={styles.desc}>{product.description}</p>

        <div className={styles.features}>
          {FEATURES.map((f) => (
            <div key={f} className={styles.feature}>
              <span className={styles.featureDot} />
              {f}
            </div>
          ))}
        </div>

        <div className={styles.aromaSection}>
          <span className={styles.aromaTitle}>
            Elige tu aroma
            {selectedAroma && (
              <span className={styles.aromaSelected}> — {selectedAroma}</span>
            )}
          </span>
          <div className={styles.aromas}>
            {AROMAS.map((aroma) => (
              <button
                key={aroma}
                className={`${styles.aromaBtn} ${selectedAroma === aroma ? styles.active : ''}`}
                onClick={() => setSelectedAroma(aroma)}
              >
                {aroma}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.cta}>
        <button onClick={handleAddToCart} className={styles.btnWa}>
            Agregar al carrito
        </button>

          <Link href="/tienda" className={styles.btnSecondary}>
            Ver más velas
          </Link>

          <p className={styles.hint}>
            Te responderemos en menos de 24 horas con disponibilidad y confirmación del pedido.
          </p>
        </div>
      </div>

    </section>
  )
}