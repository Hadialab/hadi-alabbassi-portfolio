import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import WhyMe from '@/components/why-me'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import { ScrollProgress, ScrollToTop } from '@/components/scroll-utils'

export default function Page() {
  return (
    <main>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <WhyMe />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
