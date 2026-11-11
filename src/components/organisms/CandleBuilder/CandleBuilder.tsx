"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./CandleBuilder.module.scss";
import { AROMAS, getAromaById } from "@/constants/aromas";
import { getCollectionById } from "@/constants/collections";
import { EMPAQUES, PRODUCTS } from "@/constants/products";
import { useCartStore } from "@/store/cartStore";
import {
  WHOLESALE_MIN_QTY,
  buildOrderMessage,
  buildWhatsAppUrl,
  formatPrice,
} from "@/hooks/useWhatsApp";

interface CandleBuilderProps {
  collectionId: string;
}

export default function CandleBuilder({ collectionId }: CandleBuilderProps) {
  const collection = getCollectionById(collectionId)!;
  const addItem = useCartStore((state) => state.addItem);

  const [empaqueId, setEmpaqueId] = useState(EMPAQUES[0].id);
  const [aromaId, setAromaId] = useState(collection.defaultAroma);
  const [qty, setQty] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const [added, setAdded] = useState(false);

  const empaque = EMPAQUES.find((e) => e.id === empaqueId)!;
  const aroma = getAromaById(aromaId)!;
  const aromas = showAll
    ? AROMAS
    : AROMAS.filter((a) => collection.aromas.includes(a.id));

  const line = {
    name: `Vela ${empaque.name}`,
    aroma: `${aroma.name} (colección ${collection.name})`,
    quantity: qty,
    price: empaque.price,
  };
  const message = buildOrderMessage([line]);
  const total = formatPrice(empaque.price * qty);
  const isBulk = qty >= WHOLESALE_MIN_QTY;

  function handleAddToCart() {
    const product = PRODUCTS.find((p) => p.slug === empaque.id)!;
    addItem(
      {
        id: product.id,
        slug: product.slug,
        name: `${empaque.name} — ${collection.name}`,
        price: empaque.price,
        aroma: aroma.name,
        image: empaque.image.src,
      },
      qty,
    );
    setAdded(true);
  }

  function changeQty(next: number) {
    setQty(Math.min(99, Math.max(1, next)));
    setAdded(false);
  }

  return (
    <section className={styles.builder} aria-labelledby="arma-tu-vela">
      <div className={styles.steps}>
        <div className={styles.head}>
          <h2 id="arma-tu-vela" className={styles.title}>
            Arma tu vela {collection.name}
          </h2>
          <p className={styles.subtitle}>
            Tres pasos. Te la confirmamos por WhatsApp.
          </p>
        </div>

        <fieldset className={styles.step}>
          <legend className={styles.stepTitle}>
            <span className={styles.stepNum}>1 ·</span> Empaque
          </legend>
          <div className={styles.empaques}>
            {EMPAQUES.map((e) => (
              <button
                key={e.id}
                type="button"
                aria-pressed={e.id === empaqueId}
                className={styles.empaque}
                onClick={() => {
                  setEmpaqueId(e.id);
                  setAdded(false);
                }}
              >
                <Image
                  src={e.image}
                  alt=""
                  className={styles.empaqueImg}
                  sizes="(max-width: 640px) 33vw, 220px"
                />
                <span className={styles.empaqueRow}>
                  <span className={styles.empaqueName}>{e.name}</span>
                  <span className={styles.empaquePrice}>
                    {formatPrice(e.price)}
                  </span>
                </span>
                <span className={styles.empaqueDur}>
                  Duración {e.timeDuration}
                </span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className={styles.step}>
          <legend className={styles.stepTitle}>
            <span className={styles.stepNum}>2 ·</span> Aroma: {aroma.name}{" "}
            <span className={styles.tagline}>— {aroma.tagline}</span>
          </legend>
          <div className={styles.chips}>
            {aromas.map((a) => (
              <button
                key={a.id}
                type="button"
                aria-pressed={a.id === aromaId}
                className={styles.chip}
                onClick={() => {
                  setAromaId(a.id);
                  setAdded(false);
                }}
              >
                {a.name}
              </button>
            ))}
            <button
              type="button"
              className={styles.toggle}
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll
                ? `Solo los de ${collection.name}`
                : `Ver los ${AROMAS.length} aromas`}
            </button>
          </div>
        </fieldset>

        <fieldset className={styles.step}>
          <legend className={styles.stepTitle}>
            <span className={styles.stepNum}>3 ·</span> Cantidad
          </legend>
          <div className={styles.qtyRow}>
            <div className={styles.qty}>
              <button
                type="button"
                aria-label="Quitar una"
                onClick={() => changeQty(qty - 1)}
                disabled={qty <= 1}
              >
                −
              </button>
              <span aria-live="polite">{qty}</span>
              <button
                type="button"
                aria-label="Agregar una"
                onClick={() => changeQty(qty + 1)}
                disabled={qty >= 99}
              >
                +
              </button>
            </div>
            {isBulk && (
              <span className={styles.bulk}>
                Desde {WHOLESALE_MIN_QTY} unidades te enviamos precio por mayor.
              </span>
            )}
          </div>
        </fieldset>
      </div>

      <aside className={styles.summary}>
        <span className={styles.summaryLabel}>Tu mensaje</span>
        <div className={styles.message}>{message}</div>
        <div className={styles.total}>
          <span>Total</span>
          <span>{total}</span>
        </div>
        <a
          href={buildWhatsAppUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.send}
        >
          <span>Enviar por WhatsApp</span>
          <span className={styles.sendTotal}>{total}</span>
        </a>
        <button type="button" className={styles.addCart} onClick={handleAddToCart}>
          {added ? "Agregada al carrito ✓" : "o agregar al carrito"}
        </button>
        <span className={styles.note}>
          Te respondemos con disponibilidad y envío.
        </span>
      </aside>
    </section>
  );
}
