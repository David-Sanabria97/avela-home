import Image from 'next/image'
import Link from 'next/link'
import styles from './AboutSection.module.scss'

export default function AboutSection() {
  return (
    <section className={styles.section}>
      {/* Imagen izquierda */}
      <div className={styles.imageWrap}>
        <Image
          src="https://images.unsplash.com/photo-1607006483224-56a1c5b5a4dd?w=900&q=80"
          alt="Sobre Avela Home"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Texto derecha */}
      <div className={styles.right}>
        <span className={styles.eyebrow}>Sobre Avela</span>
        <h2 className={styles.title}>
          Más que velas,
          <br />
          creamos <em>momentos.</em>
        </h2>
        <p className={styles.desc}>
          Avela Home nace del deseo de traer calma a lo cotidiano. Cada vela es una invitación a
          detenerte, respirar y volver a ti.
        </p>
        <Link href="/sobre-avela" className={styles.link}>
          Conocer nuestra historia →
        </Link>
      </div>
    </section>
  )
}
