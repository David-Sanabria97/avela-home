import styles from './ExperienceBar.module.scss'

const ITEMS = [
  {
    id: 1,
    name: 'Cera Premium',
    desc: 'Utilizamos cera de soya 100% natural y ecológica.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M16 4C16 4 26 12 26 20C26 25.5 21.5 29 16 29C10.5 29 6 25.5 6 20C6 12 16 4 16 4Z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Fragancias Exclusivas',
    desc: 'Aromas únicos diseñados para cada momento.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M16 6v4M10 9l2 3M22 9l-2 3" strokeLinecap="round" />
        <path d="M10 16C10 12.7 12.7 10 16 10C19.3 10 22 12.7 22 16C22 21 16 26 16 26C16 26 10 21 10 16Z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Hechas a Mano',
    desc: 'Cada vela elaborada artesanalmente con amor.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M8 24C8 24 10 14 16 12C22 10 24 8 24 8" strokeLinecap="round" />
        <path d="M12 28C12 28 14 20 20 18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Larga Duración',
    desc: 'Disfruta más de 50 horas de experiencia única.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="16" cy="16" r="10" />
        <path d="M16 10v7l4 3" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function ExperienceBar() {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Experiencia Avela</span>
        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.name}>{item.name}</div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}