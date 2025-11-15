import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Infinity, Zap } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning-fast Automation',
    desc: 'Trigger complex, multi-step workflows that execute in milliseconds with GPU-accelerated inference.'
  },
  {
    icon: Brain,
    title: 'Adaptive AI Orchestration',
    desc: 'NexaFlow learns your patterns, predicts next steps, and suggests optimizations autonomously.'
  },
  {
    icon: Infinity,
    title: 'Limitless Integrations',
    desc: 'Connect everything. 500+ native integrations and a flexible API for anything else.'
  }
]

function FeatureCard({ icon: Icon, title, desc, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.4, once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, rotateX: -8 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      className="relative group rounded-2xl p-6 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_10px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_100px_rgba(0,0,0,0.45)] hover:-translate-y-1.5 transition will-change-transform"
      style={{ perspective: 1000 }}
    >
      <div className="relative h-14 w-14 mb-5">
        <svg viewBox="0 0 100 100" className="absolute inset-0">
          <defs>
            <linearGradient id={`grad-${title}`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <motion.circle cx="50" cy="50" r="28" fill="none" stroke={`url(#grad-${title})`} strokeWidth="4"
            initial={{ rotate: -90 }}
            whileInView={{ rotate: 270 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
          <motion.rect x="28" y="28" width="44" height="44" rx="12" fill="none" stroke={`url(#grad-${title})`} strokeWidth="2"
            initial={{ rotate: 0 }}
            whileInView={{ rotate: -180 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <Icon className="h-6 w-6 text-cyan-300" />
        </div>
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-300/90 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="relative py-28 bg-gradient-to-b from-transparent to-[rgba(7,12,24,0.6)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400">Power that feels like magic</h2>
          <p className="mt-4 text-slate-300/90 max-w-2xl mx-auto">Built for teams who demand speed, reliability, and design excellence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  )
}
