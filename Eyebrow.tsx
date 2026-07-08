export default function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p
      className={`flex items-center gap-2.5 font-inter text-[13px] md:text-[15px] tracking-[0.06em] font-medium ${
        light ? 'text-white' : 'text-[#101318]'
      }`}
    >
      <span className={`w-2 h-2 rounded-full ${light ? 'bg-white' : 'bg-[#0050d0]'}`} />
      {children}
    </p>
  )
}
