import type { StaticImageData } from 'next/image'
import postDeseos from '@/img/navidad/post_velas_deseos.jpg'
import deseosCerrada from '@/img/navidad/deseos_caja_cerrada.jpg'
import deseosAbierta from '@/img/navidad/deseos_caja_abierta.jpg'

/**
 * Temporada de Navidad.
 * Para quitar el banner de la portada y el enlace del menú al terminar la
 * temporada, pon `activa: false`. La página /navidad sigue existiendo.
 */
export const TEMPORADA_NAVIDAD = {
  activa: true,
  nombre: 'Navidad 2026',
  /** Imagen tipo post que se muestra en la portada. */
  post: postDeseos,
}

export interface ProductoNavidad {
  id: string
  name: string
  contenido: string
  price: number
  description: string
  detalles: string[]
  images: { src: StaticImageData; alt: string }[]
  /** false = no se muestra en la web (falta foto o precio). */
  visible: boolean
}

export const PRODUCTOS_NAVIDAD: ProductoNavidad[] = [
  {
    id: 'velas-de-los-deseos',
    name: 'Velas de los deseos',
    contenido: 'Caja de 7 velas',
    price: 18000,
    description:
      'Siete velas onduladas de colores, cada una con un deseo en relieve para el año que llega. Se encienden una por noche o todas juntas en la novena.',
    detalles: [
      'Deseos: Familia, Trabajo, Amor, Salud, Paz, Dinero y Éxito',
      'Cada vela mide 11 × 3 × 2,3 cm y pesa unos 49,5 g',
      'Caja de regalo con ventana',
    ],
    images: [
      {
        src: deseosCerrada,
        alt: 'Caja de regalo de las Velas de los deseos con siete velas de colores',
      },
      {
        src: deseosAbierta,
        alt: 'Siete velas onduladas de colores con palabras en relieve dentro de su caja',
      },
    ],
    visible: true,
  },
  {
    // TODO: falta foto real y precio al detal confirmados por David.
    id: 'pesebre',
    name: 'Velas pesebre',
    contenido: 'Caja de 6 velas',
    price: 0,
    description: 'Las figuras del pesebre en velas de 11 cm.',
    detalles: ['Cada vela mide 11 × 3,85 × 2,2 cm (ancho en la estrella) y pesa unos 38 g'],
    images: [],
    visible: false,
  },
]

export const PRODUCTOS_NAVIDAD_VISIBLES = PRODUCTOS_NAVIDAD.filter((p) => p.visible)
