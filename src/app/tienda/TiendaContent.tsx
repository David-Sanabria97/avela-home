'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ProductFilter, { FilterType } from '@/components/organisms/ProductFilter/ProductFilter'
import styles from './tienda.module.scss'
import imgCorcho from '@/img/corcho.jpeg'
import imgVidrio from '@/img/vidrio.jpeg'
import imgBambu from '@/img/bambu.jpeg'

const AROMAS = ['Talco', 'Frutos Rojos', 'Bambú', 'Cuero']

const PRODUCTS = [
  {
    id: 1,
    slug: 'vela-corcho',
    name: 'Vela Corcho',
    type: 'aromatica' as FilterType,
    price: 20000,
    originalPrice: null,
    isNew: true,
    isBestSeller: false,
    image: imgCorcho,
  },
  {
    id: 2,
    slug: 'vela-vidrio',
    name: 'Vela Vidrio',
    type: 'aromatica' as FilterType,
    price: 23000,
    originalPrice: null,
    isNew: false,
    isBestSeller: true,
    image: imgVidrio,
  },
  {
    id: 3,
    slug: 'vela-bambu',
    name: 'Vela Bambú',
    type: 'aromatica' as FilterType,
    price: 45000,
    originalPrice: null,
    isNew: false,
    isBestSeller: false,
    image: imgBambu,
  },
]

function formatPrice(amount: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(amount)
}

export default function TiendaContent() {
  const searchParams = useSearchParams()
  const filterParam = searchParams.get('filter') as FilterType | null

  const [activeFilter, setActiveFilter] = useState<FilterType>(filterParam ?? 'todas')
  const [selectedAromas, setSelectedAromas] = useState<Record<number, string>>({})
  const [wishlisted, setWishlisted] = useState<number[]>([])
  const [added, setAdded] = useState<number[]>([])

  useEffect(() => {
    if (filterParam) setActiveFilter(filterParam)
  }, [filterParam])

  const filtered = activeFilter === 'todas'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.type === activeFilter)

  function toggleWish(id: number) {
    setWishlisted((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  function handleAdd(id: number) {
    setAdded((prev) => [...prev, id])
    setTimeout(() => setAdded((prev) => prev.filter((i) => i !== id)), 1800)
  }

  function selectAroma(productId: number, aroma: string) {
    setSelectedAromas((prev) => ({ ...prev, [productId]: aroma }))
  }

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Colección completa</span>
          <h1 className={styles.title}>Nuestras <em>velas</em></h1>
          <p className={styles.subtitle}>
            Elige tu empaque y tu aroma favorito. Bolsa de regalo incluida.
          </p>
        </div>
      </div>

      <ProductFilter
        active={activeFilter}
        total={filtered.length}
        onChange={setActiveFilter}
      />

      <section className={styles.section}>
        <div className={styles.grid}>
          {filtered.map((product) => (
            <article key={product.id} className={styles.card}>
              <Link href={`/producto/${product.slug}`}>
                <div className={styles.imageWrap}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {product.isNew && (
                    <span className={`${styles.badge} ${styles.badgeNew}`}>Nuevo</span>
                  )}
                  {product.isBestSeller && (
                    <span className={`${styles.badge} ${styles.badgeBest}`}>Más vendida</span>
                  )}
                  <button
                    className={styles.wishBtn}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleWish(product.id)
                    }}
                    aria-label="Favorito"
                  >
                    <svg
                      width="16" height="16" viewBox="0 0 24 24"
                      fill={wishlisted.includes(product.id) ? '#B8935A' : 'none'}
                      stroke={wishlisted.includes(product.id) ? '#B8935A' : '#5C4433'}
                      strokeWidth="1.5"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>

                <h3 className={styles.name}>{product.name}</h3>
              </Link>

              <div className={styles.aromasWrap}>
                <span className={styles.aromaLabel}>Elige tu aroma</span>
                <div className={styles.aromas}>
                  {AROMAS.map((aroma) => (
                    <button
                      key={aroma}
                      className={`${styles.aromaBtn} ${selectedAromas[product.id] === aroma ? styles.aromaActive : ''}`}
                      onClick={() => selectAroma(product.id, aroma)}
                    >
                      {aroma}
                    </button>
                  ))}
                </div>
              </div>

              <p className={styles.price}>{formatPrice(product.price)}</p>

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
    </>
  )
}