'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)
    let animId: number

    const spawn = () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.1 + 0.3,
      a: Math.random() * 0.35 + 0.05,
      da: (Math.random() - 0.5) * 0.002,
    })

    const particles = Array.from({ length: 70 }, spawn)

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const g = ctx.createRadialGradient(w / 2, h * 0.5, 0, w / 2, h * 0.5, w * 0.4)
      g.addColorStop(0, 'rgba(37,99,235,0.10)')
      g.addColorStop(1, 'transparent')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx; p.y += p.vy; p.a += p.da
        if (p.a < 0.02 || p.a > 0.45) p.da *= -1
        if (p.x < -5 || p.x > w + 5 || p.y < -5 || p.y > h + 5) Object.assign(p, spawn())

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 90) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(37,99,235,${0.1 * (1 - d / 90)})`
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(96,165,250,${p.a})`; ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-inter text-[10px] tracking-[0.28em] uppercase text-blue-400 mb-7 sm:mb-10"
        >
          Experience Design Marketing
        </motion.p>

        <div className="overflow-hidden mb-2 sm:mb-3">
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(40px,10vw,100px)] font-black leading-[1.05] tracking-tight"
          >
            人が動く理由を
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8 sm:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(40px,10vw,100px)] font-black leading-[1.05] tracking-tight text-gradient"
          >
            設計する。
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-[clamp(13px,1.8vw,17px)] text-white/50 max-w-sm sm:max-w-xl mx-auto leading-[2] mb-10 sm:mb-14"
        >
          広告運用ではなく、SNS・体験・導線・企画を横断し、
          &ldquo;行きたくなる理由&rdquo;から店舗の成長をつくるマーケティングチーム。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a
            href="mailto:info@faise.jp"
            className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold tracking-[0.1em] uppercase px-8 py-4 rounded-sm transition-colors duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)]"
          >
            無料相談する
          </a>
          <a
            href="#problem"
            className="w-full sm:w-auto text-center text-sm font-bold tracking-[0.1em] uppercase text-white/45 hover:text-white border border-white/12 hover:border-white/35 px-8 py-4 rounded-sm transition-all duration-300"
          >
            サービスを見る
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-blue-500 to-transparent animate-pulse" />
        <ArrowDown size={12} className="text-white/25" />
      </motion.div>
    </section>
  )
}
