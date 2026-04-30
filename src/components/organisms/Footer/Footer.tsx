import styles from './Footer.module.scss'

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
              <svg width="18" height="22" viewBox="0 0 20 26" fill="none">
                <path
                  d="M10 1C10 1 18 8.5 18 15.5C18 20.5 14.4 24 10 24C5.6 24 2 20.5 2 15.5C2 8.5 10 1 10 1Z"
                  fill="#B8935A"
                  opacity="0.7"
                />
                <path
                  d="M10 6C10 6 14 11 14 15.5C14 18.5 12.2 20.5 10 20.5C7.8 20.5 6 18.5 6 15.5C6 11 10 6 10 6Z"
                  fill="#FAF8F5"
                  opacity="0.9"
                />
              </svg>
              avela home
            </div>
            <p className={styles.desc}>
              Velas artesanales de cera de soya premium.
              Ibagué, Colombia con amor. Bienestar · Natural · Consciente.
            </p>
            <span className={styles.tagline}>Enciende tu ritual</span>
            <div className={styles.socials}>
              {['ig', 'wa', 'fb', 'tk'].map((s) => (
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