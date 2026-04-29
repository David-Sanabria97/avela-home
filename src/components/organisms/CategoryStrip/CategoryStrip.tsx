import Image from 'next/image'
import styles from './CategoryStrip.module.scss'

const CATEGORIES = [
  {
    id: 1,
    label: 'Colección',
    name: 'Velas Aromáticas',
    image: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=700&q=80',
    alt: 'Velas aromáticas Avela',
  },
  {
    id: 2,
    label: 'Colección',
    name: 'Kits de Regalo',
    image: 'https://images.unsplash.com/photo-1607006483224-56a1c5b5a4dd?w=700&q=80',
    alt: 'Kits de regalo Avela',
  },
  {
    id: 3,
    label: 'Colección',
    name: 'Velas de Masaje',
    image: 'https://images.unsplash.com/photo-1519587577062-b67fe6c7f8c0?w=700&q=80',
    alt: 'Velas de masaje Avela',
  },
]

export default function CategoryStrip() {
  return (
    <div className={styles.section}>
      {CATEGORIES.map((cat) => (
        <div key={cat.id} className={styles.card}>
          <div className={styles.image}>
            <Image
              src={cat.image}
              alt={cat.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
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