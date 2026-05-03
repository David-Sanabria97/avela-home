import Image from "next/image";
import Link from "next/link";
import HeroImg from "@/img/Hero.jpeg";

import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Derecha — imagen */}

      <div className={styles.image}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Transforma
            <br />
            tu espacio en
            <br />
            un <em>ritual.</em>
          </h1>

          <div className={styles.line} />

          <p className={styles.subtitle}>
            Velas artesanales que despiertan emociones y crean momentos únicos.
          </p>

          <Link href="/colecciones" className={styles.btn}>
            Descubrir colección →
          </Link>
        </div>
        <Image
          src={HeroImg}
          alt="Vela Avela encendida"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
