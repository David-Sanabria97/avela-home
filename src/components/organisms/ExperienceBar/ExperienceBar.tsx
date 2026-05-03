import styles from './ExperienceBar.module.scss'

const ITEMS = [
  {
    id: 1,
    name: 'Ingredientes\nNaturales',
    desc: 'Cera de soya y fragancias libres de tóxicos.',
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M18 6C18 6 8 14 8 22C8 27.5 12.5 31 18 31C23.5 31 28 27.5 28 22C28 14 18 6 18 6Z" />
        <path d="M18 31V18" strokeLinecap="round" />
        <path d="M18 22C18 22 13 19 10 15" strokeLinecap="round" />
        <path d="M18 18C18 18 22 16 25 13" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Hechas a Mano\nen Colombia',
    desc: 'Cada vela es creada con intención y cuidado.',
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M12 20V28H24V20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 20H27" strokeLinecap="round" />
        <path d="M18 8V20" strokeLinecap="round" />
        <path d="M14 12C14 12 16 8 18 8C20 8 22 12 22 12" strokeLinecap="round" />
        <path d="M14 16C14 16 16 14 18 14C20 14 22 16 22 16" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Duración\nProlongada',
    desc: 'Más de 40 horas de aroma y bienestar.',
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="18" cy="20" r="10" />
        <path d="M18 14v7l4 3" strokeLinecap="round" />
        <path d="M14 6h8" strokeLinecap="round" />
        <path d="M18 6v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Empaques\nde Lujo',
    desc: 'Perfectas para ti o para regalar.',
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <rect x="8" y="16" width="20" height="14" rx="1" />
        <path d="M6 16h24" strokeLinecap="round" />
        <path d="M18 16V30" strokeLinecap="round" />
        <path d="M18 16C18 16 14 12 14 9C14 7 15.5 6 17 6C18 6 18.8 6.8 18 8C17.2 6.8 18 6 19 6C20.5 6 22 7 22 9C22 12 18 16 18 16Z" />
      </svg>
    ),
  },
]

export default function ExperienceBar() {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.name}>
                {item.name.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
