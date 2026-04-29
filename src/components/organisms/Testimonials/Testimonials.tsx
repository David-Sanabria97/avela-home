import styles from './Testimonials.module.scss'

const TESTIMONIALS = [
  {
    id: 1,
    text: 'Las velas de Avela transforman por completo mi hogar. Los aromas son increíbles y la calidad se nota desde el primer momento.',
    author: 'Mariana G.',
    location: 'Bogotá',
    initial: 'M',
  },
  {
    id: 2,
    text: 'Mi marca favorita de velas. Me encanta que sean artesanales y con ingredientes naturales. ¡100% recomendadas!',
    author: 'Andrea S.',
    location: 'Medellín',
    initial: 'A',
  },
  {
    id: 3,
    text: 'El empaque, los aromas, la duración... todo es perfecto. Se convirtieron en parte de mis rituales diarios.',
    author: 'Paola R.',
    location: 'Ibagué',
    initial: 'P',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Lo que dicen nuestras clientas</span>
        <h2 className={styles.title}>
          Historias <em>reales</em>
        </h2>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initial}</div>
                <div>
                  <span className={styles.name}>{t.author}</span>
                  <span className={styles.location}>
                    {t.location}{' '}
                    <span className={styles.verified}>Verificada</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}