import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Aria Chen', role: 'Head of Ops, Linear Labs', text: 'NexaFlow cut our cycle time by 42% in two weeks. It feels like magic.', avatar: 'https://i.pravatar.cc/100?img=1' },
  { name: 'Marcus V.', role: 'CTO, Flux', text: 'The design is premium, but the performance is even better. Our team is faster everywhere.', avatar: 'https://i.pravatar.cc/100?img=2' },
  { name: 'Priya Patel', role: 'PM, Aurora', text: 'We replaced 7 tools. The AI recommendations are uncannily accurate.', avatar: 'https://i.pravatar.cc/100?img=3' },
  { name: 'Jonah K.', role: 'Founder, Nova', text: 'From idea to automation in minutes. The wow-factor is off the charts.', avatar: 'https://i.pravatar.cc/100?img=4' },
]

export default function Testimonials() {
  const ref = useRef(null)

  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400">Loved by modern teams</h2>
        </div>
        <div ref={ref} className="snap-x snap-mandatory overflow-x-auto no-scrollbar flex gap-6 pr-6" style={{ scrollBehavior: 'smooth' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="min-w-[320px] max-w-[340px] snap-start rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_100px_rgba(0,0,0,0.5)] transition hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full ring-2 ring-cyan-400/40" />
                <div>
                  <p className="text-white font-medium">{t.name}</p>
                  <p className="text-slate-400 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-300">“{t.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
