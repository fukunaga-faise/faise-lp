import JapanNinjaView, { japanNinjaMetadata } from '@/components/views/JapanNinjaView'

// 英語LP は JAPAN NINJA コンセプト（日本語版 /japan-launch は JapanLaunchView のまま）
export const metadata = japanNinjaMetadata()

export default function Page() {
  return <JapanNinjaView />
}
