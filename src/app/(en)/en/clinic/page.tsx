import ClinicView, { clinicMetadata } from '@/components/views/ClinicView'

export const metadata = clinicMetadata('en')

export default function Page() {
  return <ClinicView lang="en" />
}
