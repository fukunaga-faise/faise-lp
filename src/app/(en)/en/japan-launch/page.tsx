import JapanLaunchView, { japanLaunchMetadata } from '@/components/views/JapanLaunchView'

export const metadata = japanLaunchMetadata('en')

export default function Page() {
  return <JapanLaunchView lang="en" />
}
