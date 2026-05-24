import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Insight from '@/components/Insight'
import Concept from '@/components/Concept'
import Result from '@/components/Result'
import Difference from '@/components/Difference'
import Entertainment from '@/components/Entertainment'
import Service from '@/components/Service'
import Ideas from '@/components/Ideas'
import Founder from '@/components/Founder'
import Company from '@/components/Company'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="bg-white text-[#0f0f0f]">
      <Nav />
      <Hero />
      <Problem />
      <Insight />
      <Concept />
      <Result />
      <Difference />
      <Entertainment />
      <Service />
      <Ideas />
      <Founder />
      <Company />
      <CTA />
    </main>
  )
}
