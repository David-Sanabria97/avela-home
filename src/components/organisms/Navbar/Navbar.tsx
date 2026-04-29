'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Navbar.module.scss'
import Logo from "@/img/logo.png"
const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Tienda', href: '/tienda' },
  { label: 'Colecciones', href: '/colecciones' },
  { label: 'Sobre Avela', href: '/sobre-avela' },
  { label: 'Contacto', href: '/contacto' },
]

const SUB_LINKS = [
  'Todas',
  'Aromáticas',
  'Masaje',
  'Kits de regalo',
  'Más vendidas',
  'Nuevos aromas',
]

interface NavbarProps {
  cartCount?: number
}

export default function Navbar({ cartCount = 0 }: NavbarProps) {
  const [activeSubLink, setActiveSubLink] = useState('Todas')

  return (
    <header>
      <div className={styles.announce}>
        Envío gratis en compras mayores a $120.000
      </div>

      <nav className={styles.nav}>
        <div className={styles.inner}>
          <Link href="/" >
            <Image src={Logo} alt="Logo Avela" width={60} height={60} />
          </Link>

          <ul className={styles.links}>
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <button className={styles.iconBtn} aria-label="Buscar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            <button className={styles.iconBtn} aria-label="Mi cuenta">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

            <button className={styles.iconBtn} aria-label="Carrito">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && (
                <span className={styles.cartBadge}>{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className={styles.subNav}>
        {SUB_LINKS.map((label) => (
          <button
            key={label}
            className={`${styles.subLink} ${activeSubLink === label ? styles.active : ''}`}
            onClick={() => setActiveSubLink(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </header>
  )
}