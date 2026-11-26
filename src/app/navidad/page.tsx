import type { Metadata } from 'next'
import Image from 'next/image'
import styles from './Navidad.module.scss'
import { PRODUCTOS_NAVIDAD_VISIBLES } from '@/constants/navidad'
import { buildWhatsAppUrl, formatPrice } from '@/hooks/useWhatsApp'

export const metadata: Metadata = {
  title: 'Velas navideñas',
  description:
    'Cajas de velas navideñas hechas a mano: Velas de los deseos, caja de 7 velas con Familia, Trabajo, Amor, Salud, Paz, Dinero y Éxito. Solo por temporada. Pide por WhatsApp con envío a toda Colombia.',
  alternates: { canonical: '/navidad' },
}

export default function NavidadPage() {
  return (
    <main className={styles.page}>
      <div className={styles.head}>
        <span className={styles.badge}>Solo por temporada</span>
        <h1 className={styles.title}>Velas navideñas</h1>
        <p className={styles.subtitle}>
          Cajas de regalo hechas a mano para la novena, el amigo secreto y la noche de Navidad. Se
          hacen solo en esta época y por cantidades limitadas: pídelas con tiempo.
        </p>
      </div>

      <div className={styles.list}>
        {PRODUCTOS_NAVIDAD_VISIBLES.map((p) => {
          const orderUrl = buildWhatsAppUrl(
            `¡Hola Avela! Quiero la caja ${p.name} (${p.contenido.toLowerCase()}) a ${formatPrice(p.price)}. ¿Está disponible?`
          )
          return (
            <article key={p.id} className={styles.card}>
              {/* Columnas proporcionales al ancho/alto de cada foto: quedan de la misma altura sin recortarse. */}
              <div
                className={styles.images}
                style={{
                  gridTemplateColumns: p.images
                    .map((img) => `minmax(0, ${img.src.width / img.src.height}fr)`)
                    .join(' '),
                }}
              >
                {p.images.map((img, i) => (
                  <Image
                    key={img.alt}
                    src={img.src}
                    alt={img.alt}
                    priority={i === 0}
                    placeholder="blur"
                    sizes="(max-width: 768px) 70vw, 420px"
                    className={styles.img}
                  />
                ))}
              </div>
              <div className={styles.info}>
                <span className={styles.kicker}>{p.contenido}</span>
                <h2 className={styles.name}>{p.name}</h2>
                <div className={styles.price}>
                  {formatPrice(p.price)} <span>la caja</span>
                </div>
                <p className={styles.desc}>{p.description}</p>
                <ul className={styles.details}>
                  {p.detalles.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <a href={orderUrl} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                  Pedir por WhatsApp
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </main>
  )
}
