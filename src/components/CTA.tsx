'use client'

export default function CTA() {
  return (
    <footer className="bg-[#0a0a0a] py-12 md:py-16 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col gap-3">
          <a href="#">
            <img src="/logo.png" alt="Faise" className="h-8 w-auto brightness-0 invert opacity-70" />
          </a>
          <p className="text-[11px] text-white/25 tracking-wide">
            株式会社Faise　東京都品川区大井4-18-25
          </p>
        </div>
        <p className="text-[10px] text-white/20 tracking-wide">
          © 2025 Faise Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
