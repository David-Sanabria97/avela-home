import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CandleBuilder from "@/components/organisms/CandleBuilder/CandleBuilder";
import Collections from "@/components/organisms/Collections/Collections";
import { COLLECTIONS, getCollectionById } from "@/constants/collections";
import { getAromaById } from "@/constants/aromas";
import styles from "./Coleccion.module.scss";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ id: c.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const collection = getCollectionById(params.id);
  if (!collection) return {};
  return {
    title: `Colección ${collection.name} — Avela Home`,
    description: `${collection.tagline} ${collection.description}`,
  };
}

export default function ColeccionPage({ params }: Props) {
  const collection = getCollectionById(params.id);
  if (!collection) notFound();

  const num = String(COLLECTIONS.indexOf(collection) + 1).padStart(2, "0");
  const aromaList = collection.aromas
    .map((id) => getAromaById(id)?.name ?? id)
    .join(" · ");

  return (
    <main>
      <div className={styles.wrap}>
        <Link href="/#colecciones" className={styles.back}>
          ← Todas las colecciones
        </Link>

        <header className={styles.header}>
          <div className={styles.text}>
            <span className={styles.kicker}>
              Colección {num} · {collection.aromas.length} aromas
            </span>
            <h1 className={styles.title}>{collection.name}</h1>
            <span className={styles.mood}>{collection.mood}</span>
            <p className={styles.desc}>
              {collection.tagline} Aromas: {aromaList}.
            </p>
          </div>
          <Image
            src={collection.image}
            alt={`Velas de la colección ${collection.name}`}
            className={styles.image}
            sizes="(max-width: 1024px) 100vw, 600px"
            priority
          />
        </header>

        <CandleBuilder key={collection.id} collectionId={collection.id} />

        <section className={styles.others}>
          <h2 className={styles.othersTitle}>Otras colecciones</h2>
          <Collections exclude={collection.id} compact />
        </section>
      </div>
    </main>
  );
}
