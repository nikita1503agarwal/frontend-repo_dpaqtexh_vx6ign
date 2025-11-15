import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Between3D() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_50%,rgba(20,10,40,0.8),rgba(5,10,20,0.6))]" />
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div style={{ rotate, scale }} className="aspect-square rounded-3xl border border-white/10 backdrop-blur-xl bg-white/5 shadow-[inset_0_0_60px_rgba(255,255,255,0.06)]" />
        <div>
          <h3 className="text-2xl md:text-4xl font-semibold text-white">A living, breathing canvas</h3>
          <p className="mt-4 text-slate-300/90">Between every section, subtle 3D motion keeps momentum. Wireframe shapes rotate; abstract patterns morph; data-dots stream along bezier paths.</p>
        </div>
      </div>
    </div>
  )
}
