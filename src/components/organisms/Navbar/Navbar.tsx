"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import Logo from "@/img/logoClaro.png";
import { useCartStore } from "@/store/cartStore";

const LINKS_LEFT = [
  { label: "Inicio", href: "/" },
  { label: "Colecciones", href: "/colecciones" },
];

const LINKS_RIGHT = [
  { label: "Sobre Avela", href: "/sobre-avela" },
  { label: "Contacto", href: "/contacto" },
];

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <header>
      <div className={styles.announce}>
        Envío gratis en compras mayores a $150.000
      </div>

      <nav className={transparent ? styles.navTransparent : styles.nav}>
        <div className={styles.inner}>
          {/* Links izquierda */}
          <ul className={styles.linksLeft}>
            {LINKS_LEFT.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Logo centrado */}
          <div className={styles.logoWrap}>
            <Link href="/">
              <Image src={Logo} alt="Logo Avela" width={120} height={100} />
            </Link>
          </div>

          {/* Links derecha + acciones */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "24px",
            }}
          >
            <ul className={styles.linksRight}>
              {LINKS_RIGHT.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <button className={styles.iconBtn} aria-label="Buscar">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>

              <button className={styles.iconBtn} aria-label="Mi cuenta">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>

              <Link
                href="/carrito"
                className={styles.iconBtn}
                aria-label="Carrito"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {totalItems > 0 && (
                  <span className={styles.cartBadge}>{totalItems}</span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
