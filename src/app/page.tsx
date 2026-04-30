import Hero from '@/components/organisms/Hero/Hero'
import CategoryStrip from '@/components/organisms/CategoryStrip/CategoryStrip'
import ExperienceBar from '@/components/organisms/ExperienceBar/ExperienceBar'
import ProductGrid from '@/components/organisms/ProductGrid/ProductGrid'
//import Testimonials from '@/components/organisms/Testimonials/Testimonials'
//import Newsletter from '@/components/organisms/Newsletter/Newsletter'
import Footer from '@/components/organisms/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryStrip />
      <ExperienceBar />
      <ProductGrid />
     
      
    </main>
  )
}