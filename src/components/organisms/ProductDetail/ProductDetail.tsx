"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./ProductDetail.module.scss";
import { AROMAS, getAromaById } from "@/constants/aromas";
import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/constants/products";
import { COLLECTIONS, getCollectionById } from "@/constants/collections";
import { EMPAQUES } from "@/constants/products";

function formatPrice(amount: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(amount);
}

interface ProductDetailProps {
  product: Product;
  coleccionParam?: string;
}

export default function ProductDetail({
  product,
  coleccionParam,
}: ProductDetailProps) {
  const { addItem } = useCartStore();
  const router = useRouter();

  const initialCollection =
    getCollectionById(coleccionParam ?? "") ?? COLLECTIONS[0];
  const [selectedCollection, setSelectedCollection] =
    useState(initialCollection);

  const [selectedEmpaque, setSelectedEmpaque] = useState(
    EMPAQUES.find((e) => e.id === product.slug) ?? EMPAQUES[0],
  );
  const [added, setAdded] = useState(false);
  const [selectedAromaId, setSelectedAromaId] = useState(
    initialCollection.aromas[0],
  );
  const [quantity, setQuantity] = useState(1);

  const selectedAroma = getAromaById(selectedAromaId);

  const aromasDeColeccion = AROMAS.filter((a) =>
    selectedCollection.aromas.includes(a.id),
  );

  function handleEmpaqueChange(empaqueId: string) {
    const empaque = EMPAQUES.find((e) => e.id === empaqueId);
    if (!empaque) return;
    setSelectedEmpaque(empaque);
    router.push(`/producto/${empaqueId}?coleccion=${selectedCollection.id}`);
  }
  function handleAddToCart() {
    addItem(
      {
        id:
          selectedEmpaque.id === "vela-vidrio"
            ? 2
            : selectedEmpaque.id === "vela-corcho"
              ? 1
              : 3,
        slug: selectedEmpaque.id,
        name: `${selectedEmpaque.name} — ${selectedCollection.name}`,
        price: selectedEmpaque.price,
        aroma: selectedAroma?.name ?? selectedAromaId,
        image: "",
      },
      quantity,
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 500);
  }

  const FEATURES = [
    "70% cera de soya · 30% parafina premium",
    "Bolsa de regalo incluida",
    "Ibagué, Colombia",
    `Quema limpia y pareja aproximadamente ${selectedEmpaque.timeDuration}`,
  ];
  return (
    <>
      {/* Header oscuro para compensar navbar transparente */}
      <div className={styles.pageHeader}>
        <div className={styles.breadcrumb}>
          <Link href="/colecciones" className={styles.breadcrumbLink}>
            Colecciones
          </Link>
          <span className={styles.breadcrumbSep}>·</span>
          <span className={styles.breadcrumbCurrent}>
            {selectedCollection.name}
          </span>
        </div>
      </div>

      <section className={styles.section}>
        {/* Columna izquierda */}
        <div className={styles.leftCol}>
          <div className={styles.imageWrap}>
            <Image
              src={product.image}
              alt={`Vela ${selectedEmpaque.name}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className={styles.bagNote}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B8935A"
                strokeWidth="1.5"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className={styles.bagText}>Bolsa de regalo incluida</span>
            </div>
          </div>

          <div className={styles.descWrap}>
            <p className={styles.descLabel}>Sobre este empaque</p>
            <p className={styles.desc}>{product.description}</p>
          </div>
        </div>

        {/* Columna derecha */}
        <div className={styles.info}>
          <span className={styles.eyebrow}>
            Colección {selectedCollection.name} · Avela Home
          </span>
          <h1 className={styles.name}>
            {selectedAroma?.name} - {selectedEmpaque.name}
          </h1>
          <div className={styles.price}>
            {formatPrice(selectedEmpaque.price)}
          </div>
          <span className={styles.stock}>{selectedCollection.description}</span>
          {selectedAroma && (
            <div className={styles.aromaDesc}>
              <p className={styles.mood}>&ldquo;{selectedAroma.mood}&rdquo;</p>
              <p className={styles.perfectFor}>
                <span>Perfecta para:</span> {selectedAroma.perfect_for}
              </p>
              <p className={styles.aromaTagline}>{selectedAroma.tagline}</p>
              <p className={styles.desc}>{selectedAroma.description}</p>
            </div>
          )}

          <div className={styles.features}>
            {FEATURES.map((f) => (
              <div key={f} className={styles.feature}>
                <span className={styles.featureDot} />
                {f}
              </div>
            ))}
          </div>

          <div className={styles.aromaSection}>
            <span className={styles.aromaTitle}>
              Elige tu aroma
              {selectedAroma && (
                <span className={styles.aromaSelected}>
                  — {selectedAroma.name}
                </span>
              )}
            </span>
            <div className={styles.aromas}>
              {aromasDeColeccion.map((aroma) => (
                <button
                  key={aroma.id}
                  className={`${styles.aromaBtn} ${selectedAromaId === aroma.id ? styles.active : ""}`}
                  onClick={() => setSelectedAromaId(aroma.id)}
                >
                  {aroma.name}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.selectSection}>
            <label className={styles.selectLabel}>Colección</label>
            <div className={styles.selectWrap}>
              <select
                className={styles.select}
                value={selectedCollection.id}
                onChange={(e) => {
                  const col = getCollectionById(e.target.value);
                  if (col) {
                    setSelectedCollection(col);
                    setSelectedAromaId(col.aromas[0]);
                  }
                }}
              >
                {COLLECTIONS.map((col) => (
                  <option key={col.id} value={col.id}>
                    {col.name} — {col.tagline}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Select: Cambiar empaque */}
          <div className={styles.selectSection}>
            <label className={styles.selectLabel}>Empaque</label>
            <div className={styles.selectWrap}>
              <select
                className={styles.select}
                value={selectedEmpaque.id}
                onChange={(e) => handleEmpaqueChange(e.target.value)}
              >
                {EMPAQUES.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.name} — {formatPrice(emp.price)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.quantitySection}>
            <span className={styles.quantityLabel}>Cantidad</span>
            <div className={styles.quantityControl}>
              <button
                className={styles.qtyBtn}
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Reducir cantidad"
              >
                −
              </button>
              <span className={styles.qtyNum}>{quantity}</span>
              <button
                className={styles.qtyBtn}
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>
            {quantity > 1 && (
              <span className={styles.qtyTotal}>
                {formatPrice(product.price * quantity)}
              </span>
            )}
          </div>

          <div className={styles.cta}>
            <button
              onClick={handleAddToCart}
              className={`${styles.btnCart} ${added ? styles.btnCartAdded : ""}`}
              disabled={added}
            >
              {added ? (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Agregado al carrito
                </>
              ) : (
                "Agregar al carrito"
              )}
            </button>
            <Link href="/carrito" className={styles.btnSecondary}>
              Finalizar tu pedido
            </Link>
            <p className={styles.hint}>
              Te responderemos en menos de 24 horas con disponibilidad y
              confirmación del pedido.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
