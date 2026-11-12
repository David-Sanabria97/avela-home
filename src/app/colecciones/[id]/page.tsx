import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CandleBuilder from "@/components/organisms/CandleBuilder/CandleBuilder";
import Collections from "@/components/organisms/Collections/Collections";
import { COLLECTIONS, getCollectionById } from "@/constants/collections";
import { getAromaById } from "@/constants/aromas";
import { EMPAQUES } from "@/constants/products";
import { SITE } from "@/constants/site";
import JsonLd from "@/components/atoms/JsonLd/JsonLd";
import styles from "./Coleccion.module.scss";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ id: c.id }));
}

function aromaNames(ids: string[]) {
  return ids.map((id) => getAromaById(id)?.name ?? id);
}

export function generateMetadata({ params }: Props): Metadata {
  const collection = getCollectionById(params.id);
  if (!collection) return {};
  const title = `Velas aromáticas colección ${collection.name}`;
  const description = `${collection.tagline} Velas artesanales de soya con aroma ${aromaNames(collection.aromas).join(", ")}. Elige vidrio, corcho o bambú y pide por WhatsApp con envío a toda Colombia.`;
  return {
    title,
    description,
    alternates: { canonical: `/colecciones/${collection.id}` },
    openGraph: {
      title,
      description,
      url: `/colecciones/${collection.id}`,
      images: [{ url: collection.image.src, alt: `Velas Avela, colección ${collection.name}` }],
    },
  };
}

export default function ColeccionPage({ params }: Props) {
  const collection = getCollectionById(params.id);
  if (!collection) notFound();

  const num = String(COLLECTIONS.indexOf(collection) + 1).padStart(2, "0");
  const aromaList = aromaNames(collection.aromas).join(" · ");
  const prices = EMPAQUES.map((e) => e.price);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Vela aromática Avela — colección ${collection.name}`,
    description: `${collection.tagline} ${collection.description}`,
    image: `${SITE.url}${collection.image.src}`,
    brand: { "@type": "Brand", name: SITE.name },
    material: "Cera de soya",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "COP",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: EMPAQUES.length,
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/colecciones/${collection.id}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Colecciones", item: `${SITE.url}/colecciones` },
      { "@type": "ListItem", position: 3, name: collection.name, item: `${SITE.url}/colecciones/${collection.id}` },
    ],
  };

  return (
    <main>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className={styles.wrap}>
        <Link href="/#colecciones" className={styles.back}>
          ← Todas las colecciones
        </Link>

        <header
          className={styles.header}
          style={{ "--region": collection.color } as React.CSSProperties}
        >
          <div className={styles.text}>
            <span className={styles.kicker}>
              <span className={styles.dot} aria-hidden="true" />
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
