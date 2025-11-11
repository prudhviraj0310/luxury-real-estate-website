import React from 'react'
import { motion } from 'framer-motion'

export default function BeyondPricing() {
  const pricingCards = [
    {
      type: "1 Bedroom",
      price: "AED 2.53M",
      priceINR: "₹5.75 Cr",
      size: "750 Sq.Ft"
    },
    {
      type: "2 Bedroom",
      price: "AED 4.7M",
      priceINR: "₹10.7 Cr",
      size: "1,200 Sq.Ft"
    },
    {
      type: "3+ Bedroom",
      price: "AED 7.6M",
      priceINR: "₹17.3 Cr",
      size: "1,800+ Sq.Ft"
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-black mb-12 font-light tracking-tight">
            Pricing
          </h2>

          {/* Payment Features */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading text-luxury-gold mb-2 font-light">60/40</div>
              <div className="text-xs text-gray-500 uppercase tracking-[0.2em]">Payment Plan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading text-luxury-gold mb-2 font-light">Q1 2029</div>
              <div className="text-xs text-gray-500 uppercase tracking-[0.2em]">Completion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading text-luxury-gold mb-2 font-light">10%</div>
              <div className="text-xs text-gray-500 uppercase tracking-[0.2em]">Down Payment</div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {pricingCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-gray-200 p-8 hover:border-luxury-gold transition-all duration-300 group bg-white"
            >
              <div className="text-center">
                <h3 className="text-lg font-heading mb-6 text-black font-light">{card.type}</h3>
                <div className="text-3xl font-heading text-luxury-gold mb-2 group-hover:scale-105 transition-transform duration-300">
                  {card.priceINR}
                </div>
                <div className="text-xs text-gray-400 mb-6">{card.price}</div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.15em] mb-4">Starting Price</div>
                <div className="text-xs text-gray-400">{card.size}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <button className="px-10 py-4 bg-luxury-gold text-black font-semibold text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300">
            Submit Inquiry
          </button>
        </motion.div>
      </div>
    </section>
  )
}
