import Navbar from '@/components/organisms/Navbar/Navbar'
import Hero from '@/components/organisms/Hero/Hero'
import CategoryStrip from '@/components/organisms/CategoryStrip/CategoryStrip'
import ExperienceBar from '@/components/organisms/ExperienceBar/ExperienceBar'
import ProductGrid from '@/components/organisms/ProductGrid/ProductGrid'
import Testimonials from '@/components/organisms/Testimonials/Testimonials'
import Newsletter from '@/components/organisms/Newsletter/Newsletter'
import Footer from '@/components/organisms/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Navbar cartCount={0} />
      <Hero />
      <CategoryStrip />
      <ExperienceBar />
      <ProductGrid />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}