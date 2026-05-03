'use client'

import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import { buildCartWhatsAppUrl } from '@/hooks/useWhatsApp'
import styles from './carrito.module.scss'

const BAG_COST = 1500

function formatPrice(amount: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(amount)
}

export default function CartContent() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCartStore()

  const subtotal = items.reduce((acc, i) => acc + i.price * i.quantity, 0)
  const whatsappUrl = buildCartWhatsAppUrl(items)

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyInner}>
          <span className={styles.emptyIcon}>🕯️</span>
          <h2 className={styles.emptyTitle}>Tu carrito está vacío</h2>
          <p className={styles.emptyDesc}>Descubre nuestras velas artesanales y encuentra tu aroma favorito.</p>
          <Link href="/tienda" className={styles.emptyBtn}>
            Ver colección
          </Link>
        </div>
      </div>
    )
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Items */}
        <div className={styles.left}>
          <div className={styles.header}>
            <h1 className={styles.title}>Tu carrito</h1>
            <button className={styles.clearBtn} onClick={clearCart}>
              Vaciar carrito
            </button>
          </div>

          <div className={styles.items}>
            {items.map((item) => (
              <div key={`${item.id}-${item.aroma}`} className={styles.item}>
                <div className={styles.itemInfo}>
                  <div className={styles.itemName}>{item.name}</div>
                  <div className={styles.itemAroma}>Aroma: {item.aroma}</div>
                  <div className={styles.itemPrice}>{formatPrice(item.price)}</div>
                </div>

                <div className={styles.itemActions}>
                  <div className={styles.qty}>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.id, item.aroma, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className={styles.qtyNum}>{item.quantity}</span>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.id, item.aroma, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className={styles.itemTotal}>
                    {formatPrice(item.price * item.quantity)}
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeItem(item.id, item.aroma)}
                    aria-label="Eliminar"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>


        </div>

        {/* Resumen */}
        <div className={styles.right}>
          <div className={styles.summary}>
            <h2 className={styles.summaryTitle}>Resumen del pedido</h2>

            <div className={styles.summaryRows}>
              <div className={styles.summaryRow}>
                <span>Subtotal ({totalItems()} velas)</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
             
              <div className={styles.summaryRow}>
                <span>Envío</span>
                <span className={styles.shipping}>A confirmar</span>
              </div>
            </div>

            <div className={styles.summaryTotal}>
              <span>Total estimado</span>
              <span>{formatPrice(totalPrice())}</span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWa}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Enviar pedido por WhatsApp
            </a>

            <p className={styles.hint}>
              Te confirmaremos disponibilidad y costo de envío en menos de 24 horas.
            </p>

            <Link href="/tienda" className={styles.continuBtn}>
              Seguir comprando
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}