import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Concept from '@/components/Concept'
import Solution from '@/components/Solution'
import CaseStudy from '@/components/CaseStudy'
import InlineCTA from '@/components/InlineCTA'
import Clients from '@/components/Clients'
import ServiceFlow from '@/components/ServiceFlow'
import Founder from '@/components/Founder'
import Company from '@/components/Company'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="bg-white text-[#0f0f0f]">
      <Nav />
      <Hero />
      <Problem />
      <Concept />
      <Solution />
      <CaseStudy />
      <InlineCTA
        text="体験予約を増やしたい施設のご担当者様へ"
        subtext="まずは現状の課題をお聞かせください。無料でご相談いただけます。"
      />
      <Clients />
      <ServiceFlow />
      <Founder />
      <Company />
      <CTA />
    </main>
  )
}
