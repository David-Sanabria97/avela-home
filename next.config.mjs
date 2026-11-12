/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  // Colecciones anteriores → colecciones por región (301).
  async redirects() {
    return [
      ['nocturna', 'llanos'],
      ['aura', 'sabana'],
      ['serena', 'pacifico'],
      ['alba', 'caribe'],
      ['origen', 'amazonia'],
      ['ritual', 'paisa'],
    ].map(([from, to]) => ({
      source: `/colecciones/${from}`,
      destination: `/colecciones/${to}`,
      statusCode: 301,
    }))
  },
}

export default nextConfig
