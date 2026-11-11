"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import Logo from "@/img/logo.png";
import { useCartStore } from "@/store/cartStore";
import { buildWhatsAppUrl } from "@/hooks/useWhatsApp";

const ORDER_URL = buildWhatsAppUrl("¡Hola Avela! Quiero hacer un pedido.");

export default function Navbar() {
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <header className={styles.nav}>
      <Link href="/" className={styles.logo} aria-label="Avela, ir al inicio">
        <Image src={Logo} alt="Avela" height={52} priority />
      </Link>

      <ul className={styles.links}>
        <li>
          <Link href="/#colecciones" className={styles.link}>
            Colecciones
          </Link>
        </li>
        <li>
          <Link href="/#mayoristas" className={styles.link}>
            Mayoristas
          </Link>
        </li>
      </ul>

      <div className={styles.actions}>
        <Link href="/carrito" className={styles.link}>
          Carrito ({totalItems})
        </Link>
        <a
          href={totalItems > 0 ? "/carrito" : ORDER_URL}
          target={totalItems > 0 ? undefined : "_blank"}
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Pedir por WhatsApp
        </a>
      </div>
    </header>
  );
}

