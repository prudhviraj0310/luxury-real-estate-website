import React from 'react'
import { motion } from 'framer-motion'

export default function PrivacySection() {
  const plans = [
    { name: "4 BHK", area: "5350 Sq.Ft", tower: "01" },
    { name: "4 BHK", area: "6750 Sq.Ft", tower: "02" }
  ]

  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light mb-4">
            Floor Plans
          </h2>
          <div className="w-20 h-[1px] bg-luxury-gold" />
        </motion.div>

        {/* Floor Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                <img 
                  src={index === 0 ? "/images/apartment-building.jpg" : "/images/modern-house.jpg"}
                  alt={`${plan.name} Floor Plan`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Details */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-light mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white/60 text-sm">{plan.area}</p>
                </div>
                <button className="px-6 py-2 border border-white/30 text-white text-xs tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                  VIEW
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
