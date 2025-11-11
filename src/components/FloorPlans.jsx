import React from 'react'
import { motion } from 'framer-motion'

export default function FloorPlans() {
  const plans = [
    { 
      name: "4 BHK", 
      area: "5350 Sq.Ft",
      image: "/images/apartment-building.jpg"
    },
    { 
      name: "4 BHK Premium", 
      area: "6750 Sq.Ft",
      image: "/images/modern-house.jpg"
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light mb-4">
            Floor Plans
          </h2>
          <div className="w-20 h-[1px] bg-luxury-gold" />
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-white/5">
                <img 
                  src={plan.image}
                  alt={`${plan.name} Floor Plan`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Details */}
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-light mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white/50 text-sm tracking-wide">{plan.area}</p>
                </div>
                <div className="px-6 py-2 border border-white/20 text-white/60 text-xs tracking-widest group-hover:border-luxury-gold group-hover:text-luxury-gold transition-all duration-300">
                  VIEW
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
