import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Services from '@/components/Services'
// import Works from '@/components/Works' // 非表示中。復活させる場合はこの行と下の <Works /> を戻す
import Clients from '@/components/Clients'
import Founder from '@/components/Founder'
import Company from '@/components/Company'
import CTA from '@/components/CTA'
import PageCurtain from '@/components/PageCurtain'

export default function Home() {
  return (
    <main className="text-[#0f0f0f]">
      <PageCurtain />
      <Nav />
      <Hero />
      <Mission />
      <Services />
      {/* <Works /> */}
      <Clients />
      <Founder />
      <Company />
      <CTA />
    </main>
  )
}
