import React from 'react'
import { motion } from 'framer-motion'

export default function WhyTalkingAbout() {
  const reasons = [
    {
      icon: '📍',
      title: 'Prime locations across India',
      text: 'Strategic properties in Chennai, Bangalore, and emerging metros'
    },
    {
      icon: '💰',
      title: 'Flexible payment plans starting at 1% monthly',
      text: 'Own your dream home without massive upfront costs'
    },
    {
      icon: '📈',
      title: 'Expected ROI: 7-9% in Year 1',
      text: 'Start earning returns from day one with high-appreciation zones'
    },
    {
      icon: '✅',
      title: 'RERA approved and legally compliant',
      text: 'Complete transparency and legal security for your investment'
    },
    {
      icon: '🏊',
      title: 'World-class amenities in every project',
      text: 'Pools, gyms, parks, and lifestyle facilities included'
    },
    {
      icon: '⚡',
      title: 'Limited units left - act fast!',
      text: 'High demand means units are selling out quickly'
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-navy to-slate-800" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full backdrop-blur-xl bg-gold/20 border border-gold/30 text-gold text-sm font-semibold mb-6">
            ⭐ WHY CHOOSE US
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Why Everyone's Talking About
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">
            Oblong Realties
          </h3>
        </motion.div>

        {/* Reasons Grid with Glass Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="h-full backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-gold/50 transition-all duration-300 shadow-xl">
                <div className="flex items-start gap-4">
                  {/* Animated Icon */}
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-2xl backdrop-blur-xl bg-green-500/20 border border-green-400/30 flex items-center justify-center flex-shrink-0 text-2xl group-hover:bg-green-500/30 transition-all"
                  >
                    {reason.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {reason.text}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Box with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="backdrop-blur-2xl bg-gradient-to-br from-gold/20 to-yellow-500/20 border-2 border-gold/40 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <span className="text-4xl">⚡</span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Act Now - These Units Are <span className="text-gold">Limited!</span>
            </h3>
            
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Want to see floor plans, pricing, or 3D walkthroughs?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-10 py-4 bg-gold text-navy text-lg font-bold rounded-xl hover:bg-yellow-400 transition-all shadow-2xl shadow-gold/50"
              >
                Contact Us for Full Access
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#virtual-tour"
                className="px-10 py-4 backdrop-blur-xl bg-white/10 text-white text-lg font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Schedule a Virtual Tour Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
