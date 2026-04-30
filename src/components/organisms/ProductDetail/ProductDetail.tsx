'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './ProductDetail.module.scss'
import type { Product } from '@/app/producto/[slug]/page'

const AROMAS = ['Talco', 'Frutos Rojos', 'Bambú', 'Cuero']
const WHATSAPP_NUMBER = '573176948380'

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
  const [selectedAroma, setSelectedAroma] = useState<string>('')

  function buildWhatsAppUrl() {
    const aroma = selectedAroma || 'aroma por definir'
    const message = `¡Hola Avela! 🕯️ Me gustaría pedir:\n\n• ${product.name} — Aroma: ${aroma}\n• Precio: ${formatPrice(product.price)}\n• Incluye bolsa de regalo\n\n¿Está disponible?`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
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
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnWa}>
          
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Pedir por WhatsApp
          </a>

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