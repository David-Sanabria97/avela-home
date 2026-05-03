import { notFound } from 'next/navigation'

import ProductDetail from '@/components/organisms/ProductDetail/ProductDetail'
import imgCorcho from '@/img/corcho.jpeg'
import imgVidrio from '@/img/vidrio.jpeg'
import imgBambu from '@/img/bambu.jpeg'
import { StaticImageData } from 'next/image'

export interface Product {
  id: number
  slug: string
  name: string
  originalPrice: number | null
  price: number
  image: StaticImageData
  description: string
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: 'vela-corcho',
    name: 'Vela Corcho',
    originalPrice: null,
    price: 20000,
    image: imgCorcho,
    description:
      'Nuestra vela en empaque de corcho natural combina elegancia rústica con funcionalidad. Elaborada con 70% cera de soya y 30% parafina premium, garantizando una quema limpia, pareja y duradera. El corcho actúa como aislante natural, conservando mejor la fragancia y haciendo de cada vela una pieza única e irrepetible.',
  },
  {
    id: 2,
    slug: 'vela-vidrio',
    name: 'Vela Vidrio',
    originalPrice: null,
    price: 23000,
    image: imgVidrio,
    description:
      'La vela en recipiente de vidrio transparente permite apreciar la belleza de la cera mientras se derrite. Formulada con 70% cera de soya y 30% parafina premium para una combustión perfecta. El vidrio conserva el calor de forma uniforme, potenciando la liberación del aroma y creando una atmósfera cálida y acogedora en cualquier espacio.',
  },
  {
    id: 3,
    slug: 'vela-bambu',
    name: 'Vela Bambú',
    originalPrice: null,
    price: 45000,
    image: imgBambu,
    description:
      'Nuestra vela premium en empaque de bambú sostenible representa lo mejor de Avela. Con una mezcla de 70% cera de soya y 30% parafina de alta calidad, ofrece la quema más limpia y prolongada de nuestra colección. El bambú, material renovable y resistente, aporta una estética natural y sofisticada que la convierte en el regalo perfecto.',
  },
]

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)

  if (!product) notFound()

  return (
    <>
      <ProductDetail product={product} />
    </>
  )
}
