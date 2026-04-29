import Image from 'next/image'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.eyebrow}>
          Bienestar · Natural · Consciente
        </div>

        <h1 className={styles.title}>
          Ilumina tus<br />
          <em>rituales</em>
        </h1>

        <p className={styles.subtitle}>
          Velas aromáticas artesanales creadas para transformar
          tus espacios en experiencias memorables.
        </p>

        <div className={styles.ctas}>
          <button className={styles.btnDark}>
            Comprar colección
          </button>
          <button className={styles.btnOutline}>
            Descubrir aromas
          </button>
        </div>

        <div className={styles.trust}>
          <span className={styles.trustItem}>
            <span className={styles.trustDot} />
            Cera de soya 100% natural
          </span>
          <span className={styles.trustItem}>
            <span className={styles.trustDot} />
            Handpoured en Ibagué
          </span>
          <span className={styles.trustItem}>
            <span className={styles.trustDot} />
            Bolsa regalo incluida
          </span>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.imageWrap}>
          <Image
            src="https://images.unsplash.com/photo-1602928309543-c9eb7b148f69?w=900&q=80"
            alt="Vela Avela encendida"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.badge}>
            <div className={styles.badgeLabel}>Desde</div>
            <div className={styles.badgeValue}>$35.000 COP</div>
            <div className={styles.badgeSub}>Envío gratis en tu primer pedido</div>
          </div>
        </div>
      </div>
    </section>
  )
}