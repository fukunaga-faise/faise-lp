import { notFound } from 'next/navigation'
import WorkView, { findCase, pageCases, workMetadata } from '@/components/views/WorkView'

export function generateStaticParams() {
  return pageCases().map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return workMetadata(params.slug, 'ja')
}

export default function Page({ params }: { params: { slug: string } }) {
  if (!findCase(params.slug)) notFound()
  return <WorkView slug={params.slug} lang="ja" />
}
