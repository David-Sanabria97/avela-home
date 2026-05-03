import styles from './Footer.module.scss'

const LINKS = {
  ayuda: [
    'Envíos y entregas',
    'Cambios y devoluciones',
    'Preguntas frecuentes',
    'Términos y condiciones',
    'Política de privacidad',
  ],
  avela: ['Nuestra historia', 'Filosofía', 'Sostenibilidad', 'Hecho a mano', 'Blog'],
  contacto: ['avelahomeco@gmail.com', '+57 317 694 8380', '@avela_home'],
}

const GUARANTEES = [
  {
    id: 1,
    name: 'Envíos a todo Colombia',
    desc: 'Rápidos y seguros.',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Pagos 100% Seguros',
    desc: 'Protegemos tu información.',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Cambios y Devoluciones',
    desc: 'Tu satisfacción es prioridad.',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" strokeLinecap="round" />
        <path d="M3 3v5h5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Atención Personalizada',
    desc: 'Estamos aquí para ayudarte.',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
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
                Velas artesanales de cera de soya premium. Handpoured en Ibagué, Colombia con amor.
                Bienestar · Natural · Consciente.
              </p>
              <span className={styles.tagline}>&ldquo;Enciende tu ritual&rdquo;</span>
              <div className={styles.socials}>
                {['ig', 'wa', 'fb', 'tk'].map((s) => (
                  <button key={s} className={styles.social}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Ayuda */}
            <div>
              <div className={styles.colTitle}>Ayuda</div>
              <ul className={styles.colList}>
                {LINKS.ayuda.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.colLink}>
                      {link}
                    </a>
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
                    <a href="#" className={styles.colLink}>
                      {link}
                    </a>
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
                    <a href="#" className={styles.colLink}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.bottom}>
            <span className={styles.copy}>
              © 2026 Avela Home · Ibagué, Colombia · Todos los derechos reservados.
            </span>
            <div className={styles.bottomLinks}>
              {['Privacidad', 'Términos', 'Cookies'].map((link) => (
                <a key={link} href="#" className={styles.bottomLink}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Barra de garantías */}
      <div className={styles.guarantees}>
        <div className={styles.guaranteesInner}>
          {GUARANTEES.map((g) => (
            <div key={g.id} className={styles.guarantee}>
              <div className={styles.guaranteeIcon}>{g.icon}</div>
              <div className={styles.guaranteeText}>
                <span className={styles.guaranteeName}>{g.name}</span>
                <span className={styles.guaranteeDesc}>{g.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
