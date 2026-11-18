import JapanNinjaView, { japanNinjaMetadata } from '@/components/views/JapanNinjaView'

// 英語LP は LAUNCH NINJA by Faise（忍者コンセプト）（日本語版 /japan-launch は JapanLaunchView のまま）
export const metadata = japanNinjaMetadata()

export default function Page() {
  return <JapanNinjaView />
}
