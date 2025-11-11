import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function VideoHero() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        <img 
          src="/images/pool-villa.jpg"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-midnight/80 via-luxury-midnight/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
              WITNESS LUXURY
              <br />
              <span className="text-luxury-gold">RULE EVERY MOMENT</span>
            </h1>
            <p className="font-luxury text-2xl text-white/90 mb-8 max-w-2xl">
              Welcome to a life where indulgence wears the crown, every day. Here, luxury isn't reserved for special occasions—it's a part of your daily life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-luxury-gold via-luxury-rose to-luxury-purple text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-luxury-gold/50 transition-all uppercase tracking-wider"
            >
              Book Now
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Contact Form - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-96"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-luxury-gold/20">
            <h3 className="font-heading text-2xl text-luxury-midnight mb-6 text-center">
              Enquire Now
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name*"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-luxury-purple/30 focus:border-luxury-purple focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Mobile*"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-luxury-purple/30 focus:border-luxury-purple focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email ID*"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-luxury-purple/30 focus:border-luxury-purple focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-luxury-purple via-luxury-gold to-luxury-rose text-white font-bold rounded-xl hover:shadow-xl hover:shadow-luxury-purple/30 transition-all uppercase tracking-wide"
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-luxury tracking-widest">SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
