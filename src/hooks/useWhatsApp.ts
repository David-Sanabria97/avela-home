import { CartItem } from '@/store/cartStore'

const WHATSAPP_NUMBER = '573176948380'

export const WHOLESALE_MIN_QTY = 12

export function formatPrice(amount: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(amount)
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

interface OrderLine {
  name: string
  aroma: string
  quantity: number
  price: number
}

export function buildOrderMessage(lines: OrderLine[]): string {
  const total = lines.reduce((acc, i) => acc + i.price * i.quantity, 0)
  const units = lines.reduce((acc, i) => acc + i.quantity, 0)

  const itemLines = lines
    .map(
      (i) => `• ${i.name} — Aroma: ${i.aroma} x${i.quantity} — ${formatPrice(i.price * i.quantity)}`
    )
    .join('\n')

  return [
    '¡Hola Avela! Quiero hacer este pedido:',
    '',
    itemLines,
    '',
    `Total: ${formatPrice(total)}`,
    '',
    units >= WHOLESALE_MIN_QTY
      ? 'Es para mi tienda, ¿me compartes precios por mayor?'
      : '¿Está disponible?',
  ].join('\n')
}

export function buildCartWhatsAppUrl(items: CartItem[]): string {
  return buildWhatsAppUrl(buildOrderMessage(items))
}

export const WHOLESALE_WHATSAPP_URL = buildWhatsAppUrl(
  '¡Hola Avela! Quiero velas al por mayor (tienda, evento o regalo corporativo). ¿Me compartes la lista de precios?'
)
