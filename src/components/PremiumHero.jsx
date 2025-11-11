import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function PremiumHero() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', budget: '' })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-midnight">
        {/* Background Video/Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/pool-villa.jpg"
            alt="Premium Residences"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-midnight/60 via-luxury-midnight/80 to-luxury-midnight" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="font-luxury text-xl md:text-2xl text-luxury-gold mb-6 tracking-widest uppercase"
            >
              Iconic 4 BHK Residences in Prime Location
            </motion.p>

            {/* Main Headline - Split Lines */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight"
            >
              Where Legacy Rises
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl text-white/90 mb-12 leading-tight"
            >
              In The Skyline Of Excellence.
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="w-32 h-0.5 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mb-12"
            />

            {/* Large Statement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="mb-16"
            >
              <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                The <span className="text-luxury-gold">Infinite</span> Class Living.
              </h3>
              <h4 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white/80">
                For The <span className="text-luxury-rose">Infinite</span> You.
              </h4>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="flex flex-wrap justify-center gap-8 mb-12 text-white/90"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold text-luxury-gold">5350 – 6750</span>
                <span className="text-lg">Sq. Ft</span>
              </div>
              <span className="text-white/30">|</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold text-luxury-gold">G+50</span>
                <span className="text-lg">Floors</span>
              </div>
              <span className="text-white/30">|</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold text-luxury-gold">80%</span>
                <span className="text-lg">Open Spaces</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="font-luxury text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Welcome to the address of the truly discerning. Where architecture meets ambition, 
              and luxury is not an amenity — but a lifestyle.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button
                onClick={() => setShowForm(true)}
                className="px-12 py-5 bg-gradient-to-r from-luxury-gold via-luxury-rose to-luxury-purple text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-luxury-gold/50 hover:scale-105 transition-all uppercase tracking-wider"
              >
                Schedule a Private Walkthrough
              </button>
              <button className="px-12 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all uppercase tracking-wider">
                Download Brochure
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-luxury-gold rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Sticky Floating CTA */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      >
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-4 bg-gradient-to-b from-luxury-gold to-luxury-rose text-white font-bold rounded-l-2xl shadow-2xl hover:shadow-luxury-gold/50 transition-all writing-mode-vertical text-lg tracking-wider"
          style={{ writingMode: 'vertical-rl' }}
        >
          BOOK NOW
        </button>
      </motion.div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full relative"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-luxury-purple/10 hover:bg-luxury-purple/20 flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6 text-luxury-midnight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="font-heading text-4xl text-luxury-midnight mb-2">Get in touch with us</h3>
            <p className="font-luxury text-luxury-midnight/60 mb-8">Experience infinite possibilities</p>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-6 py-4 rounded-xl border-2 border-luxury-purple/20 focus:border-luxury-purple focus:outline-none transition-colors text-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 rounded-xl border-2 border-luxury-purple/20 focus:border-luxury-purple focus:outline-none transition-colors text-lg"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-6 py-4 rounded-xl border-2 border-luxury-purple/20 focus:border-luxury-purple focus:outline-none transition-colors text-lg"
              />
              <select
                className="w-full px-6 py-4 rounded-xl border-2 border-luxury-purple/20 focus:border-luxury-purple focus:outline-none transition-colors text-lg"
              >
                <option>Select the Budget</option>
                <option>₹5-7 Cr</option>
                <option>₹7-10 Cr</option>
                <option>₹10-15 Cr</option>
                <option>₹15 Cr+</option>
              </select>
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-luxury-purple via-luxury-gold to-luxury-rose text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-luxury-purple/30 transition-all uppercase tracking-wider"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  )
}
