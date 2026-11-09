import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto)', 'var(--font-inter)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        mincho: ['var(--font-mincho)', 'var(--font-noto)', 'serif'],
      },
      colors: {
        brand: {
          sky: '#1FACE0',
          DEFAULT: '#2563D6',
          navy: '#14185C',
          tint: '#F2F7FD',
        },
        // Japan Launch LP の和のトーン（えんじ・朱・和紙・墨）
        beni: { DEFAULT: '#7A302D', deep: '#4E1D1B' },
        shu: '#D2492B',
        washi: '#EEECE7',
        sumi: '#1D1B1A',
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
          accent: '#1d4ed8',
        },
        cyan: { 400: '#22d3ee', 500: '#06b6d4' },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
