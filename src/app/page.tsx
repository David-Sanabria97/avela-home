import Hero from '@/components/organisms/Hero/Hero'
import CategoryStrip from '@/components/organisms/CategoryStrip/CategoryStrip'
import ExperienceBar from '@/components/organisms/ExperienceBar/ExperienceBar'
import ProductGrid from '@/components/organisms/ProductGrid/ProductGrid'
import Collections from '@/components/organisms/Collections/Collections'
import AboutSection from '@/components/organisms/AboutSection/AboutSection'
import Testimonials from '@/components/organisms/Testimonials/Testimonials'
//import Newsletter from '@/components/organisms/Newsletter/Newsletter'

export default function Home() {
  return (
    <main>
      <Hero />
      <ExperienceBar />
      <Collections />
      <Testimonials />
      <AboutSection />
    </main>
  )
}
