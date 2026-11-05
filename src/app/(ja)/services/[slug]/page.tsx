import { notFound } from 'next/navigation'
import ServiceView, { findService, serviceMetadata } from '@/components/views/ServiceView'
import { services } from '@/lib/services'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return serviceMetadata(params.slug, 'ja')
}

export default function Page({ params }: { params: { slug: string } }) {
  if (!findService(params.slug)) notFound()
  return <ServiceView slug={params.slug} lang="ja" />
}
