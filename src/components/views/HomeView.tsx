import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ClientStrip from '@/components/ClientStrip'
import Mission from '@/components/Mission'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import Works from '@/components/Works'
import Clients from '@/components/Clients'
import Founder from '@/components/Founder'
import News from '@/components/News'
import Company from '@/components/Company'
import CTA from '@/components/CTA'
import CompanyFaq from '@/components/CompanyFaq'
import { companyFaq } from '@/lib/company-faq'
import { SITE_URL } from '@/lib/site'
import type { Lang } from '@/lib/language'
import PageCurtain from '@/components/PageCurtain'
import { ScrollProgress } from '@/components/ui'

const faqLdFor = (lang: Lang) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}${lang === 'ja' ? '' : '/en'}/#faq`,
  inLanguage: lang,
  mainEntity: companyFaq.map((f) => ({ '@type': 'Question', name: f.q[lang], acceptedAnswer: { '@type': 'Answer', text: f.a[lang] } })),
})

export default function HomeView({ lang }: { lang: Lang }) {
  const faqLd = faqLdFor(lang)
  return (
    <main className="bg-white text-[#111]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <PageCurtain />
      <ScrollProgress />
      <Nav />
      <Hero />
      <ClientStrip />
      <Mission />
      <Services />
      <CaseStudies />
      <Works />
      <Clients />
      <Founder />
      <News />
      <CompanyFaq />
      <Company />
      <CTA />
    </main>
  )
}
