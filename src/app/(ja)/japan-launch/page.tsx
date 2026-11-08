import JapanLaunchView, { japanLaunchMetadata } from '@/components/views/JapanLaunchView'

export const metadata = japanLaunchMetadata('ja')

export default function Page() {
  return <JapanLaunchView lang="ja" />
}
