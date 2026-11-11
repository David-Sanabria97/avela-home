import Image from "next/image";
import Link from "next/link";
import HeroImg from "@/img/Hero.jpeg";
import { COLLECTIONS } from "@/constants/collections";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <span className={styles.kicker}>Velas artesanales de soya · Bogotá y Flandes</span>
        <h1 className={styles.title}>Velas que se quedan en la memoria.</h1>
        <p className={styles.lead}>
          Cera de soya, aromas de alta perfumería y empaques en vidrio, corcho o
          bambú. Cada vela se vierte a mano en pequeños lotes para que el aroma
          acompañe sin invadir.
        </p>
        <div className={styles.actions}>
          <Link href={`/colecciones/${COLLECTIONS[0].id}`} className={styles.primary}>
            Arma tu vela
          </Link>
          <Link href="/#colecciones" className={styles.secondary}>
            Conoce las colecciones
          </Link>
        </div>
      </div>
      <Image
        src={HeroImg}
        alt="Velas Avela encendidas"
        className={styles.image}
        sizes="(max-width: 1024px) 100vw, 600px"
        priority
      />
    </section>
  );
}
