import styles from './ProductReviews.module.scss'
import type { Review } from '@/constants/reviews'

/** Reseñas visibles del producto. Google exige que las reseñas del JSON-LD se vean en la página. */
export default function ProductReviews({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) return null

  const promedio = reviews.reduce((suma, r) => suma + r.calificacion, 0) / reviews.length

  return (
    <section className={styles.section} aria-labelledby="resenas-titulo">
      <span className={styles.eyebrow}>Opiniones de clientes</span>
      <h2 id="resenas-titulo" className={styles.title}>
        {promedio.toLocaleString('es-CO', { maximumFractionDigits: 1 })} de 5 · {reviews.length}{' '}
        {reviews.length === 1 ? 'reseña' : 'reseñas'}
      </h2>
      <div className={styles.grid}>
        {reviews.map((r) => (
          <article key={`${r.autor}-${r.fecha}`} className={styles.card}>
            <div className={styles.stars} aria-label={`${r.calificacion} de 5 estrellas`}>
              {'★'.repeat(r.calificacion)}
              {'☆'.repeat(5 - r.calificacion)}
            </div>
            <p className={styles.text}>{r.texto}</p>
            <p className={styles.author}>
              {r.autor}
              {r.ciudad ? ` · ${r.ciudad}` : ''}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
