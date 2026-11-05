import ClinicView, { clinicMetadata } from '@/components/views/ClinicView'

export const metadata = clinicMetadata('ja')

export default function Page() {
  return <ClinicView lang="ja" />
}
