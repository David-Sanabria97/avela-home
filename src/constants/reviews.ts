/**
 * Reseñas REALES de clientes, por producto.
 *
 * Reglas (Google penaliza las reseñas inventadas):
 * - Solo reseñas que un cliente de verdad escribió (WhatsApp, Instagram, formulario…),
 *   con su permiso para publicarlas.
 * - Cada reseña va con el slug del producto que compró: "vela-corcho", "vela-vidrio" o "vela-bambu".
 * - Mientras un producto no tenga reseñas, su página no muestra la sección
 *   ni envía "review" / "aggregateRating" a Google (es un aviso opcional, no un error).
 *
 * Ejemplo:
 * {
 *   producto: "vela-vidrio",
 *   autor: "Nombre A.",
 *   ciudad: "Bogotá",
 *   calificacion: 5,
 *   texto: "Lo que escribió el cliente, tal cual.",
 *   fecha: "2026-11-20",
 * },
 */
export interface Review {
  producto: string
  autor: string
  ciudad?: string
  /** De 1 a 5 estrellas */
  calificacion: 1 | 2 | 3 | 4 | 5
  texto: string
  /** AAAA-MM-DD */
  fecha: string
}

export const REVIEWS: Review[] = []

export function getReviewsByProduct(slug: string): Review[] {
  return REVIEWS.filter((r) => r.producto === slug)
}

/** Campos review y aggregateRating de schema.org, solo si hay reseñas reales. */
export function reviewSchema(reviews: Review[]) {
  if (reviews.length === 0) return {}
  const promedio = reviews.reduce((suma, r) => suma + r.calificacion, 0) / reviews.length
  return {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: Math.round(promedio * 10) / 10,
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.autor },
      datePublished: r.fecha,
      reviewBody: r.texto,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.calificacion,
        bestRating: 5,
        worstRating: 1,
      },
    })),
  }
}
