'use client'

import Image from 'next/image'
import { useState } from 'react'
import corcho from "@/img/corcho.jpeg"
import vidrio from "@/img/vidrio.jpeg"
import bambu from "@/img/bambu.jpeg"


import styles from './ProductGrid.module.scss'

const PRODUCTS = [
  {
    id: 1,
    name: 'Brisa de Lavanda',
    notes: 'Lavanda · Eucalipto · Romero',
    price: 20000,
    originalPrice: null,
    image: corcho,
    alt: 'Brisa de Lavanda',
  },
  {
    id: 2,
    name: 'Talco',
    notes: 'Talco',
    price: 23000,
    originalPrice: null,
    image: vidrio,
    alt: 'Talco',
  },
  {
    id: 3,
    name: 'Bambú',
    notes: 'Bambú',
    price: 45000,
    originalPrice: null,
    image: bambu,
    alt: 'Bambú',
  },
  
]

function formatPrice(amount: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(amount)
}

export default function ProductGrid() {
  const [wishlisted, setWishlisted] = useState<number[]>([])
  const [added, setAdded] = useState<number[]>([])

  function toggleWish(id: number) {
    setWishlisted((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  function handleAdd(id: number) {
    setAdded((prev) => [...prev, id])
    setTimeout(() => setAdded((prev) => prev.filter((i) => i !== id)), 1800)
  }

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
            <div className={styles.imageWrap}>
              <Image
                src={product.image}
                alt={product.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
              <button
                className={styles.wishBtn}
                onClick={() => toggleWish(product.id)}
                aria-label="Agregar a favoritos"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill={wishlisted.includes(product.id) ? '#B8935A' : 'none'}
                  stroke={wishlisted.includes(product.id) ? '#B8935A' : '#5C4433'}
                  strokeWidth="1.5"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
              <div className={styles.overlay}>
                <button className={styles.quickView}>Vista rápida</button>
              </div>
            </div>

            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.notes}>{product.notes}</p>
            <p className={styles.price}>
              {product.originalPrice && <s>{formatPrice(product.originalPrice)}</s>}
              {formatPrice(product.price)}
            </p>
            <button
              className={`${styles.addBtn} ${added.includes(product.id) ? styles.added : ''}`}
              onClick={() => handleAdd(product.id)}
            >
              {added.includes(product.id) ? '✓ Agregado' : 'Agregar al carrito'}
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}