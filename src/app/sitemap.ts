import { MetadataRoute } from 'next'
import { COLLECTIONS } from '@/constants/collections'
import { PRODUCTS } from '@/constants/products'
import { SITE } from '@/constants/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: SITE.url, lastModified, changeFrequency: 'weekly', priority: 1 },
    {
      url: `${SITE.url}/colecciones`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...COLLECTIONS.map((c) => ({
      url: `${SITE.url}/colecciones/${c.id}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...PRODUCTS.map((p) => ({
      url: `${SITE.url}/producto/${p.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
