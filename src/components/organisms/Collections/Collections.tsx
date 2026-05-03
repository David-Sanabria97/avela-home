'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './Collections.module.scss'
import { COLLECTIONS } from '@/constants/collections'

export default function Collections() {
  const router = useRouter()

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.eyebrow}>Nuestras colecciones</span>
          <h2 className={styles.title}>
            Aromas que cuentan <em>historias</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {COLLECTIONS.map((col) => (
            <div
              key={col.id}
              className={styles.card}
              onClick={() => router.push(`/colecciones?filter=todas`)}
            >
              <div className={styles.cardImg}>
                <Image src={col.image} alt={col.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.cardOverlay} />
              <div className={styles.cardBody}>
                <span className={styles.cardName}>{col.name}</span>
                <p className={styles.cardTagline}>{col.tagline}</p>
                <span className={styles.cardLink}>Ver colección →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
