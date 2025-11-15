import React, { useEffect, useMemo, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 30])
  const hue = useTransform(scrollYProgress, [0, 1], [0, 180])
  const headlineGradient = useTransform(hue, (h) => `linear-gradient(90deg, hsl(${260 + h} 100% 70%), hsl(${200 + h} 100% 60%), hsl(${320 + h} 100% 70%))`)

  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      if (containerRef.current) {
        containerRef.current.style.setProperty('--mx', `${x}`)
        containerRef.current.style.setProperty('--my', `${-y}`)
      }
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0324] via-[#0b0f3b] to-[#0a1f4d]" />

      <motion.div style={{ rotateZ: rotate }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(61,25,104,0.35),rgba(0,0,0,0))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24 md:pt-44 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <motion.h1
            style={{ backgroundImage: headlineGradient }}
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Automate workflows with NexaFlow
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            An AI-powered automation platform that connects your tools, learns from your patterns, and orchestrates complex processes effortlessly.
          </motion.p>
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="#pricing"
              className="relative group pointer-events-auto"
              initial={{ scale: 0.98 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-500 blur opacity-70 group-hover:opacity-100 transition" />
              <span className="relative inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-6 py-3 border border-white/10 shadow-2xl">
                Get Started
              </span>
            </motion.a>
            <motion.a
              href="#features"
              className="relative group pointer-events-auto"
              initial={{ scale: 0.98 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-400 to-pink-500 blur opacity-60 group-hover:opacity-100 transition" />
              <span className="relative inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-6 py-3 border border-white/10 shadow-2xl">
                See Features
              </span>
            </motion.a>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="h-80 md:h-full" />
        </div>
      </div>
    </section>
  )
}
