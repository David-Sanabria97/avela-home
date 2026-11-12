import type { Metadata } from "next";
import Collections from "@/components/organisms/Collections/Collections";
import styles from "./Colecciones.module.scss";

export const metadata: Metadata = {
  title: "Colecciones de velas aromáticas",
  description:
    "Seis colecciones de velas aromáticas artesanales inspiradas en las regiones de Colombia: Sabana, Caribe, Amazonía, Paisa, Pacífico y Llanos. Elige empaque y aroma y pide por WhatsApp con envío a toda Colombia.",
  alternates: { canonical: "/colecciones" },
};

export default function ColeccionesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.head}>
        <span className={styles.kicker}>Colecciones</span>
        <h1 className={styles.title}>¿Qué ambiente buscas?</h1>
        <p className={styles.subtitle}>Abre una colección y arma tu vela.</p>
      </div>
      <Collections />
    </main>
  );
}
