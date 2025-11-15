import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Between3D from './components/Between3D'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Loader from './components/Loader'

export default function App() {
  return (
    <Loader>
      <div className="min-h-screen bg-[#080b16] text-white">
        <Navbar />
        <main className="">
          <Hero />
          <Between3D />
          <Features />
          <Between3D />
          <Testimonials />
          <Pricing />
          <CTA />
        </main>
        <footer className="border-t border-white/10 py-10 text-center text-slate-400/80">
          © {new Date().getFullYear()} NexaFlow. All rights reserved.
        </footer>
      </div>
    </Loader>
  )
}
