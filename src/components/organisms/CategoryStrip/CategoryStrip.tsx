'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import kit3Velas from '@/img/kit-3-velas .png'
import velaVidrio from '@/img/vidrio.jpeg'
import styles from './CategoryStrip.module.scss'

const CATEGORIES = [
  {
    id: 1,
    label: 'Colección',
    name: 'Velas Aromáticas',
    filter: 'aromatica',
    image: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=700&q=80',
    alt: 'Velas aromáticas Avela',
  },
  {
    id: 2,
    label: 'Colección',
    name: 'Avela Kits',
    filter: 'kit',
    image: kit3Velas,
    alt: 'Avela Kits ',
  },
  {
    id: 3,
    label: 'Colección',
    name: 'Velas de Masaje',
    filter: 'masaje',
    image: velaVidrio,
    alt: 'Velas de masaje Avela',
  },
]

export default function CategoryStrip() {
  const router = useRouter()

  return (
    <div className={styles.section}>
      {CATEGORIES.map((cat) => (
        <div
          key={cat.id}
          className={styles.card}
          onClick={() => router.push(`/colecciones?filter=${cat.filter}`)}
          style={{ cursor: 'pointer' }}
        >
          <div className={styles.image}>
            <Image src={cat.image} alt={cat.alt} fill style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.overlay} />
          <div className={styles.body}>
            <div className={styles.label}>{cat.label}</div>
            <div className={styles.name}>{cat.name}</div>
            <div className={styles.link}>Explorar →</div>
          </div>
        </div>
      ))}
    </div>
  )
}
