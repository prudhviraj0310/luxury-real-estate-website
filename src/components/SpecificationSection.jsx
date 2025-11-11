import React from 'react'
import { motion } from 'framer-motion'

export default function SpecificationSection() {
  const specs = [
    {
      title: "12-ft floor-to-floor",
      subtitle: "ceiling heights",
      icon: "📐",
      description: "Experience unparalleled spaciousness"
    },
    {
      title: "Multiple balconies",
      subtitle: "with panoramic views",
      icon: "🌆",
      description: "360-degree cityscape vistas"
    },
    {
      title: "Premium home automation",
      subtitle: "& security systems",
      icon: "🏠",
      description: "Smart living at your fingertips"
    },
    {
      title: "High-speed",
      subtitle: "elevators",
      icon: "⚡",
      description: "Swift and seamless movement"
    }
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-white via-luxury-cream/30 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-luxury-midnight mb-6">
            For Those Who Live
          </h2>
          <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-luxury-gold">
            On a Higher Plane.
          </h3>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mt-8" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-luxury text-2xl text-center text-luxury-midnight/70 max-w-4xl mx-auto mb-20 leading-relaxed"
        >
          This isn't just architecture — it's a lifestyle tailored for visionaries, founders, and global achievers. 
          Every home is an invitation to indulge in
        </motion.p>

        {/* Specifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-gradient-to-br from-white to-luxury-cream/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-luxury-purple/10 transition-all border border-luxury-purple/10 h-full">
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {spec.icon}
                </div>

                {/* Title */}
                <h4 className="font-heading text-3xl text-luxury-midnight mb-2 leading-tight">
                  {spec.title}
                </h4>
                <p className="font-heading text-2xl text-luxury-gold mb-4">
                  {spec.subtitle}
                </p>

                {/* Description */}
                <p className="font-luxury text-luxury-midnight/60 text-sm">
                  {spec.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-luxury-gold/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* RERA Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-luxury-midnight/5 rounded-full border border-luxury-purple/20">
            <svg className="w-6 h-6 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-luxury-midnight">TG RERA Regn No:</span>
            <span className="font-bold text-luxury-purple">P02400007343</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
