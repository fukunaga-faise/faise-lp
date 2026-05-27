import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Services from '@/components/Services'
import Works from '@/components/Works'
import Clients from '@/components/Clients'
import Founder from '@/components/Founder'
import Company from '@/components/Company'
import CTA from '@/components/CTA'
import PageCurtain from '@/components/PageCurtain'

export default function Home() {
  return (
    <main className="bg-white text-[#0f0f0f]">
      <PageCurtain />
      <Nav />
      <Hero />
      <Mission />
      <Services />
      <Works />
      <Clients />
      <Founder />
      <Company />
      <CTA />
    </main>
  )
}
