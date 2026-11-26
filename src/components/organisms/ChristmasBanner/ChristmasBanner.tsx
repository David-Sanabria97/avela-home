import Image from 'next/image'
import Link from 'next/link'
import styles from './ChristmasBanner.module.scss'
import { TEMPORADA_NAVIDAD } from '@/constants/navidad'

export default function ChristmasBanner() {
  if (!TEMPORADA_NAVIDAD.activa) return null

  return (
    <section className={styles.wrap} aria-labelledby="navidad-banner">
      <Link href="/navidad" className={styles.post}>
        <Image
          src={TEMPORADA_NAVIDAD.post}
          alt="Velas de los deseos, caja de 7 velas a $18.000"
          sizes="(max-width: 768px) 100vw, 480px"
          placeholder="blur"
          className={styles.img}
        />
      </Link>
      <div className={styles.text}>
        <span className={styles.badge}>Solo por temporada</span>
        <h2 id="navidad-banner" className={styles.title}>
          Velas navideñas
        </h2>
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
