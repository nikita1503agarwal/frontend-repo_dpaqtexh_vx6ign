import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Loader({ children }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1200)
    return () => clearTimeout(t)
  }, [])

  if (!ready) {
    return (
      <div className="fixed inset-0 grid place-items-center bg-gradient-to-br from-[#0b0324] via-[#0b0f3b] to-[#0a1f4d] z-[60]">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}
          className="h-16 w-16 rounded-2xl border-2 border-transparent"
          style={{
            background: 'conic-gradient(from 0deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)',
            WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: '6px'
          }}
        />
        <p className="absolute mt-24 text-slate-300">NexaFlow</p>
      </div>
    )
  }
  return children
}
