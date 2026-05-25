import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Services from '@/components/Services'
import Works from '@/components/Works'
import Clients from '@/components/Clients'
import Founder from '@/components/Founder'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="bg-white text-[#0f0f0f]">
      <Nav />
      <Hero />
      <Mission />
      <Services />
      <Works />
      <Clients />
      <Founder />
      <CTA />
    </main>
  )
}
