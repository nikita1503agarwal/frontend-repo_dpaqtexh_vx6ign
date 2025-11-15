import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter', price: '$19', popular: false,
    features: ['100 runs/month', 'Basic AI suggestions', 'Community support']
  },
  {
    name: 'Popular', price: '$49', popular: true,
    features: ['1000 runs/month', 'Advanced AI orchestration', 'Priority support']
  },
  {
    name: 'Enterprise', price: 'Custom', popular: false,
    features: ['Unlimited runs', 'Dedicated models', 'SLA & SSO']
  },
]

function TierCard({ tier }) {
  return (
    <motion.div
      className={`relative rounded-3xl p-6 border backdrop-blur-xl bg-white/5 border-white/10 shadow-[0_10px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_30px_120px_rgba(0,0,0,0.6)] transition`}
      whileHover={{ scale: 1.04, rotateX: 4, rotateY: -4 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {tier.popular && (
        <motion.div
          className="absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-fuchsia-500 to-cyan-400"
          animate={{ boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 0 30px rgba(168,85,247,0.6)'] }}
          transition={{ repeat: Infinity, duration: 1.6, repeatType: 'reverse' }}
        >
          Popular
        </motion.div>
      )}
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-white text-xl font-semibold">{tier.name}</h3>
          <p className="mt-2 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">{tier.price}</p>
        </div>
      </div>
      <ul className="mt-6 space-y-3">
        {tier.features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-300">
            <svg width="20" height="20" viewBox="0 0 100 100" className="shrink-0">
              <motion.path
                d="M20 55 L42 75 L80 25" fill="none" stroke="#22d3ee" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.1 }}
              />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <motion.a href="#cta" className="mt-8 inline-block rounded-xl px-5 py-3 bg-slate-900 text-white border border-white/10 hover:scale-105 hover:shadow-[0_20px_80px_rgba(34,211,238,0.2)] transition">
        Choose {tier.name}
      </motion.a>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400">Pricing that scales with you</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <TierCard key={t.name} tier={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
