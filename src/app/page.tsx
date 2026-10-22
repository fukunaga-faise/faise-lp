import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Services from '@/components/Services'
import WhyFaise from '@/components/WhyFaise'
import Beauty from '@/components/Beauty'
import Strength from '@/components/Strength'
import Works from '@/components/Works'
import Clients from '@/components/Clients'
import Founder from '@/components/Founder'
import News from '@/components/News'
import Company from '@/components/Company'
import CTA from '@/components/CTA'
import PageCurtain from '@/components/PageCurtain'
import { ScrollProgress } from '@/components/ui'

export default function Home() {
  return (
    <main className="bg-white text-[#111]">
      <PageCurtain />
      <ScrollProgress />
      <Nav />
      <Hero />
      <Mission />
      <Services />
      <WhyFaise />
      <Beauty />
      <Strength />
      <Works />
      <Clients />
      <Founder />
      <News />
      <Company />
      <CTA />
    </main>
  )
}
