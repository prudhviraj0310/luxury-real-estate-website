import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function BeyondHero() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/pool-villa.jpg"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      </div>

      {/* Top Right Button */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        onClick={() => setShowForm(true)}
        className="absolute top-32 right-8 z-20 px-8 py-3 bg-gray-700/80 backdrop-blur-sm text-white text-sm font-medium hover:bg-gray-600/80 transition-all"
      >
        SCHEDULE A WALKTHROUGH
      </motion.button>

      {/* Main Content - Left Side */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <div className="max-w-3xl">
          {/* Pre-title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-luxury-gold text-[10px] md:text-xs tracking-[0.5em] uppercase mb-8 font-normal"
          >
            ICONIC 4 BHK RESIDENCES IN PRIME LOCATION
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white mb-8"
          >
            <span className="block font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.15] mb-1">
              Where Legacy Rises
            </span>
            <span className="block font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.15]">
              In The Skyline Of Excellence.
            </span>
          </motion.h1>

          {/* Gold Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="h-[1px] bg-luxury-gold mb-10"
          />

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="font-serif text-white text-xl md:text-2xl lg:text-3xl font-light mb-1">
              The <span className="text-luxury-gold italic">Infinite</span> Class Living.
            </h2>
            <h3 className="font-serif text-white/90 text-lg md:text-xl lg:text-2xl font-light">
              For The <span className="text-luxury-gold italic">Infinite</span> You.
            </h3>
          </motion.div>

          {/* Specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 md:gap-8 text-luxury-gold text-sm md:text-base mb-10"
          >
            <div className="font-semibold">5350 – 6750 <span className="text-white/60 font-normal">Sq. Ft</span></div>
            <div className="text-white/30">|</div>
            <div className="font-semibold">G+50 <span className="text-white/60 font-normal">Floors</span></div>
            <div className="text-white/30">|</div>
            <div className="font-semibold">80% <span className="text-white/60 font-normal">Open Spaces</span></div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-3 bg-luxury-gold text-black font-semibold text-xs tracking-[0.2em] uppercase hover:bg-white transition-all duration-300"
            >
              Schedule Walkthrough
            </button>
            <button
              className="px-8 py-3 border border-white text-white font-semibold text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Download Brochure
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white max-w-md w-full p-8 relative"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
            >
              ×
            </button>
            
            <h3 className="text-2xl font-heading mb-6 text-black">Submit Your Info</h3>
            <p className="text-gray-600 mb-6">Our agent will contact you</p>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 focus:border-luxury-gold focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 focus:border-luxury-gold focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 border border-gray-300 focus:border-luxury-gold focus:outline-none"
              />
              <select className="w-full px-4 py-3 border border-gray-300 focus:border-luxury-gold focus:outline-none">
                <option>Budget Range</option>
                <option>Under 50 Lakhs</option>
                <option>50 Lakhs - 1 Crore</option>
                <option>1 Crore - 2 Crores</option>
                <option>Above 2 Crores</option>
              </select>
              
              <label className="flex items-start gap-2 text-sm text-gray-600">
                <input type="checkbox" className="mt-1" />
                <span>I agree to share my contact data</span>
              </label>
              
              <button
                type="submit"
                className="w-full py-4 bg-luxury-gold text-black font-semibold tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  )
}
