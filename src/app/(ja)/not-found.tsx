import NotFoundView, { notFoundMetadata } from '@/components/views/NotFoundView'

export const metadata = notFoundMetadata('ja')

export default function NotFound() {
  return <NotFoundView lang="ja" />
}
