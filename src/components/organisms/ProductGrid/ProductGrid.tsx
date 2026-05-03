'use client'
import Link from 'next/link'

import Image from 'next/image'
import { PRODUCTS } from '@/app/producto/[slug]/page'

import styles from './ProductGrid.module.scss'

function formatPrice(amount: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(amount)
}

export default function ProductGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Destacados</span>
          <h2 className={styles.title}>
            Nuestras <em>velas</em>
          </h2>
        </div>
        <button className={styles.seeAll}>Ver todos →</button>
      </div>

      <div className={styles.grid}>
        {PRODUCTS.map((product) => (
          <article key={product.id} className={styles.card}>
            <Link href={`/producto/${product.slug}`} className={styles.verAromasBtn}>
              <div className={styles.imageWrap}>
                <Image src={product.image} alt={product.slug} fill style={{ objectFit: 'cover' }} />
                <div className={styles.overlay}>
                  <button className={styles.quickView}>Vista rápida</button>
                </div>
              </div>

              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.price}>
                {product.originalPrice && <s>{formatPrice(product.originalPrice)}</s>}
                {formatPrice(product.price)}
              </p>
              <p className={`${styles.addBtn}`}>Ver aromas</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
