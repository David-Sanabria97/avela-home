import styles from './Footer.module.scss'
import Llamita from '@/img/llamita.svg'
import Image from 'next/image'

const LINKS = {
  ayuda: [
    'Envíos y entregas',
    'Cambios y devoluciones',
    'Términos y condiciones',
    'Política de privacidad',
  ],
  avela: [
  ],
  contacto: [
    'avelahomeco@gmail.com',
    '+57 317 694 8380',
    '@avela_home',
  ],
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>

          {/* Marca */}
          <div>
            <div className={styles.logo}>
              <Image src={Llamita.src} alt="Logo Avela" width={24} height={24} />
              avela home
            </div>
            <p className={styles.desc}>
              Velas artesanales de cera de soya premium.
              Ibagué, Colombia con amor. Bienestar · Natural · Consciente.
            </p>
            <span className={styles.tagline}>Enciende tu ritual</span>
            <div className={styles.socials}>
              {['ig', 'wa', 'tk'].map((s) => (
                <button key={s} className={styles.social}>{s}</button>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>Ayuda</div>
            <ul className={styles.colList}>
              {LINKS.ayuda.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.colLink}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sobre Avela */}
          <div>
            <div className={styles.colTitle}>Sobre Avela</div>
            <ul className={styles.colList}>
              {LINKS.avela.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.colLink}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <div className={styles.colTitle}>Contacto</div>
            <ul className={styles.colList}>
              {LINKS.contacto.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.colLink}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <span className={styles.copy}>
            © 2026 Avela Home · Ibagué, Colombia · Todos los derechos reservados.
          </span>
          <div className={styles.bottomLinks}>
            {['Privacidad', 'Términos', 'Cookies'].map((link) => (
              <a key={link} href="#" className={styles.bottomLink}>{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}