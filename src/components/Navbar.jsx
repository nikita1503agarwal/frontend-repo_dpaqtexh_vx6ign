import React, { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    return scrollY.on('change', (v) => setScrolled(v > 8))
  }, [scrollY])

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: scrolled ? 'rgba(10,10,18,0.55)' : 'rgba(10,10,18,0.15)',
        boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.35)' : '0 0 0 rgba(0,0,0,0)',
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl blur-md bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-500 opacity-60" />
            <div className="relative h-9 w-9 rounded-xl bg-slate-900/80 grid place-items-center border border-white/10">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">NexaFlow</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-200/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#cta" className="hover:text-white transition">Get Started</a>
        </div>
        <button className="md:hidden h-10 w-10 grid place-items-center rounded-lg bg-white/5 border border-white/10 text-white">
          <Menu />
        </button>
      </div>
    </motion.nav>
  )
}
