import Link from 'next/link'
import styles from './ChristmasBanner.module.scss'
import { TEMPORADA_NAVIDAD } from '@/constants/navidad'

export default function ChristmasBanner() {
  if (!TEMPORADA_NAVIDAD.activa) return null

  return (
    <section className={styles.wrap} aria-labelledby="navidad-banner">
      <Link href="/navidad" className={styles.post}>
        <video
          className={styles.img}
          src={TEMPORADA_NAVIDAD.video.src}
          poster={TEMPORADA_NAVIDAD.video.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Video de las Velas de los deseos: del diseño y el molde a la caja de regalo de 7 velas a $18.000"
        />
      </Link>
      <div className={styles.text}>
        <span className={styles.badge}>Solo por temporada</span>
        <h2 id="navidad-banner" className={styles.title}>
          Velas navideñas
        </h2>
        <p className={styles.product}>
          Velas de los deseos · caja de 7 velas · <strong>$18.000</strong>
        </p>
        <p className={styles.desc}>
          Cajas de regalo hechas a mano para la novena, el amigo secreto y la noche de Navidad. Se
          hacen solo en esta época y por cantidades limitadas.
        </p>
        <Link href="/navidad" className={styles.cta}>
          Ver las cajas navideñas
        </Link>
      </div>
    </section>
  )
}
