import { MetadataRoute } from 'next'
import { COLLECTIONS } from '@/constants/collections'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.avelahome.com.co'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/colecciones`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...COLLECTIONS.map((c) => ({
      url: `${baseUrl}/colecciones/${c.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    {
      url: `${baseUrl}/tienda`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/producto/vela-vidrio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/producto/vela-corcho`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/producto/vela-bambu`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre-avela`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/carrito`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.3,
    },
  ]
}