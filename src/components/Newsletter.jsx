import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add newsletter subscription logic here
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-gold rounded-full" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-gold rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-gold/50 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold font-semibold text-sm mb-6">
            STAY UPDATED
          </span>
          
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
            Get Exclusive Property Updates
          </h2>
          
          <p className="text-slate-300 text-lg mb-10">
            Subscribe to receive the latest project launches, investment opportunities, and special offers directly in your inbox
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-gold transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-4 rounded-xl bg-gold text-navy font-semibold hover:bg-gold/90 transition-colors shadow-lg whitespace-nowrap"
            >
              {subscribed ? '✓ Subscribed!' : 'Subscribe Now'}
            </motion.button>
          </form>

          {subscribed && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-gold font-semibold"
            >
              Thank you! We'll keep you updated with our latest offerings.
            </motion.p>
          )}

          <div className="mt-8 flex items-center justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Your data is secure</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
