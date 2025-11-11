import React from 'react'
import { motion } from 'framer-motion'

export default function FeaturedIn() {
  const brands = [
    { name: 'Economic Times', logo: '📰' },
    { name: 'The Hindu', logo: '📰' },
    { name: 'Times of India', logo: '📰' },
    { name: 'Business Standard', logo: '📊' },
    { name: 'Forbes India', logo: '💼' },
    { name: 'CNBC', logo: '📺' }
  ]

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-slate-500 text-sm font-semibold mb-6">AS FEATURED IN</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brands.map((brand, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2 text-slate-400 hover:text-navy transition-colors"
              >
                <span className="text-2xl">{brand.logo}</span>
                <span className="font-semibold text-sm">{brand.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
