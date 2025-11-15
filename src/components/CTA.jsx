import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      el.style.setProperty('--rx', `${y / 40}deg`)
      el.style.setProperty('--ry', `${-x / 40}deg`)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="cta" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(56,16,82,0.9),rgba(10,14,28,0.95))]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to flow?</h2>
        <p className="mt-4 text-slate-300/90">Start automating in minutes. Your future team will thank you.</p>
        <div className="mt-10 flex justify-center">
          <motion.button
            ref={ref}
            className="relative group px-8 py-4 rounded-2xl text-white font-semibold border border-white/10 bg-slate-900/80 shadow-[0_30px_120px_rgba(0,0,0,0.6)]"
            style={{ transform: 'perspective(800px) rotateX(var(--rx,0)) rotateY(var(--ry,0))' }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400 blur opacity-60 group-hover:opacity-100 transition" />
            <span className="relative">Get NexaFlow</span>
            <span className="pointer-events-none absolute -z-10 -inset-6">
              <span className="absolute inset-0 animate-pulse rounded-full bg-cyan-400/10 blur-2xl" />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  )
}
