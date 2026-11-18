import type { StaticImageData } from 'next/image'
import corchoAcai from '@/img/aromas/vela-corcho/acai.jpeg'

/**
 * Foto propia de cada vela según empaque y aroma.
 *
 * Para agregar una foto nueva:
 *   1. Guarda la imagen en `src/img/aromas/<empaque>/<aroma>.jpeg`
 *      (ej. `src/img/aromas/vela-vidrio/neblina.jpeg`), vertical 3:4, ~1000 px de ancho.
 *   2. Impórtala aquí y agrégala bajo su empaque con el `id` del aroma
 *      (el de `src/constants/aromas.ts`).
 *
 * Si un aroma no tiene foto, se muestra la foto general del empaque.
 */
export const AROMA_IMAGES: Record<string, Record<string, StaticImageData>> = {
  'vela-corcho': {
    acai: corchoAcai,
  },
}

export function getVelaImage(
  empaqueId: string,
  aromaId: string,
  fallback: StaticImageData
): StaticImageData {
  return AROMA_IMAGES[empaqueId]?.[aromaId] ?? fallback
}
