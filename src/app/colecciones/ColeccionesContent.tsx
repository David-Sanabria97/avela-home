"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Colecciones.module.scss";
import { COLLECTIONS } from "@/constants/collections";

export default function ColeccionesContent() {
  const router = useRouter();

  return (
    <>
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.title}>
            Nuestras <em>colecciones</em>
          </h1>
          <p className={styles.subtitle}>
            Velas que transforman tu espacio en una experiencia sensorial.
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.grid}>
          {COLLECTIONS.map((col) => (
            <div
              key={col.id}
              className={styles.card}
              onClick={() =>
                router.push(`/producto/vela-vidrio?coleccion=${col.id}`)
              }
            >
              <div className={styles.imageWrap}>
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.overlay} />
                <div className={styles.cardBody}>
                  <span className={styles.cardName}>{col.name}</span>
                  <p className={styles.cardTagline}>{col.tagline}</p>
                  <p className={styles.cardAromas}>
                    {col.aromas.length} aromas · {col.mood}
                  </p>
                  <span className={styles.cardLink}>Ver colección →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
