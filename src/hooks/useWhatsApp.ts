import { CartItem } from '@/store/cartStore'

const WHATSAPP_NUMBER = '573176948380'
const BAG_COST = 1500

function formatPrice(amount: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(amount)
}

export function buildCartWhatsAppUrl(items: CartItem[]): string {
  const subtotal = items.reduce((acc, i) => acc + i.price * i.quantity, 0)
  
  const total = subtotal 

  const itemLines = items
    .map(
      (i) =>
        `• ${i.name} — Aroma: ${i.aroma} x${i.quantity} — ${formatPrice(i.price * i.quantity)}`
    )
    .join('\n')

  const message = [
    '¡Hola Avela! 🕯️ Quiero hacer este pedido:',
    '',
    itemLines,
    '',
    
    
    `Total: ${formatPrice(total)}`,
    '',
    '¿Está disponible?',
  ].join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}